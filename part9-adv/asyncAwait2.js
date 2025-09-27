// function fetchPostData(){
//     return new Promise((resolve)=>{
//         setTimeout(() => {
//             resolve("Post data fetchpostdata")
//         }, 2000);
//     });
// }

// function fetchCommentData(){
//     return new Promise((resolve)=>{
//     setTimeout(() => {
//             resolve("comment data fetched fetchcommentdata")
//     }, 3000);
//     });
// }

// async function getBlogData(){
//     try{
//         console.log("fetch blog data getfetchBlogData");
//         // const BlogData = await fetchPostData();
//         // const commentData = await fetchCommentData();
//         // instead of this we can use promise all
//         const [posData, commentData]= await Promise.all([
//             fetchPostData(), fetchCommentData(),

//         ]);
//         console.log(posData);
//         console.log(commentData)
//         console.log("fetch complete")
//     }catch(error){
//         console.log("error fetching blog  errorgetfetchBlog",error)
//     }
// }
// getBlogData();

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