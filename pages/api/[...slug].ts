import type { NextApiRequest, NextApiResponse } from "next";

const handler = (req: NextApiRequest, res: NextApiResponse): void => {
  console.log("pid", req.query.slug);
  res.end();
};

export default handler;
