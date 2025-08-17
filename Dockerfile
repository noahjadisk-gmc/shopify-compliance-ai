FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install -g @nestjs/cli && npm install
COPY tsconfig.json ./
COPY src ./src
RUN npm run build
EXPOSE 3001
CMD ["npm","run","start"]
