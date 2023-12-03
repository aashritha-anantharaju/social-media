import { AiFillDelete } from "react-icons/ai";
import { PostItems } from "../store/post-items-store";
import { useContext } from "react";

const Posts = ({post}) => {
    const {deleteP}= useContext(PostItems);

    return (
      <div className="card post-card" style={{ width: "30rem" }}>
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">
            {post.title}
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" onClick={()=>deleteP(post.id)}>
              <AiFillDelete />
            </span>
          </h5>
          <p className="card-text">{post.body}</p>
          {post.tags.map((tag) => (
            <span key={tag} className="badge bg-primary hashtag">{tag}</span>
          ))}
        </div>
        <div className="alert alert-success reaction" role="alert">
          {post.reactions} people reacted!
        </div>
      </div>
    );
  };
  export default Posts;
  