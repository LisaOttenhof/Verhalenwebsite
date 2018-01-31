//----------------- 1 -----------------
var toevoegen1 = document.querySelector('body>main>section:first-of-type>header>img');
var nummer = 1;

var toevoegen_animatie = document.querySelector('body>header>p');
var verander_getal = 4;

function toevoegen1_function(){
  toevoegen1.src='images/vink_lijst.svg';
  nummer = 0;
  toevoegen_animatie.classList.add('toevoegen_animatie');
  verander_getal++;
  document.querySelector('body>header>p').innerHTML = verander_getal;
}

function verwijderen1_function(){
  if (nummer == 0){
    toevoegen1.src='images/plus_lijst.svg';
    nummer = 1;
  }
}

toevoegen1.addEventListener('click', toevoegen1_function);
toevoegen1.addEventListener('dblclick', verwijderen1_function);
