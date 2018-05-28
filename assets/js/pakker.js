console.log("yo");
var total = 0;
var personer = 0;

function antalPersoner(antal)
{
  personer = antal*3;
  console.log(personer);

  add(0);
}

function antalDage(antal)
{
  add(total * -1)
  add(1495.0 * antal);
}

function add(cost)
{
  total += cost;
  console.log(total);

  var pris =   document.querySelector("#showprice");
  console.log(pris);
  if(personer != 0)
  {
      pris.textContent = "Din pris er: " + total + "kr (Eller mindst " + Math.round(total/personer) + "kr per person)";
  }
  else
  {
      pris.textContent = "Din pris er: " + total + "kr";
  }
}


//Bookning1 SIDE

var bygSelv = document.querySelector("#price-overview");
var customSelected = false;

console.log("Running");
console.log(bygSelv);

if(customSelected == false){
  console.log("hiding");
  bygSelv.style.display = "none";
}

function visCustom(){
    customSelected = true;
    bygSelv.style.display = "flex";
}

function gemCustom(){
    customSelected = false;
    bygSelv.style.display = "none";
  }

function skiftBillede(pakke){
  if(pakke.id == "standard"){
    pakke.style.backgroundImage = "url('../img/standardpakke2.png')"
  }

  if(pakke.id == "luksus"){
    pakke.style.backgroundImage = "url('../img/luksuspakken2.png')"
  }

  if(pakke.id == "lille"){
  pakke.style.backgroundImage = "url('../img/lillepakke2.png')";
  }

  if(pakke.id == "bygselv"){
    pakke.style.backgroundImage = "url('../img/bygselv2.png')"
  }
}

function skiftBilledeTilbage(pakke){
  if(pakke.id == "standard"){
    pakke.style.backgroundImage = "url('../img/standardpakke1.png')"
  }

  if(pakke.id == "luksus"){
    pakke.style.backgroundImage = "url('../img/luksuspakken1.png')"
  }

  if(pakke.id == "lille"){
  pakke.style.backgroundImage = "url('../img/lillepakke1.png')";
  }

  if(pakke.id == "bygselv"){
    pakke.style.backgroundImage = "url('../img/bygselv1.png')"
  }
}

var vilMad = false;

function medMad(index){
  if(index == 1){
    vilMad = true;
    add(personer * 100);
  }

  if(index == 2){
    if(vilMad == true)
    {
    add(personer * -100);
    console.log("træk fra");
    }
    else{
      add(0);
        console.log("træk ikke fra");
    }
  }
}

var vilFaci = false;

function medFaci(index){
  if(index == 1){
    vilFaci = true;
    add(50);
  }

  if(index == 2){
    if(vilFaci == true)
    {
    add(-50);
    console.log("træk fra");
    }
    else{
      add(0);
        console.log("træk ikke fra");
    }
  }
}


//SLIDESHOW STUFF \/\/\/

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
