
## Running the app

# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

# documentation

Auth route 

- POST /auth/signup - sign up \n
- POST /auth/signin - sing in \n

Tasks route

- GET tasks - get all tasks \n
- POST /tasks - create new task \n
- GET /tasks/:id - get task by id \n
- DELETE /tasks/:id - delete task by id \n
- PATCH /tasks/:id - update status of task by id \n
- POST /tasks/rate - change rate of task \n

Labels route

- GET /labels - get all tasks \n
- POST /labels/create - create new label \n

Comment route

- POST /comment/create - create comment \n