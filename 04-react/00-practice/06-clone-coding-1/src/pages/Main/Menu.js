import React from "react";
import styled from "styled-components";
import mq from "../../MediaQuery";

const MenuContainer = styled.section`
    width: 1100px;
    margin: 0 auto;
    padding: 64px 0;
    box-sizing: border-box;
    display: flex;

    ${mq.maxWidth("xl")`
        width: 100%;
    `}

    ${mq.maxWidth("lg")`
        flex-direction: column;
    `}

    
    div {
        width: 550px;
        padding: 12px 24px;
        box-sizing: border-box;
        ${mq.maxWidth("xl")`
            width: 100%;
        `}
    }

    .our_menu_text {
        h1 {
            font-size: 36px;
            margin: 10px 0;
            text-align: center;
        }

        h4 {
            font-size: 20px;
            margin: 10px 0;
            letter-spacing: 3px;
        }

        p {
            font-size: 15px;
            margin: 15px 0;
            color: .5b5b5b;
        }
    }

    .our_menu_img img {
        opacity: 0.85;
        ${mq.maxWidth("xl")`
            width: 100%;
        `}
    }
`;

function Menu() {
    return (
        <MenuContainer id="menu">
            <div className="our_menu_text">
                <h1>Our Menu</h1>
                <br />
                <br />
                <br />
                <h4>Bread Basket</h4>
                <p>Assortment of fresh baked fruit breads and muffins 5.50</p>
                <br />
                <br />
                <h4>Honey Almond Granola with Fruits</h4>
                <p>Natural cereal of honey toasted oats, raisins, almonds and dates 7.00</p>
                <br />
                <br />
                <h4>Belgian Waffle</h4>
                <p>Vanilla flavored batter with malted flour 7.50</p>
                <br />
                <br />
                <h4>Scrambled eggs</h4>
                <p>Scrambled eggs, roasted red pepper and garlic, with green onions 7.50</p>
                <br />
                <br />
                <h4>Blueberry Pancakes</h4>
                <p>With syrup, butter and lots of berries 8.50</p>
            </div>
            <div className="our_menu_img">
                <img src="https://www.w3schools.com/w3images/tablesetting.jpg" alt="our_menu" />
            </div>
        </MenuContainer>
    );
}

export default Menu;