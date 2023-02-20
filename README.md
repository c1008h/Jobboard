# Welcome to Jobboard

As developers, we understand the challenges that come with losing a job, especially in the fast-paced and ever-changing tech industry. That's why we've created a platform that caters to the unique needs of tech workers. 
Our job portal is easy to use, with a user-friendly interface that allows job seekers to browse job listings, submit applications, and track their progress. Our portal is designed to match job seekers with the right opportunities, based on their skills, experience, and preferences.

<img src="https://i.ibb.co/sRH9Lyk/image-2023-02-20-050758194.png"/>
# Description
**Jobboard** like any other job seeking platform provides job listings to users and opportunities to connect to possible employers. However it is specially curated towards individuals in the tech industry and more specifically towards those impacted by company lay offs. Jobboard aims to facilitate cooperation between companies and employees--where companies can allocate badges to outstanding employees who were laid off so that their good standing can be acknowledged by other job recruiters. Currently, Users can register an account and promptly search and save jobs they are interested in.
### Created with 
* Mongodb
* Node
* React
* Graphql
* Axios
* Material UI



## Installation

The project may be run locally, however the job listings data is not provided and must be acquired independently. A sample schema for the database is provided below.
```
job_id:  String,
employer_name:  String,
employer_logo:  String,
job_apply_link:  String,
job_description:  String,
job_title:  String,
job_is_remote:  Boolean,
job_is_posted_at_datetime_utc:  String,
job_country:  String,
job_state:  String,
job_city:  String,
job_offer_expiration_datetime_utc:  String,
job_highlights:  [{Qualifications:[String], Responsibilities:  [String], Benefits:  [String]}]
```
# License

Shield: [![CC BY 4.0][cc-by-shield]][cc-by]

This work is licensed under a
[Creative Commons Attribution 4.0 International License][cc-by].

[![CC BY 4.0][cc-by-image]][cc-by]

[cc-by]: http://creativecommons.org/licenses/by/4.0/
[cc-by-image]: https://i.creativecommons.org/l/by/4.0/88x31.png
[cc-by-shield]: https://img.shields.io/badge/License-CC%20BY%204.0-lightgrey.svg