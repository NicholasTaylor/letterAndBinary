import React, { useEffect, useState } from 'react';
/** @jsxRuntime classic */
/** @jsx jsx */;
import { css, jsx } from '@emotion/react';
import { fontSize, fontStack, fontStackTitle } from '../styleConstants';

export default function Nav() {
    const [toggle, setToggle] = useState(0);

    const handleClick = (e) => {
        console.log(toggle);
        setToggle(!toggle);
    }

    return (
        <div>
            <div 
                aria-hidden="true"
                onClick={handleClick}
                css={css`
                    top: 2.5vh;
                    position: fixed;
                    left: 5vw;
                    width: 1.25rem;
                    z-index: 310;
                `}
            >
                <svg
                    data-name="c-navicon" 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 26 21"
                    css={css`
                        line {
                            fill: none;
                            stroke-miterlimit:10;
                            stroke: white;
                            animation-duration: .25s;
                            animation-timing-function: ease-out;
                            animation-fill-mode: forwards;
                        }
                    `}
                >
                    <line
                        y1="0.5" 
                        x2="26" 
                        y2="0.5" 
                        css={css`                
                            transform-origin: 40% 0%;
                            transform: translateY(0%) rotate(0deg);
                            @keyframes topnavon {
                                0% {
                                    transform: translateY(0%) rotate(0deg);
                                }
                                100% {
                                    transform: translateY(50%) rotate(45deg);
                                }
                            }
                            @keyframes topnavoff {
                                0% {
                                    transform: translateY(50%) rotate(45deg);
                                }
                                100% {
                                    transform: translateY(0%) rotate(0deg);
                                }
                            }
                            animation-name: ${toggle ? 'topnavon' : 'topnavoff'};
                        `}
                    />
                    <line
                        y1="10.5" 
                        x2="26" 
                        y2="10.5" 
                        css={css`            
                            animation-duration: 0.01s;
                            visibility: visible;
                            @keyframes middlenavon {
                                0% {
                                    visibility: visible;
                                }
                                100% {
                                    visibility: hidden;
                                }
                            }
                            @keyframes middlenavoff {
                                0% {
                                    visibility: hidden;
                                }
                                100% {
                                    visibility: visible;
                                }
                            }
                            animation-name: ${toggle ? 'middlenavon' : 'middlenavoff'};
                        `}
                    />
                    <line
                        y1="20.5" 
                        x2="26" 
                        y2="20.5" 
                        css={css`
                            transform-origin: 60% 125%;
                            transform: translateY(0%) rotate(0deg);
                            @keyframes bottomnavon {
                                0% {
                                    transform: translateY(0%) rotate(0deg);
                                }
                                100% {
                                    transform: translateY(-50%) rotate(-45deg);
                                }
                            }
                            @keyframes bottomnavoff {
                                0% {
                                    transform: translateY(-50%) rotate(-45deg);
                                }
                                100% {
                                    transform: translateY(0%) rotate(0deg);
                                }
                            }
                            animation-name: ${toggle ? 'bottomnavon' : 'bottomnavoff'};
                        `}
                    />
                </svg>
            </div>
            <div 
                css={css`
                    top: 2.5vh;
                    position: fixed;
                    z-index: 200;
                    width: 100vw;
                    text-align: center;
                `}
            >
                <div 
                    css={css`
                        font-family: ${fontStackTitle};
                        color: white;
                        font-smooth: always;
                        -webkit-font-smoothing: antialiased;
                        -moz-osx-font-smoothing: auto;
                        font-size: ${fontSize[4]};
                        font-weight: 600;
                        letter-spacing: -0.09em;
                    `}
                >
                    Un Coupe de Destin
                </div>
            </div>
            <nav 
                css={css`
                    width: 100vw;
                    height: 100vh;
                    position: fixed;
                    left: -100%;
                    top: 0;
                    z-index: 300;
                    animation-duration: .25s;
                    animation-timing-function: ease-out;
                    animation-fill-mode: forwards;
                    @keyframes navon {
                        0% {
                          left:-100%;
                        }
                        100% {
                          left:0;
                        }
                    }
                    @keyframes navoff {
                        0% {
                            left: 0;
                        }
                        100% {
                            left:-100%;
                        }
                    }
                    animation-name: ${toggle ? 'navon' : 'navoff'};
                `}
            >
                <div 
                    css={css`
                        width: 80%;
                        height: 100%;
                        background-color: black;
                    `}
                >
                    <ul 
                        css={css`
                            font-family: urw-din, 'itc-avant-garde-gothic-pro', 'futura-pt', futura, helevetica, arial, sans-serif;
                            font-smooth: always;
                            -webkit-font-smoothing: antialiased;
                            -moz-osx-font-smoothing: auto;
                            margin: 0;
                            padding: 1em .25em;
                            list-style-type: none;
                            display: flex;
                            flex-flow: row wrap;
                            font-weight: 600;
                            font-size: 1.5rem;
                            li {
                                text-align: center;
                                width: 100%;
                                padding: .25em 0;
                                a {
                                    text-decoration: none;
                                    color: white;
                                }
                            }
                        `}
                    >
                        <li>
                            <a href="">Home</a>
                        </li>
                        <li>
                            <a href="">Journal</a>
                        </li>
                        <li>
                            <a href="">Lifehacks</a>
                        </li>
                        <li>
                            <a href="">Code</a>
                        </li>
                        <li>
                            <a href="">Fiction</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}