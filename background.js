// background.js
import {PythonShell} from 'python-shell';
    let options = {
    args: (window.location.href, "test")
    };
// Called when the user clicks on the browser action.
chrome.action.onClicked.addListener(tab => {
    // Send a message to the active tab
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        var activeTab = tabs[0];
        chrome.tabs.sendMessage(activeTab.id, { "message": "clicked_browser_action" });
        //test 2
    });
});        
