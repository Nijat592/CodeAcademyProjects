
var images = document.getElementById("small");
images.getElementsByTagName("img");
function changeImage (shekil) {
	shekil = window.event;
	var targetElement = shekil.srcElement;
	if (targetElement.tagName == 'IMG') {
	document.getElementById("mainImage").src = targetElement.getAttribute("src");
	}
}

function normalImg(x) {
    x.style.width = "63px";
    x.style.height = "50px";
}

function bigImg(x) {
    x.style.width = "64px";
    x.style.height = "51px";
}

