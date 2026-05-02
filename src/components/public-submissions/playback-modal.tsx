import React, { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { X, Play, Pause, FastForward, Rewind, ChevronDown } from "lucide-react";
import { PlaybackStep } from "@/types/submissions";

interface PlaybackModalProps {
    open: boolean;
    onClose: () => void;
    playbackSteps: PlaybackStep[];
    initialElapsedTime?: number;
}

export const PlaybackModal: React.FC<PlaybackModalProps> = ({
    open,
    onClose,
    playbackSteps,
    initialElapsedTime,
}) => {
    const [playing, setPlaying] = useState(false);
    const [speed, setSpeed] = useState(1);
    const [content, setContent] = useState("");
    const [currentStep, setCurrentStep] = useState(-1);
    const [elapsedTime, setElapsedTime] = useState(initialElapsedTime ?? 0);
    const [interpolatedTime, setInterpolatedTime] = useState(initialElapsedTime ?? 0);
    const [cursorPosition, setCursorPosition] = useState(0);
    const [isTypingComplete, setIsTypingComplete] = useState(false);
    const [isDragging, setIsDragging] = useState(false);
    const [currentMessage, setCurrentMessage] = useState<{
        text: string;
        start: number;
        end: number;
    } | null>(null);

    const timeoutRef = useRef<NodeJS.Timeout | null>(null);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);
    const playbackStartRef = useRef<{ realTime: number; playbackTime: number } | null>(null);
    const scrollContainerRef = useRef<HTMLDivElement | null>(null);
    const cursorSpanRef = useRef<HTMLSpanElement | null>(null);

    const totalDuration = useMemo(() =>
        playbackSteps?.length > 0
            ? playbackSteps.reduce((sum, step) => sum + (step?.d || 0), 0)
            : 0
        , [playbackSteps]);

    const stepStartTimes = useMemo(() => {
        if (!playbackSteps?.length) return [];
        const times: number[] = [0];
        let cumulative = 0;
        for (let i = 0; i < playbackSteps.length; i++) {
            cumulative += playbackSteps[i]?.d || 0;
            times.push(cumulative);
        }
        return times;
    }, [playbackSteps]);

    const findStepByElapsedTime = useCallback((time: number) => {
        if (!playbackSteps?.length) return -1;
        let accumulatedTime = 0;
        for (let i = 0; i < playbackSteps.length; i++) {
            accumulatedTime += playbackSteps[i]?.d || 0;
            if (accumulatedTime > time) return i - 1;
        }
        return playbackSteps.length - 1;
    }, [playbackSteps]);

    const updateContentToStep = useCallback((targetStep: number) => {
        let newContent = "";
        let newMessage = null;
        let accumulatedTime = 0;
        let newCursorPosition = 0;

        if (!playbackSteps?.length || targetStep < 0) {
            setContent("");
            setCursorPosition(0);
            setCurrentMessage(null);
            setElapsedTime(0);
            return;
        }

        for (let i = 0; i <= targetStep && i < playbackSteps.length; i++) {
            const step = playbackSteps[i];
            if (!step) continue;

            accumulatedTime += step.d || 0;

            if (step.t === "t") {
                if (step.o === "i" && step.s) {
                    newContent = newContent.slice(0, step.i || 0) + step.s + newContent.slice(step.i || 0);
                    newCursorPosition = (step.i || 0) + step.s.length;
                } else if (step.o === "d") {
                    newContent = newContent.slice(0, step.i || 0) + newContent.slice((step.e || step.i || 0) + 1);
                    newCursorPosition = step.i || 0;
                }
            } else if (step.t === "m") {
                newMessage = {
                    text: step.m || "",
                    start: accumulatedTime - (step.d || 0),
                    end: accumulatedTime,
                };
            }
        }

        setContent(newContent);
        setCursorPosition(newCursorPosition);
        setCurrentMessage(newMessage);
        setElapsedTime(accumulatedTime);
    }, [playbackSteps]);

    useEffect(() => {
        if (open) {
            const initialTime = initialElapsedTime ?? 0;
            const initialStep = findStepByElapsedTime(initialTime);
            setElapsedTime(initialTime);
            setInterpolatedTime(initialTime);
            setCurrentStep(initialStep);
            setPlaying(false);
            setIsTypingComplete(false);
            updateContentToStep(initialStep);
        } else {
            setPlaying(false);
            setContent("");
            setCurrentStep(-1);
            if (intervalRef.current) clearInterval(intervalRef.current);
        }
    }, [open, initialElapsedTime, playbackSteps, findStepByElapsedTime, updateContentToStep]);

    useEffect(() => {
        if (playing && !isDragging && playbackSteps?.length > 0) {
            playbackStartRef.current = {
                realTime: Date.now(),
                playbackTime: elapsedTime
            };

            intervalRef.current = setInterval(() => {
                if (!playbackStartRef.current) return;
                const elapsed = Date.now() - playbackStartRef.current.realTime;
                const adjustedElapsed = elapsed * speed;
                const newTime = Math.min(playbackStartRef.current.playbackTime + adjustedElapsed, totalDuration);
                setInterpolatedTime(newTime);
                if (newTime >= totalDuration) {
                    setPlaying(false);
                    setIsTypingComplete(true);
                    setElapsedTime(totalDuration);
                    setInterpolatedTime(totalDuration);
                }
            }, 50);
        } else if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
        return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
    }, [playing, isDragging, speed, elapsedTime, totalDuration, playbackSteps]);

    useEffect(() => {
        if (playing && playbackSteps?.length > 0 && currentStep < playbackSteps.length - 1) {
            const step = playbackSteps[currentStep + 1];
            if (!step) return;
            const delay = step.d || 0;

            if (step.t === "t" && step.o === "i" && step.s && step.s.length < 150 && delay > 0) {
                const insertIndex = step.i || 0;
                const chars = step.s.split("");
                const typeChar = (idx: number) => {
                    if (idx < chars.length) {
                        setContent(prev => prev.slice(0, insertIndex + idx) + chars[idx] + prev.slice(insertIndex + idx));
                        setCursorPosition(insertIndex + idx + 1);
                        timeoutRef.current = setTimeout(() => typeChar(idx + 1), delay / (chars.length * speed));
                    } else {
                        setCurrentStep(prev => prev + 1);
                        setElapsedTime(prev => {
                            const newTime = prev + delay;
                            if (playbackStartRef.current) playbackStartRef.current.playbackTime = newTime;
                            return newTime;
                        });
                    }
                };
                typeChar(0);
            } else if (step.t === "m") {
                const messageStart = elapsedTime;
                const DISPLAY_TIME = 1500;
                setCurrentMessage({ text: step.m || "", start: messageStart, end: messageStart + DISPLAY_TIME });
                timeoutRef.current = setTimeout(() => {
                    setCurrentMessage(null);
                    setCurrentStep(prev => prev + 1);
                    setElapsedTime(prev => prev + (step.d || 0));
                }, DISPLAY_TIME / speed);
            } else {
                timeoutRef.current = setTimeout(() => {
                    setCurrentStep(prev => prev + 1);
                    setElapsedTime(prev => prev + (step.d || 0));
                }, delay / speed);
            }
        } else {
            setPlaying(false);
            setIsTypingComplete(true);
        }
        return () => { if (timeoutRef.current) clearTimeout(timeoutRef.current); };
    }, [playing, currentStep, playbackSteps, speed, elapsedTime]);

    useEffect(() => {
        if (cursorSpanRef.current) {
            cursorSpanRef.current.scrollIntoView({ behavior: "smooth", block: "nearest" });
        }
    }, [cursorPosition, content]);

    const formatTime = (ms: number) => {
        const seconds = Math.floor(ms / 1000);
        return `${Math.floor(seconds / 60)}:${(seconds % 60).toString().padStart(2, "0")}`;
    };

    if (!open) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
            <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={onClose} />

            <div className="relative w-full max-w-4xl bg-white rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col max-h-[480px] animate-in fade-in zoom-in duration-300">
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-slate-100">
                    <div className="flex-1" />
                    <div className="flex-1 flex justify-center">
                        {currentMessage && (
                            <div className="bg-emerald-100 text-emerald-900 px-4 py-1.5 rounded-full text-sm font-bold animate-in fade-in slide-in-from-top-1">
                                {currentMessage.text}
                            </div>
                        )}
                    </div>
                    <div className="flex-1 flex justify-end">
                        <button onClick={onClose} className="p-2 hover:bg-slate-100 rounded-full transition-colors">
                            <X className="w-6 h-6 text-slate-400" />
                        </button>
                    </div>
                </div>

                {/* Content Area */}
                <div
                    ref={scrollContainerRef}
                    className="flex-grow p-10 overflow-auto bg-slate-50/30 custom-scrollbar"
                >
                    <div className="max-w-2xl mx-auto bg-white p-12 rounded-3xl shadow-sm border border-slate-100 min-h-full">
                        {!playbackSteps?.length ? (
                            <div className="flex items-center justify-center h-full text-slate-400 italic">
                                No playback data available for this submission.
                            </div>
                        ) : (
                            <div className="whitespace-pre-wrap font-medium text-slate-700 leading-relaxed text-lg relative">
                                {content.slice(0, cursorPosition)}
                                <span
                                    ref={cursorSpanRef}
                                    className={`inline-block w-0.5 h-6 bg-accent align-middle ${!isTypingComplete ? 'animate-pulse' : 'hidden'}`}
                                />
                                {content.slice(cursorPosition)}
                            </div>
                        )}
                    </div>
                </div>

                {/* Controls */}
                <div className="p-8 border-t border-slate-100 bg-white">
                    <div className="max-w-3xl mx-auto flex flex-col gap-6">
                        {/* Slider */}
                        <div className="flex items-center gap-4">
                            <span className="text-xs font-bold text-slate-400 w-12 tabular-nums">
                                {formatTime(isDragging || playing ? interpolatedTime : elapsedTime)}
                            </span>
                            <div className="flex-grow relative h-6 flex items-center group">
                                <input
                                    type="range"
                                    min={0}
                                    max={totalDuration}
                                    value={isDragging ? interpolatedTime : (playing ? interpolatedTime : elapsedTime)}
                                    onChange={(e) => {
                                        const val = Number(e.target.value);
                                        setInterpolatedTime(val);
                                        setIsDragging(true);
                                        const step = findStepByElapsedTime(val);
                                        setCurrentStep(step);
                                        updateContentToStep(step);
                                        setElapsedTime(val);
                                    }}
                                    onMouseDown={() => { setIsDragging(true); setPlaying(false); }}
                                    onMouseUp={() => { setIsDragging(false); }}
                                    className="w-full h-1.5 bg-slate-100 rounded-full appearance-none cursor-pointer accent-accent"
                                />
                            </div>
                            <span className="text-xs font-bold text-slate-400 w-12 tabular-nums text-right">
                                {formatTime(totalDuration)}
                            </span>
                        </div>

                        {/* Buttons */}
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <button
                                    onClick={() => {
                                        const newTime = Math.max(elapsedTime - 10000, 0);
                                        setElapsedTime(newTime);
                                        setInterpolatedTime(newTime);
                                        const step = findStepByElapsedTime(newTime);
                                        setCurrentStep(step);
                                        updateContentToStep(step);
                                    }}
                                    className="p-2 hover:bg-slate-50 rounded-xl transition-colors text-slate-600"
                                >
                                    <Rewind className="w-5 h-5 fill-current" />
                                </button>

                                <button
                                    onClick={() => setPlaying(!playing)}
                                    className="w-12 h-12 bg-slate-900 text-white rounded-2xl flex items-center justify-center hover:bg-black transition-transform active:scale-95 shadow-lg shadow-slate-200"
                                >
                                    {playing ? <Pause className="w-6 h-6 fill-current" /> : <Play className="w-6 h-6 fill-current ml-0.5" />}
                                </button>

                                <button
                                    onClick={() => {
                                        const newTime = Math.min(elapsedTime + 10000, totalDuration);
                                        setElapsedTime(newTime);
                                        setInterpolatedTime(newTime);
                                        const step = findStepByElapsedTime(newTime);
                                        setCurrentStep(step);
                                        updateContentToStep(step);
                                    }}
                                    className="p-2 hover:bg-slate-50 rounded-xl transition-colors text-slate-600"
                                >
                                    <FastForward className="w-5 h-5 fill-current" />
                                </button>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="relative group">
                                    <select
                                        value={speed}
                                        onChange={(e) => setSpeed(Number(e.target.value))}
                                        className="appearance-none bg-slate-50 border border-slate-100 rounded-xl px-4 py-2 pr-10 text-sm font-bold text-slate-700 focus:outline-none focus:ring-2 focus:ring-accent/20 cursor-pointer"
                                    >
                                        <option value={1}>1x Speed</option>
                                        <option value={2}>2x Speed</option>
                                        <option value={4}>4x Speed</option>
                                        <option value={8}>8x Speed</option>
                                    </select>
                                    <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
