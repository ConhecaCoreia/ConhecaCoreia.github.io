function nextpost() {
    if (N3 === posts.length - 1){
        N3 = 0
    }else{
        N3++;
    }
    document.getElementsByClassName("post-title")[0].innerHTML = posts[N3].nome
    document.getElementsByClassName("post-content")[0].innerHTML = posts[N3].texto
    document.getElementsByClassName("post-link")[0].href = posts[N3].link;
}

function previouspost() {
    if (N3 < 1){
        N3 = posts.length - 1
    }else{
        N3--;
    }
    document.getElementsByClassName("post-title")[0].innerHTML = posts[N3].nome
    document.getElementsByClassName("post-content")[0].innerHTML = posts[N3].texto
    document.getElementsByClassName("post-link")[0].href = posts[N3].link;
    document.getElementsByClassName("post-link")[0].innerHTML = posts[N3].link;
}


var N3 = 1;
previouspost()