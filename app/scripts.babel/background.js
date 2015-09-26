'use strict';

chrome.runtime.onInstalled.addListener(details => {
  console.log('previousVersion', details.previousVersion);
});

chrome.browserAction.setBadgeText({text: '\'Allo'});

// The read text function to be modified
var readText= function() {
    chrome.tabs.getSelected(null, function(tab){
        chrome.tabs.sendMessage(tab.id, {type: 'colors-div', color: '#F00'});
        // setting a badge
        chrome.browserAction.setBadgeText({text: 'red!'});
        return 'NuChange';
    });
};

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
    sendResponse({farewell: 'goodbye'});

    return true;
});

