# Casual Labour Job Finder

## Team Members: 
    1. Aditya Acharya
    2. Amey Choudhary
    3. Sai Nikhita Obbineni

## About our Project

Most online job portals cater to white collar jobs. The few that cater to blue collar jobs suffer from either of these or some combination of these issues :
1. Too technologically complex for the average blue collar worker to understand and use effectively 
2. available only in major languages like English. 


For employers looking to hire local semi-skilled blue collar workers, it is extremely tedious and difficult for them to get interested blue collar workers


## List of commands that can be run using our code and database
 
1. ### Insert a New Patient
To insert the details of a patient who is being admitted to the hospital.
 
2. ### Deleting a Former Doctor 
To delete the details of a doctor who is leaving the hospital.
 
3. ### Updating the Room Allotment to Department
To modify the room's department allottment.
 
4. ### Select Patients Having a Particular Disease
To know the names of Patients suffering from a Particular Disease.
 
5. ### Select Doctors in a certain Department
To know which Doctors work in a particular department.

6. ### Patients Older than a Certian Age
To know names of patients older than a certain age.
 
7. ### Room with capacity
To know the room number of rooms having atleast the desired capacity.
 
8. ### Avergae Experience Level of Doctors in Department
This gives the user the average work experience of doctors belonging to a particular department.
 
9. ### Room Search
This allows the user to search for which Patient is in which Room either by Room Number or By Using PatientID. 
 
10. ### Room Availability
This displays all the rooms which are not occupied by patients.
 
11. ### Success Rate of Any Operation
This allows the user to know the success rate of a particular operation from statistics of past records.
 
12. ### Most Frequent Disease in Age Group
This gives the user an analysis of the most frequent disease in age groups.
 
13. ### Logout
This logs the user out of the database.

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
