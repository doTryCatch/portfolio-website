import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export class query {
  constructor() {}
  // POST
  post = async (fieldName: string, data: object) => {
    const field = fieldName;
    // for single type post
    // for multi level post
    const user = {
      heading: "Your Project Heading",
      techstack: {
        create: [
          { usededTech: "Technology 1" },
          { usededTech: "Technology 2" },
        ],
      },
      time: new Date(), // or you can leave it out to use the default value
      thumbnail: Buffer.from("your-thumbnail-image-data"), // Replace with actual binary data
      githubLinkUrl: "https://github.com/your-repo",
    };
    const createUser = await prisma.project.create({ data: user });
  };
  //GET
  //UPDATE
  //DELETE
}

export async function main() {
  // ... you will write your Prisma Client queries here
  const allProjects = await prisma.project.findMany();
  console.log(allProjects);
}

export async function FindAllData() {
  const allProjects = await prisma.project.findMany();
  return allProjects;
}
