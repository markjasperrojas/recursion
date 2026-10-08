// This is my implementation of the merge sort algorithm. Though my solution has a time complexity of O(n²), usually merge sort has a time complexity of O(n log n), because I used splice instead of indexes.

function mergeSort(arr) {
  if (arr.length < 2) return arr;

  const mid = Math.ceil(arr.length / 2);
  let leftHalf = mergeSort(arr.slice(0, mid));
  let rightHalf = mergeSort(arr.slice(mid));

  let result = [];

  while (leftHalf.length !== 0 || rightHalf.length !== 0) {
    if (leftHalf.length === 0) {
      for (const item of rightHalf) {
        result.push(item);
      }

      rightHalf.length = 0;
      break;
    }

    if (rightHalf.length === 0) {
      for (const item of leftHalf) {
        result.push(item);
      }

      leftHalf.length = 0;
      break;
    }

    if (leftHalf[0] < rightHalf[0]) {
      result.push(leftHalf[0]);
      leftHalf.splice(0, 1);
    } else {
      result.push(rightHalf[0]);
      rightHalf.splice(0, 1);
    }
  }

  return result;
}
