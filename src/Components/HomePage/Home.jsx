import React from 'react';
import Activities from './Activities';
import "./Home.css";
import Inspiration from './Inspiration';
import Contact from './Contact';
import Footer from './Footer';

const Home = () => {
  return (
    <div className='main-homepage'>
      <div class='home'>
      <div class="hd">
        <h1>Walchand Linux Users' Group</h1>
        <p>Community | Knowledge | Share</p>
      </div>
      </div>
      <Activities/>
      <Inspiration/>
      <br/>
      <br/>
      <br/>
      <br/>
      <Contact/>
      <Footer/>
      </div>
  )
}

export default Home;