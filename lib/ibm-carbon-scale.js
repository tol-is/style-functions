exports.scale = (params = {}) => {
  const {
    length = 20,
    minSize = 12,
    intervals = 4,
    increment = 2,
    transform = v => v
  } = params;

  const getSize = count => {
    if (count <= 1) {
      return minSize;
    }

    return (
      getSize(count - 1) + Math.floor((count - 2) / intervals + 1) * increment
    );
  };

  return Array.from({ length: length }, (_, i) => getSize(i + 1)).map(
    transform
  );
};
