FROM node:14.18-alpine as build

WORKDIR /usr/app

COPY package*.json .
COPY ./tsconfig.json .

RUN npm install

COPY ./src ./src
RUN npx tsc --watch false

################################

FROM node:14.18-alpine 

WORKDIR /usr/app

COPY --from=build /usr/app/package*.json ./
COPY --from=build /usr/app/build ./

RUN npm install --only=production

CMD ["node", "server.js"] 