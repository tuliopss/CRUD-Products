const { MongoClient } = require("mongodb");

const uri = "mongodb://0.0.0.0:27017/testemongodb";

const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    console.log("MongoDB conectado!");
  } catch (error) {
    console.log(error);
  }
}

run();

module.exports = client;
