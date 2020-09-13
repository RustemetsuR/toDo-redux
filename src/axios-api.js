import axios from "axios";

const instance = axios.create({
  baseURL: "https://todo-redux-f855e.firebaseio.com/"
});

export default instance;