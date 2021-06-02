import React, { useState, useEffect } from 'react';
import Postcard from "./Postcard";
import "./Postcard.css";
import data from "../../database/database.json";
const Postcards = () => {

    const [postcard, setpostcard] = useState({});

    useEffect(() => {
        setpostcard(data.postcards);
        return () => {
            setpostcard({});
        }
    }, [])

    return (
        <>
            { Object.keys(postcard).length > 0 ?
                <div className="postcards">
                    {postcard.map((s) => {
                        return <Postcard key={s.id} img={s.img} title={s.title} desc={s.Desc} />
                    })}
                    <div class="line normalline">

                    </div>
                </div>
                :
                <h1>
                    Please Wait....
                </h1>
            }
        </>
    )
}

export default Postcards;


