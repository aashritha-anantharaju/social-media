import Posts from "./Posts";
import WelcomeMessage from "./WelcomeMessage";
import { useLoaderData } from "react-router-dom";

const PostList = () => {
  const postList = useLoaderData();
  
  return (
    <>
      
      { postList.length===0 && <WelcomeMessage/>}
      { postList.map((post)=>(
        <Posts key={post.id} post={post}/>))
      }
      
    </>
  );
};

export const postLoader = () => {
  return fetch("https://dummyjson.com/posts")
    .then((res) => res.json())
    .then((data) => {
      return data.posts;
    });
};
export default PostList;
