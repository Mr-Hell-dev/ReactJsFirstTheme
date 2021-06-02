import React from 'react';

import Heading from "../Components/Header/Heading";
import Videocomp from "../Components/Videocomp/Videocomp";
import Postcards from '../Components/Postcard/Postcards';
import Workflow from "../Components/Workflow/Workflow";

const Pages = () => {

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
        </>
    )
}

export default Pages;
