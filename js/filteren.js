
//---------- filter leesduur ----------
var leesduur_button = document.querySelector('section>form>div:nth-of-type(1)>fieldset>div:nth-of-type(1)>button');
var leesduur_show = document.querySelector('section>form>div:nth-of-type(1)>fieldset>div:nth-of-type(1)>div');

function leesduur_functie() {
  leesduur_show.classList.toggle('leesduur_dropdown');
  emotie_show.classList.remove('emotie_dropdown');
  sorteren_show.classList.remove('sorteren_dropdown');
}

leesduur_button.addEventListener('click', leesduur_functie);


//---------- invullen klik ----------//
var filterleesduur_actief = document.querySelector('section>form>div:nth-of-type(1)>fieldset>div:nth-of-type(1)>button');

var filterleesduur_optie1 = document.querySelector('section>form>div:nth-of-type(1)>fieldset>div:nth-of-type(1)>div>input:nth-of-type(1)');
var filterleesduur_optie2 = document.querySelector('section>form>div:nth-of-type(1)>fieldset>div:nth-of-type(1)>div>input:nth-of-type(2)');
var filterleesduur_optie3 = document.querySelector('section>form>div:nth-of-type(1)>fieldset>div:nth-of-type(1)>div>input:nth-of-type(3)');

function filterleesduur_optie1_functie() {
  var x = filterleesduur_optie1.checked;
    if (x == true) {
      document.querySelector('section>form>div:nth-of-type(1)>fieldset>div:nth-of-type(1)>button').innerHTML = '0-5 minuten';
      filterleesduur_actief.classList.add('filter_actief');
      filterleesduur_optie2.checked = false;
      filterleesduur_optie3.checked = false;
    } else if (x == false) {
      document.querySelector('section>form>div:nth-of-type(1)>fieldset>div:nth-of-type(1)>button').innerHTML = 'Leesduur';
      filterleesduur_actief.classList.remove('filter_actief');
      filterleesduur_optie1.checked = false;
    }
}

function filterleesduur_optie2_functie() {
  var x = filterleesduur_optie2.checked;
    if (x == true) {
      document.querySelector('section>form>div:nth-of-type(1)>fieldset>div:nth-of-type(1)>button').innerHTML = '5-10 minuten';
      filterleesduur_actief.classList.add('filter_actief');
      filterleesduur_optie1.checked = false;
      filterleesduur_optie3.checked = false;
    } else if (x == false) {
      document.querySelector('section>form>div:nth-of-type(1)>fieldset>div:nth-of-type(1)>button').innerHTML = 'Leesduur';
      filterleesduur_actief.classList.remove('filter_actief');
      filterleesduur_optie2.checked = false;
    }
}

function filterleesduur_optie3_functie() {
  var x = filterleesduur_optie3.checked;
    if (x == true) {
      document.querySelector('section>form>div:nth-of-type(1)>fieldset>div:nth-of-type(1)>button').innerHTML = '10-15 minuten';
      filterleesduur_actief.classList.add('filter_actief');
      filterleesduur_optie1.checked = false;
      filterleesduur_optie2.checked = false;
    } else if (x == false) {
      document.querySelector('section>form>div:nth-of-type(1)>fieldset>div:nth-of-type(1)>button').innerHTML = 'Leesduur';
      filterleesduur_actief.classList.remove('filter_actief');
      filterleesduur_optie3.checked = false;
    }
}

filterleesduur_optie1.addEventListener('click', filterleesduur_optie1_functie);
filterleesduur_optie2.addEventListener('click', filterleesduur_optie2_functie);
filterleesduur_optie3.addEventListener('click', filterleesduur_optie3_functie);



//---------- filter emotie ----------//
var emotie_button = document.querySelector('section>form>div:nth-of-type(1)>fieldset>div:nth-of-type(2)>button');
var emotie_show = document.querySelector('section>form>div:nth-of-type(1)>fieldset>div:nth-of-type(2)>div');

function emotie_functie() {
  leesduur_show.classList.remove('leesduur_dropdown');
  emotie_show.classList.toggle('emotie_dropdown');
  sorteren_show.classList.remove('sorteren_dropdown');
}

emotie_button.addEventListener('click', emotie_functie);


//---------- invullen klik ----------//
var filteremotie_actief = document.querySelector('section>form>div:nth-of-type(1)>fieldset>div:nth-of-type(2)>button');

