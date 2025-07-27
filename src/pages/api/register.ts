import { signUp } from '@/lib/firebase/service';
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  status: boolean;
  message: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if(req.method === 'POST') {
    await signUp(
      req.body.data,
      ({status, message}: { status: boolean; message: string }) => {
        if (status) {
          res.status(200).json({ status, message });
        }else {
          res.status(400).json({ status, message });
        }
      }
    )
  } else {
    res.status(400).json({ status: false, message: "Method not allowed" });
  }
}
