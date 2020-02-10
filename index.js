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
    if (valor == 1) x = "flex"; else x = "none";
    document.querySelector(".home") .style.display = x;

    if (valor == 2) x = "flex"; else x = "none";
    document.querySelector(".sites").style.display = x;

    if (valor == 3) x = "flex"; else x = "none";
    document.querySelector(".revistas").style.display = x;

    if (valor == 4) x = "flex"; else x = "none";
    document.querySelector(".about").style.display = x;

    if (valor == 5) x = "flex"; else x = "none";
    document.querySelector(".sites1").style.display = x;

    if (valor == 6) x = "flex"; else x = "none";
    document.querySelector(".sites2").style.display = x;

    if (valor == 7) x = "flex"; else x = "none";
    document.querySelector(".sites3").style.display = x;

    if (valor == 8) x = "flex"; else x = "none";
    document.querySelector(".sites4").style.display = x;

    if (valor == 9) x = "flex"; else x = "none";
    document.querySelector(".sites5").style.display = x;

}

toggle_page(1)
load_sites(".sites1", oficial)
load_sites(".sites2", kfa)
load_sites(".sites3", blogs)
load_sites(".sites4", youtube)
load_sites(".sites5", turismo)
