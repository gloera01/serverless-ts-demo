export const handler = async (event) => {
  console.log("Hello world")
  console.log('Aloha')

  const exe = {}
  var executable = "execute me"

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Go Serverless v3.0! Your function executed successfully!",
        input: event,
      },
      null,
      2
    ),
  };
};
