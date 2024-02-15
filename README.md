# cms-ai-helper-poc

## n8n standalone

Starts n8n and use in localhost:

```
docker volume create n8n_data

docker run -it --rm --name n8n -p 5678:5678 -v n8n_data:/home/node/.n8n docker.n8n.io/n8nio/n8n
```

or run `./scripts/run-n8n.sh`.

## n8n with PostgreSQL

Starts n8n with PostgreSQL as database.
