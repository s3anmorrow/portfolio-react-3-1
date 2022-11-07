#  Dockerfile for Node Express Backend api (development) - alpine is a popular lightweight image
FROM node:14.15.3-alpine

# Create App Directory
RUN mkdir -p /usr/app/api
WORKDIR /usr/app/api

# Install Dependencies
COPY package*.json ./

RUN npm install

# Copy app source code
COPY . .

# Exports
EXPOSE 80

CMD ["npm","start"]