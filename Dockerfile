FROM node

RUN mkdir -p /home/app

WORKDIR /home/app

EXPOSE 5173

CMD ["yarn", "dev"]
