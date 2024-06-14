# Use the official Node.js image as the base image
FROM node:14-alpine

# Set the working directory in the container
WORKDIR /

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy  root directory to the working directory
COPY . .

# Expose the port on which your Express app runs
EXPOSE 3000

# Command to run the server
CMD ["node", "server.js"]
