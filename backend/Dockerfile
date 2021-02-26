FROM node:14-alpine

# sqlite3 dependency
RUN apk add --update sqlite

# Set the working directory to /app
WORKDIR /app

# Copy the common directory contents into the container at /common
COPY common common/

# Set the working directory to /backend
WORKDIR /app/backend

# Copy the current directory contents into the container at /backend
COPY backend .

# copy package.json into the container at /backend
COPY backend/package.json .

# install dependencies
RUN npm install
RUN npm install sqlite3
RUN npm install -g knex

# Make port 80 available to the world outside this container
EXPOSE 8000

# Run the app when the container launches
CMD ["npm", "start"]