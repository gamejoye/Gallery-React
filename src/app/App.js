import { Divider } from "antd";
import React from "react";
import AllPictures from "../components/AllPictures";
import FavoritePictures from "../components/FavoritePictures";
import Nav from "../components/Nav";
import './App.css'
function App(props) {
    return (
        <div className='app'>
            <Nav />
            <Divider>favoritePictures</Divider>
            <FavoritePictures />
            <Divider>AllPictures</Divider>
            <AllPictures />
        </div>
    )
}
export default App;