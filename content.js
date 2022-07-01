// content.js
// document.addEventListener('DOMContentLoaded', function() { //loads script when button pressed
//     var checkPageButton = document.getElementById('checkPage');
//     var page;
//     checkPageButton.addEventListener('click', function() { //watches for the button press 
//         console.log("The URL of this page is: " + window.location.href)
//             // page = window.location.href

//     }, false);
// }, false);

chrome.runtime.onMessage.addListener((request, sender) => {
    if (request.message === "FETCH_IMAGE") {
        console.log("The URL of this page is: " + window.location.href)
            // Get images from product page/gallery
        const imageContainer =
            document.querySelectorAll(".ad-image-wrapper .ad-image img") ||
            document.querySelectorAll("imagebox-thumbnail img");
        // Make array from NodeList object
        const imageArray = Array.from(imageContainer);
        // Get image source 
        const imageSource = imageArray.length && imageArray
            .map(src => src.getAttribute("src"));
        // Sending message with results   
        chrome.runtime.sendMessage({
            message: "SHOW_RESULTS",
            results: { imageSource: imageSource }
        });
    }
});