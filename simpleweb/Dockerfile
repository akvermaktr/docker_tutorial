#specify a fiase image 
FROM node:alpine

#RUN apk add --update node
#RUN apk add --update npm
WORKDIR /usr/app

COPY ./ ./
RUN npm install 

#EXPOSE 8080
CMD ["npm" , "start"]

