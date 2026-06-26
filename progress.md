# AI Team Collaboration Platform - Progress Tracker

> **Duration:** 27 Days Summer Backend Bootcamp
>
> **Goal:** Build a production-ready AI-powered Team Collaboration Platform while mastering modern backend development.

---

# 🚀 Tech Stack

## Backend

* Node.js
* Express.js
* MongoDB
* Mongoose

## Authentication

* JWT
* Refresh Tokens
* Cookies

## Caching

* Redis

## Real-time

* Socket.IO

## AI

* OpenAI API

## Storage

* Cloudinary / AWS S3

## DevOps

* Docker
* Docker Compose
* GitHub Actions
* CI/CD

---

# 🎯 Learning Goals

* Build production-grade REST APIs
* Learn backend architecture
* Write clean, maintainable code
* Implement authentication & authorization
* Add caching with Redis
* Build real-time features
* Integrate AI APIs
* Containerize applications
* Deploy using CI/CD
* Practice production best practices

---

# 📅 26-Day Practical Learning Roadmap (June 24 – July 19)

> **Daily Learning Goal:** 1.5 Hours max. The topics are scoped for step-by-step learning of database schemas, controller-service logic, and robust error handling without the pressure of complex setups (like Redis, Socket.IO, or Docker).

| Day & Date | Topic & Learning Focus | Target Implementation | Status |
| :--- | :--- | :--- | :---: |
| ✅ **Day 1** (June 24) | Project Architecture & Production Setup | Express Server, Logger & Health Endpoint | ✅ |
| ✅ **Day 2** (June 25) | User Model & Basic Registration API | User Schema & `bcrypt` Password Hashing | ✅ |
| ✅ **Day 3** (June 26) | JWT Token Basics & Login API | Issue JWT Access Tokens, Error handling on wrong password | ✅ |
| ⬜ **Day 4** (June 27) | Cookie Storage & Authentication Middleware | Implement `auth.middleware.js` to protect user routes | ⬜ |
| ⬜ **Day 5** (June 28) | Refresh Token Rotation | Endpoints to refresh expired tokens, handle token expiry errors | ⬜ |
| ⬜ **Day 6** (June 29) | Role-Based Access Control (RBAC) | Role fields (`Admin`, `Member`), authorization middleware | ⬜ |
| ⬜ **Day 7** (June 30) | **Auth Review & Error-Handling Practice** | Play with routes using Postman, practice `throw` vs `next` | ⬜ |
| ⬜ **Day 8** (July 1) | Team Schema & Organization API | Design Team Model, handle unique validation errors | ⬜ |
| ⬜ **Day 9** (July 2) | Team Membership Management | Add/Remove members, check if user exists, throw 404/400 errors | ⬜ |
| ⬜ **Day 10** (July 3) | Project Schema & Creation Logic | Design Project Model, check if creator is part of the Team | ⬜ |
| ⬜ **Day 11** (July 4) | Project CRUD & Member Access Controls | Edit/Delete project endpoints, handle authorization errors | ⬜ |
| ⬜ **Day 12** (July 5) | Task Schema & Basic Creation | Design Task model, validate required fields using Mongoose | ⬜ |
| ⬜ **Day 13** (July 6) | Task Assignment & Enum Validations | Assign task to team member, validate status enums | ⬜ |
| ⬜ **Day 14** (July 7) | Comments Schema & CRUD under Tasks | Add/Delete comments, handle error for non-existent tasks | ⬜ |
| ⬜ **Day 15** (July 8) | Mongoose Pre/Post Hook Activity Logs | Automatically log actions when projects/tasks are saved | ⬜ |
| ⬜ **Day 16** (July 9) | Mongoose Validation Error Interceptor | Map database validation errors to clean client error responses | ⬜ |
| ⬜ **Day 17** (July 10) | Request Body Validation Middleware | Use `express-validator` or `joi` to validate body schemas | ⬜ |
| ⬜ **Day 18** (July 11) | **Refactoring to Service-Repository Pattern** | Reorganize project CRUD logic to master architectural patterns | ⬜ |
| ⬜ **Day 19** (July 12) | Local File Uploads (Multer Setup) | Configure Multer, upload locally, handle file size/type errors | ⬜ |
| ⬜ **Day 20** (July 13) | Cloud Storage Uploads (Cloudinary) | Send files to Cloudinary, handle network/API upload errors | ⬜ |
| ⬜ **Day 21** (July 14) | Simple AI API Integration | Simple summary service calling AI, handle timeouts/failures | ⬜ |
| ⬜ **Day 22** (July 15) | Production Logger Integration (Winston) | Setup error file logging, format timestamped logs | ⬜ |
| ⬜ **Day 23** (July 16) | Automated Testing Setup (Jest) | Configure Jest environment, write first Service unit test | ⬜ |
| ⬜ **Day 24** (July 17) | API Integration Testing (Supertest) | Write tests for login endpoint (success and error pathways) | ⬜ |
| ⬜ **Day 25** (July 18) | Deployment Setup & Atlas MongoDB | Setup free cluster on Atlas, prepare environment variables | ⬜ |
| ⬜ **Day 26** (July 19) | Production Deployment & Final Live Test | Deploy API to Render, run end-to-end tests, release! | ⬜ |

