FROM node:18.12.1-alpine

LABEL service="Waste Bank Recommender System - Backend"

ARG DATABASE_URL

WORKDIR /app

ADD . .

ENV DATABASE_URL=${DATABASE_URL}

RUN npm ci --omit=dev

RUN npm run migrate

RUN npm run build

CMD npm run start