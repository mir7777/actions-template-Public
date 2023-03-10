# 최신 Node.js LTS 버전
FROM node:19.6.0


RUN mkdir -p /app


WORKDIR /app


COPY package*.json /app/


RUN npm install


COPY index.js /app/


EXPOSE 3000

CMD [ "node", "index.js" ]
