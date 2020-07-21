import React from "react";

export const MergeSort = (array: any[]) => {
  const animations = [] as any;
  if (array.length <= 1) return array;
  const axuillaryArray = array.slice();
  mergeSortHelper(array, 0, array.length - 1, axuillaryArray, animations);
  debugger;
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
    const animation = {} as any;
    animation.comparison = [i, j];
    if (auxillaryArray[i] <= auxillaryArray[j]) {
      animation.swap = [k, i];
      mainArray[k++] = auxillaryArray[i++];
    } else {
      animation.swap = [k, j];
      mainArray[k++] = auxillaryArray[j++];
    }
    animations.push(animation);
  }
  while (i <= middleIndx) {
    animations.push({
      comparison: [i, i],
      swap: [k, i],
    });
    mainArray[k++] = auxillaryArray[i++];
  }
  while (j <= endIdx) {
    animations.push({
      comparison: [j, j],
      swap: [k, j],
    });
    mainArray[k++] = auxillaryArray[j++];
  }
};
