import '../src/HeroSection.css';
import heroImg from '../src/assets/hero.svg';

const HeroSection = () => {
    return (
        <div className="hero-section">
            <div className="hero-content">
                <h1>Transform Your School<div><span className="highlight">Into Techno School</span></div></h1>
                <p>
                    <div>Our aim is to empower the future generation with quality and advanced<br /></div>
                    <div>learning courses in coding, complemented by practical experiences in<br /></div>
                    <div>virtual labs, transforming the way students learn and apply their<br /></div>
                    <div>knowledge.</div>
                </p>
                <button className="hero-button">Virtual Labs</button>
            </div>
            <div className="hero-image">
                <img src={heroImg} alt="Classroom" />
            </div>
        </div>
    );
}

export default HeroSection;


// import React, { useState, useEffect } from 'react';
// import '../src/HeroSection.css';

// const HeroSection = () => {
//     const [isMobile, setIsMobile] = useState(false);

//     useEffect(() => {
//         const handleResize = () => {
//             setIsMobile(window.innerWidth < 768);
//         };

//         handleResize(); // Check the initial screen size
//         window.addEventListener('resize', handleResize);

//         return () => {
//             window.removeEventListener('resize', handleResize);
//         };
//     }, []);

//     return (
//         <div className="hero-section">
//             <div className="hero-content">
//                 <h1>Transform Your School<div><span className="highlight">Into Techno School</span></div></h1>
//                 <p>
//                     <div>Our aim is to empower the future generation with quality and advanced<br /></div>
//                     <div>learning courses in coding, complemented by practical experiences in<br /></div>
//                     <div>virtual labs, transforming the way students learn and apply their<br /></div>
//                     <div>knowledge.</div>
//                 </p>
//                 <button className="hero-button">Virtual Labs</button>
//             </div>
//             <div className="hero-image">
//                 {!isMobile && (
//                     <iframe
//                         width="560"
//                         height="315"
//                         src="https://www.youtube.com/embed/BtUKXMnkug0?autoplay=1&mute=1&loop=1&playlist=BtUKXMnkug0"
//                         title="YouTube video player"
//                         frameBorder="0"
//                         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                         allowFullScreen
//                         style={{ width: "100%", height: "100%" }}
//                     ></iframe>
//                 )}
//             </div>
//         </div>
//     );
// }

// export default HeroSection;

