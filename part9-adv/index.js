async function dataServer(){
    let result = await fetch("https://fakestoreapi.com/products");
    console.log(await result.json());
}
dataServer();

fetch('https://fakestoreapi.com/products"').then((data)=>{
    console.log(data)
}).catch((error)=>{
console.log(error);
});
