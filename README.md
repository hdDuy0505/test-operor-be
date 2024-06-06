# Description
Backend

## Installation

```bash
$ npm install
$ npm run build
```

## Running the app

You have to copy variables in .env.example\* files to your .env file and change MYSQL_DB\_\* variables of your local MySQL database before running these commands:

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

```


# Code instructions

## Database Migration and Seeding

We can use "npx sequelize-cli" command

### Create migration file:

```bash
### Run migration files

```bash
# run all new migration files (not include in the `sequelizemeta` table)
$ npx sequelize-cli db:migrate
$ npx sequelize-cli db:seed:all
```