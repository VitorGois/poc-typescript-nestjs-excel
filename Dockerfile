# ====================================================
# Build Stage
#
FROM node:16-alpine as build
WORKDIR /build

# Configure registry authentication
ARG NPM_TOKEN
ENV NPM_TOKEN_ARG=$NPM_TOKEN
RUN export NPM_TOKEN="${NPM_TOKEN:-NPM_TOKEN_ARG}"

# Copy source code
COPY . /build/

# Install dependencies
RUN npm i -g pnpm dotenv-cli
RUN dotenv -- pnpm i --frozen-lockfile --ignore-scripts

# Build application
RUN pnpm build

# ====================================================
# Application Stage
#
FROM node:16-alpine as app
WORKDIR /app
EXPOSE 8080

# Configure registry authentication
ARG NPM_TOKEN
ENV NPM_TOKEN_ARG=$NPM_TOKEN
RUN export NPM_TOKEN="${NPM_TOKEN:-NPM_TOKEN_ARG}"

# Copy built application
COPY --from=build /build/dist /app

# Install production dependencies
RUN npm i -g pnpm dotenv-cli
RUN dotenv -- pnpm i --frozen-lockfile --ignore-scripts --prod

# Run application
CMD [ "pnpm", "start" ]
