var hamburger = document.getElementById("menu");
var modal = document.getElementsByClassName("modal");

function ham() {

    hamburger.style.display = "hidden";
    
    if(modal[0].style.display == "none") {

        hamburger.src = "./images/icon-close.svg";
        hamburger.style.display = "block";
        modal[0].style.display = "block";

    }
    else {

        hamburger.src = "./images/icon-hamburger.svg";
        hamburger.style.display = "block";
        modal[0].style.display = "none";
        
    }

}