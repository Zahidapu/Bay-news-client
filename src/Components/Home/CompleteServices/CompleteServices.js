import React from 'react';
import protest from '../../../images/news.jpg';

const CompleteServices = () => {
    return (
        <div className=" bg-light p-5 my-5">
            <div className="row">
                <div className="col-md-6">
                    <img src={protest} className="img-fluid" alt="protest" />
                </div>
                <div className="col-md-6  align-self-center ">
                    <h4>Visual inspiration, curated by the<br /> screen<span className="text-danger "> experts.</span></h4>
                    <p className="text-secondary">Our featured curated collections showcase the best of our millions of images and videos. All captured by our leading photographers and videographers. All right here, at the ready.</p>
                    <div className="row my-5">
                        <div className="col-md-6 text-center">
                            <h4>Total Services</h4>
                            <h4 className="text-danger">48+</h4>
                        </div>
                        <div className="col-md-6 text-center">
                            <h4>Happy Customers</h4>
                            <h4 className="text-danger">Millions</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CompleteServices;
