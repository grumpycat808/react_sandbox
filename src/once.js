const [messages, setMessages] = useState([]);
// const makeRequest = () => {
//   getData().then((response) => setMessages(response.data));
// };
// useEffect(() => {
//   makeRequest();
// }, []);

let i = 1;

function incrementBy(value) {
  i += value;
  return i;
}

function once(callback) {
  let invoked = false;

  var original = callback;
  callback = function () {
    // Do something with arguments:
    console.log(arguments);
    return original.apply(this, arguments);
  };
  // console.log(func.length);
  // return () => {
  //   if (!invoked) {
  //     invoked = true;
  //     // return func();
  //   } else {
  //   }
  // };
}

function intersectionWith(comparator, ...arrays) {
  let returnArr = [];

  if (arrays.length === 0) return arrays;
  return (returnArr = arrays.reduce((accumulator, currentVal) => {
    return accumulator.filter((item) => {
      return (
        currentVal.filter((currentValItem) => comparator(currentValItem, item))
          .length > 0
      );
    });
  }));
}
/*
  filter items in the accumulator by whether or not it is the "same" as one of the values in the next item
  */
const arr1 = [
  { x: 1, y: 2 },
  { x: 2, y: 3 },
];
const arr2 = [
  { y: 2, x: 1 },
  { x: 3, y: 4 },
];
// const arr3 = [
//   { x: 2, y: 3 },
//   { x: 3, y: 4 },
//   { x: 5, y: 6 },
//   { x: 6, y: 7 },
// ];

const result = intersectionWith(
  (a, b) => a.x === b.x && a.y === b.y,
  arr1,
  arr2
);
// console.log("result", result);

const test = [5, 7, 9, 12];
