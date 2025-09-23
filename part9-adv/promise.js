function fetchData(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            let success = false;
            if(success){
                resolve("data fetched successfully")
            }else{
                reject('There is an Error')
            }
        },4000)
    })
}
        fetchData()
        .then((data)=> console.log(data))
        .catch((error)=> console.log(error))


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