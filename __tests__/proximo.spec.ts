import { parseDate, proximo } from './../utils/index';

test('returns next Monday when date is Saturday', () => {
  const result = proximo(parseDate('2020-11-28'));
  expect(result.getTime()).toBe(parseDate('2020-11-30').getTime());
});
test('returns next Monday when date is Sunday', () => {
  const result = proximo(parseDate('2020-11-29'));
  expect(result.getTime()).toBe(parseDate('2020-11-30').getTime());
});
test("returns next Day after 'Tiradentes'", () => {
  //tiradentes is 2021-04-21
  const result = proximo(parseDate('2021-04-20'));
  expect(result.getTime()).toBe(parseDate('2021-04-22').getTime());
});
test("returns next Day after 'Carnaval' (two dates)", () => {
  //carnaval is 2020-02-24 (mon) and 2020-02-25 (tue)
  const result = proximo(parseDate('2020-02-21'));
  expect(result.getTime()).toBe(parseDate('2020-02-26').getTime());
});
