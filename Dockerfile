FROM node:14.21.0-alpine3.16 as build-stage

ARG VITE_BASE_URL

WORKDIR /app
COPY . .
RUN npm ci
ENV VITE_BASE_URL=${VITE_BASE_URL}
RUN npm run build

FROM nginx:stable-alpine as production-stage
RUN mkdir /app
COPY --from=build-stage /app/dist /app
COPY nginx.conf /etc/nginx/nginx.conf