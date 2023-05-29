export const formatPrice = (num) => {
  const newNumber = Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(num / 100);
  return newNumber;
};

// 카테고리 별, 데이터들을 새로운 배열로 만들어 제공
export const getUniqueValues = (data, type) => {
  let unique = data.map((item) => item[type]);
  // company나 category는 객체 안에 들어있어서 바로 접근이 가능하지만, colors같은경우는, 객체안의 colors 배열 안에 값들이 있어서 flat을 통해 접근해야한다.
  // ex. const arr = [1, 2, [3, 4]] => arr.flat() = [1, 2, 3, 4]
  if (type == 'colors') {
    unique = unique.flat();
  }
  return ['all', ...new Set(unique)];
};
