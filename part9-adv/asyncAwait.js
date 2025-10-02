function fetchUserData(){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            reject({name:"jhin Dovee", url:"https://chaicode.com"})
        }, 3000);
    })
}


async function getUserData(){
            try{
                console.log("fetching userData..........");
                const userData = await fetchUserData();
                console.log("user data fetched successfully")
                console.log("user data", userData )
                }catch(error){
                console.log("error in fetching Data", error)
            };
            }
            getUserData();

    function fetchUserData(){
        return new Promise((resolve, reject)=>{
            setTimeout(() => {
                console.log()
            }, 2000);
        })
    }