// graphql/schema
import { gql } from "apollo-server-micro";

const typeDefs = gql`
  type Project {
    id: ID!
    heading: String!
    description: String!
    time: String!
  }

  type Query {
    Projects: [Project!]!
  }

  type Mutation {
    createProject(heading: String!, description: String!): Project!
  }
`;

export default typeDefs;
