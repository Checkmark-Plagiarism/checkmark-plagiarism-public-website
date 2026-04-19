"use client";

import { useState, useMemo, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldCheck, Zap, History, X, Copy, Check, Loader2 } from "lucide-react";
import { submitEssay, getSubmissionStatus } from "@/actions/submissions";
import { SubmissionStatusResponse } from "@/types/submissions";
import { diff_match_patch } from 'diff-match-patch';

export const PublicSubmissionDemo = () => {
    const [demoText, setDemoText] = useState("");
    const [historyEntries, setHistoryEntries] = useState<string[]>([]);
    const [lastSnapshot, setLastSnapshot] = useState("");
    const [showHistory, setShowHistory] = useState(false);
    const [hasCopied, setHasCopied] = useState(false);
    const [isScanning, setIsScanning] = useState(false);
    const [scanResult, setScanResult] = useState<SubmissionStatusResponse | null>(null);
    const [error, setError] = useState<string | null>(null);

    const wordCount = useMemo(() => {
        if (!demoText.trim()) return 0;
        return demoText.trim().split(/\s+/).filter(w => w.length > 0).length;
    }, [demoText]);

    // History Logging Logic
    useEffect(() => {
        if (demoText.trim() && historyEntries.length === 0 && !lastSnapshot) {
            const timestamp = Date.now();
            const initialEntry = `<e t="${timestamp}" o="i" p="0" sid="${timestamp}"><s><![CDATA[${demoText}]]></s></e>`;
            setHistoryEntries([initialEntry]);
            setLastSnapshot(demoText);
            return;
        }

        const timer = setInterval(() => {
            if (demoText !== lastSnapshot) {
                const dmp = new diff_match_patch();
                const diffs = dmp.diff_main(lastSnapshot, demoText);
                dmp.diff_cleanupEfficiency(diffs);

                const timestamp = Date.now();
                const newEntries: string[] = [];

                let oldPos = 0;
                let newPos = 0;

                for (const [operation, text] of diffs) {
                    if (text === '') continue;

                    if (operation === -1) {
                        newEntries.push(`<e t="${timestamp}" o="d" p="${oldPos}" sid="${timestamp}"><s><![CDATA[${text}]]></s></e>`);
                        oldPos += text.length;
                    } else if (operation === 1) {
                        newEntries.push(`<e t="${timestamp}" o="i" p="${newPos}" sid="${timestamp}"><s><![CDATA[${text}]]></s></e>`);
                        newPos += text.length;
                    } else {
                        oldPos += text.length;
                        newPos += text.length;
                    }
                }

                if (newEntries.length > 0) {
                    setHistoryEntries(prev => [...prev, ...newEntries]);
                }
                setLastSnapshot(demoText);
            }
        }, 100);

        return () => clearInterval(timer);
    }, [demoText, lastSnapshot, historyEntries.length]);

    const copyLogToClipboard = () => {
        const fullXml = `<l xmlns="http://checkmarkplagiarism.com/history-log">\n  ${historyEntries.join('\n  ')}\n</l>`;
        navigator.clipboard.writeText(fullXml);
        setHasCopied(true);
        setTimeout(() => setHasCopied(false), 2000);
    };

    const handleScan = async () => {
        if (wordCount < 50) return;
        
        setIsScanning(true);
        setError(null);
        setScanResult(null);

        try {
            const metadataXml = `<l xmlns="http://checkmarkplagiarism.com/history-log">\n  ${historyEntries.join('\n  ')}\n</l>`;
            
            const submission = await submitEssay({
                essay_content: demoText,
                metadata_xml: metadataXml,
            });

            const uuid = submission.uuid;
            pollStatus(uuid);
        } catch (err: any) {
            setError(err.message || "An error occurred during submission.");
            setIsScanning(false);
        }
    };

    const pollStatus = async (uuid: string) => {
        const maxAttempts = 120;
        let attempts = 0;

        const interval = setInterval(async () => {
            try {
                const statusData = await getSubmissionStatus(uuid);
                
                if (statusData.status === 'completed' || statusData.status === 'failed') {
                    clearInterval(interval);
                    setScanResult(statusData);
                    setIsScanning(false);
                }

                attempts++;
                if (attempts >= maxAttempts) {
                    clearInterval(interval);
                    setError("Polling timed out. Please try again.");
                    setIsScanning(false);
                }
            } catch (err: any) {
                clearInterval(interval);
                setError(err.message || "An error occurred while checking status.");
                setIsScanning(false);
            }
        }, 1000);
    };

    return (
        <div className="relative group">
            <div className="absolute -inset-4 bg-accent/20 rounded-[3rem] blur-3xl opacity-50 group-hover:opacity-80 transition-opacity duration-700" />
            <div className="absolute -inset-1 bg-gradient-to-tr from-accent/40 via-transparent to-accent/40 rounded-[2.6rem] blur-md opacity-30" />

            <div className="bg-white rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.15)] p-6 md:p-10 text-slate-900 flex flex-col min-h-[540px] border border-slate-100 relative overflow-hidden">
                <div className="absolute -top-24 -right-24 w-48 h-48 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

                <div className="flex flex-wrap gap-3 mb-8 relative z-10">
                    <div className="flex items-center gap-2.5 px-5 py-3 rounded-2xl bg-emerald-50 border border-emerald-100 shadow-sm">
                        <div className="relative flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                        </div>
                        <span className="text-sm font-bold text-emerald-900 tracking-tight">Key Stroke Analysis</span>
                    </div>
                    <div className="flex items-center gap-2.5 px-5 py-3 rounded-2xl bg-emerald-50 border border-emerald-100 shadow-sm">
                        <div className="relative flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                        </div>
                        <span className="text-sm font-bold text-emerald-900 tracking-tight">Static AI Detection</span>
                    </div>
                </div>

                <div className="flex-grow flex flex-col relative z-10">
                    <textarea
                        className="w-full flex-grow resize-none border-none focus:ring-0 focus:outline-none text-xl text-slate-700 placeholder:text-slate-300 leading-relaxed font-medium"
                        placeholder="Paste student work here to analyze authenticity..."
                        value={demoText}
                        onChange={(e) => setDemoText(e.target.value)}
                    />

                    {error && (
                        <div className="mt-4 p-4 rounded-xl bg-red-50 border border-red-100 text-red-700 text-sm font-medium animate-in fade-in slide-in-from-top-2 duration-300">
                            <div className="flex items-center gap-2">
                                <X className="w-4 h-4" />
                                {error}
                            </div>
                        </div>
                    )}
                </div>

                <div className="mt-6 pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-6 relative z-10">
                    <div className="flex items-center gap-5 w-full sm:w-auto">
                        <div className="flex flex-col">
                            <div className={`text-sm font-bold ${wordCount > 1000 ? 'text-red-500' : 'text-slate-500'}`}>
                                {wordCount.toLocaleString()} / 1,000 words
                            </div>
                            <div className="flex items-center gap-1.5 mt-1">
                                {wordCount < 50 ? (
                                    <>
                                        <div className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                                        <span className="text-[10px] font-bold text-amber-600 uppercase tracking-widest leading-none">Min 50 words required</span>
                                    </>
                                ) : (
                                    <>
                                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                                        <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest leading-none">Ready for analysis</span>
                                    </>
                                )}
                            </div>
                        </div>

                        <Button variant="outline" size="sm" className="hidden lg:flex rounded-xl border-blue-200 text-blue-600 hover:bg-blue-50 font-bold gap-2">
                            <Zap className="w-3.5 h-3.5 fill-blue-600" />
                            Upgrade
                        </Button>
                    </div>

                    <div className="flex items-center gap-6 w-full sm:w-auto justify-between sm:justify-end">
                        <button
                            onClick={() => setShowHistory(true)}
                            className="flex items-center gap-2 text-slate-400 hover:text-accent transition-colors group/history"
                        >
                            <History className="w-4 h-4 group-hover/history:rotate-12 transition-transform" />
                            <span className="text-xs font-bold uppercase tracking-tighter">View History Log</span>
                        </button>
                        <div className="flex items-center gap-2 text-slate-400">
                            <ShieldCheck className="w-4 h-4" />
                            <span className="text-xs font-bold uppercase tracking-tighter">Privacy Guarantee</span>
                        </div>
                        <Button 
                            size="lg" 
                            className="rounded-2xl bg-slate-900 hover:bg-black text-white px-10 h-14 font-bold text-lg shadow-xl shadow-slate-200 transition-all hover:-translate-y-0.5 active:translate-y-0 group disabled:opacity-70 disabled:cursor-not-allowed"
                            onClick={handleScan}
                            disabled={isScanning || wordCount < 50}
                        >
                            {isScanning ? (
                                <>
                                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                                    Scanning...
                                </>
                            ) : (
                                <>
                                    Scan Now
                                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                                </>
                            )}
                        </Button>
                    </div>
                </div>

                {showHistory && (
                    <div className="absolute inset-0 bg-white/98 backdrop-blur-md z-50 p-6 md:p-10 flex flex-col rounded-[2.5rem] animate-in fade-in zoom-in duration-300">
                        <div className="flex justify-between items-center mb-8">
                            <div>
                                <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
                                    <History className="w-6 h-6 text-accent" />
                                    History Log Metadata
                                </h3>
                                <p className="text-sm text-slate-500 mt-1 font-medium">Replayable XML entries tracking inserts and deletes.</p>
                            </div>
                            <button
                                onClick={() => setShowHistory(false)}
                                className="p-2.5 hover:bg-slate-100 rounded-full transition-all active:scale-90"
                            >
                                <X className="w-6 h-6 text-slate-400" />
                            </button>
                        </div>

                        <div className="flex-grow overflow-hidden flex flex-col bg-slate-950 rounded-2xl shadow-inner border border-slate-800">
                            <div className="p-4 bg-slate-900 border-b border-white/5 flex justify-between items-center">
                                <div className="flex gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-500/50" />
                                    <div className="w-3 h-3 rounded-full bg-amber-500/50" />
                                    <div className="w-3 h-3 rounded-full bg-emerald-500/50" />
                                </div>
                                <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">history-log.xml</span>
                            </div>
                            <div className="flex-grow overflow-auto p-6 font-mono text-[13px] leading-relaxed text-emerald-400/90 custom-scrollbar">
                                <div className="text-slate-500">&lt;l xmlns="http://checkmarkplagiarism.com/history-log"&gt;</div>
                                {historyEntries.map((entry, idx) => (
                                    <div key={idx} className="pl-4 hover:bg-white/5 py-0.5 transition-colors group">
                                        <span className="text-slate-700 mr-4 select-none group-hover:text-slate-500">{(idx + 1).toString().padStart(3, '0')}</span>
                                        {entry}
                                    </div>
                                ))}
                                <div className="text-slate-500">&lt;/l&gt;</div>
                                {historyEntries.length === 0 && (
                                    <div className="py-20 text-center text-slate-600 italic">
                                        No changes recorded yet. Type something to begin tracking.
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="mt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
                            <div className="text-sm font-bold text-slate-400">
                                Total Operations: <span className="text-slate-900">{historyEntries.length}</span>
                            </div>
                            <Button
                                variant="outline"
                                onClick={copyLogToClipboard}
                                className="rounded-xl border-slate-200 hover:bg-slate-50 h-12 px-6 font-bold flex gap-2"
                            >
                                {hasCopied ? (
                                    <><Check className="w-4 h-4 text-emerald-500" /> Copied!</>
                                ) : (
                                    <><Copy className="w-4 h-4" /> Copy XML to Clipboard</>
                                )}
                            </Button>
                        </div>
                    </div>
                )}

                {scanResult && scanResult.status === 'completed' && scanResult.report && (
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
                                onClick={() => setScanResult(null)}
                                className="p-2.5 hover:bg-slate-100 rounded-full transition-all active:scale-90"
                            >
                                <X className="w-6 h-6 text-slate-400" />
                            </button>
                        </div>

                        <div className="grid grid-cols-2 gap-6 mb-8">
                            <div className="p-6 rounded-3xl bg-slate-50 border border-slate-100">
                                <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">AI Detection</div>
                                <div className="text-4xl font-extrabold text-slate-900">{scanResult.report.ai_detection_percentage}%</div>
                            </div>
                            <div className="p-6 rounded-3xl bg-slate-50 border border-slate-100">
                                <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Authentic Score</div>
                                <div className="text-4xl font-extrabold text-slate-900">{scanResult.report.authentic_percentage}%</div>
                            </div>
                        </div>

                        <div className="flex-grow overflow-hidden flex flex-col bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
                            <div className="flex items-center justify-between mb-4 pb-4 border-b border-slate-50">
                                <h4 className="font-bold text-slate-800">Analysis Details</h4>
                                <span className="text-xs font-medium text-slate-400">Words: {scanResult.report.word_count}</span>
                            </div>
                            <div className="flex-grow overflow-auto custom-scrollbar">
                                <pre className="text-xs font-mono text-slate-600 leading-relaxed whitespace-pre-wrap">
                                    {JSON.stringify(scanResult.report.details, null, 2)}
                                </pre>
                            </div>
                        </div>

                        <div className="mt-8 flex justify-end">
                            <Button
                                onClick={() => setScanResult(null)}
                                className="rounded-xl bg-slate-900 hover:bg-black text-white h-12 px-8 font-bold"
                            >
                                Return to Editor
                            </Button>
                        </div>
                    </div>
                )}

                {scanResult && scanResult.status === 'failed' && (
                    <div className="absolute inset-0 bg-white/98 backdrop-blur-md z-50 p-6 md:p-10 flex flex-col items-center justify-center rounded-[2.5rem] animate-in fade-in zoom-in duration-300">
                        <div className="w-20 h-20 rounded-full bg-red-50 flex items-center justify-center mb-6">
                            <X className="w-10 h-10 text-red-500" />
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-2">Analysis Failed</h3>
                        <p className="text-slate-500 text-center max-w-xs mb-8">
                            {scanResult.error || "An unexpected error occurred during analysis. Please try again."}
                        </p>
                        <Button
                            onClick={() => setScanResult(null)}
                            className="rounded-xl bg-slate-900 hover:bg-black text-white h-12 px-8 font-bold"
                        >
                            Try Again
                        </Button>
                    </div>
                )}
            </div>
        </div>
    );
};
