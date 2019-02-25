// ==UserScript==
// @name         Facebook AdsRemove
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.facebook.com/
// @grant        none
// @require      https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js
// ==/UserScript==

(function() {
    'use strict';
    function removeSponsored() {
        let allposts=$("._5jmm");
        $.each(allposts, (index, post) => {
            let spanElm = $(post).find(".e_12m2ss2_nm");
            if (spanElm.length > 0) {
                let description = spanElm[0].innerText;
                if( description == "Sponsored") {
                    $(post).remove();
                }
            }
        });
    }

    $(document).scroll(function() {
        removeSponsored();
    });
    removeSponsored();
})();
