import rehypeStringify from "rehype-stringify";

import remarkParse from "remark-parse";

import remarkRehype from "remark-rehype";

import remarkHtml from "remark-html"; // Handles HTML inside markdown

import rehypeHighlight from "rehype-highlight";

import { unified } from "unified";

import remarkMath from "remark-math"; // 📌 Parses math equations in markdown

import rehypeKatex from "rehype-katex"; // 📌 Renders math using KaTeX

import "katex/dist/katex.min.css"; // 📌 Ensure KaTeX styles are applied

import remarkGfm from "remark-gfm";

// Create a processor that parses Markdown to HTML

const processor = unified()
    .use(remarkParse) // Parses Markdown into AST

    .use(remarkGfm)
    .use(remarkMath) // Enables LaTeX math syntax support

    .use(remarkHtml) // Handles HTML in Markdown content

    .use(remarkRehype, { allowDangerousHtml: true }) // Converts Markdown AST to HTML AST, allowing inline HTML

    .use(rehypeKatex) // Renders LaTeX math using KaTeX

    .use(rehypeHighlight) // Highlights code blocks

    .use(rehypeStringify); // Converts HTML AST into a string of HTML

export async function markdownToHtml(markdownContent: string) {
    const file = await processor.process(markdownContent);

    return String(file); // Return the HTML string
} 
    
      
    
      
    
      
