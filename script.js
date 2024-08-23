
// menu-icon setup
let manuIcon = document.querySelector('#menu-icon')
let navbar = document.querySelector('.navbar')

manuIcon.addEventListener('click',function(e){
    manuIcon.classList.toggle('fa-xmark')
    navbar.classList.toggle('active')
})
// Links
let linkedin = document.querySelector('.linkedin');
linkedin.addEventListener('click', function(e) {
    e.preventDefault(); // Prevent default action
    window.open('https://www.linkedin.com/in/pallabi-biswas-26151a255/', '_blank');
});
let github = document.querySelector('.github'); // GitHub button

github.addEventListener('click', function(e) {
    e.preventDefault(); // Prevent default action
    window.open('https://github.com/Palla04', '_blank'); // Open GitHub link in a new tab
});


// scroll setup and navbar highlight
let section = document.querySelectorAll('section')
let navLinks = document.querySelectorAll('header nav a')

window.onscroll = ()=>{
    let top = window.scrollY;
    section.forEach(sec=>{
        
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset+height){
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href').includes(id)) {
                    link.classList.add('active');
                  }
            })
        };
        
    });

    manuIcon.classList.remove('fa-xmark')
    navbar.classList.remove('active')
};

// Scroll Reveal
ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200,
 });

 ScrollReveal().reveal('.home-content, .heading', {origin: 'top'});
 ScrollReveal().reveal('.home-img, .services-content, .portfolio-box, .contact form', {origin: 'bottom'});
 ScrollReveal().reveal('.home-content h1', {origin: 'left'});
 ScrollReveal().reveal('.home-content p, about-content', {origin: 'right'});