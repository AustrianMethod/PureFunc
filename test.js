import getState from './src/app';

test('getState', () => {
  const objH = { name: 'Маг', health: 90 };
  const objW = { name: 'Маг', health: 40 };
  const objC = { name: 'Маг', health: 10 };

  const resultH = getState(objH);
  const resultW = getState(objW);
  const resultC = getState(objC);

  expect(resultH).toBe('healthy');
  expect(resultW).toBe('wounded');
  expect(resultC).toBe('critical');
});
