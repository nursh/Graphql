const express = require('express');
const expressGraphQL = require('express-graphql');

const app = express();
const port = process.env.PORT || 4000;

app.use('/graphql', expressGraphQL({
  graphiql: true,
}));

app.listen(port, () => console.log(`App server is running on port:${port}`));