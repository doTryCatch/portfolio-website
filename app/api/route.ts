import { NextResponse } from "next/server";
import { FindAllData } from "../../prisma/seed";

let prisma: any;
if (process.env.NEXT_PUBLIC_IS_VERCEL !== "true") {
  const { PrismaClient } = require("@prisma/client");
  prisma = new PrismaClient();
}

export async function GET() {
  if (!prisma) {
    return NextResponse.json(
      { message: "Prisma is not available in this environment" },
      { status: 200 }
    );
  }

  try {
    return NextResponse.json({ message: FindAllData() });
  } catch (error) {
    console.error("Error fetching projects:", error);
    return NextResponse.json(
      { error: "Failed to fetch projects" },
      { status: 500 }
    );
  }
}

export async function POST() {
  if (!prisma) {
    return NextResponse.json(
      { message: "Prisma is not available in this environment" },
      { status: 200 }
    );
  }

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
