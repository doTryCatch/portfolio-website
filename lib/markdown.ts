import rehypeStringify from "rehype-stringify";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import remarkHtml from "remark-html";  // To directly parse HTML inside markdown
import rehypeHighlight from "rehype-highlight";
import { unified } from "unified";

// Create a processor that parses Markdown to HTML
const processor = unified()
  .use(remarkParse) // Parses Markdown into AST
  .use(remarkHtml)  // Handles HTML in Markdown content
  .use(remarkRehype, { allowDangerousHtml: true }) // Converts Markdown AST to HTML AST, allowing inline HTML
  .use(rehypeHighlight) // Highlights code blocks
  .use(rehypeStringify); // Converts HTML AST into a string of HTML

export async function markdownToHtml(markdownContent: string) {
  const file = await processor.process(markdownContent);
  return String(file); // Return the HTML string
}
