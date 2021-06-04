import React from 'react';

import Heading from "../Header/Heading";
import Videocomp from "../Videocomp/Videocomp";
import Postcards from '../Postcard/Postcards';
import Workflow from "../Workflow/Workflow";
import Testimonials from "../Testimonial/Testimonials";
import Footer from "../Footer/Footer";
const Home = () => {

    const name = () => {
        return (
            <span>Coedify<span className='clrsoftblue'>Technologies</span> </span>
        );
    }

    return (
        <>
            <Heading title={name()} isName={true} Desc={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"} />
            <Videocomp />
            <Heading title={"Build Up The Whole Picture"} Desc={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"} />
            <Postcards />
            <Heading title={"Workflow that just works"} Desc={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"} />
            <Workflow />
            <Heading title={"Projects"} Desc={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"} />
            <Testimonials />
            <Footer />
        </>
    )
}

export default Home;
