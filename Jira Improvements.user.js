// ==UserScript==
// @name         Jira Improvements
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Open issue/incident links in a new tab in stead of the default behaviour (i.e. in the parent window)
// @author       Nils Nahooy
// @match        https://jira.duvel.com/*
// @require      https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js
// @require      https://gist.github.com/raw/2625891/waitForKeyElements.js
// @grant        GM_addStyle
// @grant        GM.getValue
// ==/UserScript==
//- The @grant directives are needed to restore the proper sandbox.

//comment out line below if you don't want issue links to open in a new tab
waitForKeyElements (".issue-link, .js-key-link, .ghx-key-link", blankifyLink);
//comment out the line below if you don't want to hide the finished column in the Kanban (and the notification about the new backlog)
waitForKeyElements (".ghx-column", hideFinishedInKanban);

function blankifyLink (jNode) {
    jNode.attr ('target', '_blank');
}

function hideFinishedInKanban(JNode){
    if(JNode.attr("data-id") == 25 || JNode.attr("data-column-id") == 25){
        JNode.attr("style","display: none;");
    }
    $('.ghx-kanplan-ack').attr("style","display: none;");
}