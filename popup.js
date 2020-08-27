//get contents of page

document.addEventListener('DOMContentLoaded', function () { //loads script when button pressed
    var checkPageButton = document.getElementById('checkPage');
    var pageContents;
    checkPageButton.addEventListener('click', function () { //watches for the button press 
        
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {  //finds current tab
            var currTab = tabs[0];
            if (currTab) { //if on the current tab, get the contents of the page url
                var corsOverride = "https://cors-anywhere.herokuapp.com/" + currTab.url; //overrides the CORS protocall
                //console.log(corsOverride);
                pageContents = file_get_contents(corsOverride, console.log);
                //pageContents.match("<img.* src=")
                const paragraph = 'The <img test src="quick"> brown fox jumps over the lazy dog. It barked.';
                const regex = /\<img(.*)src=\"(.*)"/;
                const found = paragraph.matchAll(regex)[2];

                console.log(found);
                console.log("Tab Name get");
            }
        });
      
    
    async function file_get_contents(uri, callback) {
        let res = await fetch(uri),
            ret = await res.text();
        return callback ? callback(ret) : ret; // a Promise() actually.
    }
       
       

    }, false);
}, false);

