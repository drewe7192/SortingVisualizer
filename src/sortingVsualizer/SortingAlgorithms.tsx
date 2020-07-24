import React from "react";

export const MergeSort = (array: any[]) => {
  const animations = [] as any;
  if (array.length <= 1) return array;
  const axuillaryArray = array.slice();
  mergeSortHelper(array, 0, array.length - 1, axuillaryArray, animations);
  return animations;
};

const mergeSortHelper = (
  mainArray: any,
  startIdx: any,
  endIdx: any,
  auxillaryArray: any,
  animations: any
) => {
  if (startIdx === endIdx) {
    return;
  }
  const middleIndx = Math.floor((startIdx + endIdx) / 2);
  mergeSortHelper(auxillaryArray, startIdx, middleIndx, mainArray, animations);
  mergeSortHelper(
    auxillaryArray,
    middleIndx + 1,
    endIdx,
    mainArray,
    animations
  );
  doMerge(mainArray, startIdx, middleIndx, endIdx, auxillaryArray, animations);
};

const doMerge = (
  mainArray: any,
  startIdx: any,
  middleIndx: any,
  endIdx: any,
  auxillaryArray: any,
  animations: any
) => {
  let k = startIdx;
  let i = startIdx;
  let j = middleIndx + 1;
  while (i <= middleIndx && j <= endIdx) {
    animations.push([i, j]);
    animations.push([i, j]);
    if (auxillaryArray[i] <= auxillaryArray[j]) {
      animations.push([k, auxillaryArray[i]]);
      mainArray[k++] = auxillaryArray[i++];
    } else {
      animations.push([k, auxillaryArray[j]]);
      mainArray[k++] = auxillaryArray[j++];
    }
  }
  while (i <= middleIndx) {
    animations.push([i, i]);
    animations.push([i, i]);
    animations.push([k, auxillaryArray[i]]);
    mainArray[k++] = auxillaryArray[i++];
  }
  while (j <= endIdx) {
    animations.push([j, j]);
    animations.push([j, j]);
    animations.push([k, auxillaryArray[j]]);
    mainArray[k++] = auxillaryArray[j++];
  }
};
