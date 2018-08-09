var gravatar = require('gravatar');

export function handler(event, context, callback) {
  console.log(event);
  let { email } = event.queryStringParameters;
  let avatar = gravatar.url(email, {s: '400', r: 'pg', d: '404'}, true);
  callback(null, {
    statusCode: 200,
    body: JSON.stringify({msg: "Hello, World!", avatar: avatar})
  })
}
