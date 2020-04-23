var posts = [
    corona,
    mulher,
    lgbt,
    eleicoes
]

function  loadPost() {
    document.getElementsByClassName("post-title")[0].innerHTML = posts[N3].titulo
    document.getElementsByClassName("post-content")[0].innerHTML = posts[N3].texto
    document.getElementsByClassName("post-link")[0].href = posts[N3].link;
    NpostImg = 0;
    loadPostImage()
}

function loadPostImage(){
    console.log(posts[N3]['images'][NpostImg])
    document.getElementsByClassName("post-image")[0].src = posts[N3]['images'][NpostImg]
    document.getElementsByClassName("post-image-href")[0].href = posts[N3]['images'][NpostImg]
}


function nextpost() {
    if (N3 === posts.length - 1){
        N3 = 0
    }else{
        N3++;
    }
    loadPost()
}

function previouspost() {
    if (N3 < 1){
        N3 = posts.length - 1
    }else{
        N3--;
    }
    loadPost()
}

function nextPostImage() {
    if (NpostImg === posts[N3]['images'].length - 1){
        NpostImg = 0
    }else{
        NpostImg++;
    }
    loadPostImage()
}

function previousPostImage() {
    if (NpostImg < 1){
        NpostImg = posts[N3]['images'].length - 1
    }else{
        NpostImg--;
    }
    loadPostImage()
}



for (let i = 0; i < posts.length; i++) {
    posts[i]['images'] = []
    for (let j = 0; j < posts[i]['qtdImg']; j++) {
        posts[i]['images'].push(`./../images/posts/${posts[i]['nome']}/${j}.jpg`)
    }
    
}

console.log(posts)

var N3 = 0;
var NpostImg = 0;
loadPost()