import { MongoClient } from "mongodb";
// const uri = process.env.MONGODB_URI;
const uri =
  "mongodb+srv://Blog-app-task:Ao2wgK1tWN9vW5P9@cluster0.wjuepub.mongodb.net/?retryWrites=true&w=majority";

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const client = new MongoClient(uri, options);

export async function connectToDatabase() {
  client.connect();
  return client.db("blogAppTaskA");
}
