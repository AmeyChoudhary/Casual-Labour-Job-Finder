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

The "Casual Labour Job Finder" aims to address all of these problems by offering a
toll-free number where job seekers can call and enquire about job vacancies near
them, in their vernacular language, as well as employers can use a website to post
job openings and get responses for the same.


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

 

## To run the project:

You must have MySQL and python3 in your local system for this to work.

1. Clone the repository into a folder and open that folder into in Terminal.

2. Login in to your MySQL using 
```
 sudo mysql -u <yourusername>
```
 and then enter your password.

3. In MySQL, create a database, "Proj_4".
```
CREATE DATABASE Proj_4;
```

4. (Optional) It is advised to create a new user and grant them all privileges on Proj_4. This step is optional.
```
CREATE USER '<newusername>'@'<hostname>' IDENTIFIED BY '<password>';
```
Grant the new user all privileges on Proj_4.
```
GRANT ALL PRIVILEGES ON *Proj_4* TO '<newusername>'@'<hostname>' WITH GRANT OPTION;
```
If facing problem while making a new user, follow this tutorial:
https://www.digitalocean.com/community/tutorials/how-to-create-a-new-user-and-grant-permissions-in-mysql

5. Exit MySQL and enter the following in your terminal (Note that terminal must be open in the Project folder)

```
mysql -u <yourusername> -p <yourpassword> Proj_4 < SQLdump.sql 
```
This command creates tables and dumps dummy data in your database. Your username and password can be either your native root user or the new user created in Step 4.

6. Now start the application by
```
python3 Functionality.py
```
and now enter your credentials (either your native user or new user created).

7. You may select options to see various functionalities.
