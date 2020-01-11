const { scale } = require('./ibm-carbon-scale');

test('default', () => {
  const sizes = scale();
  const defaultResult = [
    12,
    14,
    16,
    18,
    20,
    24,
    28,
    32,
    36,
    42,
    48,
    54,
    60,
    68,
    76,
    84,
    92,
    102,
    112,
    122
  ];
  expect(sizes).toStrictEqual(defaultResult);
});
