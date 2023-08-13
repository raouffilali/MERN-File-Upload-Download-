# File Upload and Download MERN Stack Project

This is a simple MERN stack project that demonstrates file upload and download functionality. It includes both frontend and backend code to handle uploading and downloading files.

## Features

- Upload files to the server.
- Store file information in MongoDB.
- Display a list of uploaded files with download links.
- Download uploaded files from the server.

## Technologies Used

- MongoDB for database storage.
- Express.js for the backend server.
- React.js for the frontend.
- Axios for making HTTP requests.
- Multer for handling file uploads.
- CORS for enabling cross-origin resource sharing.
- TypeScript for typing the frontend and backend.

## Project Structure

- `backend/` contains the backend server code.
  - `index.ts` sets up the server and routes.
  - `upload.ts` handles file uploads, downloads, and MongoDB integration.
  - `models/File.ts` defines the MongoDB schema for file information.

- `frontend/` contains the frontend code.
  - `src/App.tsx` displays the file upload and download components.
  - `src/App.css` provides basic styling for the frontend.

## Installation and Usage

1. Clone the repository:
   git clone <repository_url>

2. Install dependencies for both the frontend and backend:

```bash
# Install frontend dependencies
cd frontend
npm install

# Install backend dependencies
cd ../backend
npm install

# Start the backend server (from the backend directory)
npm start

# Start the frontend development server (from the frontend directory)
npm start

```
3.   Access the application in your browser at http://localhost:3000.

## Notes
Make sure to configure your MongoDB connection settings in backend/src/upload.ts.
Customize and style the frontend further as needed.
This is a simple example project; additional features and error handling can be added for production use.
Feel free to explore, modify, and build upon this project as you see fit. Happy coding!
