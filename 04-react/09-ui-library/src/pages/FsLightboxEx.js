import React, { memo, useState } from "react";
import styled from "styled-components";
import FsLightbox from "fslightbox-react";

import img1 from "../assets/img/img1.jpg";
import img2 from "../assets/img/img2.jpg";
import img3 from "../assets/img/img3.jpg";
import img4 from "../assets/img/img4.jpg";
import img5 from "../assets/img/img5.jpg";

const Button = styled.button`
    border: 0;
    outline: none;
    cursor: pointer;
    padding: 0;
    margin: 0 5px;
`;

const FsLightboxEx = memo(() => {
    const [singleToggler, setSingleToggler] = useState(false);

    const [multiToggler, setMultiToggler] = useState({
        open: false,
        index: 1
    });

    const [youtubeToggler, setYoutubeToggler] = useState(false);

    const [youtubeMultiToggler, setYoutubeMultiToggler] = useState({
        open: false,
        index: 1
    });

    return (
        <div>
            <h2>FsLightBox</h2>
            <h3>Single Gallery</h3>
            <div>
                <Button onClick={e => {setSingleToggler(!singleToggler)}}>
                    <img src={img1} width="150" alt="img1" />
                </Button>
                <FsLightbox sources={[img1]} toggler={singleToggler} />
            </div>

            <h3>Multi Gallery</h3>
            <div>
                <Button onClick={e => setMultiToggler({open: !multiToggler.open, index: 1})}>
                    <img src={img1} width="150" alt="img1" />
                </Button>
                <Button onClick={e => setMultiToggler({open: !multiToggler.open, index: 2})}>
                    <img src={img2} width="150" alt="img2" />
                </Button>
                <Button onClick={e => setMultiToggler({open: !multiToggler.open, index: 3})}>
                    <img src={img3} width="150" alt="img3" />
                </Button>
                <Button onClick={e => setMultiToggler({open: !multiToggler.open, index: 4})}>
                    <img src={img4} width="150" alt="img4" />
                </Button>
                <Button onClick={e => setMultiToggler({open: !multiToggler.open, index: 5})}>
                    <img src={img5} width="150" alt="img5" />
                </Button>
                <FsLightbox toggler={multiToggler.open} sources={[img1, img2, img3, img4, img5]} slide={multiToggler.index}/>
            </div>

            <h3>Youtube Single Link</h3>
            <div>
            <Button onClick={e => setYoutubeMultiToggler({open: !youtubeMultiToggler.open, index: 1})}>
                    <img src="https://img.youtube.com/vi/5BRFGMs1v_o/hqdefault.jpg" width="150" alt="img1" />
                </Button>
            <Button onClick={e => setYoutubeMultiToggler({open: !youtubeMultiToggler.open, index: 1})}>
                    <img src="https://img.youtube.com/vi/5BRFGMs1v_o/hqdefault.jpg" width="150" alt="img2" />
                </Button>
            <Button onClick={e => setYoutubeMultiToggler({open: !youtubeMultiToggler.open, index: 1})}>
                    <img src="https://img.youtube.com/vi/5BRFGMs1v_o/hqdefault.jpg" width="150" alt="img3" />
                </Button>
                <FsLightbox toggler={youtubeMultiToggler.open} sources={[
                    'https://www.youtube.com/watch?v=5BRFGMs1v_o',
                    'https://www.youtube.com/watch?v=5BRFGMs1v_o',
                    'https://www.youtube.com/watch?v=5BRFGMs1v_o',
                ]} slide={youtubeMultiToggler.index} />
            </div>
        </div>
    );
});

export default FsLightboxEx;
