# Subscription Tracker API

A backend API built with Node.js, Express, and MongoDB to manage user subscriptions and send automated renewal reminders using Upstash Workflow.

## Features

-   **User Authentication**: Secure sign-up and sign-in using JWT (JSON Web Tokens).
-   **Subscription Management**: Create and manage service subscriptions for authenticated users.
-   **Automated Reminders**: Schedules durable, long-running workflows with Upstash to send email reminders 7, 5, 2, and 1 day(s) before a subscription renewal date.
-   **RESTful API**: Clean, organized, and scalable API structure.
-   **Security**: Includes password hashing with `bcryptjs` and bot protection and rate limiting with `arcjet`.

## Technologies Used

-   **Backend**: Node.js, Express.js
-   **Database**: MongoDB with Mongoose ODM
-   **Authentication**: JSON Web Tokens (`jsonwebtoken`), `bcryptjs`
-   **Workflows**: Upstash Workflow for durable, serverless background tasks.
-   **Date/Time**: `dayjs`
-   **Security**: `arcjet`
-   **Linting**: ESLint

## Prerequisites

-   Node.js (v18 or later recommended)
-   MongoDB
-   An Upstash account for Redis and Workflow.

## Getting Started

### 1. Clone the repository

```bash
git clone <your-repository-url>
cd subscription_tracker
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up Environment Variables

Create a `.env` file in the root of the project by copying the `.env.example` file.

```bash
cp .env.example .env
```

Now, open the `.env` file and fill in your specific configuration details, such as your MongoDB connection string and Upstash credentials.

### 4. Start the server

```bash
npm start
```

The API will be running on `http://localhost:3000`.

## API Endpoints

All endpoints are prefixed with `/api/v1`.

### Authentication (`/auth`)

-   `POST /sign-up`: Register a new user.
    -   **Body**: `{ "name": "John Doe", "email": "john@example.com", "password": "password123" }`
-   `POST /sign-in`: Log in a user and receive a JWT.
    -   **Body**: `{ "email": "john@example.com", "password": "password123" }`
-   `POST /sign-out`: Log out a user.

### Users (`/users`)

-   `GET /`: Get a list of all users.
-   `GET /:id`: Get a specific user by their ID. (Requires authentication)

### Subscriptions (`/subscriptions`)

-   `POST /`: Create a new subscription. (Requires authentication)
    -   **Body**: `{ "name": "Netflix", "price": 15.99, "renewalDate": "2024-12-31" }`
-   `GET /user/:id`: Get all subscriptions for a specific user. (Requires authentication)

### Workflows (`/workflows`)

-   `POST /subscription/reminder`: **Internal endpoint** used by Upstash to execute the reminder workflow. This should not be called directly by clients.

## Project Structure

```
.
├── config/             # Environment variables and service configurations (Upstash)
├── controllers/        # Request handling logic
├── database/           # MongoDB connection logic
├── middlewares/        # Express middleware (auth, error handling, security)
├── models/             # Mongoose schemas and models
├── routes/             # API route definitions
├── utils/              # Utility functions (e.g., email sending)
├── app.js              # Main Express application setup
├── package.json
└── README.md
```