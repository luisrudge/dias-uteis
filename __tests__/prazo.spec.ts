import { parseDate, prazo } from './../utils/index';

test('returns next Wednesday when date is Saturday and number of days is 3', () => {
  const result = prazo(parseDate('2020-11-28'), 3);
  expect(result.getTime()).toBe(parseDate('2020-12-02').getTime());
});

test('returns next Wednesday when date is Saturday and number of days is 10', () => {
  const result = prazo(parseDate('2020-11-28'), 10);
  expect(result.getTime()).toBe(parseDate('2020-12-11').getTime());
});