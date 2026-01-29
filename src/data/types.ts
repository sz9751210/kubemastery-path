export interface Lesson {
    id: string;
    title: string;
    category: 'CORE' | 'CKA' | 'CKAD' | 'CKA/CKAD' | 'CKS' | 'EXPERT' | 'INTERNALS';
    duration: string;
    markdown: string;
    flashcards?: { question: string; answer: string }[];
    verifyScript?: string; // Script to verify the whole lesson
    tasks?: { markdown: string; verify?: string }[]; // Pool of tasks with verification logic
}
