# Serverless Framework Node HTTP API on AWS

This template demonstrates how to make a simple HTTP API with Typescript running on AWS Lambda and API Gateway using the Serverless Framework.

## Usage

### Setup

- Configure AWS profile?
- Required dependencies

### Development TODOS

- Add a lambda with Authorizer
  - Source [http event docs](https://www.serverless.com/framework/docs/providers/aws/events/apigateway/).
- Configuration
  - Add Eslint config (Pending)

### Testing TODOS

- Define Unit testing strategy
  - Test lambdas
    - Mock dependencies
  - Test services
    - Structure

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
- Environments should be created on github
  - add access keys from AWS admin user into secrets vault
- Branch protection should be added (disable merge)
  - If comments are not resolved
  - Build or tests fails

- Tests runs on PR that targets main and development branches
- Merge is available only when comments are resolved, build/tests are ok and PR is approved by at least 1 member
- Ignore tests folder to be deployed to AWS in order to save space
- Configure API gateway
  - domain name
  - routes