import React from 'react';
import AboutImg from '../assets/images/about.jpg';



function About() {
    return (
        <div className="about">
            <div className="container">
                <h2 className="special-heading">About</h2>
                <p>Less is more work</p>
                <div className="about-content">
                    <div className="image">
                        <img src={AboutImg} alt="" />
                    </div>
                    <div className="text">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil nemo neque voluptate tempora velit cum non,
                            fuga vitae architecto delectus sed maxime rerum impedit aliquam obcaecati, aut excepturi iusto laudantium!
                        </p>
                        <hr />
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, sapiente. Velit iure exercitationem
                            dolores nesciunt dolore. Eum officiis dolorum hic voluptate quaerat minima, similique inventore esse,
                            alias, sed quo officia?
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
