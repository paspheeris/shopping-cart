FROM node:12-alpine

# Set the working directory to /app
WORKDIR /app

# Copy the common directory contents into the container at /common
COPY common common/

# Set the working directory to /app/frontend
WORKDIR /app/frontend

# Copy the current directory contents into the container at /frontend
COPY frontend .

# copy package.json into the container at /frontend
COPY frontend/package.json .

# install dependencies
RUN npm install

# Make port 3000 available to the world outside this container
EXPOSE 3000

# Run the app when the container launches
CMD ["npm", "start"]