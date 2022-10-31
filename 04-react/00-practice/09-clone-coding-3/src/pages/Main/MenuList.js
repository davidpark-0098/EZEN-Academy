import React from "react";
import styled from "styled-components";
import { HashLink } from "react-router-hash-link";
import mq from "../../MediaQuery";

const MenuListContainer = styled.section`
    max-width: 1200px;
    padding: 8px 16px;
    margin: 20px auto 0;
    box-sizing: border-box;
    main {
        width: 100%;
        #main_img {
            width: 100%;
            padding: 8px 16px 0 16px;
            box-sizing: border-box;

            .main_img {
                display: flex;
                justify-content: space-between;
                flex-wrap: wrap;
                padding: 16px 8px;
                box-sizing: border-box;
            }

            figure {
                width: 25%;
                padding: 0 8px;
                box-sizing: border-box;
                text-align: center;
                ${mq.maxWidth("sm")`
                    width: 100%;

                `}
                img {
                    width: 100%;
                }

                img:hover {
                    opacity: 0.8;
                }

                h3 {
                    margin: 5px 10px 0;
                    line-height: 38px;
                }

                p {
                    line-height: 23px;
                    span {
                        display: block;
                        margin-top: 14px;
                    }
                }
            }
        }

        #main_slider {
            padding: 32px 0;
            ul {
                display: flex;
                justify-content: center;

                li {
                    width: 40px;
                    height: 40px;

                    a {
                        display: block;
                        width: 100%;
                        height: 100%;
                        text-align: center;
                        line-height: 40px;

                        &:hover {
                            color: white;
                            background-color: black;
                        }
                    }
                    .choose {
                        color: white;
                        background-color: black;
                    }
                    .choose:hover {
                        color: white;
                        background-color: $line;
                    }
                }
            }
        }
    }
`;

const MenuList = () => {
    return (
        <MenuListContainer>
            <main>
                <section id="main_img">
                    <div className="main_img">
                        <figure>
                            <img src="https://www.w3schools.com/w3images/sandwich.jpg" alt="The Perfect Sandwich, A Real NYC Classic" />
                            <h3>The Perfect Sandwich, A Real NYC Classic</h3>
                            <p>Just some random text, lorem ipsum text praesent tincidunt ipsum lipsum.</p>
                        </figure>
                        <figure>
                            <img src="https://www.w3schools.com/w3images/steak.jpg" alt="Let Me Tell You About This Steak" />
                            <h3>Let Me Tell You About This Steak</h3>
                            <p>Once again, some random text to lorem lorem lorem lorem ipsum text praesent tincidunt ipsum lipsum.</p>
                        </figure>
                        <figure>
                            <img src="https://www.w3schools.com/w3images/cherries.jpg" alt="Cherries, interrupted" />
                            <h3>Cherries, interrupted</h3>
                            <p>
                                Lorem ipsum text praesent tincidunt ipsum lipsum.
                                <br />
                                <span>What else?</span>
                            </p>
                        </figure>
                        <figure>
                            <img src="https://www.w3schools.com/w3images/wine.jpg" alt="Once Again, Robust Wine and Vegetable Pasta" />
                            <h3>Once Again, Robust Wine and Vegetable Pasta</h3>
                            <p>Lorem ipsum text praesent tincidunt ipsum lipsum.</p>
                        </figure>
                    </div>
                    <div className="main_img">
                        <figure>
                            <img src="https://www.w3schools.com/w3images/popsicle.jpg" alt="All I Need Is a Popsicle" />
                            <h3>All I Need Is a Popsicle</h3>
                            <p>Lorem ipsum text praesent tincidunt ipsum lipsum.</p>
                        </figure>
                        <figure>
                            <img src="https://www.w3schools.com/w3images/salmon.jpg" alt="Salmon For Your Skin" />
                            <h3>Salmon For Your Skin</h3>
                            <p>Once again, some random text to lorem lorem lorem lorem ipsum text praesent tincidunt ipsum lipsum.</p>
                        </figure>
                        <figure>
                            <img src="https://www.w3schools.com/w3images/sandwich.jpg" alt="The Perfect Sandwich, A Real Classic" />
                            <h3>The Perfect Sandwich, A Real Classic</h3>
                            <p>Just some random text, lorem ipsum text praesent tincidunt ipsum lipsum.</p>
                        </figure>
                        <figure>
                            <img src="https://www.w3schools.com/w3images/croissant.jpg" alt="Le French" />
                            <h3>Le French</h3>
                            <p>Lorem lorem lorem lorem ipsum text praesent tincidunt ipsum lipsum.</p>
                        </figure>
                    </div>
                </section>

                <section id="main_slider">
                    <ul>
                        <li>
                            <HashLink href="#" className="slider_left">
                                «
                            </HashLink>
                        </li>
                        <li>
                            <HashLink href="#" className="choose slider_num">
                                1
                            </HashLink>
                        </li>
                        <li>
                            <HashLink href="#" className="slider_num">
                                2
                            </HashLink>
                        </li>
                        <li>
                            <HashLink href="#" className="slider_num">
                                3
                            </HashLink>
                        </li>
                        <li>
                            <HashLink href="#" className="slider_num">
                                4
                            </HashLink>
                        </li>
                        <li>
                            <HashLink href="#" className="slider_right">
                                »
                            </HashLink>
                        </li>
                    </ul>
                </section>
            </main>
        </MenuListContainer>
    );
};

export default MenuList;
