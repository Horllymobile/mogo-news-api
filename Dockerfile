# Stage 1: Build the application
FROM node:20 AS build
WORKDIR /usr/src/app
COPY package.json yarn.lock* ./
RUN yarn install --frozen-lockfile
COPY . .
RUN yarn run build

# Stage 2: Create the production image
FROM node:18-alpine
WORKDIR /usr/src/app
COPY --from=build /usr/src/app/dist ./dist
COPY package.json yarn.lock* ./
RUN yarn install --frozen-lockfile --production

EXPOSE 80
ENV NODE_ENV=production
CMD ["npm", "run", "start:prod"]