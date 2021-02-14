import { NextApiRequest, NextApiResponse } from 'next';
import { prazo, formatDate } from '../../utils';

export default (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({
    diaUtil: prazo(new Date(), parseInt(<string>req.query.dias)),
  });
};
