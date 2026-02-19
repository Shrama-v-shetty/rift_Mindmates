const { MongoClient } = require("mongodb");

const url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url);

let db;

async function connectDB() {
  await client.connect();
  db = client.db("pharmacogenomics");
  console.log("MongoDB connected");
}

function getDB() {
  return db;
}

module.exports = { connectDB, getDB };
