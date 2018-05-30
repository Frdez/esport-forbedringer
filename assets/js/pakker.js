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
  bygSelv.style.visibility = "hidden"
  bygSelv.style.opacity = "0";
  bygSelv.style.position = "absolute";
  bygSelv.style.zIndex = "-10"
}

function visCustom(){
    customSelected = true;
    bygSelv.style.visibility = "visible";
    bygSelv.style.opacity = "1";
    bygSelv.style.position = "static";
    bygSelv.style.zIndex = "1"
}

function gemCustom(){
    customSelected = false;
    bygSelv.style.visiblity = "hidden";
    bygSelv.style.opacity = "0";
    bygSelv.style.position = "absolute";
    bygSelv.style.zIndex = "-10"
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
