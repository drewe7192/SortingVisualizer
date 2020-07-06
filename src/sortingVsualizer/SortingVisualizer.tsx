import React, { useState, useEffect } from "react";
import styles from "./sortingVisualizer.module.scss";

const SortingVisualizer = () => {
  const [arr, setArr] = useState([]);

  const resetArray = () => {
    const arr = [] as any;
    for (let i = 0; i < 100; i++) {
      arr.push(renderingIntevals(4, 1000));
    }

    setArr(arr);
  };

  useEffect(() => resetArray());

  const renderingIntevals = (max: any, min: any) => {
    return <>{Math.floor(Math.random() * (max - min + 1) + min)} </>;
  };

  return (
    <>
      {arr.map((value, idx) => (
        <div className={styles.arrayBar} key={idx}>
          {value}
        </div>
      ))}{" "}
    </>
  );
};

export default SortingVisualizer;
