/**
 * Sorts a number array via the insertion sort algorithm.
 *
 * @param data
 */
export const insertionSort = (data: number[]) => {
  if (data && data.length > 1) {
    let key;
    let nextIndex;
    for (let index = 1; index < data.length; index++) {
      key = data[index];
      nextIndex = index - 1;

      while (nextIndex >= 0 && data[nextIndex] > key) {
        data[nextIndex + 1] = data[nextIndex];
        nextIndex--;
      }
      data[nextIndex + 1] = key;
    }
  }
  return data;
};
