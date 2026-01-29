export interface Lesson {
    id: string;
    title: string;
    category: 'CORE' | 'CKA' | 'CKAD' | 'CKA/CKAD' | 'CKS' | 'EXPERT' | 'INTERNALS';
    duration: string;
    markdown: string;
    flashcards?: { question: string; answer: string }[];
    tasks?: string[]; // Optional: for random question generation
}
