
//---------- sorteren ----------
var sorteren_button = document.querySelector('section>form>div:nth-of-type(1)>fieldset:nth-of-type(2)>div:nth-of-type(1)>button');
var sorteren_show = document.querySelector('section>form>div:nth-of-type(1)>fieldset:nth-of-type(2)>div:nth-of-type(1)>div');

function sorteren_functie() {
  leesduur_show.classList.remove('leesduur_dropdown');
  emotie_show.classList.remove('emotie_dropdown');
  sorteren_show.classList.toggle('sorteren_dropdown');
}

sorteren_button.addEventListener('click', sorteren_functie);


//---------- invullen klik ----------//
var sorteren_actief = document.querySelector('section>form>div:nth-of-type(1)>fieldset:nth-of-type(2)>div:nth-of-type(1)>button');

var sorteren_optie1 = document.querySelector('section>form>div:nth-of-type(1)>fieldset:nth-of-type(2)>div:nth-of-type(1)>div>input:nth-of-type(1)');
var sorteren_optie2 = document.querySelector('section>form>div:nth-of-type(1)>fieldset:nth-of-type(2)>div:nth-of-type(1)>div>input:nth-of-type(2)');

function sorteren_optie1_functie() {
  var x = sorteren_optie1.checked;
    if (x == true) {
      document.querySelector('section>form>div:nth-of-type(1)>fieldset:nth-of-type(2)>div:nth-of-type(1)>button').innerHTML = 'Kort - lang';
      sorteren_actief.classList.add('filter_actief');
      sorteren_optie2.checked = false;
    } else if (x == false) {
      document.querySelector('section>form>div:nth-of-type(1)>fieldset:nth-of-type(2)>div:nth-of-type(1)>button').innerHTML = 'Meest populair';
      sorteren_actief.classList.remove('filter_actief');
      sorteren_optie1.checked = false;
    }
}

function sorteren_optie2_functie() {
  var x = sorteren_optie2.checked;
    if (x == true) {
      document.querySelector('section>form>div:nth-of-type(1)>fieldset:nth-of-type(2)>div:nth-of-type(1)>button').innerHTML = 'Lang - kort';
      sorteren_actief.classList.add('filter_actief');
      sorteren_optie1.checked = false;
    } else if (x == false) {
      document.querySelector('section>form>div:nth-of-type(1)>fieldset:nth-of-type(2)>div:nth-of-type(1)>button').innerHTML = 'Meest populair';
      sorteren_actief.classList.remove('filter_actief');
      sorteren_optie2.checked = false;
    }
}

sorteren_optie1.addEventListener('click', sorteren_optie1_functie);
sorteren_optie2.addEventListener('click', sorteren_optie2_functie);
