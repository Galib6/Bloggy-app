import { connectToDatabase } from "@/utils/dbConnect";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const post = req.body;

    const db = await connectToDatabase();
    console.log(post);

    // Insert the new post into the "posts" collection
    const result = await db.collection("posts").insertOne(post);

    // Return a success message with the new post's ID
    return res
      .status(200)
      .json({ message: "Post is created", postId: result.insertedId });
  } else {
    // Return an error message if the method is not supported
    return res.status(405).json({ error: "Method not allowed" });
  }
}
