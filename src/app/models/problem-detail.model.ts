export interface ProblemDetail {
    id: string;
    title: string;
    difficulty: number;
    tags: string[];
    verified: boolean;
    author: string;
    publishedDate: string;
    description: string;
    inputFormat: string;
    outputFormat: string;
    constraints: string;
    sampleCases: {
        input: string;
        output: string;
    }[];
    explanation: string;
    note: string;
    source: string;
    relatedProblems: string[];
}