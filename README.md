<!-- @format -->

# Application \_server 
<a href="https://simple-data-application-server.onrender.com"/>Application Server Demo</a>

This is a simple Node.js HTTP server application built using Express.js and the MERN stack. It provides an API for managing users in a data store and serves static files from the public directory.

## Setup
Clone the repository and navigate to the project directory.
Install the dependencies by running the following command:
```javaScript 
npm install
```
## Configuration
The server listens on the port specified by the PORT environment variable. If the variable is not set, it defaults to port 3000.

## Usage
To start the server, run the following command:
```sql
npm start
```
The server will start running, and you will see a message indicating the port it is listening on port 3000.
open your browser on 
[localhost:3000](http://localhost:3000/)
* The application http_server.js will point to index.html from **`public`** directory.
## Static Files
* The server serves static files from the **`public`** directory.
* Any files placed in the **`public`** directory can be accessed via the server's URL.


# API Endpoints
## Get All Users
 ### 'GET /data '
  * Returns a JSON array of all the users in the data store.

## Add User
 ### 'POST /add '
  * Adds a new user to the data store.
  * The request body should include the following fields:
      * name: The user's name
      * dob: The user's date of birth
      * email: The user's email address
      * username: The user's username
      * password: The user's password
      * phone: The user's phone number
      * streetaddress: The user's street address
      * citystatezip: The user's city, state, and ZIP code
      * latitude: The user's latitude
      * longitude: The user's longitude
* Returns the added user as a JSON object.
## Delete User by Username
### 'DELETE /delete'
* Deletes the first user in the list from the data store.
* If there are no users in the list, returns a message indicating that there are no users to delete.
* If a user is deleted, it returns the deleted user as a JSON object.
## Data Store
* The application uses **`lowdb`** as a lightweight JSON database.
* The data store is initialized with a **`users`** collection, which is an empty array by default.
* The users are stored as JSON objects with the following properties:
    * name
    * dob
    * email
    * username
    * password
    * phone
    * streetaddress
    * citystatezip
    * latitude
    * longitude
    * avatar: A randomly generated avatar URL using the **`@faker-js/faker`** package.

