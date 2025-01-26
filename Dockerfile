# Use Node.js base image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the app's files
COPY . .

# Expose the port the app runs on
EXPOSE 5000

# Start the app
CMD ["node", "app.js"]