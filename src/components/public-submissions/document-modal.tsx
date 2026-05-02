import React from "react";
import { X, FileText } from "lucide-react";

interface DocumentModalProps {
    open: boolean;
    onClose: () => void;
    renderedText: React.ReactNode;
    wordCount: number;
}

export const DocumentModal: React.FC<DocumentModalProps> = ({
    open,
    onClose,
    renderedText,
    wordCount,
}) => {
    if (!open) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
            <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={onClose} />

            <div className="relative w-full max-w-4xl bg-white rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col h-[85vh] animate-in fade-in zoom-in duration-300 max-h-[480px]">
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-slate-100">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                            <FileText className="w-5 h-5 text-accent" />
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-slate-900">Document Markup</h3>
                            <p className="text-xs font-medium text-slate-400">Analysis of flagged segments</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <span className="text-xs font-bold px-3 py-1 bg-slate-50 text-slate-500 rounded-full border border-slate-100">
                            {wordCount} words
                        </span>
                        <button onClick={onClose} className="p-2 hover:bg-slate-100 rounded-full transition-colors">
                            <X className="w-6 h-6 text-slate-400" />
                        </button>
                    </div>
                </div>

                {/* Content Area */}
                <div className="flex-grow p-10 overflow-auto bg-slate-50/30 custom-scrollbar">
                    <div className="max-w-3xl mx-auto bg-white p-12 rounded-3xl shadow-sm border border-slate-100 min-h-full">
                        {renderedText}
                    </div>
                </div>

                {/* Footer / Legend */}
                <div className="p-6 border-t border-slate-100 bg-white">
                    <div className="flex flex-wrap justify-center gap-6">
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-100 border border-red-300" />
                            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">AI Detection</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full bg-purple-100 border border-purple-300" />
                            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Plagiarism</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full bg-blue-100 border border-blue-300" />
                            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Copied Text</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full bg-yellow-100 border border-yellow-300" />
                            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">External Paste</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
