export const handler = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: `This lambda is running on: ${process.env.STAGE}`,
        input: event,
      },
      null,
      2
    ),
  };
};
