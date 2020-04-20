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
}

var N3 = 1;
previouspost()

var posts =
[
    {
        "nome": "lgbt", /* ../js/home/posts/lgbt.html */   /* ../images/posts/lgbt/0.jpg */
        "titulo": "Questão LGBT na Coreia Popular",
        "link": "https://www.facebook.com/OOutroLadodaCoreiadoNorte/photos/a.940537479353525/2983693268371259",
        "qtdImg": 0
    },
    {
        "nome": "",
        "titulo": "Direitos da mulher na RPD da Coreia",
        "link": "http://avozdopovode1945.blogspot.com/2018/04/lei-de-igualdade-de-direitos-do-homem-e.html",
        "qtdImg": 0
    },
    {
        "nome": "",
        "titulo": "Eleições na RPD da Coreia",
        "link": "https://cepsongunbr.wordpress.com/2019/03/09/entenda-como-funcionam-as-eleicoes-na-coreia-do-norte/",
        "qtdImg": 0
    }
]