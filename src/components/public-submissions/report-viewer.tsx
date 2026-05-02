import React, { useMemo } from 'react';
import { Button } from "@/components/ui/button";
import { X, Zap, ArrowLeft } from "lucide-react";
import { SubmissionStatusResponse } from "@/types/submissions";

interface HighlightRegion {
    start: number;
    end: number;
    type: 'ai' | 'copied' | 'paste' | 'plagiarism';
}

interface ReportViewerProps {
    scanResult: SubmissionStatusResponse;
    onClose: () => void;
    originalText?: string;
}

export const ReportViewer: React.FC<ReportViewerProps> = ({ scanResult, onClose, originalText }) => {
    const report = scanResult.report;
    const details = report?.details as Record<string, unknown> | undefined;
    const text = typeof details?.s === 'string' ? details.s : (originalText || "");

    const highlights = useMemo(() => {
        const h: HighlightRegion[] = [];
        if (!details) return h;
        if (Array.isArray(details.ai)) {
            details.ai.forEach((item: unknown) => {
                const i = item as { si: number; ei: number };
                h.push({ start: i.si, end: i.ei, type: 'ai' });
            });
        }
        if (Array.isArray(details.c)) {
            details.c.forEach((item: unknown) => {
                const i = item as { b: number; e: number };
                h.push({ start: i.b, end: i.e, type: 'copied' });
            });
        }
        if (Array.isArray(details.x)) {
            details.x.forEach((item: unknown) => {
                const i = item as { b: number; e: number };
                h.push({ start: i.b, end: i.e, type: 'paste' });
            });
        }
        if (Array.isArray(details.m)) {
            details.m.forEach((item: unknown) => {
                const i = item as { i: number; e: number };
                h.push({ start: i.i, end: i.e, type: 'plagiarism' });
            });
        }
        return h;
    }, [details]);

    const renderedText = useMemo(() => {
        if (!text) return null;

        const events: { index: number; type: 'start' | 'end'; highlightType: string; id: number }[] = [];
        
        highlights.forEach((h, i) => {
            events.push({ index: h.start, type: 'start', highlightType: h.type, id: i });
            events.push({ index: h.end, type: 'end', highlightType: h.type, id: i });
        });
        
        events.sort((a, b) => {
            if (a.index === b.index) {
                return a.type === 'start' ? -1 : 1;
            }
            return a.index - b.index;
        });
        
        const output: React.ReactNode[] = [];
        let prevIndex = 0;
        const activeHighlights = new Set<string>();
        
        for (let i = 0; i < events.length; i++) {
            const event = events[i];
            
            if (event.index > prevIndex) {
                const chunk = text.slice(prevIndex, event.index);
                
                let className = "";
                // Priority: AI > Copied > Paste > Plagiarism
                if (activeHighlights.has('ai')) {
                    className = "bg-red-100 text-red-900 border-b-2 border-red-300 rounded-sm";
                } else if (activeHighlights.has('copied')) {
                    className = "bg-blue-100 text-blue-900 border-b-2 border-blue-300 rounded-sm";
                } else if (activeHighlights.has('paste')) {
                    className = "bg-yellow-100 text-yellow-900 border-b-2 border-yellow-300 rounded-sm";
                } else if (activeHighlights.has('plagiarism')) {
                    className = "bg-purple-100 text-purple-900 border-b-2 border-purple-300 rounded-sm";
                }
                
                output.push(
                    <span key={`chunk-${i}`} className={className || undefined}>
                        {chunk}
                    </span>
                );
            }
            
            if (event.type === 'start') {
                activeHighlights.add(event.highlightType);
            } else {
                activeHighlights.delete(event.highlightType);
            }
            
            prevIndex = event.index;
        }
        
        if (prevIndex < text.length) {
            output.push(<span key="chunk-final">{text.slice(prevIndex)}</span>);
        }
        
        return <div className="whitespace-pre-wrap font-medium text-slate-700 leading-relaxed text-lg">{output}</div>;
    }, [text, highlights]);

    if (!report) return null;

    return (
        <div className="absolute inset-0 bg-white/98 backdrop-blur-md z-50 p-6 md:p-10 flex flex-col rounded-[2.5rem] animate-in fade-in zoom-in duration-300">
            <div className="flex justify-between items-center mb-8">
                <div>
                    <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
                        <Zap className="w-6 h-6 text-accent fill-accent" />
                        Analysis Report
                    </h3>
                    <p className="text-sm text-slate-500 mt-1 font-medium">Submission ID: {scanResult.uuid}</p>
                </div>
                <button
                    onClick={onClose}
                    className="p-2.5 hover:bg-slate-100 rounded-full transition-all active:scale-90"
                >
                    <X className="w-6 h-6 text-slate-400" />
                </button>
            </div>

            <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="p-6 rounded-3xl bg-red-50 border border-red-100 relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-br from-red-100/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="relative z-10">
                        <div className="text-xs font-bold text-red-600 uppercase tracking-widest mb-1 flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                            AI Detection
                        </div>
                        <div className="text-4xl font-extrabold text-red-950">{report.ai_detection_percentage}%</div>
                    </div>
                </div>
                <div className="p-6 rounded-3xl bg-blue-50 border border-blue-100 relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-100/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="relative z-10">
                        <div className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-1 flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                            Authentic Score
                        </div>
                        <div className="text-4xl font-extrabold text-blue-950">{report.authentic_percentage}%</div>
                    </div>
                </div>
            </div>

            <div className="flex-grow overflow-hidden flex flex-col bg-white rounded-2xl border border-slate-100 shadow-sm">
                <div className="flex items-center justify-between p-4 border-b border-slate-50 bg-slate-50/50">
                    <h4 className="font-bold text-slate-800">Highlighted Document</h4>
                    <span className="text-xs font-medium px-3 py-1 bg-white rounded-full border border-slate-200 text-slate-500 shadow-sm">
                        Words: {report.word_count}
                    </span>
                </div>
                <div className="flex-grow overflow-auto p-6 custom-scrollbar">
                    {renderedText}
                </div>
            </div>

            <div className="mt-8 flex justify-end">
                <Button
                    onClick={onClose}
                    className="rounded-xl bg-slate-900 hover:bg-black text-white h-12 px-8 font-bold gap-2"
                >
                    <ArrowLeft className="w-4 h-4" />
                    Return to Editor
                </Button>
            </div>
        </div>
    );
};
