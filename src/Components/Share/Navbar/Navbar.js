/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { userContext } from '../../../App';

const Navbar = () => {
    // use Context 
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    return (
        <div className="">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a style={{ marginLeft: '50px' }} className="navbar-brand text-danger ml-5" href="/">BAY NEWS PHOTOGRAPHY SERVICE</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav  ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/customerDashboard">Dashboard</Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link " href="#"  >Our Team</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Contact Us</a>
                            </li>
                        </ul>
                        <div className="">
                            <button className="btn btn-danger me-2 "><Link to="/login" style={{ textDecoration: 'none',color: 'white' }}>Sign In</Link></button>
                        </div>
                        <div className="">
                            <button className="btn btn-danger me-2"><Link to="/login" style={{ textDecoration: 'none',color: 'white'}}>Sign Up</Link></button>
                        </div>
                        <div className="">
                            <h4 className="text-danger me-2">{loggedInUser.displayName}</h4>
                        </div>
                        <div className="">
                            <img style={{width:'25px'}} src={loggedInUser.photoURL} alt="user" />
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;