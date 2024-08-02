// import { NextResponse } from "next/server";
// import { PrismaClient } from "@prisma/client";
// const prisma = new PrismaClient();
// export async function GET() {
//   const projects = await prisma.project.findMany({
//     include: {
//       techstack: true, // Include related techstack data
//     },
//   });
//   return NextResponse.json({ message: projects });
// }
// export async function POST() {
//   try {
//     const project = await prisma.project.create({
//       data: {
//         heading: "Deep Dive into Next.js API",
//         techstack: {
//           create: [
//             { name: "react" },
//             { name: "rest api" },
//             { name: "typescript" },
//           ],
//         },
//       },
//     });
//     return NextResponse.json({ project });
//   } catch (error) {
//     console.error("Error creating project:", error);
//     return NextResponse.json(
//       { error: "Failed to create project" },
//       { status: 500 }
//     );
//   }
// }
// pages/api/example.js
import { NextApiRequest, NextApiResponse } from "next";

let prisma;
if (process.env.NEXT_PUBLIC_IS_VERCEL !== "true") {
  const { PrismaClient } = require("@prisma/client");
  prisma = new PrismaClient();
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (prisma) {
    try {
      const data = await prisma.example.findMany();
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch data" });
    }
  } else {
    res
      .status(200)
      .json({ message: "Prisma is not available in this environment" });
  }
}
