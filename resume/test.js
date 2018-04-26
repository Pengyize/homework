$borderWidth: 3px;
$outlineColor: rgb(0, 0, 0);
$mortySkinColor: rgb(247, 206, 169);
$mortyHairColor: rgb(131, 72, 21);
$rickSkinColor: rgb(229, 217, 204);
$rickHairColor: rgb(182, 230, 251);

body, html {
    margin: 0;
    width: 100%;
    height: 100%;
    background-color: rgb(234, 220, 179);
}

@keyframes eye-rick {
    0% {
        top: -115px;
}
    10% {
        top: -43px;
}
    20%, 100% {
        top: -115px;
}
}

@keyframes eye-morty {
    0% {
        top: -112px;
}
    10% {
        top: -38px;
}
    20%, 100% {
        top: -112px;
}
}

.rick-and-morty {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    height: 400px;
@media only screen and (max-width: 500px) {
        height: 300px;
    }
}

.rick-wrapper {
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
}

.morty-wrapper {
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
}

.rick-wrapper,
.morty-wrapper {
@media only screen and (max-width: 500px) {
        width: 100%;
    }
}

#rick {
    position: relative;
.hair-base {
        height: 275px;
        width: 225px;
        position: absolute;
        background-color: $rickHairColor;
        top: 30px;
        left: -25px;
        border-radius: 50%;
        z-index: 1;
    }
    $rickHairSize: 50px;
.hair {
        height: 50px;
        width: 50px;
        position: absolute;
        background-color: $rickHairColor;
        border: $borderWidth solid $outlineColor;
    &.hair-1 {
            height: 30px;
            width: 30px;
            transform: skew(-10deg, 0deg) rotate(-10deg) translate(10px, -10px);
        }
    &.hair-2 {
            height: 50px;
            width: 50px;
            transform: skew(-10deg, 0deg) rotate(-5deg) translate(-25px, -53px);
        }
    &.hair-3 {
            height: 55px;
            width: 55px;
            transform: skew(-10deg, 0deg) rotate(20deg) translate(-95px, -80px);
        }
    &.hair-4 {
            height: 95px;
            width: 95px;
            transform: skew(40deg, 0deg) rotate(25deg) translate(35px, -220px);
        }
    &.hair-5 {
            height: 135px;
            width: 95px;
            transform: skew(20deg, 0deg) rotate(28deg) translate(-35px, -267px);
        }
    &.hair-6 {
            height: 75px;
            width: 95px;
            transform: skew(-30deg, 0deg) rotate(-42deg) translate(85px, -255px);
        }
    &.hair-7 {
            height: 75px;
            width: 95px;
            transform: skew(-30deg, 0deg) rotate(-28deg) translate(63px, -211px);
        }
    &.hair-8 {
            height: 85px;
            width: 95px;
            transform: skew(-30deg, 0deg) rotate(4deg) translate(-5px, -168px);
        }
    &.hair-9 {
            height: 55px;
            width: 55px;
            transform: skew(-30deg, 0deg) rotate(13deg) translate(58px, -134px);
        }
    &.hair-10 {
            height: 55px;
            width: 75px;
            transform: skew(-47deg, 0deg) rotate(19deg) translate(20px, -78px);
        }
    &.hair-11 {
            height: 45px;
            width: 70px;
            transform: skew(30deg, 2deg) rotate(7deg) translate(135px, -76px);
        }
    &.hair-12 {
            height: 29px;
            width: 78px;
            transform: skew(30deg, 2deg) rotate(23deg) translate(80px, -78px);
        }
    }
.face {
        z-index: 3;
        height: 260px;
        width: 170px;
        top: 50px;
        position: relative;
        background-color: $rickSkinColor;
        border-style: solid;
        border-width: $borderWidth;
        border-radius: 50%;
        border-top-right-radius: 50% 110px;
        border-top-left-radius: 50% 100px;
        border-bottom-right-radius: 50% 100px;
        border-bottom-left-radius: 50% 120px;
        border-color: $outlineColor;
    }
