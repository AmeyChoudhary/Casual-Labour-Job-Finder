# Casual Labour Job Finder

## Team Members: 

    1. Aditya Acharya
    2. Amey Choudhary
    3. Sai Nikhita Obbineni

## About our Project

Most online job portals cater to white collar jobs. The few that cater to blue collar jobs suffer from either of these or some combination of these issues :
1. Too technologically complex for the average blue collar worker to understand and use effectively 
2. available only in major languages like English. 


For employers looking to hire local semi-skilled blue collar workers, it is extremely tedious and difficult for them to get interested blue collar workers.


The "Casual Labour Job Finder" aims to bridge the gap between job seeker and job finder and addresses all of these problems by:

1. offering a **web application** where job seekers can open and enquire about job vacancies, with their required preferences, **giving audio inputs in their own vernacular language**.

2. offering a **website** , where job posters can post job vacancies and manage the responses they receive.

## Flow of the application:

1. The job poster, creates their account on the job poster website. They post a new job by filling in the job details. The new job vacancy gets saved in the database.

2. After this, a job seeker opens job seeker web app. Here, they are asked to record their preferences, which they can in their vernacular language. They can give in their audio inputs, which are recorded, scripted and translated into machine-understandable query.

3. This query is run through the database to find jobs. If there are jobs matching the query, they are returned back to the job seeker web app. The job vacancies are then read back to the job seeker in their vernacular language. The job seeker, if interested in any job, can press "YES". This records their response to that particular job and the job poster of that particular job is notified about the same

4. The job poster, gets the response of the job seeker for that job. They get the contact details of the job seeker. The job poster can manage the response by contacting the job seeker and changing their status.

## Functionalities available in our application

### For the job poster

The website is for blue collar job posters. After registering on the website, the user
will be able to:
1. post new jobs
2. manage previously posted jobs (edit and delete them)
3. view and manage responses (view information of job seekers and change
their status for the job)
4. edit and delete their profile
5. provide feedback
6. contact for support or help
7. read FAQs


### For the job seeker

After starting the application, the job seeker shall be asked for their job preferences, such as location, duration, type, wage,etc. They can reply about their preferences in vernacular language. Their query will be processed and they shall get a response for the same, back in their vernacular language. They can show interest in the job
options, by pressing "YES".

## Technology Stack used in project:

### For Development:

#### Development Environment:
> Visual Studio Code : The team uses Microsoft’s Visual Studio Code as anIDE.

#### Programming Languages / Frameworks / Dev Tools:
> 1. React : For frontend development of website.
> 2. Nodejs: For backend development of website
> 3. HTML: For basic substitute UI app.
> 4. Python : For pipelining
> 5. minIO: For storage and extraction of url of audio files
> 6. MongoDB: For the database of website
> 7. GraphQL: Backend.

### For Design:
> Figma : The team uses Figma for designing and collaborating on designs. It is also used to visualise the website.
 

## To run the project:

### For the job poster

