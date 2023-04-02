import { connectToDatabase } from "@/utils/dbConnect";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
  const db = await connectToDatabase();
  const { id } = req.query;
  const result = await db.collection("users").findOne({ email: id });

  return res.status(200).json(result);
}
