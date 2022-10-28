import React, { useState, useMemo, useCallback, memo } from "react";

import styled from "styled-components";

import img01 from "../assets/img/img01.jpg";
import img02 from "../assets/img/img02.jpg";
import img03 from "../assets/img/img03.jpg";
import img04 from "../assets/img/img04.jpg";
import img05 from "../assets/img/img05.jpg";

const ThumbList = styled.ul`
    list-style: none;
    padding: 0;
    margin: auto;
    width: 640px;
    display: flex;

    li {
        width: 20%;
        a {
            display: block;
            margin: auto;

            img {
                width: 100%;
            }
        }
    }
`;

const Viewer = styled.div`
    width: 620px;
    margin: auto;
    padding: 0 10px;
    img {
        width: 100%;
        object-fit: cover;
    }
    #second {
        display: none;
    }
`;

const imgList = [
    { img: img01, title: "테스트 이미지 1" },
    { img: img02, title: "테스트 이미지 2" },
    { img: img03, title: "테스트 이미지 3" },
    { img: img04, title: "테스트 이미지 4" },
    { img: img05, title: "테스트 이미지 5" }
];

const Image = memo(() => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const onThumbnailClick = useCallback((e) => {
        const href = e.currentTarget.getAttribute("href");

        const idx = parseInt(href.substring(1));

        /**
        // 일반 상태값 갱신
        setCurrentIndex(idx);
        /*/
        // 콜백함수형 상태값 갱신 ==> 상태값을 화면에 직접적으로 출력하느 ㄴ경우는 사용하지 않는다.
        setCurrentIndex((currentValue) => {
            console.log(`변경전 상태값==> ${currentValue}`);
            const newValue = idx;
            console.log(`변경후 상태값==> ${newValue}`);
            return newValue;
        })
        /**/
    }, []);

    const { img: currentImg, title: currentTitle } = useMemo(() => {
        return imgList[currentIndex];
    }, [currentIndex]);

    return (
        <div>
            <h2>Image</h2>
            <ThumbList>
                {imgList.map((v, i) => {
                    return (
                        <li key={i}>
                            <a href={`#${i}`} title={v.title} onClick={onThumbnailClick}>
                                <img src={v.img} alt={v.title} />
                            </a>
                        </li>
                    );
                })}
            </ThumbList>
            <Viewer>
                <img src={imgList[currentIndex].img} alt={imgList[currentIndex].title} id="second" />
                <img src={currentImg} alt={currentTitle} />
            </Viewer>
        </div>
    );
});

export default Image;
