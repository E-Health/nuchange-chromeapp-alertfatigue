'use strict';

//Reading the HTML of the page.
chrome.extension.onMessage.addListener(function(message, sender, sendResponse) {
	var divs = 'started';
    //var markup = document.documentElement.innerHTML;
    var markup = document.body.innerHTML;
    switch(message.type) {
        case 'read-text':
            divs = markup;
        break;
    }
    console.log(sender.tab ?
            'from a content script:' + sender.tab.url :
            'from the extension');
    sendResponse({contents: divs});
    return true;
});