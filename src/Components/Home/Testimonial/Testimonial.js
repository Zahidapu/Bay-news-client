import React, { useEffect, useState } from 'react';
import Phichi from '../../../images/phici.jpg';
import TestimonialCard from '../TestimonialCard/TestimonialCard';

const Testimonials = [
    {
        id: 1,
        img: Phichi,
        name: 'Muhammad',
        job: 'Employee, Google',
        desc: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts',
    },
    {
        id: 2,
        img: Phichi,
        name: 'Muhammad',
        job: 'Employee, Google',
        desc: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts',
    },
    {
        id: 3,
        img: Phichi,
        name: 'Muhammad',
        job: 'Employee, Google',
        desc: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts',
    },
    {
        id: 4,
        img: Phichi,
        name: 'Muhammad',
        job: 'Employee, Google',
        desc: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts',
    },
]


const Testimonial = () => {
    const [review, setReview] = useState([]);
    useEffect(() => {
        // data load to database
        fetch('http://localhost:4444/review')
            .then((response) => response.json())
            .then((review) => {
                console.log(review)
                setReview(review)
            })
    },[])






    return (
        <section className="Testimonial-section container my-5">
            <h4 className="text-danger text-center my-5">Customer's Review</h4>
            <div className="row">
                {
                    review.map(Testimonial => <TestimonialCard key={Testimonial.id} Testimonial={Testimonial} />)
                }
{/* 
                <TestimonialCard review={review} /> */}


            </div>
        </section>
    );
};

export default Testimonial;