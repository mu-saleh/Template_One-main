import React from 'react';
import { FaMagic, FaGem, FaGlobeAsia } from 'react-icons/fa'; // استيراد أيقونات React Icons

function Features() {
    return (
        <div className="features">
            <div className="container">
                <div className="feat">
                    <FaMagic size="3em" />
                    <h3>Tell Us Your Idea</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut lab</p>
                </div>
                <div className="feat">
                    <FaGem size="3em" />
                    <h3>We Will Do All The Work</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut lab</p>
                </div>
                <div className="feat">
                    <FaGlobeAsia size="3em" />
                    <h3>Your Product is Worldwide</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut lab</p>
                </div>
            </div>
        </div>
    );
}

export default Features;
