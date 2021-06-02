import React from 'react';
import "./Heading.css";
const Heading = ({ title, Desc, isName = false }) => {

    return (
        <>
            {isName ?
                <div className="header">
                    <div className="tagline">
                        <p className="name-com">
                            {title}
                        </p>
                        <p className="belowname">
                            {Desc}
                        </p>
                    </div>
                    <div className="bottongroup">
                        <div className="insidebuttongroup">
                            <button className="centeredbtn clrpurple"><strong>Get Started</strong></button>
                            <button className="centeredbtn"><strong>Learn More</strong></button>
                        </div>
                    </div>
                </div>
                :
                <div className="header">
                    <div className="tagline">
                        <p className="name-com">
                            {title}
                        </p>
                        <p className="belowname">
                            {Desc}
                        </p>
                    </div>
                </div>
            }
        </>
    )
}

export default Heading;
