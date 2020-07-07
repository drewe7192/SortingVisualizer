import React, { useState, useEffect } from "react";
import styles from "./sortingVisualizer.module.scss";

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

  const mergeSort = () => {};

  const heapSort = () => {};

  const bubbleSort = () => {};

  const quickSort = () => {};

  const renderingIntevals = (max: any, min: any) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

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

export default SortingVisualizer;
