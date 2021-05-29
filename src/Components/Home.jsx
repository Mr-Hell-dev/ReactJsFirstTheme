import React from 'react';
import Navbar from "./Navbar";
import Heading from "./Heading";
import Videocomp from "./Videocomp";
import Postcards from './Postcards';
const Home = () => {

    const name = () => { return (<span>Coedify<span className='clrsoftblue'>Technologies</span> </span>); }

    return (
        <div className="my-container">
            <Navbar />
            <Heading title={name()} isName={true} Desc={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"} />
            <Videocomp />
            <Heading title={"Build Up The Whole Picture"} Desc={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"} />
            <Postcards />
        </div>
    )
}

export default Home;