var filteremotie_optie1 = document.querySelector('section>form>div:nth-of-type(1)>fieldset>div:nth-of-type(2)>div>input:nth-of-type(1)');
var filteremotie_optie2 = document.querySelector('section>form>div:nth-of-type(1)>fieldset>div:nth-of-type(2)>div>input:nth-of-type(2)');
var filteremotie_optie3 = document.querySelector('section>form>div:nth-of-type(1)>fieldset>div:nth-of-type(2)>div>input:nth-of-type(3)');
var filteremotie_optie4 = document.querySelector('section>form>div:nth-of-type(1)>fieldset>div:nth-of-type(2)>div>input:nth-of-type(4)');
var filteremotie_optie5 = document.querySelector('section>form>div:nth-of-type(1)>fieldset>div:nth-of-type(2)>div>input:nth-of-type(5)');

function filteremotie_optie1_functie() {
  var x = filteremotie_optie1.checked;
    if (x == true) {
      document.querySelector('section>form>div:nth-of-type(1)>fieldset>div:nth-of-type(2)>button').innerHTML = 'Neutraal';
      filteremotie_actief.classList.add('filter_actief');
      filteremotie_optie2.checked = false;
      filteremotie_optie3.checked = false;
      filteremotie_optie4.checked = false;
      filteremotie_optie5.checked = false;
    } else if (x == false) {
      document.querySelector('section>form>div:nth-of-type(1)>fieldset>div:nth-of-type(2)>button').innerHTML = 'Emotie';
      filteremotie_actief.classList.remove('filter_actief');
      filteremotie_optie1.checked = false;
    }
}

function filteremotie_optie2_functie() {
  var x = filteremotie_optie2.checked;
    if (x == true) {
      document.querySelector('section>form>div:nth-of-type(1)>fieldset>div:nth-of-type(2)>button').innerHTML = 'Verwarrend';
      filteremotie_actief.classList.add('filter_actief');
      filteremotie_optie1.checked = false;
      filteremotie_optie3.checked = false;
      filteremotie_optie4.checked=false;
      filteremotie_optie5.checked=false;
    } else if (x == false) {
      document.querySelector('section>form>div:nth-of-type(1)>fieldset>div:nth-of-type(2)>button').innerHTML = 'Emotie';
      filteremotie_actief.classList.remove('filter_actief');
      filteremotie_optie2.checked = false;
    }
}

function filteremotie_optie3_functie() {
  var x = filteremotie_optie3.checked;
    if (x == true) {
      document.querySelector('section>form>div:nth-of-type(1)>fieldset>div:nth-of-type(2)>button').innerHTML = 'Geirriteerd';
      filteremotie_actief.classList.add('filter_actief');
      filteremotie_optie1.checked = false;
      filteremotie_optie2.checked = false;
      filteremotie_optie4.checked = false;
      filteremotie_optie5.checked = false;
    } else if (x == false) {
      document.querySelector('section>form>div:nth-of-type(1)>fieldset>div:nth-of-type(2)>button').innerHTML = 'Emotie';
      filteremotie_actief.classList.remove('filter_actief');
      filteremotie_optie3.checked = false;
    }
}

function filteremotie_optie4_functie() {
  var x = filteremotie_optie4.checked;
    if (x == true) {
      document.querySelector('section>form>div:nth-of-type(1)>fieldset>div:nth-of-type(2)>button').innerHTML = 'Verdrietig';
      filteremotie_actief.classList.add('filter_actief');
      filteremotie_optie1.checked = false;
      filteremotie_optie2.checked = false;
      filteremotie_optie3.checked = false;
      filteremotie_optie5.checked = false;
    } else if (x == false) {
      document.querySelector('section>form>div:nth-of-type(1)>fieldset>div:nth-of-type(2)>button').innerHTML = 'Emotie';
      filteremotie_actief.classList.remove('filter_actief');
      filteremotie_optie4.checked = false;
    }
}

function filteremotie_optie5_functie() {
  var x = filteremotie_optie5.checked;
    if (x == true) {
      document.querySelector('section>form>div:nth-of-type(1)>fieldset>div:nth-of-type(2)>button').innerHTML = 'Vrolijk';
      filteremotie_actief.classList.add('filter_actief');
      filteremotie_optie1.checked = false;
      filteremotie_optie2.checked = false;
      filteremotie_optie3.checked = false;
      filteremotie_optie4.checked = false;
    } else if (x == false) {
      document.querySelector('section>form>div:nth-of-type(1)>fieldset>div:nth-of-type(2)>button').innerHTML = 'Emotie';
      filteremotie_actief.classList.remove('filter_actief');
      filteremotie_optie5.checked = false;
    }
}

filteremotie_optie1.addEventListener('click', filteremotie_optie1_functie);
filteremotie_optie2.addEventListener('click', filteremotie_optie2_functie);
filteremotie_optie3.addEventListener('click', filteremotie_optie3_functie);
filteremotie_optie4.addEventListener('click', filteremotie_optie4_functie);
filteremotie_optie5.addEventListener('click', filteremotie_optie5_functie);
