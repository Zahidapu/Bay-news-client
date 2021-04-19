import React from 'react';
import ServicesCard from '../ServicesCard/ServicesCard';
import service1 from '../../../images/service1.png';
import service2 from '../../../images/service2.png';
import service3 from '../../../images/service3.png';

const services = [
    {
        id: 1,
        title: 'Rights & Clearance',
        img:service1,
        price:199,
        description: 'Our imagery moves hearts, minds and opinions; powers commerce, ideas and perceptions. We are keenly aware that every day, our business affects individuals and society on many levels.'
    },
    {
        id: 2,
        title: 'Customer support',
        img:service2,
        price:299,
        description: 'Interested in being a contributor ? Apply now. Already a contributor? Sign in for tools and support. Top frequently asked questions. Ask anything that you want to know'
    }, {
        id: 3,
        title: 'Visual GPS',
        price:599,
        img:service3,
        description: 'Welcome to a new way to think about visual storytelling. Building on Getty Images 25 years of trend research and reporting, our multi-faceted approach leverages our internal search data'
    },
]

const Services = () => {
    return (
        <div className="p-5">
            <h3 className="text-center my-5">Our <span className="text-danger">Services</span></h3>
            <div className="row">
                {
                    services.map(service => <ServicesCard key={service.id} service={service} />)
                }
            </div>
        </div>
    );
};

export default Services;