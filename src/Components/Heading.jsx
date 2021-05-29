import React from 'react'
const Heading = ({ title, Desc, isName = false }) => {

    const loadtheme = () => {
        if (isName) {
            return (<div className="header">
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
            </div>)
        }
        else {
            return (<div className="header">
                <div className="tagline">
                    <p className="name-com">
                        {title}
                    </p>
                    <p className="belowname">
                        {Desc}
                    </p>
                </div>
            </div>
            )
        }
    }
    return (
        loadtheme()
    )
}

export default Heading;
