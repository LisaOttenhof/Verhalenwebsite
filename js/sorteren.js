
//---------- sorteren ----------
var sorteren_button = document.querySelector('section>form>fieldset:nth-of-type(3)>div:nth-of-type(1)>button');
var sorteren_show = document.querySelector('section>form>fieldset:nth-of-type(3)>div:nth-of-type(1)>div');

function sorteren_functie() {
  leesduur_show.classList.remove('leesduur_dropdown');
  emotie_show.classList.remove('emotie_dropdown');
  sorteren_show.classList.toggle('sorteren_dropdown');
}

sorteren_button.addEventListener('click', sorteren_functie);
