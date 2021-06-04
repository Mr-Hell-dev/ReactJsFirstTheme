import "./Testimonial.css";
import React, { useState, useEffect } from 'react';
import { FcVoicePresentation } from "react-icons/fc";
import data from "../../database/database.json"
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';



const Testimonials = () => {
    const [cards, setcards] = useState({});
    const option = {
        loop: true,
        margin: 10,
        nav: true,
        dots: false,
        responsive: {
            0:
            {
                items: 1
            },
            700: {
                items: 2
            },
            1000:
            {
                items: 3
            }
        }

    }
    useEffect(() => {
        setcards(data.cards);
        return () => {
            setcards({});
        }
    }, [])
    return (
        <>
            {Object.keys(cards).length > 0 ?
                <OwlCarousel className='owl-theme'  {...option}>
                    {cards.map((s) => {
                        return (
                            <div className="item" key={s.id}>
                                <div className="card">
                                    <FcVoicePresentation className="icon" />
                                    <br />
                                    <h1>
                                        -- {s.title}
                                    </h1>

                                    <h2>
                                        {s.Desc}
                                    </h2>
                                    <div className="line normalline white">

                                    </div>
                                    <div>
                                        <h2 className="textwhite float-left font-mono">
                                            {s.name}/{s.ProjectName}
                                        </h2>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </OwlCarousel>
                :
                <h2>

                    No Result found......
                </h2>
            }
        </>
    )
}

export default Testimonials;