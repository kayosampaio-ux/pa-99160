FROM node:22-alpine

WORKDIR /APP

#Instalamos as dependencias primeiro para o dockerfile
COPY package.json .
RUN npm install

#copiamos o resto dos arquivos
COPY . .

# Expõe a porta do vite
EXPOSE 5173

# O '--host é o que permite você ver o site no se'
CMD [ "npm", "run", "dev", "--", "--host"]
