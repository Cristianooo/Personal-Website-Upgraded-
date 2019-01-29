var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById('topBar').style.top = "0";
    } else {
        document.getElementById('topBar').style.top = "-80px";
    }
    prevScrollpos = currentScrollPos;
};

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
	document.location = id;
}

function openModal(id) {
    var modal = document.getElementById('myModal');

    var img = document.getElementById(id);
    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");

	if(img.height > img.width){
		modalImg.style.height = "90%";
		modalImg.style.width = "auto";
	}
	else{
		modalImg.style.width = "85%";
		modalImg.style.height = "auto";
	}
	
    modal.style.display = "flex";
    modalImg.src = img.src;
    captionText.innerHTML = img.alt;
}

function closeModal() {
    var modal = document.getElementById('myModal')
    modal.style.display = "none";
}

