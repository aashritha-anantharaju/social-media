import { useContext } from "react";
import Posts from "./Posts";
import { PostItems } from "../store/post-items-store";

const PostList = () => {
  const {postList} = useContext(PostItems)
  console.log(postList);
  return (
    <>
      {postList.map((post)=>(
        <Posts key={post.id} post={post}/>))
      }
      
    </>
  );
};
export default PostList;
