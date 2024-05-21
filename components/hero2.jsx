import { useState, useEffect } from 'react';
import hero2 from '../src/assets/hero2.svg';

const HeroSection2 = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        handleResize(); // Check the initial screen size
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div>
            <img 
                src={hero2} 
                alt="hero2" 
                style={{
                    width: "60%",
                    display: isMobile ? "none" : "block",
                    margin: "auto",
                }}
            />
        </div>
    );
};

export default HeroSection2;
