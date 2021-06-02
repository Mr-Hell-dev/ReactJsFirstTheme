import React from 'react'
import "./Videocomp.css";
const Videocomp = () => {
    return (
        <>
            {
                true ?
                    <div className="videotag">
                        <video className="video" controls>
                            <source src="video.mp4" type="video/mp4" />
                        </video>
                    </div>
                    :
                    <div>
                        NO Videos
                    </div>
            }
        </>

    )
}

export default Videocomp;
