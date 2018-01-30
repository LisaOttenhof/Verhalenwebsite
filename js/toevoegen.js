
//----------------- in div 1 -----------------
var toevoegen1 = document.querySelector('body>main>section:nth-of-type(1)>div>article:first-of-type>header:first-of-type>img');
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


//----------------- in div 2 -----------------
var toevoegen2 = document.querySelector('body>main>section:nth-of-type(1)>div>article:nth-of-type(2)>header:first-of-type>img');
var nummer = 1;


function toevoegen2_function(){
  toevoegen2.src='images/vink_lijst.svg';
  nummer = 0;
  toevoegen_animatie.classList.add('toevoegen_animatie');
  verander_getal++;
  document.querySelector('body>header>p').innerHTML = verander_getal;
}

function verwijderen2_function(){
  if (nummer == 0){
    toevoegen2.src='images/plus_lijst.svg';
    nummer = 1;
  }
}

toevoegen2.addEventListener('click', toevoegen2_function);
toevoegen2.addEventListener('dblclick', verwijderen2_function);

//----------------- in div 3 -----------------
var toevoegen3 = document.querySelector('body>main>section:nth-of-type(1)>div>article:nth-of-type(3)>header:first-of-type>img');
var nummer = 1;


function toevoegen3_function(){
  toevoegen3.src='images/vink_lijst.svg';
  nummer = 0;
  toevoegen_animatie.classList.add('toevoegen_animatie');
  verander_getal++;
  document.querySelector('body>header>p').innerHTML = verander_getal;
}

function verwijderen3_function(){
  if (nummer == 0){
    toevoegen3.src='images/plus_lijst.svg';
    nummer = 1;
  }
}

toevoegen3.addEventListener('click', toevoegen3_function);
toevoegen3.addEventListener('dblclick', verwijderen3_function);

//----------------- in div 4 -----------------
var toevoegen4 = document.querySelector('body>main>section:nth-of-type(1)>div>article:nth-of-type(4)>header:first-of-type>img');
var nummer = 1;


function toevoegen4_function(){
  toevoegen4.src='images/vink_lijst.svg';
  nummer = 0;
  toevoegen_animatie.classList.add('toevoegen_animatie');
  verander_getal++;
  document.querySelector('body>header>p').innerHTML = verander_getal;
}

function verwijderen4_function(){
  if (nummer == 0){
    toevoegen4.src='images/plus_lijst.svg';
    nummer = 1;
  }
}

toevoegen4.addEventListener('click', toevoegen4_function);
toevoegen4.addEventListener('dblclick', verwijderen4_function);


//----------------- in div2 1 -----------------
var toevoegen5 = document.querySelector('body>main>section:nth-of-type(2)>div>article:nth-of-type(1)>header:first-of-type>img');
var nummer = 1;


function toevoegen5_function(){
  toevoegen5.src='images/vink_lijst.svg';
  nummer = 0;
  toevoegen_animatie.classList.add('toevoegen_animatie');
  verander_getal++;
  document.querySelector('body>header>p').innerHTML = verander_getal;
}

function verwijderen5_function(){
  if (nummer == 0){
    toevoegen5.src='images/plus_lijst.svg';
    nummer = 1;
  }
}

toevoegen5.addEventListener('click', toevoegen5_function);
toevoegen5.addEventListener('dblclick', verwijderen5_function);

//----------------- in div2 2 -----------------
var toevoegen6 = document.querySelector('body>main>section:nth-of-type(2)>div>article:nth-of-type(2)>header:first-of-type>img');
var nummer = 1;


function toevoegen6_function(){
  toevoegen6.src='images/vink_lijst.svg';
  nummer = 0;
  toevoegen_animatie.classList.add('toevoegen_animatie');
  verander_getal++;
  document.querySelector('body>header>p').innerHTML = verander_getal;
}

function verwijderen6_function(){
  if (nummer == 0){
    toevoegen6.src='images/plus_lijst.svg';
    nummer = 1;
  }
}

toevoegen6.addEventListener('click', toevoegen6_function);
toevoegen6.addEventListener('dblclick', verwijderen6_function);

//----------------- 1 -----------------
var toevoegen7 = document.querySelector('body>main>section:nth-of-type(2)>article:nth-of-type(1)>header:first-of-type>img');
var nummer = 1;


