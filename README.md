# File Uploader 

This project is a simple file uploader built using **Node.js** and **Express**, with **Mongoose** for database interaction and **Multer** for handling file uploads. The project allows users to upload their information (including a name, password, and image), where the password is encrypted using either **CryptoJS** or **bcrypt** (depending on the chosen method) and stored in a MongoDB database.

---

## Table of Contents

- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Setup Environment Variables](#setup-environment-variables)
- [Password Encryption Options](#password-encryption-options)
  - [Using CryptoJS](#using-cryptojs)
  - [Using bcrypt](#using-bcrypt)
- [File Uploading](#file-uploading)
- [Running the Application](#running-the-application)
- [Project Structure](#project-structure)
- [Error Handling](#error-handling)
- [License](#license)

---

## Technologies Used

- **Node.js** – Server-side JavaScript runtime
- **Express** – Web framework for Node.js
- **MongoDB** & **Mongoose** – Database and ODM for MongoDB
- **CryptoJS** – Encryption library for password handling (alternative to bcrypt)
- **bcrypt** – Library for hashing passwords (alternative to CryptoJS)
- **Multer** – Middleware for handling file uploads
- **EJS** – Templating engine for rendering views
- **dotenv** – Manage environment variables

---

## Installation

### Step 1: Clone the repository

```bash
git clone https://github.com/DABHI-PARTH/File_Uploder.git
cd File_Uploader
```

### Step 2: Install dependencies

Run the following command to install the necessary dependencies:

```bash
npm install
```

---

## Setup Environment Variables

Create a `.env` file in the root of the project and set up the required variables. Here's a sample:

```dotenv
KEY=your-secret-key-here
PORT=4000
Url=your-mongo-connection-string-here

```

Replace `your-secret-key-here` with your actual encryption key, and `your-mongo-connection-string-here` with the MongoDB URL.



---

## Password Encryption Options

This project supports two methods for password encryption:

### Using CryptoJS
`CryptoJS` is a simple library that encrypts passwords using a secret key.

```javascript
this.password = crypto.AES.encrypt(this.password, key).toString();
```

### Using bcrypt
`bcrypt` is a hashing library that generates a salted hash of the password.  This will hash the password using bcrypt's `genSalt` and `hash` methods.

```javascript
const salt = await bcrypt.genSalt(10);
this.password = await bcrypt.hash(this.password, salt);
```

---

## File Uploading

This project allows users to upload an image along with their name and password. The password is **encrypted** using either `CryptoJS` or `bcrypt`, depending on the encryption method chosen, and stored securely.

### File Upload Limitations

- **Maximum file size**: 1MB (controlled by Multer)
- **Image Storage**: The uploaded images are stored in the `./Public/images` directory.

---

## Running the Application

1. Make sure you have MongoDB running, either locally or via a cloud service (like MongoDB Atlas).
2. Start the server by running:

```bash
npm start
```

This will launch the server on the port defined in the `.env` file (default is 4000).

### Accessing the Application

You can now access the application by navigating to `http://localhost:4000` in your browser.

---

## Project Structure

The project has the following structure:

```
File_Uploader/
│
├── models/
│   └── userModel.js      # Mongoose model for user data (name, password, image)
│
├── routes/
│   └── userRoutes.js     # Handles the routes for user operations (GET, POST)
│
├── middleware/
│   └── uploadMiddleware.js # Multer setup for file uploading
│
├── views/
│   └── index.ejs         # View for uploading user data
│   └── home.ejs          # View for successful upload
│
├── Public/
│   └── images/           # Folder to store uploaded images
│
├── .env                  # Environment variables (MONGO_URI, KEY, ENCRYPTION_METHOD, etc.)
├── app.js                # Main entry point of the application
├── db.js                 # Database connection setup
├── package.json          # NPM package details
├── README.md             # This file
```

---

## Error Handling

Errors are captured throughout the application, and detailed error messages are logged to the console. Any errors during user data submission or file upload are responded to with an appropriate error message.

### Common Error Codes:

- `500 Internal Server Error`: If something goes wrong while processing the request.
- `400 Bad Request`: If the file exceeds the upload size limit (1MB).

---

#
This update reflects both `CryptoJS` and `bcrypt` as optional encryption methods. 
