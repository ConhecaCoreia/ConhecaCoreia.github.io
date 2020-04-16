
function nextimage() {
    if (N === images.length - 1){
        N = 0
    }else{
        N++;
    }
    
    document.getElementsByClassName("home-image-href")[0].href = images[N];
    document.getElementsByClassName("home-image-src")[0].src = images[N];
}

function previousimage() {
    if (N < 1){
        N = images.length - 1
    }else{
        N--;
    }
    document.getElementsByClassName("home-image-href")[0].href = images[N];
    document.getElementsByClassName("home-image-src")[0].src = images[N];
}

var images = []
for (let i = 0; i <= 10; i++) {
    images.push(`./../images/home/${i}.jpg`)
}
var N = 0;