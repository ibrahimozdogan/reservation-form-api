FROM node:16

WORKDIR /reservation-api

COPY ./package.json .
COPY yarn.lock ./

RUN yarn

COPY . ./

EXPOSE 3333

CMD [ "yarn", "dev" ]
