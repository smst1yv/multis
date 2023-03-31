
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
  //-------------------------------- slider

  var splide = new Splide( '.splide', {
    type  : 'fade',
    rewind: true,
    autoplay: true
  } );
  
  splide.mount();

  //------------------cartadd
const input = document.getElementById("input");
const decreaseBtn = document.getElementById("minus");
const increaseBtn = document.getElementById("plus");

let count = 0;

decreaseBtn.addEventListener("click", () => {
  if (count > 0) {
    count--;
    input.value = count;
  }
});

increaseBtn.addEventListener("click", () => {
  count++;
  input.value = count;
});

//----------------slider-two

$('.autoplay').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
});
  //==================description


const desc = document.getElementById('description');
const info= document.getElementById('information')
const rev= document.getElementById('reviewis')
const desctab = document.getElementById('desc-tab');
const itab = document.getElementById('info-tab');
const revtab = document.getElementById('review-tab');


info.addEventListener("click", () => {
  info.classList.toggle('active');
  desc.classList.remove('active');
  rev.classList.remove('active');
  desctab.style.display = 'none';
  itab.style.display = 'block';
  revtab.style.display ='none'
});

desc.addEventListener("click", () => {
  info.classList.remove('active');
  desc.classList.add('active');
  rev.classList.remove('active');
  desctab.style.display = 'block';
  itab.style.display = 'none';
  revtab.style.display = 'none';
});

rev.addEventListener("click", () => {
  info.classList.remove('active');
  desc.classList.remove('active');
  rev.classList.add('active');
  desctab.style.display = 'none';
  itab.style.display = 'none';
  revtab.style.display = 'flex';
});


  //---------------back-to-top
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

