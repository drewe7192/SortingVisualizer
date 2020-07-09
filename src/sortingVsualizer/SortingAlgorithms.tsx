import React from "react";

export const MergeSort = (array: any[]) => {
  if (array.length === 1) return array;
  const middleIndx = Math.floor(array.length / 2);
  const firstHalf = MergeSort(array.slice(0, middleIndx));
  const secondHalf = MergeSort(array.slice(middleIndx));
  const sortedArray = [] as string[];

  let i = 0;
  let j = 0;

  while (i < firstHalf.length && j < secondHalf.length) {
    if (firstHalf[i] < secondHalf[j]) {
      sortedArray.push(firstHalf[i++]);
    } else {
      sortedArray.push(secondHalf[j++]);
    }
  }

  while (i < firstHalf.length) sortedArray.push(firstHalf[i++]);
  while (j < secondHalf.length) sortedArray.push(secondHalf[j++]);

  return sortedArray;
};
