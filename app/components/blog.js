import React from "react";
import Markdown from "markdown-to-jsx";

function Contact() {
  const markdownContent = `
# Sample Markdown Content

This is a paragraph of sample content to test **Markdown** rendering in JSX.

## Subheading

Here is a list:

- Item 1
- Item 2
- Item 3

\`\`\`javascript
// Sample code block
const sayHello = () => {
  console.log("Hello, world!");
};
sayHello();
\`\`\`

And a link to [Google](https://www.google.com).

![Sample Image](https://via.placeholder.com/150)
  `;

  return (
    <section className="contact">
      <h1> Blog Posts </h1> <Markdown> {String(markdownContent)} </Markdown>{" "}
    </section>
  );
}

export default Contact;
