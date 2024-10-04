import React, { useState } from 'react';
import Nav from './Nav';

const exoplanets = [
    { name: 'Proxima Centauri b', description: 'The closest known exoplanet to Earth.' },
    { name: 'Kepler-186f', description: 'An Earth-sized exoplanet in the habitable zone.' },
    { name: 'TRAPPIST-1e', description: 'A potentially habitable exoplanet in the TRAPPIST-1 system.' },
    { name: 'Gliese 667 Cc', description: 'A super-Earth exoplanet that may support life.' },
    // Add more exoplanets as needed
];

const ExoplanetOrbit = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [isInputFocused, setIsInputFocused] = useState(false); // New state for input focus

    const handleInputChange = (event) => {
        const value = event.target.value;
        setSearchTerm(value);
        
        // Filter suggestions based on the input value
        const filteredSuggestions = exoplanets.filter(exoplanet => 
            exoplanet.name.toLowerCase().includes(value.toLowerCase())
        );
        setSuggestions(filteredSuggestions);
    };

    const handleSuggestionClick = (name) => {
        setSearchTerm(name);
        setSuggestions([]); // Clear suggestions after selecting one
    };

    const handleInputFocus = () => {
        setIsInputFocused(true); // Set input as focused
    };

    const handleInputBlur = () => {
        setIsInputFocused(false); // Set input as unfocused
        setSuggestions([]); // Clear suggestions when input loses focus
    };

    return (
        <>
            <div style={styles.container}>
                <div className="nav-center">
                    <div className="nav-sec default-margin"><Nav /></div>
                </div>
                <br />
                <h1 style={styles.title} className='mt-5'>Exoplanet Orbit Simulation</h1>
                {/* Search Input Field */}
                <div style={styles.inputContainer}>
                    <input
                        type="text"
                        placeholder="Search by Exoplanet"
                        value={searchTerm}
                        onChange={handleInputChange}
                        onFocus={handleInputFocus} // Handle focus
                        onBlur={handleInputBlur}   // Handle blur
                        style={styles.searchInput}
                    />
                    {isInputFocused && suggestions.length > 0 && ( // Only show suggestions if input is focused
                        <div style={styles.suggestionContainer}>
                            {suggestions.map((exoplanet, index) => (
                                <div 
                                    key={index} 
                                    style={styles.suggestionItem} 
                                    onClick={() => handleSuggestionClick(exoplanet.name)}
                                >
                                    {exoplanet.name}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
                <iframe
    src="/index44.html"
    width="1000"
    height="800"
    style={styles.iframe}
    title="Exoplanet Orbit"
    allowFullScreen
/>

                <p style={styles.infoText}>Explore the wonders of exoplanets!</p>
            </div>
        </>
    );
};

const styles = {
    
    container: {
        userSelect: 'none',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        background: 'linear-gradient(135deg, #1c1c3c 0%, #3f3f5c 100%)', // Gradient background for a cosmic feel
        color: '#ffffff',
        fontFamily: 'Poppins, sans-serif',
        textAlign: 'center',
        overflow: 'hidden', // Prevent overflow of elements
    },
    title: {
        marginBottom: '20px',
        fontSize: '3em', // Larger title for impact
        textShadow: '2px 2px 10px rgba(255, 255, 255, 0.8)', // Text shadow for depth
    },
    iframe: {
        border: 'none',
        boxShadow: '0 4px 30px rgba(0, 0, 0, 0.5)', // Softer shadow for a floating effect
        borderRadius: '15px',
        transition: 'transform 0.3s ease', // Smooth transform effect
    },
    infoText: {
        marginTop: '20px',
        fontSize: '1.2em', // Increased font size for readability
        opacity: 0.8, // Slightly transparent for a softer look
    },
    inputContainer: {
        position: 'relative', // For positioning suggestions
    },
    searchInput: {
        marginBottom: '20px',
        padding: '10px',
        fontSize: '1em',
        borderRadius: '5px',
        border: '1px solid #ffffff',
        width: '300px', // Set a width for the input field
        backgroundColor: 'rgba(255, 255, 255, 0.1)', // Slightly transparent background
        color: '#ffffff', // Text color
    },
    suggestionContainer: {
        position: 'absolute',
        top: '100%', // Position below the input field
        left: 0,
        right: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.8)', // Background color for suggestions
        borderRadius: '5px',
        zIndex: 1000, // Ensure it appears on top
    },
    suggestionItem: {
        padding: '10px',
        cursor: 'pointer',
        color: '#ffffff',
        '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.2)', // Highlight on hover
        },
    },
};

export default ExoplanetOrbit;
