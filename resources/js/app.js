import React from 'react';
import ReactDOM from 'react-dom';
import PostIntro from './src/components/PostIntro';
import Nav from './src/components/Nav';

ReactDOM.render(
    <React.StrictMode>
        <Nav />
        <PostIntro>
            <h1>This Is A Headline</h1>
            <h2>2021.05.30 14.13</h2>
            <p>Ramps swag adaptogen coloring book slow-carb subway tile 90's bicycle rights. Pabst roof party thundercats stumptown bitters, tumeric literally authentic XOXO.</p>
        </PostIntro>
    </React.StrictMode>,
    document.getElementById('root')
);