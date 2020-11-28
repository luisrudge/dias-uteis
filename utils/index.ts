import { addBusinessDays, parse, getYear, format } from 'date-fns';
import anos from './feriados';
import fnsBR from 'date-fns/locale/pt-BR';

export const formatDate = (d: Date) => format(d, 'y-MM-dd', { locale: fnsBR });
export const parseDate = (d: string) => parse(d, 'y-MM-dd', new Date());

export const proximo = (d: Date): Date => {
  const feriados = anos[getYear(d)];
  let nextDay;
  let contador = 1;
  while (!nextDay) {
    const maybeNextDay = addBusinessDays(d, contador);
    if (
      !feriados
        .map((f) => parseDate(f.date).getTime())
        .includes(maybeNextDay.getTime())
    ) {
      nextDay = maybeNextDay;
    }
    contador++;
  }
  return nextDay;
};
