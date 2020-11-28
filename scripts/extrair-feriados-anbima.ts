import fs from 'fs';
import axios from 'axios';
import cheerio from 'cheerio';
import { parse, format } from 'date-fns';
import { Anos, Feriado } from '../global';

const url = (ano) =>
  `https://www.anbima.com.br/feriados/fer_nacionais/${ano}.asp`;

(async () => {
  const anos: Anos = {};
  const anosDaBusca = [2020, 2021, 2022];
  for (const ano of anosDaBusca) {
    const result = await axios.get(url(ano));
    const $ = cheerio.load(result.data);
    const feriadosTable: cheerio.Cheerio = $('table.interna tr');
    const feriados: Feriado[] = [];

    feriadosTable.slice(1).each((i, elem) => {
      feriados.push({
        date: format(
          parse($(elem).find('td').eq(0).text(), 'd/MM/yy', new Date()),
          'y-MM-dd'
        ),
        weekDay: $(elem).find('td').eq(1).text(),
        name: $(elem).find('td').eq(2).text(),
      });
    });
    anos[ano] = feriados;
  }
  fs.writeFileSync('./utils/feriados.json', JSON.stringify(anos, null, 2));
})();
