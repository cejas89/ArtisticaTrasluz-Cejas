import productos from "./productos"


const customFetch = new Promise ((resolve, reject) => {
    setTimeout(() => {
        resolve(productos)
        reject(err => console.log(err));    
    }, 3000);
})

export default customFetch;

