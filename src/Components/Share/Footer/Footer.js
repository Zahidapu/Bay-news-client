/* eslint-disable jsx-a11y/anchor-is-valid */
import './footer.css';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faFacebook , faInstagram , faTwitter , faYoutube } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer className="bg-danger text-white p-5">
            <div className="row">
                <div className="col-md-4 text-center ">
                    <FontAwesomeIcon style={{ fontSize: '20px' }} icon={faMapMarkerAlt} className="" />
                    <p>Narayanganj 1430</p>
                    <p>Dhaka,Bangladesh</p>
                </div>
                <div className="col-md-2 text-dark">
                    <h6 style={{ marginLeft: '30px' }}>Company</h6>
                    <ul className="">
                        <li><a href="#" className="text-dark">About</a></li>
                        <li><a href="#" className="text-dark">Project</a></li>
                        <li><a href="#" className="text-dark">Our Team</a></li>
                        <li><a href="#" className="text-dark">Team Conditions</a></li>
                        <li><a href="#" className="text-dark">Submit Listing</a></li>
                    </ul>
                </div>
                <div className="col-md-2">
                    <h6 style={{ marginLeft: '30px' }}>Quick Links</h6>
                    <ul className="">
                        <li><a href="#" className="text-dark">Quick Links</a></li>
                        <li><a href="#" className="text-dark">Sales</a></li>
                        <li><a href="#" className="text-dark">contact</a></li>
                        <li><a href="#" className="text-dark">Our Blog</a></li>
                    </ul>
                </div>
                <div className="col-md-4">
                    <h6 >About Us</h6>
                    <p>Our imagery moves hearts, minds and opinions; powers commerce, ideas and perceptions. We are keenly aware that every day, our business affects individuals and society on many levels. That’s why we stand for creative rights that help power creative careers, for freedom of the press and the protection of journalists—both essential to a free society—and for generosity that helps communities flourish.</p>
                    <ul className="d-flex ">
                        <li><a href="#" className="me-1"><FontAwesomeIcon style={{ fontSize: '20px' }} icon={faFacebook} className="" /></a></li>
                        <li><a href="#" className="me-1"><FontAwesomeIcon style={{ fontSize: '20px' }} icon={faInstagram} className="" /></a></li>
                        <li><a href="#" className="me-1"><FontAwesomeIcon style={{ fontSize: '20px' }} icon={faTwitter} className="" /></a></li>
                        <li><a href="#" className="me-1"><FontAwesomeIcon style={{ fontSize: '20px' }} icon={faYoutube} className="" /></a></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;