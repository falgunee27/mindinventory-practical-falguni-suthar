# mindinventory-practical-falguni-suthar
# Project is containing APIs about task managment. 
# Language, Frameworks, database and tools - Node.js, Nest.js, TypeORM, MySQL

# Steps to setup
1. Take a clone of this code in your new folder
2. Create a new database in your local mysql database and change the name of the database in ormConfig.json, .env and in app.module.ts files
3. Migration is not done yet so to create new tables, make syncronize : true in add.module.ts and ormconfig.json fle and run the "npm run start" command to run the project and setup the database.
4. APIs are created to task-management in the user-task module. To run the API in the postman, please go with the base path "[localhost](http://localhost:3000/user-tasks)"


# .env file is containing the PORT and APP name for now.
# APP_NAME='Task Management Portal'
# PORT=3000 //This is local port, you can change the port based on your choice.