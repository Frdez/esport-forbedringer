function burgerMenu() {
    var burger = document.querySelector("#myTopnav");
    if (burger.className === "topnav") {
        burger.className += " responsive";
    } else {
        burger.className = "topnav";
    }
}
