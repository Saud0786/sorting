export const quickSort = (array) => {
  const animations = [];
  const auxiliaryArray = array.slice();
  quickSortHelper(auxiliaryArray, 0, auxiliaryArray.length - 1, animations);
  return animations;
};

const quickSortHelper = (array, low, high, animations) => {
  if (low < high) {
    const pivotIndex = partition(array, low, high, animations);
    quickSortHelper(array, low, pivotIndex - 1, animations);
    quickSortHelper(array, pivotIndex + 1, high, animations);
  }
};

const partition = (array, low, high, animations) => {
  const pivot = array[high];
  let i = low;

  for (let j = low; j < high; j++) {
    // Compare current element with pivot
    animations.push([j, high, false]); // Highlight comparison
    if (array[j] < pivot) {
      animations.push([i, j, true]); // Mark swap
      swap(array, i, j);
      i++;
    }
  }
  // Swap pivot into correct position
  animations.push([i, high, true]);
  swap(array, i, high);
  return i;
};

const swap = (array, i, j) => {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
};
