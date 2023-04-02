import { connectToDatabase } from "@/utils/dbConnect";

export default async function handler(req, res) {
  const db = await connectToDatabase();
  const books = await db.collection("posts").find().toArray();

  res.status(200).json(books);
}
