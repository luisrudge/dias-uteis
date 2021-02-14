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
    const maybeNextDay = formatDate(addBusinessDays(d, contador));
    if (!feriados.map((f) => f.date).includes(maybeNextDay)) {
      nextDay = maybeNextDay;
    }
    contador++;
  }
  return nextDay;
};

export const prazo = (d: Date, dias: number) =>
  proximo(addBusinessDays(d, dias - 1));
