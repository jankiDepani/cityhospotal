import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const doctorsData = [
    {
        id: 1,
        name: 'Atha Smith',
        designation: 'Chief Medical Officer',
        description: 'Duis sagittis rutrum neque, quis tincidunt arcu pretium ac.',
        url: "../assets/img/doctors/doctors-1.jpg"
    },
    {
        id: 2,
        name: 'John White',
        designation: 'Anesthesiologist',
        description: 'Aenean ac turpis ante. Mauris velit sapien.',
        url: "../assets/img/doctors/doctors-2.jpg"
    },
    {
        id: 3,
        name: 'Umika Loha',
        designation: 'Cardiology',
        description: 'Curabitur luctus eleifend odio. Phasellus placerat mi.',
        url: "../assets/img/doctors/doctors-3.jpg"
    },
    {
        id: 4,
        name: 'Daimy Smith',
        designation: 'Neurosurgeon',
        description: 'Morbi vulputate, tortor nec pellentesque molestie, eros nisi ornare purus.',
        url: "../assets/img/doctors/doctors-4.jpg"
    }
]

function Doctor(props) {
    const { id } = useParams();

    // const [dData, setdData] = useState(doctorsData);

    const fdata = doctorsData.filter(doctor => doctor.id === parseInt(id))[0];

    return (
        <section id="doctor" className="doctor">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 mt-4">
                        <div className="member d-flex align-item-center">
                            <div className="pic col-5"><img src={fdata.url} className="img-doctor" alt="" /></div>
                            <div className="member-info col-7">
                                <h4>{fdata.name}</h4>
                                <span>{fdata.designation}</span>
                                <p>{fdata.description}</p>
                                <div className="social">
                                    <a href><i className="ri-twitter-fill" /></a>
                                    <a href><i className="ri-facebook-fill" /></a>
                                    <a href><i className="ri-instagram-fill" /></a>
                                    <a href> <i className="ri-linkedin-box-fill" /> </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Doctor;