import React from "react";
import ReactDOM from "react-dom";
// HomePage.jsx
import Contact from './Contact';
import Footer from './Footer';
import Header from './Header';
import Landing from './Landing';
import Services from './Services';
import About from './About';
import Features from './Features';
import Portfolio from './Portfolio';
import './leon.css';
import './normalize.css';
import './all.min.css';



function App() {
    return (
        <div>
            <Header />
            <Landing />
            <Features />
            <Portfolio />
            <Services />
            <About />
            <Contact />
            <Footer />
        </div>
    );
}


export default App;

ReactDOM.render(<App />, document.getElementById("root"));
