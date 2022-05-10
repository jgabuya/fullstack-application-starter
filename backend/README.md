# Backend

### Setup and Running

**Note:** Requires **node** version `>= 14.16`

1. Copy `.env.example` to `.env`. This file contains some environment variables, feel free to change them to your preference
2. Install dependencies: `yarn`
3. This application uses mock data. Therefore, we need to generate them: `yarn generate-mocks`
4. Compile code (TS -> JS): `yarn build`
5. Run the application: `yarn start`

tldr;

```
cp .env.example .env // edit the values as per your preference
yarn
yarn generate-mocks
yarn build
yarn start
```

### Application Structure

The structure of the application follows a layered approach to make it easy to understand and maintain. This is loosely resembling the [clean architecture](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html) pattern. 

- `mocks` - contains mock data and their corresponding generators
- `src/services` - each service contains a vertical slice of business layer. This includes
  the following:
    - `entities` - entity definitions (domains)
    - `store` - data layer; responsible for commands/queries to the database
      - note: this layer uses mocks for now, but we can easily add a full-fledged ORM like `sequelize`, `Prisma`, etc
    - `service` - the entrypoint for each service. This exposes functions that contain service-scoped business logic
  
- `src/api` - a.k.a infrastructure layer; responsible for bootstrapping the application, initializing the server and defining the endpoints
- `test` - contains e2e api tests

### Tests

This application contains co-located unit tests throughout the codebase as well as API tests inside `test`

To invoke tests, simply run `yarn test`

**Note:** Testing also requires mock data to be generated beforehand.

**Note:** At this time, not everything is covered with tests. However, the API tests hopefully cover most (if not all) of the critical functionality
