import type { NextApiRequest, NextApiResponse } from 'next';

interface IResponseData {
  name: string;
  surname: string;
  age: number;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<IResponseData>
) {
  res.status(200).json({ name: 'dogukan', surname: 'aktas', age: 31 });
}
