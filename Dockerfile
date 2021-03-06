FROM node:16.14-alpine

# Create app directory
WORKDIR /usr/src/app

# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY ./build .

EXPOSE 3000

CMD [ "node", "server.js" ]