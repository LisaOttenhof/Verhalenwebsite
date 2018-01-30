
//----------------- hover aan -----------------
var liken = document.querySelector('body>main>section:nth-of-type(3)>img:first-of-type');
var nummer = 2;

var liken_verschijnen = document.querySelector('body>main>section:nth-of-type(3)>p:nth-of-type(1)');
var verander_getal = 12;

function hoveraan_function(){
  if (nummer == 2) {
    liken.src='images/hart_icoon_hover.svg';
    nummer = 0;
  }
}

function hoveruit_function(){
  if (nummer == 0){
    liken.src='images/hart_icoon.svg';
    nummer = 2;
  }
}

function liken_function(){
  liken.src='images/hart_icoon_liked.svg';
  nummer = 1;
  liken.classList.add('liken_animatie');
  liken_verschijnen.classList.add('liken_verschijnen');
  verander_getal++;
  document.querySelector('body>main>section:nth-of-type(3)>p:nth-of-type(2)').innerHTML = verander_getal + ' likes';
}

function ontliken_function(){
  if (nummer == 1){
    liken.src='images/hart_icoon.svg';
    nummer = 2;
  }
}

liken.addEventListener('mouseover', hoveraan_function);
liken.addEventListener('mouseout', hoveruit_function);
liken.addEventListener('click', liken_function);
liken.addEventListener('dblclick', ontliken_function);
