FROM node:lts-alpine AS builder

LABEL project="kyleobrien.io"
LABEL maintainer="kyledevinobrien1@gmail.com"
LABEL version="1.0.0"

WORKDIR /source/kyleobrien.io

COPY ./ ./

RUN apk add --no-cache --virtual .build-deps g++ python3-dev libffi-dev openssl-dev && \
    apk add --no-cache --update python3 && \
    pip3 install --upgrade pip setuptools

RUN npm install && \
    npm run build

FROM php:rc-apache

WORKDIR /var/www/html/

COPY --from=builder /source/kyleobrien.io .

ENV PORT = 80
EXPOSE 80

RUN a2enmod rewrite