import { connectToDatabase } from "@/utils/dbConnect";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
  const { id } = req.query;

  if (!id) {
    res.status(400).json({ error: "Missing post ID" });
    return;
  }
  try {
    const db = await connectToDatabase();
    const posts = db.collection("posts");
    const post = await posts.findOne({ _id: new ObjectId(id) });

    if (!post) {
      res.status(404).json({ error: "Post not found" });
      return;
    }

    res.status(200).json(post);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
