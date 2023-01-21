import Post from "../post/Post"
import Share from "../share/Share"
import "./feed.css"
import { posts } from "../../rowData"

export default function Feed() {
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share/>
        {posts.map(p=>(
        <Post key={p.id} post={p}/>
        ))}
      

      </div>
    </div>
  )
}
