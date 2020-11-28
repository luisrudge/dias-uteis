export type Anos = {
  [key: number]: Feriado[];
};

export type Feriado = {
  date: string;
  weekDay: string;
  name: string;
};
