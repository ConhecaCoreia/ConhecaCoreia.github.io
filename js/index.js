function load_sites(class_name, variavel_sites) {
    sites = document.querySelector(class_name)
    var site_container = null;
    variavel_sites.forEach(e => {
        if (typeof (e) != 'object') {
            if (site_container != null) {
                sites.appendChild(site_container);
                site_container = null;
            }
            var category = document.createElement("div")
            category.className = 'category'
            category.id = e
            category.appendChild(document.createTextNode(e))
            sites.appendChild(category);
        } else {
            if (site_container == null) {
                site_container = document.createElement("div")
                site_container.className = 'site_container'
            }

            var site = document.createElement("a");
            site.target = "_blank"
            site.href = e['link']
            site.className = 'site'
            var figure = document.createElement('a')
            figure.style.height = '100px';
            var img = document.createElement('img')
            img.src = 'images/' + e['figura']
            figure.appendChild(img)
            figure.className = 'site-' + 'figura'

            var title = document.createElement("div")
            title.appendChild(document.createTextNode(e['nome']))
            title.className = 'site-' + 'nome'

            var text = document.createElement("div")
            text.appendChild(document.createTextNode(e['texto']))
            text.className = 'site-' + 'texto'
            var container = document.createElement('div')
            container.className = 'container'

            container.appendChild(figure)
            container.appendChild(text)
            site.appendChild(title)
            site.appendChild(container)
            site_container.appendChild(site)
        }
    })
    sites.appendChild(site_container);
}

function toggle_page(valor) {
    const divs = ['home', 'sites', 'revistas', 'about', 'sitesOficial',
        'sitesKfa', 'sitesBlogs', 'sitesYoutube', 'sitesTurismo',
        'revistasTimes', 'revistasCoreia', 'revistasHoje',
        'revistasKumsu', 'revistasComercio'
    ]

    for (div of divs) {
        document.querySelector('.' + div).style.display = 'none';
    }

    document.querySelector('.' + divs[valor - 1]).style.display = 'flex';
    history.pushState({}, '', '/' + divs[valor - 1]);
}

function load_from_url() {
    const divs = ['home', 'sites', 'revistas', 'about', 'sitesOficial',
        'sitesKfa', 'sitesBlogs', 'sitesYoutube', 'sitesTurismo',
        'revistasTimes', 'revistasCoreia', 'revistasHoje',
        'revistasKumsu', 'revistasComercio'
    ]

    changeTo = 0;
    for (div of divs) {
        if (location.pathname == '/' + div) {
            changeTo = divs.indexOf(div);
        }
    };

    toggle_page(changeTo + 1);
}

if (location.pathname == '/') {
    toggle_page(1);
} else {
    load_from_url();
}

window.onpopstate = function (event) {
    load_from_url();
}

load_sites(".sitesOficial", oficial)
load_sites(".sitesKfa", kfa)
load_sites(".sitesBlogs", blogs)
load_sites(".sitesYoutube", youtube)
load_sites(".sitesTurismo", turismo)
load_sites(".revistasTimes", times)
load_sites(".revistasCoreia", coreia)
load_sites(".revistasHoje", hoje)
load_sites(".revistasKumsu", kumsu)
load_sites(".revistasComercio", comercio)