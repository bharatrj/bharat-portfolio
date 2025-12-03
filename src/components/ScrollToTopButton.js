import React, { useState, useEffect } from 'react';
import '../assets/css/scroll-top.css'; // Import the CSS file for styling

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Function to toggle visibility based on scroll position
    const toggleVisibility = () => {
        // Show button if page scroll is more than a certain amount (e.g., 300px)
        if (window.pageYOffset > 630) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // Function to scroll to the top smoothly
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Smooth scrolling animation
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []); // Empty dependency array means this effect runs once on mount

    return (
        <div className="scroll-to-top">
            {isVisible && (
                <button onClick={scrollToTop} className="top-button" aria-label="Scroll to top">
                    <i className="fa fa-arrow-up" aria-hidden="true"></i>
                </button>
            )}
        </div>
    );
};

export default ScrollToTopButton;
