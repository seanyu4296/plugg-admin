const getBabelRelayPlugin = require('babel-relay-plugin');

// load previously saved schema data (see "Schema JSON" below)
const schemaData = require('../src/graphql/schema.json').data;

// create a plugin instance
const plugin = getBabelRelayPlugin(schemaData);


module.exports = plugin;
