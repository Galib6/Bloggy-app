import { connectToDatabase } from "@/utils/dbConnect";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
  const { id } = req.query;
  const db = await connectToDatabase();
  const collection = db.collection("posts");

  const data = req.body;
  const { postDes, postTitle } = data;

  console.log(id, data);

  const result = await collection.updateOne(
    { _id: new ObjectId(id) },
    { $set: { postDes, postTitle } },
    { upsert: true }
  );
  console.log(result);

  res.status(200).json({ message: "Update successful." });
}
