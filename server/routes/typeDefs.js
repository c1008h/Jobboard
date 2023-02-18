const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
    savedJobs: [Job]
  }
  type Job {
    jobId: String!
  }
  input SaveJobInput {
    
  }
  type Auth {
    token: ID
    user: User
  }
  type Query {
    users: [User]
    user(username: String!): User 
    me: User
  }
  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveJob(input: SaveJobInput!): User
    removeJob(jobId: String!): User
  }
`;

module.exports = typeDefs;