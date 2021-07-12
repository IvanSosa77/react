import React from 'react'
import image from '../assets/banner.jpg'
function Home() {
    return (
        <div className="Home">
        <header id="header__tip"> 
                <h1>Welcome to SneakerHouse </h1>
                <p>Since 1992 - NewYork</p>
                <img src={image} alt="banner"></img>
        </header>
        </div>
    )
}

export default Home