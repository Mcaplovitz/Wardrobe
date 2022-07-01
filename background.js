// background.js

// Called when the user clicks on the browser action.
// chrome.action.onClicked.addListener(tab => {
//     // Send a message to the active tab
//     chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
//         var activeTab = tabs[0];
//         chrome.tabs.sendMessage(activeTab.id, { "message": "clicked_browser_action" });
//         //test 2
//     });
// });        

// Run script each time Chrome extension icon clicked
document.addEventListener("DOMContentLoaded", () => {
    chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
        var activeTab = tabs[0];
        chrome.tabs.sendMessage(activeTab.id, {
            message: "FETCH_IMAGE"
        });
    });
});
chrome.runtime.onMessage.addListener((request, sender) => {
    if (request.message === "SHOW_RESULTS") {
        const status = request.results.imageSource.length;
        const app = document.querySelector('.result-items');

        // Check if array is empty to prevent error
        if (status) {
            app.innerHTML = request.results.imageSource
                .map(img => `
         <a href="${img}" target="_blank"><img src="${img}"/></a>
        `).join(" ");
        }
    }
});