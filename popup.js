//get contents of page
import {PythonShell} from 'python-shell';
let options = {
    args: (window.location.href, "test")
};
document.addEventListener('DOMContentLoaded', function () { //loads script when button pressed
    var checkPageButton = document.getElementById('checkPage');
    var page;
    checkPageButton.addEventListener('click', function () { //watches for the button press 
        // console.log("The URL of this page is: " + window.location.href)   
        page = window.location.href
        PythonShell.run('webscrape.py', options, function (err) {
            if (err) throw err;
            console.log('finished');
        });
    }, false);
}, false);

