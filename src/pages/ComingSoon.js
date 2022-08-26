import React, { useEffect, useRef } from 'react'

import 'aos';
import "aos/dist/aos.css";
import Aos from 'aos';


import lottie from 'lottie-web';

const ComingSoon = () => {
    // data-aos={""} 
    Aos.init({
      duration: 1300,
      once: true,
    });

    const container = useRef(null);
    useEffect(() => {
        lottie.loadAnimation({
            container: container.current, // the dom element that will contain the animation
            loop: true,
            autoplay: true,
            width: "50%",
            height: "50%",
            animationData: require("../images/fWGC63gFMA.json") // the path to the animation json
        });
        return () => lottie.destroy();
    } , []);


  return (
    <div className='m-3'>
    <section class="section is-large">
        <h1 data-aos={"fade-down"} class="title">Coming Soon</h1>
        <h2 data-aos={"fade-down"} class="subtitle">
            This section is under construction. Please check back soon.
        </h2>
        <div className="container" ref={container} />
    </section>
    </div>
  )
}

export default ComingSoon