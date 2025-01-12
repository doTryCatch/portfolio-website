// app/post/page.tsx

import fs from "fs";

import path from "path";

import { markdownToHtml } from "../../../lib/markdown.ts";

const PostPage = async () => {
  const filePath = path.join(process.cwd(), "app", "content", "example.mdx"); // Path to markdown file

  const fileContent = fs.readFileSync(filePath, "utf8"); // Read the markdown file

  // Convert Markdown to HTML

  const content = await markdownToHtml(fileContent);
  console.log(content)

  return (
    <div>
      <h1>Markdown Post</h1>

      {/* Render HTML content */}

      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
};

export default PostPage;
