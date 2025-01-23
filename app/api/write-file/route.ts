import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { content } = await req.json();
    console.log(process.env.NEXT_PUBLIC_GITHUB_SECRET_KEY); // Log the GitHub token to verify

    const GITHUB_TOKEN = process.env.NEXT_PUBLIC_GITHUB_SECRET_KEY; // Securely store this in environment variables
    const REPO_OWNER = 'doTryCatch'; // Replace with your GitHub username
    const REPO_NAME = 'portfolio-website'; // Replace with your repository name
    const FILE_PATH = 'src/data/queries.txt'; // Path to your file in the repository
    const BRANCH = 'main'; // Replace with your branch name if not 'main'

    const githubApiUrl = `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/contents/${FILE_PATH}`;

    // Fetch the current file from GitHub to get its SHA and content
    const fileResponse = await fetch(githubApiUrl, {
      headers: {
        Authorization: `Bearer ${GITHUB_TOKEN}`,
        Accept: 'application/vnd.github.v3+json',
      },
    });

    if (!fileResponse.ok) {
      throw new Error('Failed to fetch file data from GitHub.');
    }

    const fileData = await fileResponse.json();
    const existingContent = Buffer.from(fileData.content, 'base64').toString('utf8');

    // Append the new content with a newline
    const updatedContent = `${existingContent}\n${content}`;
    const base64Content = Buffer.from(updatedContent).toString('base64');

    // Push the updated file back to GitHub
    const updateResponse = await fetch(githubApiUrl, {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${GITHUB_TOKEN}`,
        Accept: 'application/vnd.github.v3+json',
      },
      body: JSON.stringify({
        message: 'Appended content to queries.txt',
        content: base64Content,
        sha: fileData.sha, // Required for updates
        branch: BRANCH,
      }),
    });

    if (!updateResponse.ok) {
      const responseText = await updateResponse.text(); // Await response text to log the actual error
      throw new Error(`Failed to update file on GitHub. Response: ${responseText}`);
    }

    return NextResponse.json({ message: 'File updated successfully on GitHub.' });
  } catch (error: any) {
    console.error('Error updating file on GitHub:', error.message); // Log the error message
    return NextResponse.json(
      { message: 'Failed to update file', error: error.message },
      { status: 500 }
    );
  }
}
