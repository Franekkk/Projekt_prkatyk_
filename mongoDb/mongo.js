const MongoClient = require("mongodb").MongoClient;

const url =
  "mongodb+srv://kamienieckifranek:123@cluster0.f2g4c4y.mongodb.net/?retryWrites=true&w=majority";

const dbName = "Cluster0";

const client = new MongoClient(url);

// MongoClient.connect(url, function (err, client) {
//   var db = client.db("Cluster0");
//   console.log(err);
//   db.createCollection("users", function (err, result) {
//     console.log(err);

//     client.close();
//   });
// });

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log("Connected successfully to server");
  const db = client.db(dbName);

  const colections = await db.collections();
  const info = await db.stats();

  //   await db.createCollection("verbs");

  console.log(colections);
  console.log(info);

  const collection = db.collection("verbs");

  // the following code examples can be pasted here...

  return "done.";
}

main().then(console.log).catch(console.error);
//   .finally(() => client.close());
