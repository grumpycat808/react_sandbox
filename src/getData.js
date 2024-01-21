import axios from "axios";
export const getData = () => {
  return new Promise((resolve, reject) => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(function (response) {
        // console.log(response);
        resolve(response);
      });
  });
};
