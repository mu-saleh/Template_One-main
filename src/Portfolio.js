// Portfolio.jsx

import React from 'react';

function Portfolio() {
    return (
        <div className="portfolio" id="portfolio">
            <div className="container">
                <h2 className="special-heading">Portfolio</h2>
                <p>If you do it right, it will last forever.</p>
                <div className="portfolio-content">
                    <div className="card">
                        <img src="../images/portfolio-1.jpg" alt="" />
                        <div className="info">
                            <h3>Project Here</h3>
                            <p>My creative ability is very difficult to measure because it can manifest in so many surprising and.</p>
                        </div>
                    </div>
                    <div className="card">
                        <img src="../images/portfolio-2.jpg" alt="" />
                        <div className="info">
                            <h3>Project Here</h3>
                            <p>My creative ability is very difficult to measure because it can manifest in so many surprising and.</p>
                        </div>
                    </div>
                    <div className="card">
                        <img src="../images/portfolio-3.jpg" alt="" />
                        <div className="info">
                            <h3>Project Here</h3>
                            <p>My creative ability is very difficult to measure because it can manifest in so many surprising and.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Portfolio;
