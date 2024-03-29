import clientPromise from "../../lib/mongodb";

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db("Info");

  const circulares = await db.collection("circulares").find({}).toArray();
  res.status(200).json(circulares);
}
