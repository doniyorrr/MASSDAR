import React from 'react';
import logo from "./images/massdar.5701287b.png"

const Home = () => {

    // const res = fetch("https://nbu.uz/uz/exchange-rates/json/")
    // .then(data => data.json())
    // .then(data => console.log(data))

    
    return (
        <div className='h-full flex'>
            <img src={logo}  alt="massdar" className='w-4/5 m-auto items-center'/>
        </div>
    );
}

export default Home;
