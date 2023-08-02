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
