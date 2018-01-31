//----------------- section 1 -----------------
var scroll1 = document.querySelector('body>main>section:nth-of-type(2)');
var scroll2 = document.querySelector('body>main>section:nth-of-type(3)');
var scroll3 = document.querySelector('body>main>section:nth-of-type(4)');

function scroll1_function(){
  scroll1.classList.add('scroll_animatie');
  scroll2.classList.add('scroll_animatie');
  scroll3.classList.add('scroll_animatie');
}

scroll1.addEventListener('click', scroll1_function);

//----------------- section 1 -----------------
var scroll2 = document.querySelector('body>main>section:nth-of-type(3)');

function scroll2_function(){
  scroll1.classList.add('scroll_animatie');
  scroll2.classList.add('scroll_animatie');
  scroll3.classList.add('scroll_animatie');
}

scroll2.addEventListener('click', scroll2_function);

//----------------- section 1 -----------------
var scroll3 = document.querySelector('body>main>section:nth-of-type(4)');

function scroll3_function(){
  scroll1.classList.add('scroll_animatie');
  scroll2.classList.add('scroll_animatie');
  scroll3.classList.add('scroll_animatie');
}

scroll3.addEventListener('click', scroll3_function);
