function load_sites(class_name, variavel_sites)
{ 
    sites = document.querySelector(class_name)
    var site_container = null;
    variavel_sites.forEach(e => {
        if (typeof(e) != 'object')
        {
            if (site_container != null){
                sites.appendChild(site_container);
                site_container = null;
            }
            var category = document.createElement("div")
            category.className = 'category'
            category.id = e
            category.appendChild(document.createTextNode(e))
            sites.appendChild(category);
        }
        else
        {
            if (site_container == null){
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
            img.src =  'images/' + e['figura']
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

function toggle_page(valor)
{
    if (valor == 1)  x = "flex"; else x = "none"; document.querySelector(".home") .style.display = x;
    if (valor == 2)  x = "flex"; else x = "none"; document.querySelector(".sites").style.display = x;
    if (valor == 3)  x = "flex"; else x = "none"; document.querySelector(".revistas").style.display = x;
    if (valor == 4)  x = "flex"; else x = "none"; document.querySelector(".about").style.display = x;
    if (valor == 5)  x = "flex"; else x = "none"; document.querySelector(".sitesOficial").style.display = x;
    if (valor == 6)  x = "flex"; else x = "none"; document.querySelector(".sitesKfa").style.display = x;
    if (valor == 7)  x = "flex"; else x = "none"; document.querySelector(".sitesBlogs").style.display = x;
    if (valor == 8)  x = "flex"; else x = "none"; document.querySelector(".sitesYoutube").style.display = x;
    if (valor == 9)  x = "flex"; else x = "none"; document.querySelector(".sitesTurismo").style.display = x;
    if (valor == 10) x = "flex"; else x = "none"; document.querySelector(".revistasTimes").style.display = x;
    if (valor == 11) x = "flex"; else x = "none"; document.querySelector(".revistasCoreia").style.display = x;
    if (valor == 12) x = "flex"; else x = "none"; document.querySelector(".revistasHoje").style.display = x;
    if (valor == 13) x = "flex"; else x = "none"; document.querySelector(".revistasKumsu").style.display = x;
    if (valor == 14) x = "flex"; else x = "none"; document.querySelector(".revistasComercio").style.display = x;
}

toggle_page(1)
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