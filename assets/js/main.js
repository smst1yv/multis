
const account = document.getElementById('ac');
const acdropdown = document.getElementById('account-dropdown');

function toggleDropdown() {
    acdropdown.classList.toggle('active');
    valdrop.classList.remove('active');
    langdrop.classList.remove('active');
}

window.addEventListener('click', function(event) {
    if (!acdropdown.contains(event.target)) {
        acdropdown.classList.remove('open');
    }
});



const vl = document.getElementById('vl');
const valdrop = document.getElementById('vl-dropdown')


function valy(){
    valdrop.classList.toggle('active');
    langdrop.classList.remove('active');
    acdropdown.classList.remove('active');
}

window.addEventListener('click', function(event) {
    if (!valdrop.contains(event.target)) {
        valdrop.classList.remove('open');
    }
});


const en = document.getElementById('en');
const langdrop = document.getElementById('lang-dropdown')



function langdr(){
    langdrop.classList.toggle('active');
    valdrop.classList.remove('active');
    acdropdown.classList.remove('active');
}

window.addEventListener('click', function(event) {
    if (!langdrop.contains(event.target)) {
        langdrop.classList.remove('open');
    }
});

//----------------------------
const drmenu = document.getElementById('dropdown-menu-bar');

function dropen(){
    drmenu.classList.toggle('block');
   
}

//----------------------------

const ddm = document.getElementById('drop-drop-menu');
const dres = document.getElementById('dresses');
function dresses(){
    ddm.classList.toggle('drop-drop-open');
}

window.addEventListener('click', function(event) {
    if (!dres.contains(event.target)) {
        ddm.classList.remove('drop-drop-open');
    }
  });

//--------------------------
const pages = document.getElementById('pages');
const pgdr = document.getElementById('pg-dropdown');

function pgop(){
  pgdr.classList.toggle('pg-open');
}

window.addEventListener('click', function(event) {
  if (!pages.contains(event.target)) {
      pgdr.classList.remove('pg-open');
  }
});

//-------------------------------------

const hamburger = document.getElementById('hamburger');

function increaseHeight() {
    var div = document.getElementById("multishop");
    var ddmenu2 = document.getElementById("dd-menu");
    if (div.style.height === "217px") {
      div.style.height = "70px";
      ddmenu2.style.display = 'none';
    } else {
      div.style.height = "217px";
    }
  }

  //-----------dd-------------------

  function showInput() {
    var div2 = document.getElementById("multishop");
    var ddmenu = document.getElementById("dd-menu");
    
    if (ddmenu.style.display === "none") {
      div2.style.height = "300px";
      ddmenu.style.display = "block";
    } else {
      div2.style.height = "217px";
      ddmenu.style.display = "none";
    }
  }

//------------------------]

const slides = document.querySelectorAll(".slider-container");
const dots = document.querySelectorAll(".slider-dot");

let currentSlide = 0;
let slideInterval = setInterval(nextSlide, 5000);

function nextSlide() {
  slides[currentSlide].classList.remove("active");
  dots[currentSlide].classList.remove("active");
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add("active");
}

function nextSlide() {
  slides[currentSlide].classList.remove("active");
  dots[currentSlide].classList.remove("active");
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add("active");
  dots[currentSlide].classList.add("active");
}

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    slides[currentSlide].classList.remove("active");
    dots[currentSlide].classList.remove("active");
    currentSlide = index;
    slides[currentSlide].classList.add("active");
    dots[currentSlide].classList.add("active");
  });
});


setTimeout(() => {
  nextSlide();
}, 2000);

slideInterval = setInterval(nextSlide, 5000);

//--------------yuxaributon
function scrollToTop() {
  const position = window.pageYOffset;
  if (position > 0) {
    window.requestAnimationFrame(scrollToTop);
    window.scrollTo(0, position - Math.max(position / 10, 30));
  }
}

window.addEventListener('scroll', function() {
  var button = document.getElementById('back-to-top');
  if (window.pageYOffset > 100) {
    button.style.display = 'block';
  } else {
    button.style.display = 'none';
  }
});

var button = document.getElementById('back-to-top');
button.addEventListener('click', function() {
  scrollToTop();
});

//--------------sponsor slide

$('.owl-carousel').owlCarousel({
  loop:true,
  autoplay: true,
  center: true,
  margin:5,
  autoplaySpeed: 3000,
  nav:true,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:3
      },
      1000:{
          items:5
      }
  }
})