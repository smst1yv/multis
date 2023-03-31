
const account = document.getElementById('ac');
const acdropdown = document.getElementById('account-dropdown');

function toggleDropdown() {
    acdropdown.classList.toggle('active');
    valdrop.classList.remove('active');
    langdrop.classList.remove('active');
}

window.addEventListener('click', function(event) {
    if (!account.contains(event.target)) {
        acdropdown.classList.remove('active');
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
    if (!vl.contains(event.target)) {
        valdrop.classList.remove('active');
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
    if (!en.contains(event.target)) {
        langdrop.classList.remove('active');
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