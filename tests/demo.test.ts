import { handler as indexHandler } from '../src/handlers/index';

describe('handlers/index', () => {
  test('Principal test', async () => {
    // Arrange
    const event = {};

    // Action
    const result = await indexHandler(event);

    // Assert
    expect(result).toHaveProperty('statusCode', 200);
  });
});