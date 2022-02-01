# Pokedex

# Introduction

A simple service to get some information about the pokemon by providing the name.
I used the hexagonal architecture for the project structure to make each component decoupled, easy to test and maintain by putting the business logic in the domain.

## How to run

The are 2 options to run the project:

### Docker or Podman (preferred)
Run this commands:
```console
foo@bar:~$> docker build -t pokedex .
foo@bar:~$> docker run -d -p 3000:3000 pokedex
foo@bar:~$> (Optional) docker logs -f <container_id>
foo@bar:~$> curl http://localhost:3000/pokemon/ditto
```

### Direct
Run this commands using node:14.x
```console
foo@bar:~$> npm install
foo@bar:~$> npm run build
foo@bar:~$> npm run start
```

## How to test
Run this command:

```console
foo@bar:~$> npm install
foo@bar:~$> npm run test
```

## Development and contribution
To contribute, create branch from dev and use [this flow](https://leanpub.com/git-flow/read)

Create a .env file on the root of the project with the following content:
```
LOG_LEVEL=debug
SERVER_PORT=3000
```

There are prerequisites before the commit using husky, to enable it run:
```console
foo@bar:~$> npx husky install
foo@bar:~$> chmod +x .husky/pre-commit 
```
And in every commit there are 3 types of control:
- Run tests
- Run lint using Airbnb standards
- Run commit message checks, must follow this [convention](https://www.conventionalcommits.org/en/v1.0.0-beta.2/)

## Improvements

For production, I think that there are some improvements to make.

### Cache aside pattern
To improve response time and prevent quota limits of the funnydescription api is a good practice to apply the cache aside pattern using redis or another managed similar solution.
With this architecture is straightforward we need just to apply the logic on the TranslationApiAdapter
### Build CD pipeline
Build a CD pipeline to push code on the cloud when there is a push action on main (production), dev (staging)
### Branch protection, only admin can push
If there is a team for the development of this project and given the previous point, it is good practice to protect the branches subject to the CD , and only specific users can push and approve pull requests.

### Overkill thinking
Always in view of imagining this service in production I would certainly use some system for monitoring.
If I am in a public cloud using managed services I would already have monitoring utility available. It could be a tracing system or a log aggregator.
If I wasn't in public cloud environment I could opt for opensource solutions (ElasticSearch and Kibana for log aggregation and metric collection, Jaegar for tracing) or third party managed services that can give me the tools to speed up troubleshooting.

## APIs

### Get pokemon by name with default description

```http
POST /pokemon/:name
```
#### Request

| Parameter | Type | Description | Body | Query Param |
| :--- | :--- | :--- | :--- | :--- |
| `name` | `string` | **Required**, the name of the pokemon | X | V |

#### Response

Return a response in JSON format containing the pokemon object with default description

Code `200`
```javascript
{
  "name": string,
  "description": string,
  "habitat": string,
  "isLegendary": boolean
}
```
### Get pokemon by name with translated description

```http
POST /pokemon/translated/:name
```
#### Request
| Parameter | Type | Description | Body | Query Param |
| :--- | :--- | :--- | :--- | :--- |
| `name` | `string` | **Required** the name of the pokemon | X | V |

#### Response

Return a response in JSON format containing the pokemon object with translated description

Code `200`
```javascript
{
  "name": string,
  "description": string,
  "habitat": string,
  "isLegendary": boolean
}
```

## Status Codes

Pokedex returns the following status codes in its API:

| Status Code | Description |
| :--- | :--- | 
| 200 | `OK` |
| 400 | `BAD REQUEST` |
| 404 | `NOT FOUND` |
| 500 | `INTERNAL SERVER ERROR` |

All error responses (i.e responses with code >= `400`) return an object with the following structure:
```javascript
{
  "error": string
}
```