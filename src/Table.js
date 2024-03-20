import React from "react";

function Table({ rows, columns }) {
  const arr = [];

  //rows: 4, columns: 5
  for (let index = 0; index < rows; index++) {
    arr.push([]);
  }
  for (let index = 0; index < columns; index++) {
    let number = 1;
    if (index % 2 === 0) {
      for (let j = 0; j < rows; j++) {
        arr[index][j] = number;
        number++;
      }
    } else {
      for (let j = rows - 1; j <= 0; j++) {
        arr[j][index] = number;
        number++;
      }
    }
  }
  console.log(arr);
  return <table></table>;
}

export default Table;
