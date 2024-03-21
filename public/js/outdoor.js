
fetch("./donneesProduits/baskets.json").then(rep =>{
    return rep.json()
})
.then(res =>{
 cardContent(res)
})
let cards = document.querySelector('.card-container')
function cardContent (donnees) {
    donnees.forEach(donnee => {
        cards.innerHTML += `<div class="card">
            <div class="card-img">
            <a href="detail-produit.html?ref=${donnee.photo}"><img src="public/img/imagesProduits/${donnee.photo}" alt="photo de la basket ${donnee.nom}" />
            </a>
            </div>
            <div class="card-content">
            <div class="flex space-between item-center margin-bottom20">
                <p class="bold">${donnee.nom}</p>
                <p class="price">${donnee.prix}€</p>
            </div>
            <p>${donnee.description}</p>
            </div>
        </div>`
    });
}

