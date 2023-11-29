import { createContext, useReducer } from "react";
const DEFAULT_VALUE = [
  {
    id: "1",
    title: "Going to Mumbai",
    body: "Hi Friends, I am going to Mumbai for my vacations. Hope to enjoy a lot. Peace out.",
    reactions: 2,
    userId: "user-9",
    tags: ["vacation", "Mumbai", "Enjoying"],
  },
  {
    id: "2",
    title: "Paas ho bhai",
    body: "4 saal ki masti k baad bhi ho gaye hain paas. Hard to believe.",
    reactions: 15,
    userId: "user-12",
    tags: ["Graduating", "Unbelievable"],
  },
];

const PostItems = createContext({
  postList: [],
  addP: () => {},
  deleteP: () => {},
});

const PostReducer = (curr, action) => {
  return curr;
};

const PostProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(PostReducer, DEFAULT_VALUE);

  const addP = () => {};

  const deleteP = () => {};
  //console.log(postList);

  return (
    <PostItems.Provider value={{ postList, addP, deleteP }}>
      {children}
    </PostItems.Provider>
  );
};

export {PostProvider,PostItems};
