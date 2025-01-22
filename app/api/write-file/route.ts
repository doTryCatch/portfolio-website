import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function POST(req: Request) {
  try {
    const { content } = await req.json();
    

    // Define the file path relative to the root of the project
    const filePath = path.join(process.cwd(), 'src', 'data', 'queries.txt');


    // Write content to the file
    fs.appendFileSync(filePath, content+'\n', 'utf8');

    return NextResponse.json({ message: 'File written successfully' });
  } catch (error:any) {
    console.error(error);
    return NextResponse.json(
      { message: 'Failed to write file', error: error.message },
      { status: 500 }
    );
  }
}
