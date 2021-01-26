import axios from "axios";

export const getData = () => {
    return new Promise((resolve, reject) => {
        axios.get("https://jsonplaceholder.typicode.com/users").then((result) => {
            resolve(result);   
        }).catch((error) => {
            reject(error);
        })
    })
}
