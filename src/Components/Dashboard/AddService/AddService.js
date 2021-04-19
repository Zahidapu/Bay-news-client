import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import AdminDashboard from '../AdminDashboard/AdminDashboard';
// import css from '../AddService/AddService.css';

const AddService = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    // const { register, handleSubmit, watch, errors } = useForm();
    const [imageUrl, setImageUrl] = useState(null)

    const onSubmit = data => {
        const eventData = {
            name: data.name,
            imageUrl: imageUrl,
            price: data.price
        }
        const url = 'http://localhost:4444/addService'

        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(eventData)
        })
            .then(res => console.log("server side replace", res))
    };

    const handleImageUpload = event => {
        console.log(event.target.files[0]);
        const imageData = new FormData();
        imageData.set('key', 'f35ece2ae2a3f254e290491503aa7bb8');
        imageData.append('image', event.target.files[0])

        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {
                setImageUrl(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    return (
        <div className="row">
            <div className="col-md-2">
                <AdminDashboard />
            </div>

            <div className="admin-table col-md-10">
                <h2 className="text-danger m-5" style={{ fontWeight: '500' }}>ADD SERVICE</h2>
                <form onSubmit={handleSubmit(onSubmit)} style={{ width: '75%', margin: '0 auto' }} className="bg-light m-5 p-5">
                    <br />
                    <h6 style={{ color: 'Black' }}>Service Name</h6>
                    <input name="name" defaultValue="" ref={register} type="name" className="form-control" placeholder="Name" required />
                    <br />
                    <h6 style={{ color: 'Black' }}>Add Description</h6>
                    <input name="description" ref={register} className="form-control" placeholder="Description" />
                    <br />
                    <h6>Upload Images</h6>
                    <input name="exampleRequired" type="file" onChange={handleImageUpload} id="Icon" placeholder="Image" />
                    <br />
                    <br />
                    <input type="submit" value="Submit" className="btn btn-danger" />
                </form>
            </div>
        </div>

    );
};

export default AddService;

//     return (
//         <div className="row">
//             <div className="col-md-2">
//                 <AdminDashboard />
//             </div>
//             <div className="col-md-10">
//                 <div className="row">
//                     <div className="col-md-6">
//                         <h4 style={{}} className="m-4">Add Service</h4>
//                     </div>
//                     <div className="col-md-6 ">
//                         <h4 style={{}} className="text-warning m-4">{ }</h4>
//                     </div>
//                 </div>
//                 <form onSubmit={handleSubmit} style={{ width: '75%', margin: '0 auto' }} className="bg-light m-5 p-5">
//                     <input onBlur={handleBlur} type="name" name="name" className="form-control" placeholder="title" required />
//                     <br />
//                     <textarea onBlur={handleBlur} name="description" className="form-control" placeholder="description" required ></textarea>
//                     <br />
//                     <input
//                         onChange={handleFileChange}
//                         type="file"
//                         id="Icon"
//                         placeholder="Image"
//                         required
//                     />
//                     <input type="submit" value="Submit" className="btn btn-warning" />
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default AddService;