
#instruções para criar imagens
FROM node:14.15.4-alpine3.12

RUN apk add --no-cache bash

RUN npm install -g @nestjs/cli

USER node

WORKDIR /home/node/app

#instrucões a ser secutado quando contaniner é criado e entra em execução



