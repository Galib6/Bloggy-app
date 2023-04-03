import { connectToDatabase } from "@/utils/dbConnect";

export default async function handler(req, res) {
  const { query } = req.query;

  const db = await connectToDatabase();
  const posts = db.collection("posts");

  const result = await posts
    .find({
      $or: [
        {
          postTitle: { $regex: `.*${query}.*`, $options: "i" },
        },
        {
          postDes: { $regex: `.*${query}.*`, $options: "i" },
        },
      ],
    })
    .toArray();

  res.status(200).json(result);
}
