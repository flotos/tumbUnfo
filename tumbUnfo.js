// ==UserScript==
// @name         tumblr unFo
// @namespace    https://github.com/flotos/tumbUnfo
// @version      1.0.1
// @description  Unfollow automatically on tumblr
// @author       Florian Peyron | flotos
// @match        *://*.tumblr.com/following*
// @grant        none
// @downloadURL  https://raw.githubusercontent.com/flotos/tumbUnfo/master/tumbUnfo.js
// @updateURL    https://raw.githubusercontent.com/flotos/tumbUnfo/master/tumbUnfo.js
// @run-at       document-end
// ==/UserScript==

(function() {
    'use strict';
    const script = () => {

        console.log("started unfollow");

        const DELAY_FIRST_BTN = 2000;
        const DELAY_SECOND_BTN = 1000;
        const totalDelay = DELAY_FIRST_BTN + DELAY_SECOND_BTN;

        const count = 0;
        const max = 24;
        const unfollowButtons = Array.from(document.getElementsByClassName('unfollow_button'));
        //console.log("unfo", unfollowButtons);

        const generateRandomDelay = (millis) => Math.random() * (millis/3)+(millis*(2/3));

        for(let i=0;i<max;i++){
            //console.log(i, i*totalDelay + generateRandomDelay(DELAY_SECOND_BTN));
            setTimeout(() => {
                console.log("unfollow", i);
                unfollowButtons[i].click();
                setTimeout(() => {
                    document.getElementsByClassName("ui_button btn_1 blue")[0].click();
                    console.log("confirmed", i);
                }, generateRandomDelay(DELAY_FIRST_BTN));
            }, i*totalDelay + generateRandomDelay(DELAY_SECOND_BTN));
        }
        setTimeout(() => {location.reload();}, generateRandomDelay(totalDelay*max));
    };


    setTimeout(script, 1000);

})();

