# cms-ai-helper-poc

## n8n standalone

[Starts n8n](https://docs.n8n.io/hosting/installation/docker/) and use in localhost:

```bash
docker volume create n8n_data

docker run -it --rm --name n8n -p 5678:5678 -v n8n_data:/home/node/.n8n docker.n8n.io/n8nio/n8n
```

or run `./scripts/run-n8n.sh`.

## n8n with PostgreSQL

Starts n8n with PostgreSQL as database.

## Stripe

Stripe does not have an official container image, so we have to build one. First step is to [install Strapi](https://docs.strapi.io/dev-docs/quick-start) with:

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
After install strapi (and have created a database), you can run `yarn develop` to open in development mode.

<!-- ### Strapi with Docker

Create an [Strapi image](https://docs.strapi.io/dev-docs/installation/docker) using [Dockerfile](./cms-ai-helper/Dockerfile) with the command `docker build -t cms-ai-helper .` and then, we can run `docker run -dp 127.0.0.1:1337:1337 --name cms-ai-helper cms-ai-helper` to start and expose port 1337 to access Stripe via localhost. -->