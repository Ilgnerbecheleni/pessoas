FROM node:latest

WORKDIR /usr/src/api

# Copie os arquivos do diretório local para o contêiner
COPY . .

# Copie o arquivo de variáveis de ambiente
COPY .env.production .env

# Instale as dependências
RUN npm install --quiet --no-optional --no-fund --loglevel=error

RUN npx prisma migrate dev --name initial
# Execute o comando de construção (ajuste se necessário)
RUN npm run build

# Comando para iniciar o aplicativo em modo de produção
CMD ["npm", "run", "start:prod"]
