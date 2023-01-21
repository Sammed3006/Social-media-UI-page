import "./post.css"
import { MoreVert } from "@mui/icons-material"
import { users } from "../../rowData"
import { useState } from "react";

export default function Post({post}) {
   const [like,setLike]=useState(post.like);
   const [isliked , setIsliked]=useState(false)

   const likeHandler=()=>{
    setLike(isliked ? like-1 : like+1)
    setIsliked(!isliked)
   
   }
  return (
    <div className="post">
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img src={users.filter(u=>u.id===post.userId)[0].profilePicture} alt="" className="postProfileImg" />
                    <span className="postUsername">{users.filter(u=>u.id===post.userId)[0].username}</span>
                    <span className="postDate">{post.date}</span>
                </div>
                <div className="postTopRight"></div>
                <MoreVert/>
            </div>
            <div className="postCenter">
                <span className="postText">{post?.desc}</span>
                <img src={post.photo} alt="" className="postImg" />
            </div>
            <div className="postBottom">
            <div className="postBottomLeft">
                <img src="/assets/like.png" alt="" className="likeIcon" onClick={likeHandler} />
                <img src="/assets/heart.png" alt="" className="likeIcon"  onClick={likeHandler}  />
                <span className="postLikeCounter">{like} People liked</span>

            </div>
                <div className="postBottomRight"> 
                <span className="postCommentsText">{post.comments} comments</span>
                </div>

            </div>

        </div>
      
    </div>
  )
}