.eye-brow {
        height: 10px;
        width: 52px;
        position: absolute;
        background-color: $rickHairColor;
        border-style: solid;
        border-color: $outlineColor;
        border-width: $borderWidth;
        transform: skew(15deg, 15deg);
        top: 38px;
    }
    $eyebrowRadius: 45%;
    $eyebrowConnectionRadius: 25%;
.eye-brow-left {
        border-right-width: 0;
        transform: skew(-15deg, -15deg);
        left: 28px;
        border-top-right-radius: $eyebrowConnectionRadius;
        border-bottom-right-radius: 10%;
        border-top-left-radius: $eyebrowRadius;
        border-bottom-left-radius: $eyebrowRadius;
    }
.eye-brow-right {
        border-left-width: 0;
        left: 79px;
        border-top-left-radius: $eyebrowConnectionRadius;
        border-bottom-left-radius: 10%;
        border-top-right-radius: $eyebrowRadius;
        border-bottom-right-radius: $eyebrowRadius;
    }
.eye {
        height: 65px;
        width: 65px;
        position: absolute;
        background-color: #ffffff;
        border-style: solid;
        border-width: $borderWidth;
        border-radius: 50%;
        border-color: $outlineColor;
        overflow: hidden;
    }
.eye-left {
        top: 65px;
        left: 10px;
    }
.eye-right {
        top: 65px;
        right: 10px;
    }
.eye-left + .eye-bag {
        content: "";
        height: 60px;
        width: 60px;
        position: absolute;
        top: 85px;
        left: 12px;
        border-style: solid;
        border-width: $borderWidth;
        border-color: transparent transparent $outlineColor;
        border-radius: 50%;
        z-index: 5;
    }
.eye-right + .eye-bag {
        content: "";
        height: 60px;
        width: 60px;
        position: absolute;
        top: 85px;
        right: 10px;
        border-style: solid;
        border-width: $borderWidth;
        border-color: transparent transparent $outlineColor;
        border-radius: 50%;
    }
.eye:after {
        position: absolute;
        content: "*";
        font-family: Arial;
        font-weight: bolder;
        font-size: 25px;
        top: 27px;
        left: 30px;
    }
.eye-left:before,
.eye-right:before {
        content: "";
        height: 105px;
        width: 85px;
        position: absolute;
        top: -115px;
        left: -10px;
        background-color: $rickSkinColor;
        border-style: solid;
        border-width: $borderWidth;
        border-color: $outlineColor;
        border-radius: 0;
        z-index: 4;
        animation-name: eye-rick;
        animation-duration: 5s;
        animation-delay: 2s;
        animation-iteration-count: infinite;
        animation-fill-mode: forwards;
    }
.nose {
        height: 40px;
        width: 18px;
        background-color: $rickSkinColor;
        border-style: solid;
        border-color: $outlineColor;
        border-width: $borderWidth;
        border-top-width: 0;
        border-radius: 50%;
        border-top-left-radius: 0;
        border-top-right-radius: 0;
        border-bottom-right-radius: 40% 15px;
        border-bottom-left-radius: 50% 35px;
        position: absolute;
        top: 135px;
        left: 73px;
        //transform: rotate(-5deg);
        transform-origin: 0 0;
    }
.mouth {
        height: 10px;
        width: 85px;
        background-color: $rickSkinColor;
        border-style: solid;
        border-color: $outlineColor;
        border-width: $borderWidth;
        border-top-width: 0;
        border-left-width: 0;
        border-right-width: 0;
        border-top-left-radius: 0;
        border-top-right-radius: 0;
        border-bottom-right-radius: 100% 55px;
        border-bottom-left-radius: 50% 30px;
        position: absolute;
        top: 195px;
        left: 50px;
    }
.mouth:before {
        content: "";
        height: 40px;
        width: 380px;
        position: absolute;
        top: 16px;
        left: -15px;
        border-style: solid;
        border-width: $borderWidth;
        border-color: transparent transparent transparent $outlineColor;
        border-radius: 50%;
        transform: rotate(10deg);
    }
