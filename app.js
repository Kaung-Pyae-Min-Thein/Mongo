const { MongoClient } = require("mongodb");

const uri = "mongodb://localhost:27017";

const client = new MongoClient(uri);

async function run() {
  try {
    const database = client.db("FruitsDB");
    const fruits = database.collection("fruits");

    const docs = [
      { name: "apple", color: "red" },
      { name: "orange", color: "orange" },
      { name: "pineapple", color: "yellow" }
    ];

    const options = { ordered: true };

    const result = await fruits.insertMany(docs, options);
    console.log(` ${result.insertedCount} documents were inserted`);
  }
  finally {
    await client.close();
  }
}
run().catch(console.dir);