---

# ✅ Completed Days

---

## Day 1 — Project Foundation & Production Setup

### Concepts Learned

* Express project structure
* MVC Architecture
* Request lifecycle
* Environment variables
* Async error handling
* API versioning
* Centralized error handling
* Logging
* Health check endpoint

### Folder Structure

* config/
* controllers/
* services/
* repositories/
* models/
* routes/
* middlewares/
* validators/
* utils/
* constants/
* errors/
* ai/
* cache/
* sockets/
* jobs/
* uploads/
* tests/

### Packages Used

Runtime

* express
* mongoose
* dotenv
* cors
* helmet
* compression
* cookie-parser
* morgan

Development

* nodemon

### Features Built

* Express Server
* MongoDB Connection
* Health Check API
* API Versioning
* Error Middleware
* 404 Middleware
* Async Handler
* Logger Utility
* ApiResponse Utility
* ApiError Utility

### Routes

GET /api/v1/health

### Outcome

✅ Production-ready backend foundation completed.

---

# 📌 Git Commit History

| Day    | Commit                                    |
| ------ | ----------------------------------------- |
| Day 1  | Project architecture and production setup |
| Day 2  |  User model and registration API          |
| Day 3  | jwt token generation and wrong password error handling |
| Day 4  |                                           |
| Day 5  |                                           |
| Day 6  |                                           |
| Day 7  |                                           |
| Day 8  |                                           |
| Day 9  |                                           |
| Day 10 |                                           |
| Day 11 |                                           |
| Day 12 |                                           |
| Day 13 |                                           |
| Day 14 |                                           |
| Day 15 |                                           |
| Day 16 |                                           |
| Day 17 |                                           |
| Day 18 |                                           |
| Day 19 |                                           |
| Day 20 |                                           |
| Day 21 |                                           |
| Day 22 |                                           |
| Day 23 |                                           |
| Day 24 |                                           |
| Day 25 |                                           |
| Day 26 |                                           |
| Day 27 |                                           |

---

# 📈 Current Progress

```text
████░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ 3 / 26 Days (7.7%)
```

---

# 🏁 Final Goal

By the end of this bootcamp, this project will include:

*   ✅ **Authentication** (JWT + Refresh Tokens + Secure Cookie flow)
*   ✅ **Role-Based Access Control** (RBAC - Admin vs Member route restriction)
*   ✅ **Teams** (Creation, Membership Management CRUD)
*   ✅ **Projects** (Team-based projects, owner/editor access controls)
*   ✅ **Tasks** (Creation, Assignment, Status Updates, validations)
*   ✅ **Comments** (Task comments thread CRUD)
*   ✅ **Activity Logs** (Auto-logged updates using database pre/post save hooks)
*   ✅ **Robust Global Error Handler** (Custom ApiError class, Mongoose database validation interceptor)
*   ✅ **Request validation pipeline** (enforcing client payload constraints)
*   ✅ **File Upload** (Multer local upload + Cloudinary production setup)
*   ✅ **Simple AI Integration** (summarizing task activity logs to keep team aligned)
*   ✅ **Winston Production Logging** (monitoring error files)
*   ✅ **Automated Testing** (Unit tests for services + API integration tests for handlers)
*   ✅ **Live Deployment** (Render hosting + Atlas MongoDB cluster setup)
*   ✅ **MVC & Service-Repository Design Patterns** (clean separation of concerns)

