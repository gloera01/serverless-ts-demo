import { handler as indexHandler } from '../src/handlers/index';

describe('handlers/index', () => {
  test('Principal test', async () => {
    // Arrange
    const event = {};

    // Action
    const result = await indexHandler(event);

    console.log(`Env is: ${process.env.STAGE}`);

    // Assert
    expect(result).toHaveProperty('statusCode', 200);
  });

  test('Secondary tst', async () => {
    // Arrange
    const event = {};

    // Act
    const result = await indexHandler(event);

    // Assert
    expect(result).toBeDefined();
  });
});