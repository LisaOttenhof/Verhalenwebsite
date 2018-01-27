
//---------- filter leesduur ----------
var leesduur_button = document.querySelector('section>form>fieldset>div:nth-of-type(1)>button');
var leesduur_show = document.querySelector('section>form>fieldset>div:nth-of-type(1)>div');

function leesduur_functie() {
  leesduur_show.classList.toggle('leesduur_dropdown');
  emotie_show.classList.remove('emotie_dropdown');
  sorteren_show.classList.remove('sorteren_dropdown');
}

leesduur_button.addEventListener('click', leesduur_functie);


//---------- filter emotie ----------
var emotie_button = document.querySelector('section>form>fieldset>div:nth-of-type(2)>button');
var emotie_show = document.querySelector('section>form>fieldset>div:nth-of-type(2)>div');

function emotie_functie() {
  leesduur_show.classList.remove('leesduur_dropdown');
  emotie_show.classList.toggle('emotie_dropdown');
  sorteren_show.classList.remove('sorteren_dropdown');
}

emotie_button.addEventListener('click', emotie_functie);
