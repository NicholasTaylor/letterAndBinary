import React, { Children } from 'react';
/** @jsxRuntime classic */
/** @jsx jsx */;
import { css, jsx } from '@emotion/react';

export default function PostIntro({children}){
    return(
        <div
            css={css`
                width: 100%;
                min-height: 100vh;
                position: relative;
            `}
        >
            <div
                css={css`                
                    position: relative;
                    z-index: 110;
                    width: 80%;
                `}
            >
                <div
                    css={css`
                        position: absolute;
                        width: 100%;
                        height: 100%;
                        
                        text-align: center;
                        left: calc(50vw - 50%);
                    `}
                >
                    <div 
                        css={css`
                            position: absolute;
                            width: 100%;
                            height: auto;
                
                            top: 90vh;
                            transform: translateY(-100%);
                            h1 {
                                font-family: urw-din, 'itc-avant-garde-gothic-pro', 'futura-pt', futura, helevetica, arial, sans-serif;
                                font-smooth: always;
                                -webkit-font-smoothing: antialiased;
                                -moz-osx-font-smoothing: auto;
                                font-weight: 600;
                                font-size: 2.5rem;
                                line-height: .85;
                            }
                            h2 {
                                font-family: urw-din, 'itc-avant-garde-gothic-pro', 'futura-pt', futura, helevetica, arial, sans-serif;
                                font-smooth: always;
                                -webkit-font-smoothing: antialiased;
                                -moz-osx-font-smoothing: auto;
                                font-weight: 100;
                                font-size: 1.5rem;
                            }
                            p {
                                font-family: ibm-plex-sans, 'Inter', $fontStackSystem;
                                border-top: 1px dotted white;
                                font-size: 1rem;
                                line-height: 1.1;
                                margin: .75em 0 0 0;
                                padding: .75em 0 0 0;
                            }
                        `}
                    >
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}