import React from 'react';
import { FaPalette, FaSketch, FaVectorSquare, FaPencilRuler } from 'react-icons/fa';
import ServicesImg from '../assets/images/services.jpg';

function Services() {
    return (
        <div className="services" id="services">
            <div className="container">
                <h2 className="special-heading">Services</h2>
                <p>Don't be busy, be productive</p>
                <div className="services-content">
                    <div className="col">
                        <div className="srv">
                            <FaPalette size="2em" />
                            <div className="text">
                                <h3>Graphic Design</h3>
                                <p>
                                    Graphic design is the process of visual communication and problem-solving using one or more of
                                    typography, photography and illustration.
                                </p>
                            </div>
                        </div>
                        <div className="srv">
                            <FaSketch size="2em" />
                            <div className="text">
                                <h3>UI & UX</h3>
                                <p>
                                    Process of enhancing user satisfaction with a product by improving the usability, accessibility, and
                                    pleasure provided in the interaction.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="srv">
                            <FaVectorSquare size="2em" />
                            <div className="text">
                                <h3>Web Design</h3>
                                <p>
                                    Web design encompasses many different skills and disciplines in the production and maintenance of
                                    websites.
                                </p>
                            </div>
                        </div>
                        <div className="srv">
                            <FaPencilRuler size="2em" />
                            <div className="text">
                                <h3>Web Development</h3>
                                <p>
                                    Web development is a broad term for the work involved in developing a web site for the Internet or an
                                    intranet.
                                </p>
                            </div>
                        </div>
                        {/* End Services */}
                    </div>
                    <div className="col">
                        <div className="image image-column">
                            <img src={ServicesImg} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Services;
