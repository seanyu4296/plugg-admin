const fetch = require('node-fetch');
const fs = require('fs');
const mkdirp = require('mkdirp');
const {
  buildClientSchema,
  introspectionQuery,
  printSchema,
} = require('graphql/utilities');
const path = require('path');
const schemaPath = path.join(__dirname, '../src/graphql/schema');

const SERVER = 'https://plugg-admin-back.herokuapp.com/graphql';

// Save JSON of full schema introspection for Babel Relay Plugin to use
fetch(`${SERVER}`, {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ 'query': introspectionQuery }),
}).then(res => res.json()).then(schemaJSON => {
  mkdirp(path.join(__dirname, '../src/graphql'), (err) => {
    if (err) console.error(err)
    fs.writeFileSync(
      `${schemaPath}.json`,
      JSON.stringify(schemaJSON, null, 2)
    );

    // Save user readable type system shorthand of schema
    const graphQLSchema = buildClientSchema(schemaJSON.data);
    fs.writeFileSync(
      `${schemaPath}.graphql`,
      printSchema(graphQLSchema)
    );
  })

});
