# Use the official Node.js LTS version as the base image
FROM node:16

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json (or yarn.lock)
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of your application files
COPY . .

# Build the application
RUN npm run build

# Expose the port on which your application will run (default 3000)
EXPOSE 3000

# Define the command to run your application
CMD ["node", "dist/main"]
