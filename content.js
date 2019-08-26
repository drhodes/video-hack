// video hack.

// 
// The entire 6.002x playlist
// https://www.youtube.com/playlist?list=PL_onPhFCkVQgEZeKD2Ghxw6MWYPYL-arq
//

function log(msg) {
    console.log("6.002> " + msg);
}

let video_table = {
    // "not-working id" -> "working id"
    "XRMvtdDJMIg": "kY0iYX_PCTg" // S9V1: Review
}

log("extension loaded");

var done = false;
function replaceVid() {
    setTimeout(function() {    
        log("6.002x> attempting to replace youtube video");
        var player = document.getElementsByClassName("video-player");
        
        if (player.length > 0) {
            var url = player[0].children[0].getAttribute("src");
            if (url) {
                // the video_table needs to be implemented here.
                // need to check the url to determine not-working youtube video id.
                url = url.replace("XRMvtdDJMIg", "kY0iYX_PCTg");    
                player[0].children[0].setAttribute("src", url);
                done=true;
                log("done.");
            }
        }
        if (!done) replaceVid();
    }, 500);
    
}
    
replaceVid();
    
