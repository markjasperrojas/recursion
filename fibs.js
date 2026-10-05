function fibs(n) {
  if (n === 0) return [];
  if (n === 1) return [0];

  let result = [0, 1];

  for (let i = 0; i < n - 2; i++) {
    result.push(result[i] + result[i + 1]);
  }

  return result;
}
