import React, { useMemo } from 'react';
import { Button } from "@/components/ui/button";
import { X, Zap, ArrowLeft, PlayCircle, FileText } from "lucide-react";
import { SubmissionStatusResponse, DetailedReport } from "@/types/submissions";
import { PlaybackModal } from './playback-modal';
import { DocumentModal } from './document-modal';

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
    const [showPlayback, setShowPlayback] = React.useState(false);
    const [showDocument, setShowDocument] = React.useState(false);
    const report = scanResult.report;

    const raw = useMemo(() => {
        if (!scanResult.raw_report) return null;
        if (typeof scanResult.raw_report === 'string') {
            try {
                return JSON.parse(scanResult.raw_report) as DetailedReport;
            } catch (e) {
                console.error("Failed to parse raw_report", e);
                return null;
            }
        }
        return scanResult.raw_report as DetailedReport;
    }, [scanResult.raw_report]);

    const details = report?.details as Record<string, unknown> | undefined;
    const text = raw?.s || (typeof details?.s === 'string' ? details.s : (originalText || ""));

    const highlights = useMemo(() => {
        const h: HighlightRegion[] = [];

        if (raw) {
            // New format
            if (Array.isArray(raw.ai)) {
                raw.ai.forEach((i) => h.push({ start: i.si, end: i.ei, type: 'ai' }));
            }
            if (Array.isArray(raw.c)) {
                raw.c.forEach((i) => h.push({ start: i.b, end: i.e, type: 'copied' }));
            }
            if (Array.isArray(raw.x)) {
                raw.x.forEach((i) => h.push({ start: i.b, end: i.e, type: 'paste' }));
            }
            if (Array.isArray(raw.m)) {
                raw.m.forEach((i) => h.push({ start: i.i, end: i.e, type: 'plagiarism' }));
            }
        } else if (details) {
            // Old format
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
        }
        return h;
    }, [details, raw]);

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
        <div className="absolute inset-0 bg-white/98 backdrop-blur-md z-50 p-6 md:p-6 flex flex-col rounded-[2.5rem] animate-in fade-in zoom-in duration-300">
            <div className="flex justify-between items-center mb-8">
                <div>
                    <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
                        <Zap className="w-6 h-6 text-accent fill-accent" />
                        Analysis Report
                    </h3>
                </div>
                <button
                    onClick={onClose}
                    className="p-2.5 hover:bg-slate-100 rounded-full transition-all active:scale-90"
                >
                    <X className="w-6 h-6 text-slate-400" />
                </button>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="p-6 rounded-[2rem] bg-red-50 border border-red-100 relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-br from-red-100/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="relative z-10">
                        <div className="text-xs font-bold text-red-600 uppercase tracking-widest mb-1 flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                            AI Detection
                        </div>
                        <div className="text-4xl font-extrabold text-red-950">{(raw?.pa ?? report?.ai_detection_percentage ?? 0).toFixed(1)}%</div>
                    </div>
                </div>

                <div className="p-6 rounded-[2rem] bg-blue-50 border border-blue-100 relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-100/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="relative z-10">
                        <div className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-1 flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                            Authentic
                        </div>
                        <div className="text-4xl font-extrabold text-blue-950">{(raw?.ap ?? report?.authentic_percentage ?? 0).toFixed(1)}%</div>
                    </div>
                </div>

                <div className="p-6 rounded-[2rem] bg-purple-50 border border-purple-100 relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-100/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="relative z-10">
                        <div className="text-xs font-bold text-purple-600 uppercase tracking-widest mb-1 flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
                            Plagiarism
                        </div>
                        <div className="text-4xl font-extrabold text-purple-950">{(raw?.pl ?? 0).toFixed(1)}%</div>
                    </div>
                </div>

                <div className="p-6 rounded-[2rem] bg-amber-50 border border-amber-100 relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-br from-amber-100/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="relative z-10">
                        <div className="text-xs font-bold text-amber-600 uppercase tracking-widest mb-1 flex items-center gap-2 text-amber-600">
                            <div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                            Pasted/Copied
                        </div>
                        <div className="text-4xl font-extrabold text-amber-950">{(raw?.pt ?? 0).toFixed(1)}%</div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <button
                    onClick={() => setShowPlayback(true)}
                    className="flex items-center justify-between p-6 rounded-[2rem] bg-slate-50 border border-slate-100 hover:border-accent/30 hover:bg-white transition-all group active:scale-[0.98]"
                >
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                            <PlayCircle className="w-6 h-6 text-accent" />
                        </div>
                        <div className="text-left">
                            <div className="text-sm font-bold text-slate-900">Watch Playback</div>
                            <div className="text-xs text-slate-400 font-medium">Replay the writing process</div>
                        </div>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-white border border-slate-100 flex items-center justify-center text-slate-400 group-hover:text-accent group-hover:border-accent/20 transition-colors">
                        →
                    </div>
                </button>

                <button
                    onClick={() => setShowDocument(true)}
                    className="flex items-center justify-between p-6 rounded-[2rem] bg-slate-50 border border-slate-100 hover:border-accent/30 hover:bg-white transition-all group active:scale-[0.98]"
                >
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center group-hover:scale-110 transition-transform">
                            <FileText className="w-6 h-6 text-emerald-600" />
                        </div>
                        <div className="text-left">
                            <div className="text-sm font-bold text-slate-900">View Markup</div>
                            <div className="text-xs text-slate-400 font-medium">See highlighted segments</div>
                        </div>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-white border border-slate-100 flex items-center justify-center text-slate-400 group-hover:text-emerald-600 group-hover:border-emerald-200 transition-colors">
                        →
                    </div>
                </button>
            </div>

            <div className="flex-grow flex items-end justify-between">
                <div className="text-xs font-bold text-slate-400 tracking-tight flex items-center gap-2 mx-auto">
                    <div className="w-2 h-2 rounded-full bg-emerald-500" />
                    Analysis Complete • Word Count: {report.word_count}
                </div>
            </div>

            <PlaybackModal
                open={showPlayback}
                onClose={() => setShowPlayback(false)}
                playbackSteps={raw?.p || []}
            />

            <DocumentModal
                open={showDocument}
                onClose={() => setShowDocument(false)}
                renderedText={renderedText}
                wordCount={report.word_count}
            />
        </div>
    );
};
