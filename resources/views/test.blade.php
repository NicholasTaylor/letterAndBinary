<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1 viewport-fit=cover">

        <title>Test</title>

        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.gstatic.com">
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet"> 
        <link rel="stylesheet" href="https://use.typekit.net/ojz4vei.css">
        <link href="{{ asset('css/bootstrap-reboot.min.css') }}" rel="stylesheet">
        <link href="{{ asset('css/nav.css') }}" rel="stylesheet">
        <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    </head>
    <body class="antialiased">
        <div class="l-topBg">
        </div>
        <div aria-hidden="true" class="l-navicon">
            <svg class="c-navicon" data-name="c-navicon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 21">
                <line class="c-navicon__line c-navicon__linetop" y1="0.5" x2="26" y2="0.5" />
                <line class="c-navicon__line c-navicon__linemiddle" y1="10.5" x2="26" y2="10.5" />
                <line class="c-navicon__line c-navicon__linebottom" y1="20.5" x2="26" y2="20.5" />
            </svg>
        </div>
        <div class="l-logo">
            <div class="c-logo">
                Un Coupe de Destin
            </div>
        </div>
        <nav class="l-nav">
            <div class="c-nav">
                <ul class="c-nav__list c-nav__list--categories">
                    <li class="c-nav__listitem">
                        <a href="">Home</a>
                    </li>
                    <li class="c-nav__listitem">
                        <a href="">Journal</a>
                    </li>
                    <li class="c-nav__listitem">
                        <a href="">Lifehacks</a>
                    </li>
                    <li class="c-nav__listitem">
                        <a href="">Code</a>
                    </li>
                    <li class="c-nav__listitem">
                        <a href="">Fiction</a>
                    </li>
                </ul>
            </div>
        </nav>
        <div class="l-container">
            <div class="c-intro">
                <div class="c-intro__content l-intro">
                    <div class="l-intro__horizontal l-intro__horizontal--center">
                        <div class="l-intro__vertical l-intro__vertical--bottom">
                            <div class="c-intro__headline">
                                This Is A Headline
                            </div>
                            <div class="c-intro__date">
                                2021.05.30 14.13
                            </div>
                            <div class="c-intro__openingPara">
                                <p>
                                    Ramps swag adaptogen coloring book slow-carb subway tile 90's bicycle rights. Pabst roof party thundercats stumptown bitters, tumeric literally authentic XOXO. Church-key +1 leggings art party, viral health goth migas kickstarter austin coloring book farm-to-table vice normcore. Distillery leggings coloring book cloud bread neutra. Man braid waistcoat hell of normcore twee migas blog vegan. Food truck yr cold-pressed asymmetrical mumblecore authentic unicorn deep v kinfolk hashtag tbh offal pabst cliche scenester.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="c-intro__bg">
                    <video muted autoplay loop playsinline class="c-intro__bgAsset">
                        <source src="{{ asset('img/time-lapse-roof.mov') }}" type="video/mp4" />
                    </video>
                </div>
                <!--<div class="c-intro__bg">
                    <img src="{{ asset('img/afternoon-sky.gif') }}" class="c-intro__bgAsset" />
                </div>-->
                <div class="c-intro__screen">
                </div>
            </div>
            <div class="c-content">
                <p>
                    I'm baby tofu cronut cardigan, vexillologist health goth hella gastropub cliche photo booth kogi ugh. Godard pinterest raw denim, kinfolk roof party jean shorts cornhole readymade truffaut. Keffiyeh bicycle rights tofu thundercats tote bag portland raw denim ethical shabby chic etsy. Pitchfork helvetica stumptown asymmetrical.
                </p>
                <div class="c-content__imgDiv">
                    <img src="{{ asset('img/672ye1wud3r51.png') }}" class="c-content__img--sm" />
                </div>
                <p>
                    Everyday carry dreamcatcher ugh direct trade poke, aesthetic food truck. Put a bird on it plaid everyday carry occupy post-ironic vinyl four loko venmo fingerstache meh authentic tofu drinking vinegar man braid activated charcoal. Gluten-free kitsch chia mumblecore waistcoat banjo aesthetic church-key. Intelligentsia vexillologist scenester la croix, drinking vinegar twee neutra affogato irony put a bird on it cliche ugh kombucha chia farm-to-table. Quinoa crucifix poke, VHS ugh portland meggings post-ironic pok pok craft beer.
                </p>
                <div class="c-content__imgDiv">
                    <img src="{{ asset('img/cxd8bfpgke251.png') }}" class="c-content__img c-content__img--med" />
                </div>
                <p>
                    Mumblecore fam meh master cleanse schlitz, vape meggings. Pork belly mlkshk helvetica poutine aesthetic scenester. Butcher cred snackwave, street art vice succulents yr keytar. 90's post-ironic neutra hella, marfa four loko poke distillery kogi PBR&B glossier.
                </p>
                <div class="c-content__imgDiv">
                    <img src="{{ asset('img/eqhlkjhh1p151.jpg') }}" class="c-content__img c-content__img--lg" />
                </div>
                <p>
                    Fashion axe neutra fanny pack, trust fund chambray craft beer la croix gastropub kombucha brunch seitan umami jean shorts squid prism. Af offal wolf meditation meh activated charcoal cardigan bitters DIY chicharrones. Af hell of la croix post-ironic shabby chic tumblr, affogato hoodie enamel pin schlitz blog. Helvetica wayfarers vaporware, direct trade irony tumblr fam blue bottle glossier master cleanse polaroid trust fund. Raw denim gochujang la croix cred polaroid. 8-bit try-hard put a bird on it squid VHS.
                </p>
                <div class="c-content__imgDiv">
                    <img src="{{ asset('img/m23bwh4n0x151.png') }}" class="c-content__img c-content__img--full" />
                </div>
                <p>
                    Hot chicken humblebrag coloring book deep v echo park asymmetrical cray woke vinyl drinking vinegar. Glossier succulents unicorn raclette readymade quinoa. Church-key wolf adaptogen bitters subway tile direct trade. Blog yr XOXO health goth pop-up, migas +1 crucifix. Yuccie intelligentsia you probably haven't heard of them kogi, keffiyeh skateboard disrupt cred knausgaard squid small batch prism fanny pack banh mi kinfolk. Man bun hammock salvia quinoa hot chicken.
                </p>
                <p>
                    Shaman slow-carb messenger bag, echo park shoreditch cloud bread hot chicken. 8-bit taxidermy activated charcoal, fam food truck man bun af raw denim banh mi tote bag kickstarter health goth. Aesthetic hell of fixie air plant, narwhal cold-pressed direct trade normcore selvage austin edison bulb flexitarian stumptown synth tilde. Distillery iceland umami, organic normcore quinoa pinterest tumblr sartorial. 90's flexitarian quinoa, hoodie YOLO meh cray meditation cold-pressed tumeric.
                </p>
                <p>
                    Keffiyeh chicharrones squid jean shorts occupy. Cold-pressed seitan pok pok, whatever helvetica quinoa knausgaard kogi poke bicycle rights kitsch subway tile selvage squid tote bag. Plaid live-edge venmo, man braid flexitarian mustache pickled leggings banjo poutine etsy small batch affogato squid brooklyn. Vaporware prism cred vexillologist, pop-up slow-carb butcher 3 wolf moon taiyaki pinterest ethical yr normcore keytar. Microdosing snackwave meh, activated charcoal fixie bicycle rights lomo tacos gochujang drinking vinegar cronut actually. Hexagon tilde twee try-hard fanny pack.
                </p>
                <p>
                    Hella migas paleo freegan craft beer meggings bitters try-hard prism pug deep v. Retro salvia truffaut live-edge squid XOXO, hella artisan try-hard kale chips meggings ugh forage air plant readymade. Poke normcore pour-over shoreditch, YOLO paleo slow-carb blog chicharrones kinfolk. Prism fanny pack next level organic mumblecore vaporware.
                </p>
                <p>
                    Skateboard succulents vegan neutra normcore readymade, trust fund 8-bit sartorial master cleanse tacos brunch man bun. Tumeric drinking vinegar etsy vinyl. Kogi meh la croix retro biodiesel. Put a bird on it gastropub raclette, hoodie trust fund celiac normcore beard poutine scenester iPhone iceland godard. Poutine yr kinfolk, pinterest retro knausgaard pork belly kitsch green juice selvage intelligentsia messenger bag air plant polaroid normcore. Raclette skateboard plaid listicle DIY salvia hashtag man bun raw denim woke you probably haven't heard of them vinyl direct trade craft beer thundercats. Normcore paleo pop-up put a bird on it disrupt man braid.
                </p>
                <p>
                    Lomo synth church-key man bun vice snackwave. Fanny pack bitters etsy gentrify bespoke helvetica, ennui adaptogen dreamcatcher actually echo park post-ironic letterpress fam selvage. Keffiyeh asymmetrical tbh aesthetic, tote bag roof party ennui seitan knausgaard helvetica franzen vexillologist bicycle rights you probably haven't heard of them. Man bun before they sold out taiyaki hexagon, stumptown tumblr la croix marfa paleo distillery fam butcher. Activated charcoal next level wolf distillery, thundercats pitchfork 3 wolf moon banh mi pinterest fashion axe tattooed venmo brunch swag single-origin coffee.
                </p>
            </div>
        </div>
    </body>
    <script type="text/javascript" src="{{ asset('js/app.js') }}"></script>
</html>
