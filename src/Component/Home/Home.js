import React from 'react'
import Copyright from './Copyright/Copyright';
import Slide from './Slide/Slide';
import "./Home.css";
const Home = () => {
    return (
      <div className="home">
        <Slide />
        <Copyright />
      </div>
    );
}

export default Home
