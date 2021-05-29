import React from 'react'

const Videocomp = () => {

    const loadhtml = () => {
        if (true) {
            return (<div className="videotag">
                <video className="video" controls>
                    <source src="video.mp4" type="video/mp4" />
                </video>
            </div>
            )
        }
    }

    return (
        loadhtml()
    )
}

export default Videocomp;
