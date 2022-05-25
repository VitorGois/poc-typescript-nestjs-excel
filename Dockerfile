# ====================================================
# Build Stage
#
FROM node:16-alpine as build
WORKDIR /build

# Configure registry authentication
ARG NPM_TOKEN
ENV NPM_TOKEN=$NPM_TOKEN

# Copy package manager files
COPY .npmrc package.json pnpm-lock.yaml /build/

# Install dependencies
RUN npm i -g pnpm
RUN pnpm i --frozen-lockfile --ignore-scripts

# Copy source code and build application
COPY . /build/
RUN pnpm build

# ====================================================
# Application Stage
#
FROM node:16-alpine as app
WORKDIR /app
EXPOSE 8080

# Configure registry authentication
ARG NPM_TOKEN
ENV NPM_TOKEN=$NPM_TOKEN

# Copy built application
COPY --from=build /build/dist /app

# Install production dependencies
RUN npm i -g pnpm
RUN pnpm i --frozen-lockfile --ignore-scripts --prod

# Run application
CMD [ "pnpm", "start" ]
