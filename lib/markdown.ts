import rehypeStringify from "rehype-stringify";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeHighlight from "rehype-highlight";
import { unified } from "unified";

// Create a processor that parses Markdown to HTML
const processor = unified()
  .use(remarkParse) // Parses Markdown into AST
  .use(remarkRehype, { allowDangerousHtml: true }) // Converts Markdown AST to HTML AST
  .use(rehypeStringify) // Converts HTML AST into a string of HTML
  .use(rehypeHighlight);

export async function markdownToHtml(markdownContent: string) {
  const file = await processor.process(markdownContent);
  return String(file); // Return the HTML string
}
