import React from 'react';
import news from '../../../images/Header.jpg';

const HeaderMain = () => {
    return (
        <div  className="row bg-light p-5">
            <div className="col-md-6 align-self-center">
                <h3>Moving the world with images</h3>
                <p className="text-secondary">Find the perfect royalty-free image for your next project from the world's best photo library of creative stock photos, vector art illustrations, and stock photography.</p>
                <button type="button" className="btn btn-danger">Subscribe Now</button>
            </div>
            <div className="col-md-6">
                <img src={news} alt="news" className="img-fluid" />
            </div>
        </div>
    );
};

export default HeaderMain;