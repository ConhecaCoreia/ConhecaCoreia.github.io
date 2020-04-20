function nextvideo() {
    if (N2 === videos.length - 1){
        N2 = 0
    }else{
        N2++;
    }
    document.getElementsByClassName("home-video-src")[0].src = videos[N2];
}

function previousvideo() {
    if (N2 < 1){
        N2 = videos.length - 1
    }else{
        N2--;
    }
    document.getElementsByClassName("home-video-src")[0].src = videos[N2];
}

var N2 = 0;

var videos = [
    "https://www.youtube.com/embed/gw2x8ZXj6VA",
    "https://www.youtube.com/embed/PjVJ4FqaowA",
    "https://www.youtube.com/embed/CKRidQJQLrs",
    "https://www.youtube.com/embed/EfDemEA85bQ",
    "https://www.youtube.com/embed/nSd48emp0lI",
    "https://www.youtube.com/embed/H38i-CQSDsw",
    "https://www.youtube.com/embed/cARfym9TYzo",
    "https://www.youtube.com/embed/UZsr2XvEVIQ",
    "https://www.youtube.com/embed/2BO83Ig-E8E",
    "https://www.youtube.com/embed/ohZqZCmRMjo",
    "https://www.youtube.com/embed/GUgeEBWHdCc",
    "https://www.youtube.com/embed/Zc1WN6RkdjQ"
]