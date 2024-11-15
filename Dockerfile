FROM node:20.9.0-alpine AS build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .


ARG MODE

ENV MODE=${MODE}

RUN echo "A branch atual é: ${MODE}"

RUN npm run build

FROM node:18-slim AS production

WORKDIR /app

COPY --from=build /app/dist /app/dist

COPY package*.json ./

RUN npm install --production

EXPOSE 3000

CMD ["node", "dist/main"]