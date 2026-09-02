# CareerForge – Backend API

## 📌 Project Description

CareerForge is a backend REST API developed as part of Project 2 of the DecodeLabs Full Stack Development Industrial Training.

The API provides backend functionality for managing:

- Career opportunities
- Internship opportunities
- Student applications

The project demonstrates backend development, REST API concepts, server-side logic, JSON request/response handling, input validation, and HTTP status codes.

## 🚀 Technologies Used

- Node.js
- Express.js
- REST API
- JavaScript
- JSON
- Postman

## 📂 Project Structure

```text
CAREERFORGE_PROJECT2/

│
├── routes/
│   ├── careers.js
│   ├── internships.js
│   └── applications.js
│
├── .gitignore
├── package.json
├── package-lock.json
├── server.js
└── README.md
```

## ⚙️ How to Run

### 1. Install Dependencies

Open the terminal inside the project folder and run:

```bash
npm install
```

### 2. Start the Server

```bash
npm start
```

The server will run at:

```text
http://localhost:5000
```

## 🔗 API Endpoints

### Health Check

```text
GET /api/health
```

### Careers

```text
GET    /api/careers
GET    /api/careers/:id
POST   /api/careers
PUT    /api/careers/:id
DELETE /api/careers/:id
```

### Internships

```text
GET    /api/internships
GET    /api/internships/:id
POST   /api/internships
PUT    /api/internships/:id
DELETE /api/internships/:id
```

### Applications

```text
GET    /api/applications
GET    /api/applications/:id
POST   /api/applications
PUT    /api/applications/:id
DELETE /api/applications/:id
```

## 🧪 API Testing

The API endpoints were tested using Postman.

The following operations were tested:

- GET requests
- POST requests
- PUT requests
- DELETE requests
- Input validation
- 404 error handling
- HTTP status codes

## 🎯 Project Requirements

This project demonstrates:

- Backend API development
- REST API concepts
- Handling user input and responses
- Basic data validation
- Server-side logic
- HTTP status codes

## 👨‍💻 Project Information

**Project:** CareerForge – Backend API

**Training:** DecodeLabs Full Stack Development Industrial Training
