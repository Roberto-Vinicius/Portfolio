# Estágio de Desenvolvimento / Servidor Astro
FROM node:22-alpine

# Define o diretório de trabalho dentro do container
WORKDIR /app

# Copia os arquivos de definição de dependências
COPY package*.json ./

# Instala as dependências do projeto
RUN npm install

# Copia todo o código-fonte
COPY . .

# Expõe a porta padrão do Astro
EXPOSE 4321

# Define variáveis de ambiente para permitir acesso externo ao host
ENV HOST=0.0.0.0
ENV PORT=4321

# Inicia o servidor de desenvolvimento do Astro ouvindo todas as interfaces de rede
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]
