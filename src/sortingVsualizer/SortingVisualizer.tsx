import React, { useState, useEffect } from "react";
import "./SortingVisualizer.css";
import { MergeSort } from "./SortingAlgorithms";

const ANIMATION_SPEED = 1;

const ARRAY_BARS = 310;

const PRIMARY_COLOR = "green";

const SECONDARY_COLOR = "blue";

const SortingVisualizer = () => {
  const [arr, setArr] = useState([]);

  useEffect(() => resetArray(), []);

  const resetArray = () => {
    const arr = [] as any;
    for (let i = 0; i < ARRAY_BARS; i++) {
      arr.push(randomIntIntervals(5, 730));
    }
    setArr(arr);
  };

  const mergeSort = () => {
    const animations = MergeSort(arr);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName(
        "arrayBar"
      ) as HTMLCollectionOf<HTMLElement>;
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneidx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneidx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 3 === 0 ? PRIMARY_COLOR : SECONDARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
        }, i * ANIMATION_SPEED);
      }
    }
  };

  const heapSort = () => {};

  const bubbleSort = () => {};

  const quickSort = () => {};

  const testSortingAlgorithms = () => {
    for (let i = 0; i < 100; i++) {
      const array = [];
      const length = randomIntIntervals(1, 1000);
      for (let i = 0; i < length; i++) {
        array.push(randomIntIntervals(-1000, 1000));
      }
      const javascriptSortedArray = arr.slice().sort((a, b) => a - b);
      const sortedArray = MergeSort(arr.slice());
      console.log(arraysAreEqual(javascriptSortedArray, sortedArray));
    }
  };

  return (
    <>
      <div className="arrayContainer">
        {arr.map((value, idx) => (
          <div
            className="arrayBar"
            key={idx}
            style={{ backgroundColor: PRIMARY_COLOR, height: `${value}px` }}
          ></div>
        ))}
        <div style={{ textAlign: "center" }}>
          <button onClick={() => resetArray()}>Generate New Array</button>
          <button onClick={() => mergeSort()}>MergeSort</button>
          <button onClick={() => heapSort()}>HeapSort</button>
          <button onClick={() => bubbleSort()}>BubbleSort</button>
          <button onClick={() => quickSort()}>QuickSort</button>
          <button onClick={() => testSortingAlgorithms()}>
            Test SortingAlgorithms Console.log
          </button>
        </div>
      </div>
    </>
  );
};

const randomIntIntervals = (max: any, min: any) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const arraysAreEqual = (arrayOne: any, arrayTwo: any) => {
  if (arrayOne.length !== arrayTwo.length) return false;
  for (let i = 0; i < arrayTwo.length; i++) {
    if (arrayOne[i] !== arrayTwo[i]) return false;
  }
  return true;
};

export default SortingVisualizer;
