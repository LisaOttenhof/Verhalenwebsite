//----------------- 1 -----------------
var toevoegen1 = document.querySelector('body>main>section>article:first-of-type>header>img');
var nummer = 1;

var toevoegen_animatie = document.querySelector('body>header>p');
var verander_getal = 4;

function verwijderen1_function(){
  toevoegen1.src='images/plus_lijst.svg';
  nummer = 0;
}

function toevoegen1_function(){
  if (nummer == 0){
    toevoegen1.src='images/vink_lijst.svg';
    nummer = 1;
    toevoegen_animatie.classList.add('toevoegen_animatie');
    verander_getal++;
    document.querySelector('body>header>p').innerHTML = verander_getal;
  }
}

toevoegen1.addEventListener('click', verwijderen1_function);
toevoegen1.addEventListener('dblclick', toevoegen1_function);

//----------------- 2 -----------------
var toevoegen2 = document.querySelector('body>main>section>article:nth-of-type(2)>header>img');
var nummer = 1;

var toevoegen_animatie = document.querySelector('body>header>p');
var verander_getal = 4;

function verwijderen2_function(){
  toevoegen2.src='images/plus_lijst.svg';
  nummer = 0;
}

function toevoegen2_function(){
  if (nummer == 0){
    toevoegen2.src='images/vink_lijst.svg';
    nummer = 1;
    toevoegen_animatie.classList.add('toevoegen_animatie');
    verander_getal++;
    document.querySelector('body>header>p').innerHTML = verander_getal;
  }
}

toevoegen2.addEventListener('click', verwijderen2_function);
toevoegen2.addEventListener('dblclick', toevoegen2_function);

//----------------- 3 -----------------
var toevoegen3 = document.querySelector('body>main>section>article:nth-of-type(3)>header>img');
var nummer = 1;

var toevoegen_animatie = document.querySelector('body>header>p');
var verander_getal = 4;

function verwijderen3_function(){
  toevoegen3.src='images/plus_lijst.svg';
  nummer = 0;
}

function toevoegen3_function(){
  if (nummer == 0){
    toevoegen3.src='images/vink_lijst.svg';
    nummer = 1;
    toevoegen_animatie.classList.add('toevoegen_animatie');
    verander_getal++;
    document.querySelector('body>header>p').innerHTML = verander_getal;
  }
}

toevoegen3.addEventListener('click', verwijderen3_function);
toevoegen3.addEventListener('dblclick', toevoegen3_function);

//----------------- 4 -----------------
var toevoegen4 = document.querySelector('body>main>section>article:nth-of-type(4)>header>img');
var nummer = 1;

var toevoegen_animatie = document.querySelector('body>header>p');
var verander_getal = 4;

function verwijderen4_function(){
  toevoegen4.src='images/plus_lijst.svg';
  nummer = 0;
}

function toevoegen4_function(){
  if (nummer == 0){
    toevoegen4.src='images/vink_lijst.svg';
    nummer = 1;
    toevoegen_animatie.classList.add('toevoegen_animatie');
    verander_getal++;
    document.querySelector('body>header>p').innerHTML = verander_getal;
  }
}

toevoegen4.addEventListener('click', verwijderen4_function);
toevoegen4.addEventListener('dblclick', toevoegen4_function);
