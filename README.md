# Test Task Backend Node.js

A Node.js application that provides a Car Management System with user signup, login, and CRUD (Create, Read, Update, Delete) functionality for car categories and cars.

- **Node.js:**
  - A free open-source, cross-platform runtime environment for developing server-side and networking applications.
  - Runs on various platforms (Windows, Linux, Mac OS, etc.) and uses JavaScript on the server.
  - Embedded in C++ and compiles JavaScript using Google's V8 engine.
  - Utilizes asynchronous programming.


- **Express.js:**
  - A Node.js web framework known for its simplicity.
  - Offers easy-to-use routing and simple support for view engines.

## Project Structure

- **Public Folder:**
  - Accessible to people connecting to your application.
  - Contains an `images` folder.

- **Routes Folder:**
  - Contains modules such as AUTH, category, and car.
  - Includes files for authentication, category operations, car operations, etc.

- **Middleware Folder:**
  - Includes a `validator.js` file.
  - Uses middleware functions to manage the application’s request-response lifecycle.
  - Middleware functions have access to the request object (req), the response object (res), and the next middleware function.
  - 
- **Controllers Folder:**
  
  - Includes all the auth, category CRDU, and the Car CRUD logic
  
- **Utils Folder:**
  - Contains reusable functions.

## Running the Project

To run the project, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Ramzan-Ali12/backend_node.js.git
2. **Install dependencies:**
   ```bash
   npm install
4. **Set up your MongoDB database:**

   Ensure you have a MongoDB database set up. You can create a free account on MongoDB Atlas for cloud-based MongoDB or install MongoDB locally.

5. **Configure environment variables:**

   Create a .env file in the root directory of your project and add the following variables

6. **Create a .env file:**

- PORT=your_port
   
- DOMAIN=your_domain
   
- BACKEND_DOMAIN=your_backend_domain
   
- MONGO_URI=your_mongodb_connection_uri
   
- JWT_KEY=your_jwt_key
   
- ADMIN_EMAIL=your_admin_email
   
- EMAIL_USER=your_email_account_for_sending_welcome_emails
   
- EMAIL_PASSWORD=your_email_account_password

7. **Run the application:**
   ```bash
   npm start
# Features
- User Signup API:

Allows users to sign up with their details.
Sends a welcome email to the user.
- User Login API:

Enables users to log in using their credentials.
- Car Categories CRUD API:

Allows the creation, retrieval, updating, and deletion of car categories (e.g., Bus, Sedan, SUV, Hatchback).

- Cars CRUD API:
  
Users can select a category for their cars.
Cars have additional details such as color, model, make, and registration number.
# Contributing

Contributions are welcome! Please follow the Contribution Guidelines.

# License
This project is licensed under the MIT License.