function toevoegen7_function(){
  toevoegen7.src='images/vink_lijst.svg';
  nummer = 0;
  toevoegen_animatie.classList.add('toevoegen_animatie');
  verander_getal++;
  document.querySelector('body>header>p').innerHTML = verander_getal;
}

function verwijderen7_function(){
  if (nummer == 0){
    toevoegen7.src='images/plus_lijst.svg';
    nummer = 1;
  }
}

toevoegen7.addEventListener('click', toevoegen7_function);
toevoegen7.addEventListener('dblclick', verwijderen7_function);

//----------------- 2 -----------------
var toevoegen8 = document.querySelector('body>main>section:nth-of-type(2)>article:nth-of-type(2)>header:first-of-type>img');
var nummer = 1;


function toevoegen8_function(){
  toevoegen8.src='images/vink_lijst.svg';
  nummer = 0;
  toevoegen_animatie.classList.add('toevoegen_animatie');
  verander_getal++;
  document.querySelector('body>header>p').innerHTML = verander_getal;
}

function verwijderen8_function(){
  if (nummer == 0){
    toevoegen8.src='images/plus_lijst.svg';
    nummer = 1;
  }
}

toevoegen8.addEventListener('click', toevoegen8_function);
toevoegen8.addEventListener('dblclick', verwijderen8_function);

//----------------- 3 -----------------
var toevoegen9 = document.querySelector('body>main>section:nth-of-type(2)>article:nth-of-type(3)>header:first-of-type>img');
var nummer = 1;


function toevoegen9_function(){
  toevoegen9.src='images/vink_lijst.svg';
  nummer = 0;
  toevoegen_animatie.classList.add('toevoegen_animatie');
  verander_getal++;
  document.querySelector('body>header>p').innerHTML = verander_getal;
}

function verwijderen9_function(){
  if (nummer == 0){
    toevoegen9.src='images/plus_lijst.svg';
    nummer = 1;
  }
}

toevoegen9.addEventListener('click', toevoegen9_function);
toevoegen9.addEventListener('dblclick', verwijderen9_function);

//----------------- 4 -----------------
var toevoegen10 = document.querySelector('body>main>section:nth-of-type(2)>article:nth-of-type(4)>header:first-of-type>img');
var nummer = 1;


function toevoegen10_function(){
  toevoegen10.src='images/vink_lijst.svg';
  nummer = 0;
  toevoegen_animatie.classList.add('toevoegen_animatie');
  verander_getal++;
  document.querySelector('body>header>p').innerHTML = verander_getal;
}

function verwijderen10_function(){
  if (nummer == 0){
    toevoegen10.src='images/plus_lijst.svg';
    nummer = 1;
  }
}

toevoegen10.addEventListener('click', toevoegen10_function);
toevoegen10.addEventListener('dblclick', verwijderen10_function);

//----------------- 5 -----------------
var toevoegen11 = document.querySelector('body>main>section:nth-of-type(2)>article:nth-of-type(5)>header:first-of-type>img');
var nummer = 1;


function toevoegen11_function(){
  toevoegen11.src='images/vink_lijst.svg';
  nummer = 0;
  toevoegen_animatie.classList.add('toevoegen_animatie');
  verander_getal++;
  document.querySelector('body>header>p').innerHTML = verander_getal;
}

function verwijderen11_function(){
  if (nummer == 0){
    toevoegen11.src='images/plus_lijst.svg';
    nummer = 1;
  }
}

toevoegen11.addEventListener('click', toevoegen11_function);
toevoegen11.addEventListener('dblclick', verwijderen11_function);

//----------------- 6 -----------------
var toevoegen12 = document.querySelector('body>main>section:nth-of-type(2)>article:nth-of-type(6)>header:first-of-type>img');
var nummer = 1;


function toevoegen12_function(){
  toevoegen12.src='images/vink_lijst.svg';
  nummer = 0;
  toevoegen_animatie.classList.add('toevoegen_animatie');
  verander_getal++;
  document.querySelector('body>header>p').innerHTML = verander_getal;
}

function verwijderen12_function(){
  if (nummer == 0){
    toevoegen12.src='images/plus_lijst.svg';
    nummer = 1;
  }
}

toevoegen12.addEventListener('click', toevoegen12_function);
toevoegen12.addEventListener('dblclick', verwijderen12_function);
