import { connectToDatabase } from "@/utils/dbConnect";

export default async function handler(req, res) {
  const { id } = req.query;

  if (!id) {
    res.status(400).json({ error: "Missing post ID" });
    return;
  }
  try {
    const db = await connectToDatabase();
    const posts = db.collection("commentCollection");
    const post = await posts.find({ id: id }).toArray();

    if (!post) {
      res.status(404).json({ error: "comment not found" });
      return;
    }

    res.status(200).json(post);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
