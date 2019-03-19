#specify a fiase image 
FROM node:alpine

#RUN apk add --update node
#RUN apk add --update npm
WORKDIR /app

COPY package.json .  
RUN npm install 
COPY . . 

CMD ["npm" , "start"]

