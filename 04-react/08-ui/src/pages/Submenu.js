import React, { memo, useCallback } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import btn from '../assets/img/btn.png';
import btnOver from '../assets/img/btn_over.png';

const MenuContainer = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;

    .link {
        display: block;
        width: 179px;
        height: 48px;
        background: url(${btn});
        line-height: 48px;
        text-align: center;
        font-weight: bold;
        color: #cfdfb5;
        text-decoration: none;

        &:hover {
            background: url(${btnOver});
        }
    }

    .menu-item {
        flex: 0 0;
        position: relative;

        .sub {
            list-style: none;
            margin: 0;
            padding: 0;
            position: absolute;
            z-index: 1000;
            max-height: 0;
            overflow: hidden;
            transition: max-height 180ms ease-out;
        }
    }
`;

const Submenu = memo(() => {
    const onMenuItemOver = useCallback(e => {
        const current = e.currentTarget;
        const sub = current.querySelector('.sub');

        sub.style.maxHeight = sub.scrollHeight + 'px';
    }, []);

    const onMenuItemOut = useCallback(e => {
        const current = e.currentTarget;
        const sub = current.querySelector('.sub');
        sub.style.maxHeight = null;
    }, []);

    return (
        <div>
            <h2>Submenu</h2>

            <MenuContainer>
                <li className='menu-item' onMouseOver={onMenuItemOver} onMouseOut={onMenuItemOut}>
                    <Link to="#" className='link'>Frontend</Link>
                    <ul className='sub'>
                        <li><Link to="#" className='link'>HTML+CSS</Link></li>
                        <li><Link to="#" className='link'>Javascript</Link></li>
                        <li><Link to="#" className='link'>jQuery</Link></li>
                    </ul>
                </li>
                <li className='menu-item' onMouseOver={onMenuItemOver} onMouseOut={onMenuItemOut}>
                    <Link to="#" className='link'>Backend</Link>
                    <ul className='sub'>
                        <li><Link to="#" className='link'>PHP</Link></li>
                        <li><Link to="#" className='link'>JSP</Link></li>
                        <li><Link to="#" className='link'>Node.js</Link></li>
                    </ul>
                </li>
                <li className='menu-item' onMouseOver={onMenuItemOver} onMouseOut={onMenuItemOut}>
                    <Link to="#" className='link'>Mobile</Link>
                    <ul className='sub'>
                        <li><Link to="#" className='link'>IOS</Link></li>
                        <li><Link to="#" className='link'>Android</Link></li>
                        <li><Link to="#" className='link'>Hybrid</Link></li>
                    </ul>
                </li>
            </MenuContainer>
            <h1>Hello World</h1>
        </div>
    );
});

export default Submenu;
