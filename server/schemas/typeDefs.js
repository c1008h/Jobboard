const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
    savedJobs: [Job]
  }
  type Job {
    job_id: String!
    employer_name: String
    employer_logo: String
    apply_link: String
    description: String
    is_remote: Boolean
    posted_date: String
    country: String
    state: String
    city: String
    offer_expire: String
  }

  input SaveJobInput {
    job_id: String!
    employer_name: String
    employer_logo: String
    apply_link: String
    description: String
    is_remote: Boolean
    posted_date: String
    country: String
    state: String
    city: String
    offer_expire: String
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
    removeJob(job_id: String!): User
  }
`;

module.exports = typeDefs;