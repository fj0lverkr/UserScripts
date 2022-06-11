// ==UserScript==
// @name         Outlook.com hide banner ad
// @match        *://outlook.live.com/*
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Quality of life (live? get it?) improvements.
// @require      http://code.jquery.com/jquery-latest.js
// @require      https://gist.github.com/raw/2625891/waitForKeyElements.js
// @grant        GM_addStyle
// @grant        GM.getValue
// ==/UserScript==
/*- The @grant directive is needed to work around a design change
    introduced in GM/TM 1.0.   It restores the sandbox.
*/


waitForKeyElements (".O3eUZ, .u7EVN, .VPtFl, .pBKjV", hideElem)
//waitForKeyElements ("._6EkCIBulssv0eDQ55G3yH", setSillySlogan)
waitForKeyElements ("._2tvCNqil81Lsi6owqrTDMq", setSillySlogan)

function hideElem(node){
    node.hide()
}

function setSillySlogan(node, word='', wrd=[]){
    if(word==''){
        node.html('')
        let words = ['At least it\'s not Gmail',
                     'kooltuO',
                     'ʞoolʇnO',
                     'Powered By Satan',
                     'Vooruitzicht',
                     'Premium included in next vaccine',
                     'Lorem ipsum...'
                    ]
        let seed = Math.floor(Math.random() * words.length)
        word = words[seed]
        wrd = word.split('')
    }
    if(wrd.length > 0){
        node.text(node.text() + wrd.shift())
        let running = setTimeout(function(){setSillySlogan(node,word,wrd)}, 90)
    }
}
