# Day 1 – Project Foundation & Production Setup

## 🎯 Today's Goal

Set up a scalable Node.js backend architecture that will support the next 26 days of development.

By the end of today you should have:

* Professional folder structure
* Express server running
* MongoDB connected
* Environment variables configured
* Logger
* Error handling
* Async handler
* Base middleware
* API versioning
* Health check endpoint
* Git repository initialized
* Initial README

---

# 🧠 Theory to Learn

Before writing code, understand these concepts:

## 1. MVC Architecture

```
Request

↓

Route

↓

Controller

↓

Service

↓

Repository (optional)

↓

MongoDB

↓

Response
```

Know the responsibility of each layer.

---

## 2. Why Folder Structure Matters

A backend grows very quickly.

A clean structure avoids:

* duplicate code
* huge controllers
* messy imports
* difficult debugging

---

## 3. Environment Variables

Learn

* process.env
* dotenv
* Why secrets should never be committed

---

## 4. Express Request Lifecycle

```
Client

↓

Middleware

↓

Route

↓

Controller

↓

Service

↓

Database

↓

Response

↓

Error Handler (if anything fails)
```

---

## 5. Async Error Handling

Understand why this is bad

```
try
catch
try
catch
try
catch
```

Learn why asyncHandler exists.

---

# 📁 Folder Structure

```
ai-team-platform/

backend/

src/

config/

controllers/

services/

repositories/

models/

routes/

middlewares/

validators/

utils/

constants/

errors/

ai/

cache/

sockets/

jobs/

uploads/

docs/

tests/

app.js

server.js

.env

.env.example

.gitignore

package.json

README.md
```

---

# 📦 Install Packages

Runtime

* express
* mongoose
* dotenv
* cors
* helmet
* morgan
* cookie-parser
* compression

Development

* nodemon

---

# 📁 Build Today

## config

Create

```
db.js
env.js
```

Purpose

Database connection and environment configuration.

---

## middlewares

Create

```
error.middleware.js

notFound.middleware.js
```

Purpose

Centralized error handling.

---

## utils

Create

```
ApiResponse.js

ApiError.js

asyncHandler.js

logger.js
```

Purpose

Reusable utilities.

---

## routes

Create

```
health.routes.js
```

---

## controllers

Create

```
health.controller.js
```

---

# 🌐 Routes to Build

GET

```
/api/v1/health
```

Response

```
{
  success: true,
  message: "Server Running"
}
```

---

# Middleware Order

```
helmet

↓

cors

↓

compression

↓

express.json()

↓

cookieParser()

↓

logger

↓

routes

↓

404 middleware

↓

error middleware
```

---

# 📄 Environment Variables

```
PORT=

MONGODB_URI=

NODE_ENV=

JWT_SECRET=

JWT_REFRESH_SECRET=
```

Values can be placeholders today.

---

# 🧪 Test

Check

* server starts
* mongodb connects
* health endpoint works
* invalid route returns 404
* server doesn't crash

---

# 📚 Homework

Read about

* Express middleware
* Request lifecycle
* MVC
* dotenv
* helmet
* cors

Maximum reading time

45 minutes

Everything else should be coding.

---

# 🎤 Interview Questions

1. What is middleware?

2. Why use dotenv?

3. Difference between app.use() and app.get()?

4. Why centralize error handling?

5. What is MVC?

6. Why shouldn't controllers contain business logic?

---

# ⚠️ Common Mistakes

❌ Huge controllers

❌ Hardcoded secrets

❌ No error middleware

❌ Database logic inside routes

❌ Random folder names

---

# 📌 Git Commit

```
git commit -m "Day 1: Project architecture and production setup"
```

---

# ✅ Day Completion Checklist

* [x] Folder structure created
* [x] Express server running
* [x] MongoDB connected
* [x] Health route works
* [x] Logger added
* [x] Error middleware added
* [x] Async handler created
* [ ] API response utility created
* [ ] Git commit done
* [ ] README updated
