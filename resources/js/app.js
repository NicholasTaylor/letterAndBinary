require('./bootstrap');

let flagNav = false;

const handleClick = () => {
    [document.querySelector('.c-navicon__linetop').style.animationName,document.querySelector('.c-navicon__linemiddle').style.animationName,document.querySelector('.c-navicon__linebottom').style.animationName,document.querySelector('.l-nav').style.animationName] = flagNav === false ? ['topnavon', 'middlenavon', 'bottomnavon', 'navon'] : ['topnavoff', 'middlenavoff', 'bottomnavoff', 'navoff'];
    flagNav = !flagNav;
}

document.querySelector('.l-navicon').addEventListener('click',handleClick)