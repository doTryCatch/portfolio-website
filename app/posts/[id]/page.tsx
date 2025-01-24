// app/post/page.tsx
import React from "react"
import fs from "fs";

import path from "path";

import { markdownToHtml } from "../../../lib/markdown";
interface PageProps {
  params: {
    id: string; // Dynamic route parameter
  };
}
const PostPage:React.FC<PageProps> =  async ({params}) => {
    const id=params.id
  const filePath = path.join(process.cwd(), "app", "content", `blog${id}.mdx`); // Path to markdown file

  const fileContent = fs.readFileSync(filePath, "utf8"); // Read the markdown file

  // Convert Markdown to HTML

  const content = await markdownToHtml(fileContent);
  console.log(content)

  return (
    <div>

      {/* Render HTML content */}

      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
};

export default PostPage;
