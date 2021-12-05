// ==UserScript==
// @name     Outlook.com hide banner ad
// @include  *://outlook.live.com/*
// @match    *://outlook.live.com/*
// @require http://code.jquery.com/jquery-latest.js
// @grant    GM_addStyle
// ==/UserScript==
/*- The @grant directive is needed to work around a design change
    introduced in GM/TM 1.0.   It restores the sandbox.
*/

 $(document).ready(function(){
     let words = ['At least it\'s not Gmail',
             'kooltuO',
             'ʞoolʇnO',
             'Powered By Satan',
             'Vooruitzicht',
             'Premium included in next vaccine',
             'Lorem ipsum...'
            ];
     let seed = Math.floor(Math.random() * words.length);
     let word = words[seed];
     $('._1fti_QgAzqGWPGlqh_FSvI').hide();
     $('._28ithXDZzMqSN0YAG2rCVn').hide();
     $('._6EkCIBulssv0eDQ55G3yH').html(word);
 });

