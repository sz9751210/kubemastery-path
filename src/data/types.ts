export interface Lesson {
    id: string;
    title: string;
    category: 'CORE' | 'CKA' | 'CKAD' | 'CKA/CKAD' | 'CKS' | 'EXPERT' | 'INTERNALS';
    duration: string;
    markdown: string;
    flashcards?: { question: string; answer: string }[];
    setupScript?: string; // Script to setup the whole lesson
    verifyScript?: string; // Script to verify the whole lesson
    tasks?: { markdown: string; verify?: string; setup?: string }[]; // Pool of tasks with verification/setup logic
}
