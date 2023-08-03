# Serverless Framework Node HTTP API on AWS

This template demonstrates how to make a simple HTTP API with Typescript running on AWS Lambda and API Gateway using the Serverless Framework.

## Usage

### Setup

- Configure AWS profile?
- Required dependencies

### Development TODOS

- Add a lambda with Authorizer
  - Source [http event docs](https://www.serverless.com/framework/docs/providers/aws/events/apigateway/).
- Define CI/CD process
- Define Unit testing strategy
  - Test lambdas
    - Mock dependencies
  - Test services
    - Structure
- Configuration
  - Add Eslint config (Pending)

### Deployment

`serverless deploy`

### Local testing

You can invoke your function locally by using the following command:

```
serverless invoke local --function hello --path path/to/event.json
```

Alternatively, it is also possible to emulate API Gateway and Lambda locally. In order to do that, execute the following command:

```
serverless offline
```

### CI/CD

- An AWS account should be created (IAM) with admin permissions
  - add access keys into secrets vault on github
  - AKIAVCW6K6ZF26SZG24K
  - dWCqWDRr5ktOoVtih7scKN5AuvYIOOPp2UnHJ3V4
- Run tests
  - Only on PR for branches development and main
- Merge feature branch and deploy
  - Only when tests has passed and PR is approved