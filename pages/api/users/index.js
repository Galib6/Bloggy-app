import { connectToDatabase } from "@/utils/dbConnect";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const user = req.body;
    console.log(user);

    const db = await connectToDatabase();

    // Insert the new user into the "users" collection
    const result = await db.collection("users").insertOne(user);

    // Return a success message with the new user's ID
    return res
      .status(200)
      .json({ message: "User created", userId: result.insertedId });
  } else {
    // Return an error message if the method is not supported
    return res.status(405).json({ error: "Method not allowed" });
  }
}
