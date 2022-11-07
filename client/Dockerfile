# to build this image: docker build -t client-server .
# start up container: docker run -it --name my-client-server -p 3000:3000 client-server

# pull basic node image from docker hub (alpine is a scaled down image for size)
# this image includes node and npm ready to use
FROM node:14.15.3-alpine

# Working directory be app
WORKDIR /usr/app/client

COPY package*.json ./

# Install dependencies
RUN npm install

# copy local files to app folder
COPY . .

EXPOSE 3000

CMD ["npm","start"]