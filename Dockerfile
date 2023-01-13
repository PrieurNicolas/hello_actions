FROM node:18-alpine

WORKDIR /projets/demo1/nico/hello_actions
COPY ./ /projets/demo1/nico/hello_actions

RUN touch .env
RUN ls -a

RUN npm install

RUN npm run build

RUN --mount=type=secret,id=MY_SECRET,dst=/.env

EXPOSE 3009

CMD ["npm", "run", "start"]