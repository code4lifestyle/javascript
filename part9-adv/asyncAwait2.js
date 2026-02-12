function fetchPostData(){
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve("Post data fetchpostdata")
        }, 2000);
    });
}

function fetchCommentData(){
    return new Promise((resolve)=>{
    setTimeout(() => {
            resolve("comment data fetched fetchcommentdata")
    }, 3000);
    });
}

async function getBlogData(){
    try{
        console.log("fetch blog data getfetchBlogData");
        const [posData, commentData]= await Promise.all([
            fetchPostData(), fetchCommentData(),

        ]);
        console.log(posData);
        console.log(commentData)
        console.log("fetch complete")
    }catch(error){
        console.log("error fetching blog  errorgetfetchBlog",error)
    }
}
getBlogData();

function resolveAfter2second(){
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve("resolved")
        }, 2000);
    })
}

async function asyncCall(){
    console.log("calling");
    const result = await resolveAfter2second();
    console.log("result is :", result);
}
asyncCall();

function fetchuserData(){
    return new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve({name: "jhon", url:'https://fakestoreapi.com/products'})
    }, 3000);
    })
}

async function getUserData(){
    try{
        console.log("fetching user Data........");
        const userData = await fetchuserData();
        console.log("fetched successfully")
        console.log("User data :",userData);
    } catch (error){
        console.log("there is an error", error);
    }
}
getUserData();

function fetchmsgData(){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve("msg data fetched")
        }, 3000);
    })
}
function commentData(){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve("comment data fetched");
        }, 5000);
    })
}
async function getBlogData(){
    try {
        console.log('fetching msg data...');
        const result1 = await fetchmsgData();
        console.log(result1);
        console.log("fetching comment data...")
        const result2 =  await commentData();
        console.log(result2);
    } catch (error) {
        console.log("there is an Error", error)
    }
}
getBlogData();