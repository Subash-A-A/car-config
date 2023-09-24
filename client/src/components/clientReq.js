import axios from "axios";

export const saveCarData = (postData) => {
  axios
    .post("http://localhost:4000/app/cardata", postData)
    .then((res) => {
      console.log("Data Posted\n" + res);
    })
    .catch((err) => {
      console.error(err);
    });
};

export const saveOrder = (postData) => {
  axios
    .post("http://localhost:4000/app/order", postData)
    .then((res) => {
      console.log("Data Posted\n" + res);
    })
    .catch((err) => {
      console.error(err);
    });
};

export const getCartCount = (postData) => {
  const promise = axios.post("http://localhost:4000/app/cartCount", postData);
  return promise;
};
