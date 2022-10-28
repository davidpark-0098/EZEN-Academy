import React, { memo, useEffect } from "react";
import styled from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css";

const Box = styled.div`
    width: 300px;
    height: 200px;
    font-size: 40px;
    color: white;
    background-color: #f60;
    text-align: center;
    line-height: 200px;
    margin: 250px auto;
`;

const AosEx = memo(() => {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div>
            <h2>AOS</h2>
            <Box data-aos="fade-zoom-in" data-aos-offset="0" data-aos-easing="ease-in-sine" data-aos-duration="600">
                AOS
            </Box>
            <Box data-aos="fade-left" data-aos-offset="300" data-aos-easing="ease-in-sine" data-aos-duration="600">
                AOS
            </Box>
            <Box data-aos="fade-right" data-aos-offset="0" data-aos-easing="ease-in-sine" data-aos-duration="600">
                AOS
            </Box>
            <Box data-aos="fade-up" data-aos-offset="300" data-aos-easing="ease-in-sine" data-aos-duration="600">
                AOS
            </Box>
            <Box data-aos="fade-down" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-duration="600">
                AOS
            </Box>
        </div>
    );
});

export default AosEx;
