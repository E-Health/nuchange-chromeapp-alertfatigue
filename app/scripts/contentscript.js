'use strict';

chrome.extension.onMessage.addListener(function (message, sender, sendResponse) {
    var divs = 'started';
    switch (message.type) {
        case 'read-text':
            divs = 'I am reading';
            break;
    }
    console.log(sender.tab ? 'from a content script:' + sender.tab.url : 'from the extension');
    sendResponse({ contents: divs });
    return true;
});
//# sourceMappingURL=contentscript.js.map
