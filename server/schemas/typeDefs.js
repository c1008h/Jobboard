const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
    savedJobs: [Job]
  }
  
  type Job {
    _id: String
    job_id: String!
    job_title: String
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
    _id: String
    job_id: String!
    job_title: String
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
    removeJob(_id: String): User
  }
`;

module.exports = typeDefs;