import React from 'react';
import "../App.css";

const Footer = () => {
    return (
        <div className="d-flex flex-column min-vh-100">
            {/* Your content here */}

            <footer className="mt-auto bg-dark text-white p-2">
                <ul className="nav justify-content-center border-bottom pb-2 mb-2">
                    <li className="nav-item"><a href="#" className="px-2 text-white">Home</a></li>
                    <li className="nav-item"><a href="#" className="px-2 text-white">Features</a></li>
                    <li className="nav-item"><a href="#" className="px-2 text-white">Pricing</a></li>
                    <li className="nav-item"><a href="#" className="px-2 text-white">FAQs</a></li>
                    <li className="nav-item"><a href="#" className="px-2 text-white">About</a></li>
                </ul>
                <p className="text-center">© 2023 Company, Inc</p>
            </footer>
        </div>
    );
};

export default Footer;
