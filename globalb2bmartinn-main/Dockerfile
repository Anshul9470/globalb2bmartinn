#React app image
FROM node:lts-alpine as build

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run build


aws s3 cp --profile globalb2b build/* s3://glob2bmart.cloud --recursive