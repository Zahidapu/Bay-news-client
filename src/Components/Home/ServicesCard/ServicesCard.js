/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

const ServicesCard = ({ service }) => {
    return (

        <div className="card col-md-4">
            <div class=" m-3 "  >
                <div className={` text-center   `}>
                    <div className="d-flex justify-content-center " >
                        <div className="card-body " >
                            <img style={{ marginTop: '10px', height: '180px', width: '180px', color: 'info' }} src={service.img} alt="" />

                            <h4 className="card-title ">{service.title}</h4>
                            <p className="card-text">{service.description}</p>
                            <h5 style={{ color: 'black', fontWeight: '500' }}>{"$"}{service.price}</h5>

                            <button type="button" className="btn btn-danger">Buy Our Services</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ServicesCard;