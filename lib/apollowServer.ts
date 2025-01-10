import { ApolloServer } from "@apollo/server";
import typeDefs from "@/graphql/schema";
import resolvers from "@/graphql/resolvers";

// Initialize ApolloServer with your typeDefs and resolvers
export const server = new ApolloServer({
  typeDefs,
  resolvers,
});
