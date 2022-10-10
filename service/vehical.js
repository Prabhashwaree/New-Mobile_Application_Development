import axios from "../axios";

class Vehicles {

    postVehicles = async (data) => {
        const promise = new Promise((resolve, reject) => {
          axios.post("http://localhost:4000/Vehicle", data)
            .then((res) => {
              return resolve(res);
            })
            .catch((err) => {
              return resolve(err);
            });
        });
        return await promise;
      };

      PutVehicles = async (data) => {
        const promise = new Promise((resolve, reject) => {
           axios.put('http://localhost:4000/Vehicle', data)
           .then((res) => {
               return resolve(res)
           })
           .catch((err) => {
               return resolve(err)
           })
        })
        return await promise;
   };

   deleteVehicles = async (params) => {
    const promise = new Promise((resolve, reject) => {
       axios.delete('http://localhost:4000/Vehicle', {params: params})
       .then((res) => {
           return resolve(res)
       }) 
       .catch((err) => {
           return resolve(err)
       })
    })
    return await promise;
};




}

export default new Vehicles();
