// Submissions Component

export interface SubmissionPayload {
    essay_content: string;
    metadata_xml?: string;
    user_id?: number;
    assignment_id?: number;
}

export interface SubmissionResponse {
    uuid: string;
    status: 'queued' | 'processing' | 'completed' | 'failed';
    message?: string;
    expires_at?: string;
}

export interface PlaybackStep {
    t: "t" | "m";    // type: "t" for text operation, "m" for metadata
    o?: "i" | "d";   // operation: "i" for insert, "d" for delete
    s?: string;      // string content (for text operations)
    i?: number;      // start index in document
    e?: number;      // end index in document
    m?: string;      // message (for metadata events)
    d: number;       // duration (milliseconds)
    ts?: number;     // timestamp (milliseconds since epoch)
}

export interface DetailedReport {
    d: string; // submissionId
    s: string; // finalEssay
    x: Array<{
        s: string; // original_text
        c: string; // current_text
        i: number; // original_start_index
        b: number; // current_start_index
        e: number; // current_end_index
        t: string; // timestamp
    }>;
    c: Array<{
        s: string; // original_text
        c: string; // current_text
        i: number; // original_start_index
        b: number; // current_start_index
        e: number; // current_end_index
        t: string; // timestamp
        score: number;
    }>;
    m: Array<{
        s: string; // matched_text
        i: number; // start_index
        e: number; // end_index
        p: number; // similarity_score
        u: string; // source_url
    }>;
    ai: Array<{
        si: number; // start_index
        ei: number; // end_index
        p: number; // confidence_score
    }>;
    p: PlaybackStep[]; // playbackSteps
    pt: number; // pastedPercentage
    pl: number; // plagiarizedPercentage
    pa?: number; // aiPercentage
    ap?: number; // authenticPercentage
}
export interface SubmissionReport {
    ai_detection_percentage: number;
    authentic_percentage: number;
    word_count: number;
    completed_at: string;
    details?: Record<string, unknown>;
}

export interface SubmissionStatusResponse {
    uuid: string;
    status: 'queued' | 'processing' | 'completed' | 'failed';
    report?: SubmissionReport;
    raw_report?: DetailedReport | string;
    error?: string;
}
