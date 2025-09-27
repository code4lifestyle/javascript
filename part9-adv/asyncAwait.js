function fetchUserData(){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve({name:"jhin Dovee", url:"https://chaicode.com"})
        }, 3000);
    })
}


async function getUserData(){
            try{
                console.log("fetching userData..........");
                const userData = await getUserData();
                console.log("user data fetched successfully")
                console.log("user data", userData )
                }catch(error){
                console.log("error in fetching Data", error)
            };
            }
            getUserData();