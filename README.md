# AnswersAi Backend Service

This repository contains the backend service for AnswersAi, a question-answering platform. This service is built on Node.js and Express.js and provides RESTful APIs for handling user questions, user authentication, and database interactions.

## Setup Instructions

### Pre-requisites
- Node.js (v14 or higher)
- MySQL database
- Docker (if deploying with Docker)
- Knex

### Installation

1. Clone this repository to your local machine:
   - git clone https://github.com/PrinceGarg10/Prince-Garg-AnswersAi-Backend..git

2. Navigate to the project directory:
   -cd <project-directory>
   
3. Install dependencies:
    - `npm install or yarn`
  
### Environment Variables

Copy the contents of the `.env.example` file to create a `.env` file in the root directory. Then, fill in the variables with appropriate values.


Replace `<your-chat-gpt-api-key>` and `<your-lang-chain-api-key>` with your actual API keys.

### Database Setup

1. Create a MySQL database with the provided credentials (`MYSQL_USERNAME`, `MYSQL_PASSWORD`, `MYSQL_DATABASE`, `MYSQL_PORT`, `MYSQL_HOST`).

2. Run database migrations to create necessary tables:
   - `npm run migrate:make <migrate name>`
   
3. To apply the latest migrations to the database, run:
   - `npm run migrate:latest`



## Running the Server

To start the server, run:
  - `npm start or yarn start`


The server will start on the specified port (default is 3000).

## API Endpoints

- **POST ${API_PREFIX}questions**: Accept user question and return AI-generated answer.
- **GET ${API_PREFIX}questions/:questionId**: Retrieve specific question and answer by question ID.
- **POST ${API_PREFIX}users**: Create a new user account.
- **GET ${API_PREFIX}users/:userId**: Retrieve a user profile with a given userId.
- **GET ${API_PREFIX}users/:userId/questions**: Retrieve all questions asked by user with a given userId.

- **POST ${API_PREFIX}auth/login**: User login endpoint.
- **POST ${API_PREFIX}auth/logout**: User logout endpoint.
- **POST ${API_PREFIX}auth/refresh**: Refresh access token endpoint.

## Testing
You can run unit tests using:
  - npm test or yarn test


## Docker
To containerize the application using Docker, you can use the provided Dockerfile. Ensure that Docker is installed on your system, and then build the Docker image:
- `docker build -t answersai-backend .`

After building the image, you can run a container:
  - `docker run -p 3000:3000 answersai-backend`

Replace `3000:3000` with the desired host and container port if needed.





