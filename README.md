# GraphQL-server
## Usage

### 1. Clone repository & install dependencies

```sh
git clone https://github.com/howtographql/graphql-js	
cd GraphQL-server
`npm install`
```
### 2. Deploy the Prisma database service

Add endpoint( https://eu1.prisma.sh/itscijo/database/dev ) in database/prisma.yml and index.js

```sh
prisma deploy
```

### 3. Commands to run

```sh
node src/index.js
graphql playground
```
