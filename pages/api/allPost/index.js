import { connectToDatabase } from "@/utils/dbConnect";

export default async function handler(req, res) {
  const db = await connectToDatabase();
  const books = await db.collection("posts").find().sort({ _id: -1 }).toArray();

  res.status(200).json(books);
}
