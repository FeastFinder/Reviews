# Feast Finder
A web app for user to make restaurant reservation

## Related Projects

  - https://github.com/FeastFinder/Reservations
  - https://github.com/FeastFinder/Menu
  - https://github.com/FeastFinder/Banner-Gallery

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)
1. [CRUD](#crud)

## Usage

Compile the bundle
```sh
npm run react-dev
```

Start Server
```sh
npm run server-dev
```

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack webpack-cli nodemon
```

```sh
npm install
```

## CRUD
  GET - /api/:restaurantID/reviews
    - Returns a list of reviews for given restaurant id
  POST - /api/:restaurantID/reviews
    - Adds a new review for the restaurant
    - Returns a string indicator if the creation is successful
  PUT - /api/:restaurantID/reviews/:id
    - Updates the logged-in user reviews based on the restaurant id
    - Returns a string indicator if the creation is successful
  DELETE -/api/:restaurantID/reviews/:id
    - Deletes the logged-in user reviews for a given restaurant id
    - Returns a string indicator if the creation is successful

