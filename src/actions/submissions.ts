"use server";

import { SubmissionPayload, SubmissionResponse, SubmissionStatusResponse } from "@/types/submissions";

const BASE_URL = process.env.INTERNAL_API_BASE_URL || "http://127.0.0.1:8000/api/v1/internal";
const TOKEN = process.env.INTERNAL_API_TOKEN;

async function handleResponse(response: Response) {
    if (response.status === 403) {
        throw new Error("Forbidden: Invalid or missing token.");
    }
    if (response.status === 404) {
        throw new Error("Not Found: Submission does not exist.");
    }
    if (response.status === 422) {
        const errorData = await response.json();
        throw new Error(`Validation Error: ${JSON.stringify(errorData)}`);
    }
    if (!response.ok) {
        throw new Error(`API Error: ${response.statusText}`);
    }
    return response.json();
}

export async function submitEssay(payload: SubmissionPayload): Promise<SubmissionResponse> {
    if (!TOKEN) {
        throw new Error("INTERNAL_API_TOKEN is not configured.");
    }

    const response = await fetch(`${BASE_URL}/submissions`, {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${TOKEN}`,
            "Accept": "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
    });

    return handleResponse(response);
}

export async function getSubmissionStatus(uuid: string): Promise<SubmissionStatusResponse> {
    if (!TOKEN) {
        throw new Error("INTERNAL_API_TOKEN is not configured.");
    }

    const response = await fetch(`${BASE_URL}/submissions/${uuid}`, {
        method: "GET",
        headers: {
            "Authorization": `Bearer ${TOKEN}`,
            "Accept": "application/json",
        },
        cache: 'no-store'
    });

    return handleResponse(response);
}
