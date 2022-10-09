import axios from "../axios";

class User {

  postUser = async (data) => {
    const promise = new Promise((resolve, reject) => {
      axios.post("http://localhost:4000/User", data)
        .then((res) => {
          return resolve(res);
        })
        .catch((err) => {
          return resolve(err);
        });
    });
    return await promise;
  };



}

export default new User();
