import React, { useState, useEffect } from 'react';
import Postcard from "./Postcard";
const Postcards = () => {

    const [postcard, setpostcard] = useState({});

    useEffect(() => {
        fetch("http://localhost:3001/postcards")
            .then(response => response.json())
            .then(data => setpostcard(data))
            .catch(err => console.log(err))
    }, [])



    const loadhtml = () => {
        if (Object.keys(postcard).length > 0) {
            return (
                <div className="postcards">
                    {postcard.map((s) => {
                        return <Postcard key={s.id} img={s.img} title={s.title} desc={s.Desc} />
                    })}
                    <div class="line normalline">

                    </div>
                </div>
            )

        }
        else {
            return (<h2>
                Please Wait....
            </h2>)
        }
    }

    return (
        loadhtml()
    )
}

export default Postcards;
