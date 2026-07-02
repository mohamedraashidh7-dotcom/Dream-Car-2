let sidenav = document.querySelector(".side-navbar");

function showNavbar(){
    sidenav.style.left = "0";
}

function closeNavbar(){
    sidenav.style.left = "-70%";
}

//Parallax Effect

window.addEventListener("scroll", function () {

    const scroll = window.pageYOffset;

    // Hero Video
    const video = document.querySelector(".background-video");

    if(video){
        video.style.transform = `translateY(${scroll * 0.35}px)`;
    }

    // Hero Content
    const heroText = document.querySelector(".hero-content");

    if(heroText){
        heroText.style.transform =
        `translate(-50%, calc(-50% + ${scroll * 0.25}px))`;
    }

});

const observer = new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:.2
});

document.querySelectorAll(".fade-up").forEach(el=>{

    observer.observe(el);

});

document.addEventListener("mousemove", (e) => {

    const hero = document.querySelector(".hero-content");

    if (!hero) return;

    const x = (e.clientX - window.innerWidth / 2) / 40;
    const y = (e.clientY - window.innerHeight / 2) / 40;

    hero.style.transform =
        `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`;

});