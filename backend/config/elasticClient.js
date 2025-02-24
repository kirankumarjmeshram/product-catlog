const { Client } = require("@elastic/elasticsearch");
require("dotenv").config();

const client = new Client({ node: process.env.ELASTICSEARCH_URL || "http://localhost:9200" });

module.exports = client;

// const { Client } = require("@elastic/elasticsearch");
// const client = new Client({ node: "http://localhost:9200" });
// module.exports = client;