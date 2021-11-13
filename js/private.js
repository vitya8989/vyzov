function testWebP(callback) {

	var webP = new Image();
	webP.onload = webP.onerror = function () {
		callback(webP.height == 2);
	};
	webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {

	if (support == true) {
		document.querySelector('body').classList.add('webp');
	} else {
		document.querySelector('body').classList.add('no-webp');
	}
});;
let burger = document.querySelector('.burger');
let nav = document.querySelector('.nav');
let navLinks = document.querySelectorAll('.nav__link');

burger.onclick = function () {
	burger.classList.toggle('menu-open');
	nav.classList.toggle('menu-open');
}
for (let i = 0; i < navLinks.length; i++) {
	navLinks[i].onclick = function () {
		burger.classList.remove('menu-open');
		nav.classList.remove('menu-open');
	}
};