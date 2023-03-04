//api/posts/:id
import data from "../data";

const handler = (req, res) => {
  const { Posts } = data;
  if (Posts) return res.status(200).json(Posts);

  return res.status(404).json({ message: "Data Not Found" });
};

export default handler;
