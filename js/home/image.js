function loadImage(){
    document.getElementsByClassName("home-image-href")[0].href = images[Nfolder][N];
    document.getElementsByClassName("home-image-src")[0].src = images[Nfolder][N];
}

function nextimage() {
    if (N === images[Nfolder].length - 1){
        nextfolder()
    }else{
        N++;
    }
    loadImage()
}

function previousimage() {
    if (N < 1){
        previousfolder()
    }else{
        N--;
    }
   loadImage()
}

function nextfolder() {
    if (Nfolder === images.length - 1){
        Nfolder = 0
    }else{
        Nfolder++;
    }
    N = 0
    loadImage()
}

function previousfolder() {
    if (Nfolder < 1){
        Nfolder = images.length - 1
    }else{
        Nfolder--;
    }
    N = 0
    loadImage()
}

var N = 0;
var Nfolder = 0;


var images = [[],[],[],[]]
var qntd   = [36,15,11,48]

for (let i = 0; i < 4; i++) {
    for (let j = 0; j <= qntd[i]; j++) {
        if (i == 2 && (j == 2 || j == 8 || j == 10) )
        {
            images[i].push(`./../images/home/${i}/${j}.png`)
        }
        else {
            images[i].push(`./../images/home/${i}/${j}.jpg`)
        }
        
    }
}

