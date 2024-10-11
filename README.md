# To-Do App

Welcome to the To-Do App! This is a full-stack application designed to help you manage your tasks efficiently. Built with React on the frontend and Express on the backend, this app utilizes Zod for input validation, Mongoose for connecting to MongoDB, and MongoDB as the database for persistent data storage.


## Table of Contents

* Features
* Technologies
* Getting Started
* Usage
* Issues
* Contributing
* License


## Features

* Create To-Do Items: Users can input a title and description to create new tasks.
* Display To-Do List: The application renders a list of all created To-Do items.
* Input Validation: Zod is used to validate user input, ensuring that all data sent to the backend is correctly formatted.
* Persistent Storage: MongoDB is used to store To-Do items, allowing users to access their tasks even after refreshing the page.


## Technologies

### Frontend
* React: A JavaScript library for building user interfaces. The frontend consists of two main components:
  1. CreateTodo: This component contains input fields for the title and description of a To-Do item. Users can submit their new tasks through this component.
  2. Todos: This component fetches and displays the list of existing To-Do items, providing an overview of all tasks.
* Axios (or Fetch API): These libraries are used to handle HTTP requests from the frontend to the backend.

### Backend
* Express.js: A web application framework for Node.js, used to build the server-side logic of the application.
* Zod: A TypeScript-first schema declaration and validation library. Zod is used to ensure that incoming data for creating and updating To-Do items adheres to the expected structure.
* Mongoose: An ODM (Object Data Modeling) library for MongoDB and Node.js, which provides a straightforward way to model application data.
* MongoDB: A NoSQL database that stores the To-Do items in a flexible, JSON-like format.


## Getting Started

### Prerequisites
To run this application, you need to have the following software installed:
* Node.js: Make sure you have Node.js installed (version 14 or later). You can download it from Node.js official website.
* MongoDB: You should have MongoDB installed and running locally, or you can use a cloud-based MongoDB service like MongoDB Atlas.

### Installation
1. Clone the Repository:

Open your terminal and run the following command to clone the repository:
git clone <repository-url>
cd todo-app
Replace <repository-url> with the actual URL of your Git repository.

2. Set Up the Backend:

Navigate to the backend folder:
cd backend
Install the necessary dependencies by running:
npm install

3. Configure MongoDB:

Ensure that your MongoDB database is running. If you're using a local MongoDB instance, it will typically run on mongodb://localhost:27017. Update the connection string in the backend code if you're using a remote database.

4. Start the Backend Server:

Run the following command to start the backend server:
npm start
The backend server will be accessible at http://localhost:3000.

5. Set Up the Frontend:

Navigate back to the root directory of the project and then into the frontend folder:
cd ../frontend
Install the necessary frontend dependencies:
npm install

6. Start the Frontend Application:

Run the following command to start the frontend application:
npm start
The frontend application will be accessible at http://localhost:3000. It will interact with the backend API running at http://localhost:3000/todos.


## Usage

1. Creating To-Dos:

* Open your web browser and navigate to http://localhost:3000.
* In the input fields labeled "title" and "description," enter the details of your new To-Do item.
* Click the "Add a Todo" button to submit the new task. If the input is valid, it will be saved in the MongoDB database.

2. Viewing To-Dos:

* Upon loading the application, the list of existing To-Do items will be automatically fetched from the backend and displayed on the screen.
* Each To-Do item will show its title and description.


## Issues

1. Infinite Requests to Get Todos:

* Currently, the frontend makes continuous requests to fetch the list of To-Dos. This can lead to performance issues and unnecessary network usage. To resolve this, the application should implement a useEffect hook that fetches the To-Do list only once when the component mounts.

2. Update Todos Not Implemented:

* The application lacks functionality to update existing To-Do items. This feature needs to be implemented to allow users to edit their tasks. Future work should focus on adding an update mechanism in the backend and a corresponding UI in the frontend.


## Contributing

Contributions are highly encouraged! If you find any issues or would like to suggest new features, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Commit your changes and push to your branch.
4. Submit a pull request detailing your changes.


## License

This project is licensed under the MIT License. See the LICENSE file for details.