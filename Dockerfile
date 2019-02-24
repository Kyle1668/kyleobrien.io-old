FROM node:9-alpine
LABEL maintainer="kyledevinobrien1@gmail.com"
COPY . /portfolio/
WORKDIR /portfolio/
EXPOSE 80 3000
RUN npm install
CMD ["npm", "start"]