---

> **Rule:** Every day ends with:
>
> * One Git commit
> * README/PROGRESS update
> * Code review
> * Lessons learned
> * Ready for the next day 🚀

---

# 🎓 Masterclass: Error Handling & Design Patterns in Express

## 1. Express Error Handling: `throw` vs `next`

In Express, how errors are caught depends entirely on whether the code is **synchronous** or **asynchronous**.

### A. Synchronous Code: `throw` is OK
If an error is thrown inside a synchronous route handler, Express catches it automatically and forwards it to the global error middleware.
```javascript
app.get('/sync-route', (req, res) => {
    // Express catches this throw automatically
    throw new Error("Something went wrong!");
});
```

### B. Asynchronous Code: `throw` CRASHES the server!
If an error is thrown inside an asynchronous block (e.g. database query, bcrypt hash, fetch), Express **cannot** catch it. The Promise rejects, and it causes an `UnhandledPromiseRejection` which can crash the server!
```javascript
app.get('/async-route', async (req, res) => {
    // ❌ THIS WILL CRASH THE SERVER!
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
        throw new Error("User not found!");
    }
});
```
To fix this, you **must** catch the error and pass it to Express using the `next()` function:
```javascript
app.get('/async-route', async (req, res, next) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        if (!user) {
            throw new Error("User not found!"); // Synchronous-looking throw inside try block
        }
    } catch (err) {
        next(err); // ✅ Correct! Express forwards this to the error middleware
    }
});
```

---

## 2. The Magic of `asyncHandler`

Writing `try/catch` and calling `next(err)` in every single controller endpoint is repetitive and messy. The `asyncHandler` utility solves this.

### How it is written (`utils/asyncHandler.js`):
```javascript
const asyncHandler = (fn) => {
    return (req, res, next) => {
        Promise.resolve(fn(req, res, next)).catch(next);
    };
};
```
*Note: Your implementation uses a simple `try-catch` wrapper which does the exact same thing.*

### How it simplifies your code:
Instead of wrapping every controller method in `try/catch`, you wrap the entire controller function in `asyncHandler` in your router file:
```javascript
// router.js
router.post('/', asyncHandler(createUser));

// controller.js
const createUser = async (req, res) => {
    const { email } = req.body;
    
    // Now you can throw errors directly!
    // Since this function is wrapped by asyncHandler, the thrown error 
    // will be automatically caught by the .catch(next) in the utility.
    const userExists = await User.findOne({ email });
    if (userExists) {
        throw new Error("User already exists!"); // ✅ Caught safely and passed to next()
    }
    
    res.status(201).json({ success: true });
};
```

---

## 3. Global Error Handling Middleware

The global error handler is a special Express middleware that has **4 parameters** instead of 3: `(err, req, res, next)`. Express uses the parameter count to distinguish it from normal middlewares.

### Key Rules:
1.  **Placement:** It must be registered at the very end of `app.js` (after all routes/other middlewares).
2.  **Triggering:** Whenever `next(err)` is called, Express skips all subsequent regular routes and middlewares and jumps directly to this 4-parameter middleware.

```javascript
// middleware/errorHandlermiddleware.js
const errorHandler = (err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    
    res.status(statusCode).json({
        success: false,
        statusCode,
        message
    });
};
```

---

## 🏛️ Central Backend Design Patterns to Memorize

1.  **MVC (Model-View-Controller) Pattern:**
    *   *Model:* Mongoose Schema (`models/user.Model.js`). Defines database shape.
    *   *Controller:* Express handlers (`controllers/user.controller.js`). Extracts request data, calls business logic, returns response.
    *   *Router:* Map URI path to controller (`routes/user.routes.js`).
2.  **Service-Repository Pattern:**
    *   *Controller:* Lean layer that only handles HTTP-level concerns (req/res, status codes).
    *   *Service:* Contains business logic (`services/user.service.js`). Can be reused in CLI scripts, tests, cron jobs.
    *   *Repository:* Database abstraction (calling Mongoose methods like `User.create()`).
