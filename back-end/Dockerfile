FROM node:14
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 5000
ENV JWT_SECRET=thisissecretkey
CMD ["npm",  "start"]
