import React from 'react';
import "./Postcard.css";
const postcard = ({ img, title, desc }) => {

    return (
        <div className="postcards1">
            <div className="icon">
                <img src={img} alt="icon" />
            </div>
            <h2>
                {title}
            </h2>
            <h3 className="belowtext">
                {desc}
            </h3>
        </div>

    )
}

export default postcard;
