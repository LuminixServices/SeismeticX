const fetch = require('node-fetch');

function sendToDiscordWebhook(webhookUrl, data) {
  return fetch(webhookUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then(response => response.json())
    .then(responseJson => {
      console.log('Message sent!');
      return responseJson;
    })
    .catch(error => {
      console.error('Error:', error);
    });
}
