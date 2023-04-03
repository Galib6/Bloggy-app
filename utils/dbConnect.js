import { MongoClient } from "mongodb";
// const uri = process.env.MONGODB_URI;
const uri =
  "mongodb+srv://Blog-app-task:Ao2wgK1tWN9vW5P9@cluster0.wjuepub.mongodb.net/?retryWrites=true&w=majority";

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

let cachedDb = null;
let isConnected = false;

export async function connectToDatabase() {
  if (isConnected) {
    return cachedDb;
  }

  if (!cachedDb) {
    const client = new MongoClient(uri, options);
    await client.connect();
    cachedDb = client.db("blogAppTaskA");
  }

  isConnected = true;
  return cachedDb;
}
