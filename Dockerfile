FROM node:lts-alpine

RUN mkdir /home/app
WORKDIR /home/app

COPY test-task/ .

RUN npm cache clean --force
RUN npm install

CMD ["npm", "run", "dev"]
