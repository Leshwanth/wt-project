# Node Authentication Backend with JWT and Redis Caching

A production-style **Node.js + Express backend** built with **MongoDB, JWT authentication, Redis caching, and Docker Compose**.

This project provides a complete authentication system with secure password hashing, JWT-based protected routes, user management APIs, and Redis-powered caching for optimized read performance.

## Features

* User Signup & Login APIs
* JWT Authentication Middleware
* Protected User Routes
* Password Hashing with bcrypt
* MongoDB Integration with Mongoose
* Redis Cache (Cache HIT / MISS + TTL + Invalidation)
* Dockerized with Dockerfile
* Full multi-container setup using Docker Compose
* Mongo Express support for DB visualization

## Tech Stack

* Node.js
* Express.js
* MongoDB
* Redis
* Docker
* Docker Compose
* JWT
* bcrypt

## API Endpoints

* `POST /users` → Register new user
* `POST /users/login` → Login and receive JWT
* `GET /users` → Get all users (Protected + Redis Cache)
* `GET /users/:id` → Get single user by ID (Protected)

## Run with Docker Compose

```bash
docker compose -f docker_compose.yaml up -d
```

Services:

* App → `http://localhost:8000`
* Mongo Express → `http://localhost:8081`
* Redis → `localhost:6379`


## Image

`jashwanth18/node-auth-backend:1.0`

This image is ready to be used for local development, container orchestration, and cloud deployment workflows.
