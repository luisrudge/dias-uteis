import { NextApiRequest, NextApiResponse } from 'next';
import { parseDate, prazo, formatDate } from '../../utils';

export default (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({
    diaUtil: formatDate(
      prazo(new Date(), parseInt(<string>req.query.dias))
    ),
  });
};
