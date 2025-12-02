require('dotenv').config();
const fetch = require('node-fetch');

const statement = {
  actor: { name: 'Learner', mbox: 'mailto:learner@example.com' },
  verb: {
    id: 'http://adlnet.gov/expapi/verbs/answered',
    display: { 'en-US': 'answered' },
  },
  object: {
    id: 'http://example.com/question/1',
    definition: { name: { 'en-US': 'Question 1' } },
  },
};

fetch(process.env.LRS_ENDPOINT, {
  method: 'POST',
  headers: {
    Authorization:
      'Basic ' +
      Buffer.from(`${process.env.LRS_KEY}:${process.env.LRS_SECRET}`).toString(
        'base64',
      ),
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(statement),
})
  .then((res) => console.log('Status:', res.status))
  .catch((err) => console.error(err));
