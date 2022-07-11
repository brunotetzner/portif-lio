FROM node:16.15.0
WORKDIR /app
COPY package*.json ./
RUN yarn 
COPY . . 
CMD ["yarn", "start"]