import clientPromise from "../../lib/mongodb";

export default async function handler(req, res) {
  const { circular } = req.body;
  const client = await clientPromise;
  const db = client.db("Info");

  const postCircular = await db.collection("circulares").insertOne({
    title: circular.title,
    content: circular.content,
    fecha: circular.date,
  });

  res.status(200).json({
    message: "success",
  });
  return;
}
