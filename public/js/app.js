//Mini carte du footer 
let map = L.map('map').setView([50.433333, 2,833333], 9);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([50.433333, 2,833333]).addTo(map)
    .bindPopup('Vous êtes ici.')
    .openPopup();

    //menu burger
    let burger = document.getElementById('burger')
    let burgerOpen = document.getElementById('openBtn')
    let sideNav = document.querySelector('.sidenav')
    burgerOpen.addEventListener('click', (e) =>{
        console.log(e);
        burger.classList.toggle('open')
        sideNav.classList.toggle('active')
    }
)

//Animation 
const ratio = .2
let options = {
    root: null,
    rootMargin: "0px",
    threshold: ratio,
  };
  
  let animatIntersect = function (entries, observer) {
    entries.forEach(entry => {
        if(entry.intersectionRatio > ratio){
            entry.target.classList.add('anime-visible')
            observer.unobserve(entry.target)
        }
    });
  }
  let observer = new IntersectionObserver(animatIntersect, options);
  (document.querySelectorAll('.anime').forEach(a =>{
    observer.observe(a)
  }))