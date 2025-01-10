import prisma from "@/lib/prisma";

interface addProjectSchema {
  heading: string;
  description: string;
  techstack: {
    create: { name: string }[];
  };
  time: Date; // or you can leave it out to use the default value
  thumbnail: Buffer;
  //  Buffer.from("your-thumbnail-image-data"), // Replace with actual binary data
  githubLinkUrl: string;
}

export class query {
  constructor() {}
  // POST
  post = async (data: addProjectSchema) => {
    // for single type post
    // for multi level post

    try {
      // Attempt to create a new project in the database
      const project = await prisma.project.create({ data });
      return project;
    } catch (error) {
      // Handle any errors that occur during the database operation
      console.error("Error creating project:", error);

      // You can return a custom error response or throw an error
      throw new Error("Failed to create project");
    } finally {
      // Ensure the Prisma client is disconnected properly
      await prisma.$disconnect();
    }
  };
  //GET
  get = async () => {
    // for single type post
    // for multi level post

    return await prisma.project.findMany();
  };
  //UPDATE
  //DELETE
}
