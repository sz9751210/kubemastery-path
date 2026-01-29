FROM node:20-slim

# Install build dependencies for node-pty
RUN apt-get update && apt-get install -y python3 make g++

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 4000

CMD ["npm", "start"]
