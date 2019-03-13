// ==UserScript==
// @name         Aloha-this
// @namespace    http://github.com/mlilley
// @version      1.0
// @description  Remove banner from aloha
// @author       mlilley
// @match        https://aloha--c.visualforce.com/apex/aloha_appLauncher*
// @match        https://aloha--c.na52.visual.force.com/apex/aloha_appLauncher*
// @require      http://ajax.googleapis.com/ajax/libs/jquery/1.5/jquery.min.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    $('div.aloha-carousel.slick-initialized.slick-slider').remove();
})();