3.  **Singleton Pattern:**
    *   Ensures a class has only one instance and provides a global point of access.
    *   Used for: Database Connection, Redis Client, Logger instance.
4.  **Middleware Pattern (Chain of Responsibility):**
    *   Allows requests to be processed by a pipeline of functions sequentially (e.g., Helmet -> Cors -> Morgan -> body-parser -> router -> 404 handler -> Error handler).

---

# 🚀 Post-Bootcamp: Advanced Backend Roadmap

Once you have mastered the first 26 days of backend development, built a solid foundation in MVC/Service architectures, and are comfortable writing robust error handlers and database schemas, you will be ready to tackle **industry-grade advanced backend topics**.

Use the checklist below to guide your future learning when you are ready to level up!

## 🟦 Phase 1: High Performance & Caching (Intermediate)
*   [ ] **Redis Query Caching:** Integrate Redis to cache database queries that rarely change (like project configurations or user lists) to reduce database load.
*   [ ] **Token Blacklisting & Sessions:** Use Redis as a fast key-value store to blacklist logged-out JWT tokens and handle session management.
*   [ ] **Redis Rate Limiting:** Implement sliding-window rate limiters with Redis to protect your APIs against brute-force attacks and DDoS.

## 🟦 Phase 2: Real-Time & Event-Driven Communication (Intermediate)
*   [ ] **WebSockets (Socket.IO):** Add bidirectional sockets to push real-time task updates, instant comments, and online member presence status to the client.
*   [ ] **Event Pub/Sub:** Utilize Node.js built-in EventEmitters to design clean decoupled event structures (e.g. `UserCreatedEvent` automatically sending a welcome email without blocking the registration API).

## 🟪 Phase 3: Database Optimization & Scale (Advanced)
*   [ ] **Mongoose Indexes:** Analyze slow queries and build single-field or compound database indexes to speed up lookups (e.g. indexing `email` or `teamId` and `status`).
*   [ ] **Aggregation Pipelines:** Master Mongoose aggregate functions (`$match`, `$group`, `$lookup`, `$unwind`) to compute statistics like team productivity rates or task completion times.
*   [ ] **Full-Text Search:** Implement fuzzy search capabilities using MongoDB Atlas Search or Elasticsearch to search tasks and comments efficiently.
*   [ ] **Database Replication & Sharding:** Learn how databases handle master-slave replication (read/write separation) and horizontal partitioning (sharding).

## 🟪 Phase 4: Advanced Architecture & Scaling (Advanced)
*   [ ] **Microservices:** Migrate your monolith project into independent services (e.g., Auth Service, Task-Management Service, Notification Service) that talk to each other.
*   [ ] **Message Brokers (RabbitMQ / Apache Kafka):** Implement asynchronous communication between services using message queues to handle heavy background tasks (like bulk email invites).
*   [ ] **API Gateway Pattern:** Configure NGINX, Kong, or a custom Node gateway to route incoming requests, handle SSL termination, and act as a reverse proxy.

## 🟧 Phase 5: DevOps, Infrastructure & CI/CD (Advanced)
*   [ ] **Docker Containerization:** Dockerize your backend application using multi-stage builds to optimize image size.
*   [ ] **Docker Compose:** Coordinate multiple containers locally (Node App container + MongoDB container + Redis container) in a single virtual network.
*   [ ] **CI/CD Pipelines:** Set up GitHub Actions to automatically run your linter and test suite on every pull request, and auto-deploy to production on a successful merge.
*   [ ] **Infrastructure as Code (IaC):** Learn basics of Terraform to manage cloud assets or Kubernetes (K8s) to orchestrate scaling containers.

## 🟧 Phase 6: Monitoring, APM & Production Security (Advanced)
*   [ ] **Application Performance Monitoring (APM):** Integrate Datadog, New Relic, or open-source Prometheus/Grafana to monitor response latency and server CPU/memory usage.
*   [ ] **Alerting & Error Tracking:** Connect Sentry to your global error handler to automatically get notified via Slack or email when unhandled errors occur in production.
*   [ ] **Dependency Security Scanning:** Use tools like `npm audit` or Snyk in your CI/CD pipelines to scan and fix vulnerable third-party modules.
