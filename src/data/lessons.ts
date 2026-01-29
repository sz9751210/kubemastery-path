import { generatedExams } from './generated-exams';
import { Lesson } from './types';

// Export Lesson type for consumers
export type { Lesson };

// Combine all lessons (currently just generated ones)
export const lessons: Record<string, Lesson> = {
  ...generatedExams
};

export const getLessons = () => Object.values(lessons);

export const getLessonById = (id: string): Lesson | undefined => {
  // Check for special random exam IDs
  if (id === 'cka-random-mock') {
    return generateRandomExam('CKA', 'Random CKA Mock Exam');
  }
  if (id === 'ckad-random-mock') {
    return generateRandomExam('CKAD', 'Random CKAD Mock Exam');
  }
  if (id === 'cks-random-mock') {
    return generateRandomExam('CKS', 'Random CKS Mock Exam');
  }

  return lessons[id];
};

// Helper to generate a random exam from the pool of tasks
function generateRandomExam(category: string, title: string): Lesson {
  const pool = Object.values(lessons).filter(l => l.category === category || l.category.includes(category));
  const allTasks: string[] = [];

  pool.forEach(lesson => {
    if (lesson.tasks && lesson.tasks.length > 0) {
      allTasks.push(...lesson.tasks);
    } else {
      // If no split tasks, maybe treat the whole markdown as one task if it's small? 
      // For now, only use explicitly split tasks (starting with # Task)
    }
  });

  // Shuffle and pick 5
  const shuffled = allTasks.sort(() => 0.5 - Math.random());
  const selected = shuffled.slice(0, 5);

  const markdown = selected.length > 0
    ? `# ${title}\n\nTime: 60 mins. Pass: 66%.\n\n` + selected.join('\n\n')
    : `# ${title}\n\nNot enough questions found in the pool.`;

  return {
    id,
    title,
    category: category as any,
    duration: '60 mins',
    markdown,
  };
}
