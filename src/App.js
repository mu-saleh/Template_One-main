import React from "react";
// HomePage.jsx
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Landing from './components/Landing';
import Services from './components/Services';
import About from './components/About';
import Features from './components/Features';
import Portfolio from './components/Portfolio';
import './assets/css/leon.css';
import './assets/css/normalize.css';

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