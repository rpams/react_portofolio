import React from 'react';
import "./home.css";

const Data = () => {
  return (
    <div className='home__data'>
      <h1 className='home__title'>
         Roma Pams 
         {/* <span className="home__hand">👋</span> */}
         
         {/* image here */}
      </h1>
      <h3 className='home__subtitle'>Visual Designer</h3>
      <p className='home__description'>I'm creative designer based i New York, and I'm very passionate and dedicated to my work.</p>
      <a href='#contact' className='button button--flex'>
         Say Hello{"   "} 
         <i class="uil sx uil-message"></i>
      </a>
    </div>
  )
}

export default Data