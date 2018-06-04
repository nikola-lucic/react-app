import React from "react"
import PostItem from "./postItem"


const PostList = (props) => {
    const postList = props.ofPostsData
    return (
        <div className="container">
            <div className="row">
                {postList.map((post)=>{
                    return <PostItem key= {post.id} ofPost = {post}/>
                })}
            </div>
        </div>
    )
}

export default PostList;