.mouth:after {
        content: "";
        height: 40px;
        width: 380px;
        position: absolute;
        top: 58px;
        left: -274px;
        border-style: solid;
        border-width: $borderWidth;
        border-color: transparent $outlineColor transparent transparent;
        border-radius: 50%;
        transform: rotate(-25deg);
    }
.ear {
        height: 35px;
        width: 35px;
        position: absolute;
        z-index: 2;
        background-color: $rickSkinColor;
        border-style: solid;
        border-width: $borderWidth;
        border-color: $outlineColor;
        border-radius: 50%;
    }
.ear-left {
        top: 195px;
        left: -15px;
    }
.ear-right {
        top: 195px;
        right: -15px;
    }
}

#morty {
    position: relative;
    top: 70px;
.face {
        z-index: 1;
        height: 200px;
        width: 210px;
        position: relative;
        background-color: $mortySkinColor;
        border-style: solid;
        border-width: $borderWidth;
        border-radius: 50%;
        border-color: $outlineColor;
    }
.eye-brow {
        height: 10px;
        width: 35px;
        position: absolute;
        background-color: $mortySkinColor;
        border-style: solid;
        border-width: $borderWidth 0 0 0;
        border-color: $outlineColor;
    }
.eye-brow-left {
        width: 45px;
        top: 25px;
        left: 45px;
        border-top-left-radius: 30px 8px;
        border-top-right-radius: 30%;
    }
.eye-brow-right {
        width: 40px;
        top: 25px;
        right: 31px;
        border-top-left-radius: 30%;
        border-top-right-radius: 30px 8px;
    }
.eye {
        height: 70px;
        width: 70px;
        position: absolute;
        background-color: #ffffff;
        border-style: solid;
        border-width: $borderWidth;
        border-radius: 50%;
        border-color: $outlineColor;
        overflow: hidden;
    }
.eye-left {
        top: 40px;
        left: 30px;
    }
.eye-right {
        top: 40px;
        right: 10px;
    }
.eye-left:before,
.eye-right:before {
        content: "";
        height: 105px;
        width: 85px;
        position: absolute;
        top: -115px;
        left: -10px;
        background-color: $mortySkinColor;
        border-style: solid;
        border-width: $borderWidth;
        border-color: $outlineColor;
        border-radius: 0;
        z-index: 4;
        animation-name: eye-morty;
        animation-duration: 5s;
        animation-delay: 1.5s;
        animation-iteration-count: infinite;
        animation-fill-mode: forwards;
    }
.eye:after {
        position: absolute;
        content: "*";
        font-family: Arial;
        font-weight: bolder;
        font-size: 25px;
        top: 27px;
        left: 30px;
    }
.nose {
        height: 20px;
        width: 13px;
        background-color: $mortySkinColor;
        border-style: solid;
        border-width: $borderWidth;
        border-radius: 50%;
        border-color: transparent $outlineColor $outlineColor $outlineColor;
        border-top-left-radius: 0;
        border-top-right-radius: 0;
        border-top-width: 0;
        position: absolute;
        top: 108px;
        left: 110px;
        transform: rotate(-45deg);
    }
.mouth {
        height: 20px;
        width: 70px;
        position: absolute;
        background-color: $mortySkinColor;
        border-style: solid;
        border-width: $borderWidth;
        border-radius: 50%;
        border-color: $outlineColor;
        border-top-width: 0px;
        border-left-width: 0px;
        border-right-width: 0px;
        border-bottom-right-radius: 10px;
        top: 135px;
        left: 80px;
    }
.hair {
        height: 225px;
        width: 240px;
        position: absolute;
        background-color: $mortyHairColor;
        border-style: solid;
        border-color: $outlineColor;
        border-width: $borderWidth;
        border-radius: 50%;
        z-index: 0;
        top: -43px;
        left: -17px;
    }
.ear {
        height: 35px;
        width: 35px;
        position: absolute;
        z-index: 0;
        background-color: $mortySkinColor;
        border-style: solid;
        border-width: $borderWidth;
        border-color: $outlineColor;
        border-radius: 50%;
    }
.ear-left {
        top: 110px;
        left: -15px;
    }
.ear-right {
        top: 110px;
        right: -10px;
    }
}