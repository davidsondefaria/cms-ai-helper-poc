# cms-ai-helper-poc

## n8n standalone

[Starts n8n](https://docs.n8n.io/hosting/installation/docker/) and use in localhost:

```bash
docker volume create n8n_data

docker run -it --rm --name n8n -p 5678:5678 -v n8n_data:/home/node/.n8n docker.n8n.io/n8nio/n8n
```

or run `./scripts/run-n8n.sh`.

## n8n with PostgreSQL

Starts n8n with PostgreSQL as database with Docker Compose, running `docker-compose up -d`. 

You can stop the containers with `docker-compose stop` or take down with `docker-compose down`.

Just make sure that you have a .env file with the follwing variables:

```bash
POSTGRES_USER=
POSTGRES_PASSWORD=
POSTGRES_DB=

POSTGRES_NON_ROOT_USER=
POSTGRES_NON_ROOT_PASSWORD=
```

## Stripe

We have created a new Strapi project running `yarn create strapi-app <project_name>` with the following configuration.

```bash
yarn create strapi-app cms-ai-helper
# and select the options you want.
# for this project
>> Custom (manual settings)
>> TypeScript
>> postgres # database option
>> cms-ai-helper # database name
>> 127.0.0.1 # database host
>> 5432 # default database port
>> strapi # database username
>> <password> # database password
>> Yes # Enable SSL connection
```

Set up a .env file with the following variables:

```bash
NODE_ENV=development
# Strapi
HOST=0.0.0.0
PORT=1337
APP_KEYS=
API_TOKEN_SALT=
ADMIN_JWT_SECRET=
TRANSFER_TOKEN_SALT=
# Database
DATABASE_CLIENT=
DATABASE_HOST=
DATABASE_PORT=
DATABASE_NAME=
DATABASE_USERNAME=
DATABASE_PASSWORD=
DATABASE_SSL=
```
Just make sure that you have a clean Postgres database, since Strapi needs a new database to run. Also, if started a new database in the n8n Docker compose step, you can use the database for this Stripe project

After install strapi (and have created a database), you can run `yarn develop` to open in development mode.


<!-- ### Strapi with Docker
Stripe does not have an official container image, so we have to build one. First step is to [install Strapi](https://docs.strapi.io/dev-docs/quick-start) with:

Create an [Strapi image](https://docs.strapi.io/dev-docs/installation/docker) using [Dockerfile](./cms-ai-helper/Dockerfile) with the command `docker build -t cms-ai-helper .` and then, we can run `docker run -dp 127.0.0.1:1337:1337 --name cms-ai-helper cms-ai-helper` to start and expose port 1337 to access Stripe via localhost. -->

<!-- 
NOTE: The Dockerfile can create an image, but the project does not run because of a problem with node module called `sharp`.
-- >