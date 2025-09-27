function fetchPostData(){
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve("Post data fetchpostdata")
        }, 2000);
    })
}

function fetchCommentData(){
    return new Promise((resolve)=>{
    setTimeout(() => {
            resolve("comment data fetched fetchcommentdata")
    }, 3000);
    })
}

async function getBlogData(){
    try{
        console.log("fetch blog data getfetchBlogData");
        const fetchPostData = await fetchPostData();
        const fetchCommentData = await fetchCommentData();
        console.log("fetch complete")
    }catch(error){
        console.log("error fetching blog  errorgetfetchBlog")
    }
}
getBlogData();