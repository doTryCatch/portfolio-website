// graphql/resolvers.js
import prisma from "../lib/prisma";

const resolvers = {
  Query: {
    Projects: async (_parent,_args,context) => {
      return await prisma.project.findMany();
    },
  },
};

export default resolvers;
