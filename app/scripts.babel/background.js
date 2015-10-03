'use strict';

var thisText = 'Still reading';

chrome.runtime.onInstalled.addListener(details => {
  console.log('previousVersion', details.previousVersion);
});

chrome.browserAction.setBadgeText({text: '\'Drug'});

// The read text function to be modified
var readText= function() {
    chrome.tabs.getSelected(null, function(tab){
       chrome.tabs.sendMessage(tab.id, {type:'read-text'},function(reply){
            thisText = reply.contents;
            return true;
        });
        // setting a badge
        chrome.browserAction.setBadgeText({text: 'read!'});
        return true;
    });
};

var respText = function(){
    return thisText;
};

"""
chrome.browserAction.onClicked.addListener(function(tab) { 
    var link = tab.url;
    var x = new XMLHttpRequest();
    x.open('GET', 'http://example.com/?whatever=' + link);
    x.onload = function() {
        alert(x.responseText);
    };
    x.send();
});
"""
//Add a single time event listner to the event from popup.js
chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
    switch(request.type) {
        case 'read-text':
            readText();
        break;
    }
    console.log(sender.tab ?
            'from a content script:' + sender.tab.url :
            'from the extension');
    sendResponse({contents: respText()});

    return true;
});

