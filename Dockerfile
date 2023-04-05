FROM node:alpine
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
ENV REACT_APP_API_URL=https://localhost:7003/
COPY package.json ./
COPY package-lock.json ./
RUN npm install --silent
COPY . .
EXPOSE 3000
CMD ["npm", "start"]
