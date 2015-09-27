'use strict';

window.onload = function () {
    document.getElementById('button').onclick = function () {
        chrome.runtime.sendMessage({ type: 'read-text' }, function (reply) {
            document.getElementById('read_text').innerHTML = reply.farewell;
            return true;
        });
    };
};
//# sourceMappingURL=popup.js.map
