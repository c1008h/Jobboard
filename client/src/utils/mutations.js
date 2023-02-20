import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
        email
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password,) {
      token
      user {
        _id
        username
        email
      }
    }
  }
`;

export const SAVE_JOB = gql`
  mutation saveJob($input: SaveJobInput!) {
    saveJob(input: $input) {
      username
      savedJobs {
        job_id
        job_title
        employer_name
        employer_logo
        apply_link
        description
        is_remote
        posted_date
        country
        state
        city
        offer_expire
      }
    }
  }
`;

export const REMOVE_JOB = gql`
  mutation removeJob($job_id: String!) {
    removeJob(job_id: $job_id) {
      _id
      username
      email
      savedJobs {
        job_id
        job_title
        employer_name
        employer_logo
        apply_link
        description
        is_remote
        posted_date
        country
        state
        city
        offer_expire
      }
    }
  }
`;