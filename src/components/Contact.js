import React from 'react';
import { FaYoutube, FaFacebookF, FaTwitter } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';

function Contact() {
    return (
        <div className="contact">
            <div className="container">
                <h2 className="special-heading">Contact</h2>
                <p>We are born to create</p>
                <div className="info">
                    <p className="label">Feel free to drop us a line at:</p>
                    <a href="mailto:leonagency@mail.com?subject=Contact" className="link">
                        <AiOutlineMail /> leonagency@mail.com
                    </a>
                    <div className="social">
                        Find Us On Social Networks
                        <a href='https://www.youtube.com'><FaYoutube /></a>
                        <a href='https://www.facebook.com'><FaFacebookF /></a>
                        <a href='https://twitter.com'><FaTwitter /></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
