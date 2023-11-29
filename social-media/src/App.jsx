import './App.css';
import CreatePost from './components/CreatePost';
import Footer from './components/Footer'
import Header from './components/Header'
import PostList from './components/PostList'
import SideBar from './components/SideBar'
import {useState} from "react"
import {PostProvider} from './store/post-items-store';

function App() {
  const[select,setSelect]=useState("Home")
  return (
    <>
      <PostProvider>
      <div className='app-container'>
      <SideBar select={select} setSelect={setSelect}></SideBar>
      <div className='content'>
      <Header></Header>
      {select==="Home"?<PostList></PostList>:<CreatePost></CreatePost>}
      <Footer></Footer>
      </div>
      </div>
      </PostProvider>
    </>
  )
}
export default App;
