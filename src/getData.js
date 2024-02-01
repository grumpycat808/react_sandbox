import axios from "axios";
export const getData = async () => {
  return await axios.get("https://jsonplaceholder.typicode.com/users");
};
