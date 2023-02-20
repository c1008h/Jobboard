import { gql } from '@apollo/client';

export const QUERY_ME = gql`
  query QUERY_ME {
    me {
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