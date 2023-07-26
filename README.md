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

2. After this, a job seeker opens job seeker web app. Here, they are asked to record their preferences in their vernacular language, which they can reply to in their vernacular language. They can give in their audio inputs, which are recorded, scripted and translated into machine-understandable query. All of this is done by pipeline.

3. This query is run through the database to find jobs. If there are jobs matching the query, they are returned back to the job seeker web app. The job vacancies are then read back to the job seeker in their vernacular language (by pipeline). The job seeker, if interested in any job, can press "YES". This records their response to that particular job and the job poster of that particular job is notified about the same

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

## About the repository

1. The folders "frontend" and "backend" contain the code for the job poster website.

2. The folder "Pipeline" contain the code for the job seeker website and pipeline.

3. The folder "Documentation" contains the documentation for the project. It consists of 2 sub-folders, "Minutes of Meeting", which details about the meetings during development and "Project Document", which consists of details related to Project, like Project Design (overviews, modules,API descriptions, relationship diagrams and models, sequence diagrams, desing snapshots), Project Plan (milestones and schedule), SRS (user profiles and modules) .etc.

4. The pdf file, Links, contains links to 

> demo video, which demostrates the various Functionalities of the project. In the video, we show how a dummy job poster can register, login and post a new vacancy through the website. Then a dummy job seeker can use the web app to record their preferences through vernacular audio and get back job vacancies (including the one made during the demo video as it suits the preferences). The job seeker shows interest in the vacancy by pressing "YES" and the response gets recorded and the job poster gets notified and sees the contact details of the job seeker. **Use Headphones as audio outputs recorded in screen recording is faint and might not be heard.**

> a presentation, which details on the motivation, objectives, milestones, Technology stack used, user research, challenges, concetps , schemas, and modules used in project. It also contains snapshots of UI screens of the website and web app.

It needs to be downloaded to view the links.

## To run the project:

Clone the repository to your local system. Open the terminal in the repository folder.

### For the job poster

1. Run the following commands to setup backend.
```
cd backend
npm install
```
In some systems, an additional command of 
```
npm install bcryptjs
``` 
has to be run.

2. Your backend is setup. Run the backend using
``` 
node server.js
```
3. Now, open another terminal in repository folder. Setup the frontend by:
```
cd frontend
npm install
```

4. Run the frontend in frontend terminal by 
```
npm start
```

This setups the website for job poster.

### For the job seeker

**In the folder "Pipeline/web/app/static", there are pre-recorded audio files from the video demo. They may be used as reference on how the prompts will be and how the input needs to given in the vernacular language. If you wish to use the job seeker web app, kindly delete all the files present in the folder and then proceed**

1. Open a terminal in repository folder. Now go to:
```
cd Pipeline/web/app
```
and then run 

```
python3 app.py
```
This runs the web app.

2. Now open another terminal in repository folder
```
cd Pipeline/web
```
3. Now record your preferred language in web app and then run 
```
python3 pipeline1.py
```
in the terminal which is open in Step 2. It identifies the language and converts the following prompts into that language.
4. Now record your location and job type and then run 
```
python3 pipeline3.py
```
in the Step 2 terminal again. It identifies the location and job type, runs query and gives back response about vacancies in vernacular language.

5. The job seeker can then listen to the vacancies and choose what they are interested in by pressing "YES". Their details will be sent to the job poster then.

