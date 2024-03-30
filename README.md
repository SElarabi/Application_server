<!-- @format -->

# Application \_server

<a href="https://simple-data-application-server.onrender.com" target="_blank"/>Application Server Demo</a>

>-This is a simple Node.js HTTP server application,meticulously crafted with Express.js and adhering to the principles of the MERN (MongoDB, Express.js, React, Node.js) stack. It offers a comprehensive API for seamless user management, interfacing with a data store, and efficiently serves static assets from the designated public directory.

## Setup

Clone the repository and navigate to the project directory.
Install the dependencies by running the following command:

```javaScript
npm install
```

## Configuration

The server listens on the port specified by the PORT environment variable. If the variable is not set, it defaults to port 3000.

##

>- If you are using nodemon tool, the snippet { "ignore": ["db.json"] } in a nodemon.json file serves as a configuration option for the nodemon tool.
>- It specifies a file or pattern that should be ignored by nodemon when it watches for changes and automatically restarts your Node.js application.
Here's what each part of the snippet means:
> >- "ignore": This is a key in the JSON object that indicates you are specifying files or patterns to be ignored by nodemon.
> >- ["db.json"]: This is an array of file names or patterns that you want nodemon to ignore. 
>- In this case, it's specifying that nodemon should ignore any file named "db.json" and should be excluded from the watch list since this data file is updated frequently but doesn't require your Node.js application to restart when it changes.



## Usage

To start the server, run the following command:

```sql
npm start
```

The server will start running, and you will see a message indicating the port it is listening on port 3000.
open your browser on
[localhost:3000](http://localhost:3000/)

- The application http_server.js will point to index.html from **`public`** directory.

## Static Files

- The server serves static files from the **`public`** directory.
- Any files placed in the **`public`** directory can be accessed via the server's URL.

# API Endpoints

## Get All Users

### 'GET /data '

- Returns a JSON array of all the users in the data store.

## Add User

### 'POST /add '

- Adds a new user to the data store.
- The request body should include the following fields:
  - name: The user's name
  - dob: The user's date of birth
  - email: The user's email address
  - username: The user's username
  - password: The user's password
  - phone: The user's phone number
  - streetaddress: The user's street address
  - citystatezip: The user's city, state, and ZIP code
  - latitude: The user's latitude
  - longitude: The user's longitude
- Returns the added user as a JSON object.

## Delete User by Username

### 'DELETE /delete'

- Deletes the first user in the list from the data store.
- If there are no users in the list, returns a message indicating that there are no users to delete.
- If a user is deleted, it returns the deleted user as a JSON object.

## Data Store

- The application uses **`lowdb`** as a lightweight JSON database.
- The data store is initialized with a **`users`** collection, which is an empty array by default.
- The users are stored as JSON objects with the following properties:
  - name
  - dob
  - email
  - username
  - password
  - phone
  - streetaddress
  - citystatezip
  - latitude
  - longitude
  - avatar: A randomly generated avatar URL using the **`@faker-js/faker`** package.

### 'POST /add '

- Adds a new user to the data store.
- The request body should include the following fields:
  - name: The user's name
  - dob: The user's date of birth
  - email: The user's email address
  - username: The user's username
  - password: The user's password
  - phone: The user's phone number
  - streetaddress: The user's street address
  - citystatezip: The user's city, state, and ZIP code
  - latitude: The user's latitude
  - longitude: The user's longitude
- Returns the added user as a JSON object.

## Delete User by Username

### 'DELETE /delete'

- Deletes the first user in the list from the data store.
- If there are no users in the list, returns a message indicating that there are no users to delete.
- If a user is deleted, it returns the deleted user as a JSON object.

## Data Store

- The application uses **`lowdb`** as a lightweight JSON database.
- The data store is initialized with a **`users`** collection, which is an empty array by default.
- The users are stored as JSON objects with the following properties:
  - name
  - dob
  - email
  - username
  - password
  - phone
  - streetaddress
  - citystatezip
  - latitude
  - longitude
  - avatar: A randomly generated avatar URL using the **`@faker-js/faker`** package.

## Static Files

- The server serves static files from the **`public`** directory.
- Any files placed in the **`public`** directory can be accessed via the server's URL.
