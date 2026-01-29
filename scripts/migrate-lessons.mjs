import fs from 'fs';
import path from 'path';

// Read the lessons.ts file content directly
const lessonsContent = fs.readFileSync(path.join(process.cwd(), 'src/data/lessons.ts'), 'utf-8');

// Regex to find lesson objects
// This is a rough parser that assumes a specific structure in lessons.ts
// It matches: 'id': { ... markdown: `...` ... }
const lessonRegex = /'(\w+)':\s*{\s*id:\s*['"]\1['"],\s*title:\s*['"](.*?)['"],\s*category:\s*['"](.*?)['"],\s*duration:\s*['"](.*?)['"],\s*markdown:\s*`([\s\S]*?)`(?:\s*,\s*flashcards:\s*(\[[\s\S]*?\]))?\s*},/g;

let match;
let count = 0;

const OUTPUT_BASE = path.join(process.cwd(), 'src/content/exams');

while ((match = lessonRegex.exec(lessonsContent)) !== null) {
    const [_, id, title, category, duration, markdown, flashcards] = match;

    // Create directory for category if it doesn't exist
    // Map complex categories like 'CKA/CKAD' to 'CKA_CKAD' for safe folders
    const safeCategory = category.replace('/', '_');
    const categoryDir = path.join(OUTPUT_BASE, safeCategory);
    if (!fs.existsSync(categoryDir)) {
        fs.mkdirSync(categoryDir, { recursive: true });
    }

    // Prepare frontmatter
    let fileContent = `---
id: ${id}
title: ${title}
category: ${category}
duration: ${duration}
`;

    // Add flashcards if they exist
    if (flashcards) {
        // Cleaning up the flashcards string to be valid YAML or just skipped for now
        // For simplicity in this script, we'll try to parse the JS array to JSON then YAML-ish
        try {
            // This is risky with regex, so we'll just ignore flashcards for the markdown migration 
            // in this specific 'rough' script approach, or attempt a basic cleanup
            // For a robust solution, we'd need a real AST parser. 
            // Let's defer flashcards to a manual check or simple JSON block in frontmatter.
            // Actually, let's just dump it as a string block for now.
            // fileContent += `flashcards: ${flashcards}\n`; 
            // BETTER: Don't include flashcards in frontmatter if complex. 
            // We will lose flashcards with this regex approach if we aren't careful.
            // Let's manual check flashcards.
            console.log(`Warning: Flashcards found for ${id}, manual migration might be needed for cards.`);
        } catch (e) { }
    }

    fileContent += `---\n\n${markdown.trim()}\n`;

    fs.writeFileSync(path.join(categoryDir, `${id}.md`), fileContent);
    console.log(`Migrated ${id} to ${categoryDir}/${id}.md`);
    count++;
}

console.log(`Total lessons migrated: ${count}`);
