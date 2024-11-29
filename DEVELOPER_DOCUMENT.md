# Developer Document

## Table of Contents

1. [Project Overview](#project-overview)
2. [Project Structure](#project-structure)
3. [Setup Instructions](#setup-instructions)

---

## Project Overview

The portfolio is more than just a personal showcase—it's a strategic tool aimed at attracting potential clients and employers by offering a thorough and well-structured representation of Hiren's technical knowledge, problem-solving skills, and readiness for professional opportunities. Through this platform, Hiren aims to demonstrate that, despite being a fresher, he possesses the necessary skills, understanding, and dedication to thrive in the tech industry.

## Project Structure

```
hiren.409/
├── Backend/
│   ├── .env
│   ├── .gitignore
│   ├── index.js
│   ├── db.js
│   ├── package.json
│   ├── middleware/
│   │   └── ...
│   ├── models/
│   │   └── ...
│   ├── routes/
│   │   └── ...
├── Frontend/
│   ├── .env
│   ├── .gitignore
│   ├── index.html
│   ├── package.json
│   ├── tailwind.config.js
│   ├── vite.config.js
│   ├── postcss.config.js
│   ├── eslint.config.js
│   ├── dist/
│   │   └── ...
│   ├── Resources/
│   │   └── ...
│   ├── src/
│   │   ├── App.jsx
│   │   ├── index.css
│   │   ├── main.jsx
│   │   ├── AnimationComponents/
│   │   │   └── ...
│   │   ├── Components/
│   │   │   └── ...
├── .gitignore
├── README.md
└── LICENSE

```

## Setup Instructions

### 1. Clone the Repository

Start by cloning the repository to your local machine:

```bash
git clone https://github.com/hirenGajjar/hiren.409
cd hiren.409
```

### 2. Install Backend Dependencies

The Backend is built using Node.js, so you will need to install the required dependencies first.

Navigate to the Backend directory:

```bash
cd Backend
```

Install the backend dependencies using npm:

```bash
npm i
```

Open .env and update the necessary variables, such as database URL, port, and any other configuration details required for your local environment.

Start the backend server:

```bash
nodemon index.js
```

This will start the backend server, which will usually be running on http://localhost:5000 (or the port specified in .env).

### 3. Install Frontend Dependencies

Now, move to the Frontend directory and install its dependencies.

Navigate to the Frontend directory:

```bash
cd ..
cd Frontend
```

Install the frontend dependencies using npm:

```bash
npm i
```

Open .env and update the necessary variables, such as database URL, port, and any other configuration details required for your local environment.

### Build and run the frontend

```bash
npm run dev
```

This will start the frontend application in development mode, typically accessible at http://localhost:3000 (or the port specified in .env).

### Access the Application

Backend: Once the backend server is running, you can test its API endpoints by sending requests to http://localhost:5000 (or the URL specified in your .env).

Frontend: Once the frontend server is running, open your browser and go to http://localhost:3000 to see the live project.
