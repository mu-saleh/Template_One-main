import React from 'react';
import portfolioImg1 from "../assets/images/portfolio-1.jpg";
import portfolioImg2 from "../assets/images/portfolio-2.jpg";
import portfolioImg3 from "../assets/images/portfolio-3.jpg";


const portfolioItems = [
    {
        imgSrc: portfolioImg1,
        title: "Project Here",
        description: "My creative ability is very difficult to measure because it can manifest in so many surprising and."
    },
    {
        imgSrc: portfolioImg2,
        title: "Project Here",
        description: "My creative ability is very difficult to measure because it can manifest in so many surprising and."
    },
    {
        imgSrc: portfolioImg3,
        title: "Project Here",
        description: "My creative ability is very difficult to measure because it can manifest in so many surprising and."
    }
];

function Portfolio() {
    return (
        <div className="portfolio" id="portfolio">
            <div className="container">
                <h2 className="special-heading">Portfolio</h2>
                <p>If you do it right, it will last forever.</p>
                <div className="portfolio-content">
                    {portfolioItems.map((item, index) => (
                        <div className="card" key={index}>
                            <img src={item.imgSrc} alt="" />
                            <div className="info">
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Portfolio;
