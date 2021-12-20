/*======== scroll section active link =======*/ 

const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 50,
            sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader(){
    const header = document.getElementById('header')
    // When the scroll is greater than 80 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 80) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== Dark/Light Theme ===============*/
const themeButton = document.getElementById('theme-btn')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'
//Topico selecionado previamente (Se o usuário selecionar)

const selectedTheme = localStorage.getItem('selected-theme')
const selectedicon = localStorage.getItem('selected-icon')

// Nos obtemos o tema em uso que foi validado pela interface na dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

// Nós validamos se o usuário escolheu uma opção antes
if (selectedTheme) {
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedicon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}

// Ativar/Desativar o tema manualmente com o botão
themeButton.addEventListener('click', () => {
    // Adicionar ou remover o icone do tema escuro
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // Salvando o tema atual que foi escolhido pelo usuário
    localStorage.setItem('selected-theme', getCurrentTheme)
    localStorage.setItem('selected-icon', getCurrentIcon)
})


let image_tracker = 'ld';


themeButton.addEventListener('click', () =>{
    

    let image = document.getElementById('logo');
    if(image_tracker=='ld') {
        image.src ='assets/logo-vertical-gatz-branco.png';
        image_tracker = 'll';
        
    } else {
        image.src = 'assets/logo-vertical-gatz.png';
        image_tracker = 'ld';
        
    }
})



        


/*====================== scroll reveal =========================*/
window.addEventListener('load', reveal);

function reveal(){
    var reveals = document.querySelectorAll('.reveal');

    for(var i = 0; i < reveals.length; i++){
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;

        if(revealtop < windowheight - revealpoint){
            reveals[i].classList.add('active');
        }
        else{
            reveals[i].classList.remove('active');
        }
    }
}
/*====================== scroll reveal =========================*/
window.addEventListener('scroll', function () {
    const parallax = document.querySelector('.parallax');
    let scrollPosition = window.pageYOffset;

    parallax.style.transform = 'translateY(' + scrollPosition * .1 + 'px)';
});

/*============================ Image Switch Swiper=================================*/

var swiper = new Swiper(".portfolio__container", {
    effect: "cards",
    grabCursor: true,
    loop: true,
    autoplay: true,
  });

/*============================ Video Player=================================*/

  const videoFile = document.getElementById('video-file'),
      videoButton = document.getElementById('video-button'),
      videoIcon = document.getElementById('video-icon')

function playPause(){ 
    if (videoFile.paused){
        // Play video
        videoFile.play()
        // We change the icon
        videoIcon.classList.add('uil-pause')
        videoIcon.classList.remove('uil-caret-right')
    }
    else {
        // Pause video
        videoFile.pause(); 
        // We change the icon
        videoIcon.classList.remove('uil-pause')
        videoIcon.classList.add('uil-caret-right')

    }
}
videoButton.addEventListener('click', playPause)

function finalVideo(){
    // Video ends, icon change
    videoIcon.classList.remove('uil-pause')
    videoIcon.classList.add('uil-caret-right')
}
// ended, when the video ends
videoFile.addEventListener('ended', finalVideo)


/*============================ Video Player =================================*/


window.addEventListener('scroll', reveal_content);

function reveal_content(){
    var reveals = document.querySelectorAll('.reveal_content');

    for(var i = 0; i < reveals.length; i++){
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;

        if(revealtop < windowheight - revealpoint){
            reveals[i].classList.add('active');
        }
        else{
            reveals[i].classList.remove('active');
        }
    }
}
/*============================ scroll up =================================*/

function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 200 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 200) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)