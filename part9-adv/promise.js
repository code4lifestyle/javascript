// function fetchData(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             let success = false;
//             if(success){
//                 resolve("data fetched successfully")
//             }else{
//                 reject('There is an Error')
//             }
//         },4000)
//     })
// }
//         fetchData()
//         .then((data)=> console.log(data))
//         .catch((error)=> console.log(error))

// fetch('https://jsonplaceholder.typicode.com/todos')
//   .then(response => {
//     if (!response.ok) throw new Error('Network response was not ok');
//     return response.json();
//   })
//   .then(json => console.log(json))
//   .catch(error => console.error('Error fetching data:', error));


// function UpdateData(){
//     return new Promise(()=>{
//         setTimeout(()=>{
//             let success = true;
//             if (success){
//                 resolve('Updated successfully')
//             }else{
//                 reject('There is an Error')
//             }
//         },7000)
//     })
// }
// let Responce = fetchData();
// console.log(Responce)
// let update = UpdateData();
// console.log(update);

// let ResultfromServer = fetch(
//     "https://jsonplaceholder.typicode.com/todos"
// ).then((response)=>{
//     if(!response.ok) throw console.error('responce is not OK');
//     return response.json();
// }).then((json) => {
//     todos = json.slice(0, 10);
//     todos.forEach((todo, index) => {
//       console.log(`Todo ${index + 1}: ID = ${todo.id}, Title = ${todo.title}, completed = ${todo.completed}`);
//     });
//   })
//   .catch((error) => console.error("Error fetching data:", error));
let a = 5;
let b = 10;
let result = a + b;
async function getData() {
    let resultServer = await fetch(
        "https://jsonplaceholder.typicode.com/todos/3");
        console.log(await resultServer.json());
}
getData();
console.log(result);
