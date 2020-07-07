import React, { useState, useEffect } from "react";
import styles from "./sortingVisualizer.module.scss";

const SortingVisualizer = () => {
  const [arr, setArr] = useState([]);

  useEffect(() => resetArray(), []);

  const resetArray = () => {
    const arr = [] as any;
    for (let i = 0; i < 100; i++) {
      arr.push(renderingIntevals(5, 1000));
    }

    setArr(arr);
  };

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
      </div>
    </>
  );
};

export default SortingVisualizer;
