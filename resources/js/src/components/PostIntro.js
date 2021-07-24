import React, { Children } from 'react';
/** @jsxRuntime classic */
/** @jsx jsx */;
import { css, jsx } from '@emotion/react';
import { fontSize, fontStack, fontStackTitle } from '../styleConstants';

export default function PostIntro({children}){
    return(
        <div
            css={css`
                width: 100%;
                min-height: 100vh;
                position: relative;
                color: white;
            `}
        >
            <div
                css={css`
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    z-index: 90;
                    overflow: hidden;
                    video {
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                        object-position: center center;
                    }
                `}
            >
                <video 
                    muted 
                    autoPlay 
                    loop 
                    playsInline
                >
                    <source 
                        src="../img/time-lapse-roof.mov" 
                        type="video/mp4" 
                    />
                </video>
            </div>
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
                                font-family: ${fontStackTitle};
                                font-smooth: always;
                                -webkit-font-smoothing: antialiased;
                                -moz-osx-font-smoothing: auto;
                                font-weight: 600;
                                font-size: ${fontSize[6]};
                                line-height: .85;
                            }
                            h2 {
                                font-family: ${fontStackTitle};
                                font-smooth: always;
                                -webkit-font-smoothing: antialiased;
                                -moz-osx-font-smoothing: auto;
                                font-weight: 100;
                                font-size: ${fontSize[4]};
                            }
                            p {
                                font-family: ${fontStack};
                                border-top: 1px dotted white;
                                font-size: ${fontSize[2]};
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