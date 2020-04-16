
function next() {
    if (N === images.length - 1){
        N = 0
    }else{
        N++;
    }
    document.getElementsByClassName("home-image")[0].src = images[N];
}

function previous() {
    if (N < 1){
        N = images.length - 1
    }else{
        N--;
    }
    document.getElementsByClassName("home-image")[0].src = images[N];
}

var images = []
for (let i = 0; i <= 10; i++) {
    images.push(`./../images/home/${i}.jpg`)
}
var N = 0;