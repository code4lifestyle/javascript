function fetchData(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            let success = true;
            if(success){
                resolve("data fetched successfully")
            }else{
                reject('There is an Error')
            }
        },4000)
    })
}

function UpdateData(){
    return new Promise(()=>{
        setTimeout(()=>{
            let success = true;
            if (success){
                resolve('Updated successfully')
            }else{
                reject('There is an Error')
            }
        },4000)
    })
}