function nextpost() {
    if (N2 === posts.length - 1){
        N2 = 0
    }else{
        N2++;
    }
    document.getElementsByClassName("home-post")[0].src = posts[N2];
}

function previouspost() {
    if (N2 < 1){
        N2 = posts.length - 1
    }else{
        N2--;
    }
    document.getElementsByClassName("home-post")[0].src = posts[N2];
}


var N2 = 0;