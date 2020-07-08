import React, { useState, useEffect } from "react";
import styles from "./SortingVisualizer.module.scss";
import { MergeSort } from "./SortingAlgorithms";

const SortingVisualizer = () => {
  const [arr, setArr] = useState([]);

  useEffect(() => resetArray(), []);

  const resetArray = () => {
    const arr = [] as any;
    for (let i = 0; i < 310; i++) {
      arr.push(renderingIntevals(5, 610));
    }

    setArr(arr);
  };

  const mergeSort = () => {
    debugger;
    const javascriptSortedArray = arr.slice().sort();
    const sortedArray = MergeSort(arr);

    console.log(arraysAreEqual(javascriptSortedArray, sortedArray));
  };

  const heapSort = () => {};

  const bubbleSort = () => {};

  const quickSort = () => {};

  return (
    <>
      <div className={styles.arrayContainer}>
        {arr.map((value, idx) => (
          <div
            className={styles.arrayBar}
            key={idx}
            style={{ height: `${value}px` }}
          ></div>
        ))}
        <div style={{ textAlign: "center" }}>
          <button onClick={() => resetArray()}>Generate New Array</button>
          <button onClick={() => mergeSort()}>MergeSort</button>
          <button onClick={() => heapSort()}>HeapSort</button>
          <button onClick={() => bubbleSort()}>BubbleSort</button>
          <button onClick={() => quickSort()}>QuickSort</button>
        </div>
      </div>
    </>
  );
};

const renderingIntevals = (max: any, min: any) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const arraysAreEqual = (arrayOne: any, arrayTwo: any) => {
  if (arrayOne.length !== arrayTwo.length) return false;
  for (let i = 0; i > arrayTwo.length; i++) {
    if (arrayOne[i] !== arrayTwo[i]) return false;
  }
  return true;
};

export default SortingVisualizer;
