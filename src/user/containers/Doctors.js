import React, { useState } from 'react';
import { Link } from 'react-router-dom';

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

function Doctors(props) {

    const [dData] = useState(doctorsData)

    return (
        <div>
            <section id="doctors" className="doctors">
                <div className="container">
                    <div className="section-title">
                        <h2>Doctors</h2>
                        <p>Duis sagittis rutrum neque, quis tincidunt arcu pretium ac. Suspendisse sem risus, molestie vitae arcu et,
                            tincidunt viverra erat. Quisque in lectus id nulla viverra sodales in a risus. Aliquam ut sem ex. Duis viverra
                            ipsum lacus, ut pharetra arcu sagittis nec. Phasellus a eleifend elit.</p>
                            <Link to="/Doctor/Visiting_Doctor">Visiting Doctor</Link>
                    </div>
                    <div className="row">
                        {
                            dData.map((v) => {
                                return (
                                    <div className="col-lg-6 mt-4">
                                        <Link to={`/Doctor/${v.id}`}>
                                            <div className="member d-flex align-items-start">
                                                <div className="pic"><img src={v.url} className="img-doctor" alt="" /></div>
                                                <div className="member-info">
                                                    <h4>{v.name}</h4>
                                                    <span>{v.designation}</span>
                                                    <p>{v.description}</p>
                                                    <div className="social">
                                                        <a href><i className="ri-twitter-fill" /></a>
                                                        <a href><i className="ri-facebook-fill" /></a>
                                                        <a href><i className="ri-instagram-fill" /></a>
                                                        <a href> <i className="ri-linkedin-box-fill" /> </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
        </div>

    );
}

export default Doctors;