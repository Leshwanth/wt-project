# 🛒 Amazon Clone (Full Stack Authentication App)

A basic full-stack web application that simulates an Amazon-style UI with user authentication.

This project demonstrates how to build a secure login/signup system using modern web technologies like **HTML, CSS, JavaScript, Node.js, Express, MongoDB, and JWT authentication**.

---

## 🚀 Features

* 🔐 User Signup (Register new users)
* 🔑 User Login with JWT Authentication
* 🔒 Protected Routes (Only logged-in users can access homepage)
* 👤 Display logged-in username in UI
* 🚪 Logout functionality
* 🧠 Password hashing using bcrypt
* 🌐 REST API using Express.js
* 🗄️ MongoDB database integration

---

## 🛠️ Tech Stack

### Frontend:

* HTML5
* CSS3
* JavaScript (Vanilla JS)

### Backend:

* Node.js
* Express.js

### Database:

* MongoDB (Mongoose)

### Authentication:

* JSON Web Token (JWT)
* bcrypt (Password hashing)

---

## 📁 Project Structure

```
Amazon-Clone/
│
├── backend/
│   ├── controllers/
│   │   └── users.js
│   ├── models/
│   │   └── user.js
│   ├── routes/
│   │   └── users.js
│   ├── middleware.js
│   ├── app.js
│   ├── .env
│
├── index.html
├── login.html
├── signup.html
├── style.css
├── script.js
```

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the repository

```
git clone https://github.com/your-username/amazon-clone.git
cd amazon-clone
```

---

### 2️⃣ Install backend dependencies

```
cd backend
npm install
```

---

### 3️⃣ Configure Environment Variables

Create a `.env` file inside the `backend` folder:

```
MONGO_URL=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=8000
```

---

### 4️⃣ Start the backend server

```
node app.js
```

You should see:

```
Connected to DataBase
Server is listening on PORT 8000
```

---

### 5️⃣ Run frontend

Open `login.html` using:

* VS Code Live Server (Recommended)
  OR
* Any local server

---

## 🔄 Application Flow

1. User signs up → Data stored in MongoDB
2. User logs in → JWT token generated
3. Token stored in localStorage
4. User redirected to homepage (`index.html`)
5. Protected page checks token
6. Logout removes token and redirects to login

---

## 🔐 Authentication Flow

* Passwords are securely hashed using bcrypt
* JWT token is generated on login
* Token is verified for protected routes
* Unauthorized users are redirected to login page

---

## 📸 Screens (Optional)

* Login Page
* Signup Page
* Homepage (Amazon UI Clone)

---

## 🧪 API Endpoints

| Method | Endpoint      | Description                |
| ------ | ------------- | -------------------------- |
| POST   | /users/signup | Register user              |
| POST   | /users/login  | Login user                 |
| GET    | /users        | Get all users (Protected)  |
| GET    | /users/:id    | Get user by ID (Protected) |

---

## 🚀 Future Improvements

* Add React or Next.js frontend
* Implement refresh tokens
* Add cart and product APIs
* Improve UI/UX
* Add role-based authentication
* Deploy on cloud (Render / Vercel / MongoDB Atlas)

---



