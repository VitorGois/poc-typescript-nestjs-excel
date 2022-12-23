> // TODO: Delete this section

# Gorila - NestJS Template

This template offers a boilerplate to quick start new projects with a set of good practices commonly found in back-end application.

## Features

- Customized [framework](https://github.com/gorilainvest/nestjs-core) based on [NestJS](https://nestjs.com/), adding extended functionalities like improved http, logging, metrics and documentation.
- Static code syntax and styling analysis based on [ESLint](https://eslint.org/) configured with [eslint-config-gorila-ts](https://github.com/gorilainvest/eslint-config-gorila-ts) plugin.
- Testing framework [Jest](https://jestjs.io/) configured for Typescript.
- Git hooks based on [Husky](https://typicode.github.io/husky/#/) to apply [commitlint](https://commitlint.js.org/#/) and [lint-staged](https://www.npmjs.com/package/lint-staged?activeTab=readme).
- Live reload based on [ts-node-dev](https://www.npmjs.com/package/ts-node-dev).
- [Dockerfile](./Dockerfile) template including TypeScript transpilation.


## Usage

### GitHub

1\. On this repository page, select **Use this template** and choose target repository name.

2\. At your new repository, under **Settings > General**, disable **Wikis**, **Issues** and **Projects**.

3\. Under **Settings > Collaborators and teams**, add you Tech Lead as **Admin**.

4\. Under **Settings > Actions > General**, choose **Allow all actions and reusable workflows**.

5\. Under **Settings > Branches**, add a new rule as following:

- Branch name pattern: `[msd][ate][sav][tge][eil][rno]*`
- Protect matching branches, choosing:
  - Require a pull request before merging
  - Require approvals (2)
  - Dismiss stale pull request approvals when new commits are pushed
  - Require status checks to pass before merging
  - Require branches to be up to date before merging
  - Status checks that are required: Search for "Quality" and add all that appear
  - Require conversation resolution before merging

### SonarQube

1\. At SonarQube, open your project and navigate to **Project Settings > General Settings**.

2\. Under **DevOps Platform Integration**, choose the GitHub repository at **Configuration name** and **Repository name**.

3\. Navigate to **Project Settings > Quality Gate** and choose **Always use a specific Quality Gate > Product Backend**.

### Code

To continue with code related adjustments simply search for `TODO` keywords within the new repository for further instructions.

By removing this setup section, further topics of this `README.md` can already be used as your initial template.

---

> // TODO: Configure application title and description

# {{appTitle}}

{{appDescription}}

## Local Setup

1\. Copy `.env.schema` as `.env` and adjust environment variables according to instructions provided on itself.

2\. Start [sdk](https://github.com/gorilainvest/pbe-sdk) repository as submodule:

```sh
git submodule init
git submodule update
```

3\. Install `pnpm` package manager:

```sh
npm i -g pnpm
```

4\. Install dependencies, Gorila private registry must be authenticated either globally or at `.env`:

**.env**

```sh
NPM_TOKEN='GORILA_NPM_READ_TOKEN'
```

```sh
npm i -g dotenv-cli
dotenv pnpm i
```

**Globally**

```sh
npm config set //registry.npmjs.org/:_authToken=$GORILA_NPM_READ_TOKEN
pnpm i
```

4\. If everything was properly set up, you may run the application either with live reload or containerized:

**Live Reload**

```sh
pnpm dev
```

**Containerized**

```sh
pnpm docker
```

5\. To ensure application is running correctly navigate to API Documentation page:

http://127.0.0.1:8080/docs


## Contributing

Below some guidelines when contributing to this repository.


### Philosophy

Domain organization and code patterns follows the same philosophy of the underlying [NestJS](https://docs.nestjs.com/) framework.

Details regarding wrapper functionalities provided by [@gorila-bot/nestjs-core](https://github.com/gorilainvest/nestjs-core) are available at its [documentation](https://github.com/gorilainvest/nestjs-core), as well at this [video overview](https://gorila.atlassian.net/wiki/spaces/BEC/pages/2418999314/NestJS+Core+-+Overview).

It is strongly recommended to be familiarized with both prior to contributing.


### Testing

Tests are based on [Jest](https://jestjs.io/) framework and its typings for development should be automatically recognized after installing project dependencies. 

Test files are recognized for processing through the `*.spec.ts` pattern. By default they should be created at the same directory of its implementation counterpart.

To run tests execute the built-in script:

```sh
pnpm test
```

### Debugging

Application is configured to expose Node.js debug socket when being boot through live reload.

Which means you may attach a debugger at target port in order to enable code breakpoints.

Configuration is already done fo VSCode users which may simply start debugging by running:

```sh
pnpm dev
[press F5]
```


### Linting

This repository is configured with Gorila linting rules available [eslint-config-gorila-ts](https://github.com/gorilainvest/eslint-config-gorila-ts).

It is recommended to configure your IDE to automatically apply auto-fixes. Details on how to do so for IntelliJ, VSCode, Sublime Text and Atom are available at the following article:

[Even faster code formatting using ESLint](https://medium.com/@netczuk/even-faster-code-formatting-using-eslint-22b80d061461)

You may use a built-in NPM script to run a full lint check and print execution report:

```sh
pnpm lint
```


### Committing

Commit messages follows conventions of [@commitlint/config-conventional](https://www.npmjs.com/package/@commitlint/config-conventional), which in short accepts one of its `types` followed by a scope and a description.

**Types**

```sh
build, chore, ci, docs, feat, fix, perf, refactor, revert, style, test
```

**Examples**

```sh
feat(user): add user manipulation
fix(zip): JSON parsing exception
chore(auth): change member accessibility
ci(dependency): fix wrong build definition
```


### Naming Branches

Write name branches with the JIRA task id attached, this will cause your commit messages to be automatically modified with the task id. If your commit is not related to any task, your message will automatically be identified as no-task

**Names**

```sh
feature/BACK-1020, hotfix/BACK-1020, refactor/BACK-1020, BACK-1020, back-1020
```

**Examples**

```sh
branch name: feature/BACK-1020
commit message: "feat(user): add user manipulation"
commited message: "feat(user): add user manipulation #BACK-1020"
```

```sh
branch name: feature/user-manipulation
commit message: "feat(user): add user manipulation"
commited message: "feat(user): add user manipulation #no-task"
```