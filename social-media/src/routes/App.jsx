import './App.css';
import Footer from '../components/Footer'
import Header from '../components/Header'
import SideBar from '../components/SideBar'
import {useState} from "react"
import {PostProvider} from '../store/post-items-store';
import { Outlet } from 'react-router-dom';

function App() {
  const[select,setSelect]=useState("Home")
  return (
    <>
      <PostProvider>
      <div className='app-container'>
      <SideBar select={select} setSelect={setSelect}></SideBar>
      <div className='content'>
      <Header></Header>
      <Outlet/>
      <Footer></Footer>
      </div>
      </div>
      </PostProvider>
    </>
  )
}
export default App;
