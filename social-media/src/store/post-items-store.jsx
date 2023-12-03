import { createContext, useReducer } from "react";

const PostItems = createContext({
  postList: [],
  addP: () => {},
  deleteP: () => {},
});

const PostReducer = (curr, action) => {
  let newList=curr;
  if(action.type==='DELETE_P'){
    newList=curr.filter((post)=>post.id !== action.payload.postID)
  }
  else if(action.type==='ADD_P'){
    newList=[action.payload,...curr]
    
  }
  else if(action.type==='ADD_INTIAL_P'){
    newList=action.payload.posts
  }
  return newList;
};

const PostProvider = ({ children }) => {
  // const [fetching,setFetching] = useState(false);  
  const [postList, dispatchPostList] = useReducer(PostReducer, []);

  const addP = (post) => {
    console.log('addp func',post);
    dispatchPostList({
      type:"ADD_P",
      payload:post
    })
  };

  const addIntialP = (posts) => {
    dispatchPostList({
      type:"ADD_INTIAL_P",
      payload:{
        posts
      }
    })
  };

  const deleteP = (postID) => {
    dispatchPostList({
      type:"DELETE_P",
      payload:{
        postID,
      }
    })
  };


  return (
    <PostItems.Provider value={{ postList, addP,deleteP }}>
      {children}
    </PostItems.Provider>
  );
};

export {PostProvider,PostItems};
