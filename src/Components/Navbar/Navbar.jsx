import "./Navbar.css";
const Navbar = () => {
    return (
        <>
            {
                true ?
                    <div>
                        <div className="navbar">
                            <div className="logodiv">
                                <img alt="logo" className="img" src="logo.png" />
                            </div>
                            <ul className="navbarlinks">
                                <li className="navbarlink">
                                    Home
			                    </li>
                                <li className="navbarlink">
                                    Courses
			                    </li>
                                <li className="navbarlink">
                                    Contact Us
			                    </li>
                            </ul>
                        </div>
                        <div className="line">

                        </div>
                    </div>
                    :
                    <h2> Loading....</h2>
            }
        </>
    )
}

export default Navbar;
