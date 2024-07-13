import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export async function GET() {
  const projects = await prisma.project.findMany({
    include: {
      techstack: true, // Include related techstack data
    },
  });
  return NextResponse.json({ message: projects });
}
export async function POST() {
  try {
    const project = await prisma.project.create({
      data: {
        heading: "Deep Dive into Next.js API",
        techstack: {
          create: [
            { name: "react" },
            { name: "rest api" },
            { name: "typescript" },
          ],
        },
      },
    });
    return NextResponse.json({ project });
  } catch (error) {
    console.error("Error creating project:", error);
    return NextResponse.json(
      { error: "Failed to create project" },
      { status: 500 }
    );
  }
}
