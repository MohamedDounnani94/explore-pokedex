# Pokedex

# Introduction

TODO

## How to run

TODO


## How to test

TODO


## Improvements

TODO


## APIs

## pokemon routes

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