import React, { useState } from 'react';
import Nav from '../Reusable Compos/Nav';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate();

    const handleJoinJourney = (e) => {
        e.preventDefault();
        setShowModal(true);  // Open the modal
    };

    const closeModal = () => {
        setShowModal(false); // Close the modal
    };

    return (
        <div className='home-section-main'>
            <div className="home-section">
                <div className="landing-page d-flex justify-content-center align-items-center">
                    <div className="nav-sec"> <Nav /></div>
                    <div className="text-center text-white hero-content">
                        <h1 className="display-3 mb-4 animate__animated animate__fadeInDown">Chronicles of Exoplanet Exploration</h1>
                        <p className="lead mb-4 animate__animated animate__fadeInUp">
                            Embark on a thrilling journey to revolutionize exoplanet education!
                        </p>
                        <p className="lead mb-5 animate__animated animate__fadeInUp">
                            Discover the wonders of exoplanets and the diversity of planetary systems.
                        </p>
                        <button className="btn btn-outline-light btn-lg animate__animated animate__pulse animate__infinite" onClick={handleJoinJourney}>Embrace More</button>
                    </div>
                </div>
            </div>

            {/* Modal */}
            {showModal && (
                <div className="video-modal">
                    <div className="modal-content">
                        <span className="close-btn" onClick={closeModal}>&times;</span>
                        <iframe 
                            width="100%" 
                            height="100%" 
                            src="https://www.youtube.com/embed/JgFqXKBtcZw?si=HUtUT1ccKjSr7QqH" 
                            title="YouTube video player" 
                            frameBorder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Home;
