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

export interface ReportDetails {
    // Large flexible JSON object
    [key: string]: unknown;
}

export interface SubmissionReport {
    ai_detection_percentage: number;
    authentic_percentage: number;
    word_count: number;
    completed_at: string;
    details: ReportDetails;
}

export interface SubmissionStatusResponse {
    uuid: string;
    status: 'queued' | 'processing' | 'completed' | 'failed';
    report?: SubmissionReport;
    error?: string;
}
