//get contents of page

document.addEventListener('DOMContentLoaded', function () { //loads script when button pressed
    var checkPageButton = document.getElementById('checkPage');
    var pageContents;
    checkPageButton.addEventListener('click', function () { //watches for the button press 
        console.log("The URL of this page is: " + window.location.href)   

    }, false);
}, false);

