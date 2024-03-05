// Contact.jsx

import React from 'react';

function Contact() {
    return (
        <div className="contact">
            <div className="container">
                <h2 className="special-heading">Contact</h2>
                <p>We are born to create</p>
                <div className="info">
                    <p className="label">Feel free to drop us a line at:</p>
                    <a href="mailto:leonagency@mail.com?subject=Contact" className="link">leonagency@mail.com</a>
                    <div className="social">
                        Find Us On Social Networks
                        <a href='youtube.com'><i className="fab fa-youtube"></i></a>
                        <a href='facebook.com'><i className="fab fa-facebook-f"></i></a>
                        <a href='twitter.com'><i className="fab fa-twitter"></i></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
