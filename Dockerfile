FROM node:18


# Set the working directory to /app
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Copy the package*.json files
COPY package*.json ./

# Install app dependencies
RUN npm install --legacy-peer-deps

# Copy the application code
COPY . /usr/src/app

# Creates a "dist" folder with the production build
RUN npm run build


# Make port 80 available to the world outside this container
EXPOSE 80

# Define environment variable
ENV NODE_ENV=production

# Run command to start NestJS application
CMD ["npm", "run", "start:prod"]