
function scrollToElement(id) {

    var target = document.getElementById(id).offsetTop;

    window.scrollTo({
        top: target,
        behavior: "smooth"
    });

    closeNav();
}
      
function goToPage(id)
{
	"use strict";
	document.location = id;
}
function openNav() {
        document.getElementById("mySidenav").style.width = "250px";
    return false;
    }
                
function closeNav() {
        document.getElementById("mySidenav").style.width = "0";
    }

function openModal(id)  {
    var modal = document.getElementById('myModal');

    var img = document.getElementById(id);
    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");


    modal.style.display = "block";
    modalImg.src = img.src;
    captionText.innerHTML = img.alt;
}

function closeModal() {
    var modal = document.getElementById('myModal')
    modal.style.display = "none";
}
