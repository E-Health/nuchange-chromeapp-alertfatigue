'use strict';

window.onload = function() {
    document.getElementById('button').onclick = function() {
        chrome.extension.sendMessage({
            type: 'read-text'
        });
    };
};