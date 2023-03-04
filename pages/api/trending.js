//api/trending
import data from "./data";

const handler = (req, res) => {
  const { Trending } = data;
  if (Trending) return res.status(200).json(Trending);

  return res.status(404).json({ message: "Data Not Found" });
};

export default handler;
