import { NextApiRequest, NextApiResponse } from 'next';
import { parseDate, proximo, formatDate } from './../../utils';

export default (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({
    proximoDiaUtil: formatDate(proximo(parseDate(<string>req.query.data))),
  });
};
