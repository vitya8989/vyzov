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
let orderPopupWrapper = document.querySelector('.order-popup__wrapper');
let orderPopup = document.querySelector('.order-popup');
let openOrderPopup = document.querySelector('.open-order-popup');
let closePopup = document.querySelectorAll('.close-popup');
let orderPopupForm = document.querySelector('.order-popup__form');
let succes = document.querySelector('.succes');

let signPopupWrapper = document.querySelector('.sign-popup__wrapper');
let signPopup = document.querySelector('.sign-popup');
let openSignPopup = document.querySelector('.open-sign-popup');
let signPopupForm = document.querySelector('.sign-popup__form');

openOrderPopup.onclick = function () {
	orderPopupWrapper.classList.add('open-popup');
	orderPopup.classList.add('open-popup');
	lockPadding();
}
for (let i = 0; i < closePopup.length; i++) {
	closePopup[i].onclick = function () {
		orderPopupWrapper.classList.remove('open-popup');
		orderPopup.classList.remove('open-popup');
		unlockPadding();
		orderPopupForm.classList.add('show');
		succes.classList.remove('show');
		signPopupWrapper.classList.remove('open-popup');
		signPopup.classList.reemove('open-popup');
	}
}
orderPopupWrapper.onclick = function (e) {
	if (!e.target.closest('.order-popup')) {
		orderPopupWrapper.classList.remove('open-popup');
		orderPopup.classList.remove('open-popup');
		unlockPadding();
		orderPopupForm.classList.add('show');
		succes.classList.remove('show');
	}
}
orderPopupForm.onsubmit = function (event) {
	event.preventDefault();
	orderPopupForm.classList.remove('show');
	succes.classList.add('show');
	orderPopupForm.reset();
}


openSignPopup.onclick = function () {
	signPopupWrapper.classList.add('open-popup');
	signPopup.classList.add('open-popup');
	lockPadding();
}
signPopupWrapper.onclick = function (e) {
	if (!e.target.closest('.sign-popup')) {
		signPopupWrapper.classList.remove('open-popup');
		signPopup.classList.remove('open-popup');
		unlockPadding();
	}
}
signPopupForm.onsubmit = function (event) {
	event.preventDefault();
	orderPopupForm.reset();
}
;
document.querySelectorAll('a[href^="#"').forEach(link => {

	link.addEventListener('click', function (e) {
		e.preventDefault();

		let href = this.getAttribute('href').substring(1);

		const scrollTarget = document.getElementById(href);

		let topOffset = document.querySelector('.header').offsetHeight;

		const elementPosition = scrollTarget.getBoundingClientRect().top;
		const offsetPosition = elementPosition - topOffset;
		window.scrollBy({
			top: offsetPosition,
			behavior: 'smooth'
		});
	});
});;
let wrapper = document.querySelector('.wrapper');
let body = document.body;
let scrollBarWidth = window.innerWidth - wrapper.offsetWidth + "px";
let fixedHeader = document.querySelector('.header');

function lockPadding() {
	body.classList.add('scroll-lock');
	wrapper.style.paddingRight = scrollBarWidth;
	fixedHeader.style.paddingRight = scrollBarWidth;
}
function unlockPadding() {
	body.classList.remove('scroll-lock');
	wrapper.style.paddingRight = "0";
	fixedHeader.style.paddingRight = "0";
};


new Swiper('.gallery-slider', {
	speed: 600,
	slidesPerView: 1,
	navigation: {
		nextEl: '.gallery-slider__btn-next',
		prevEl: '.gallery-slider__btn-prev'
	},
	pagination: {
		el: '.gallery-slider__pagination',
		clickable: true,
	},
});

let dotLocation1 = document.querySelector('.dot-location-1');
let dotLocation2 = document.querySelector('.dot-location-2');
let dotLocation3 = document.querySelector('.dot-location-3');
let dotLocation4 = document.querySelector('.dot-location-4');
let location1 = document.querySelector('.location-1');
let location2 = document.querySelector('.location-2');
let location3 = document.querySelector('.location-3');
let location4 = document.querySelector('.location-4');
let locationMap = document.querySelector('.locations__map');
let locationsContent = document.querySelector('.locations__content');
locationMap.onmouseover = function (event) {
	if (event.target.closest('.dot-location-1')) {
		location1.classList.add('show-location');
	}
	if (event.target.closest('.dot-location-2')) {
		location2.classList.add('show-location');
	}
	if (event.target.closest('.dot-location-3')) {
		location3.classList.add('show-location');
	}
	if (event.target.closest('.dot-location-4')) {
		location4.classList.add('show-location');
	}
};

locationMap.onmouseout = function (event) {
	if (event.target.closest('.dot-location-1')) {
		location1.classList.remove('show-location');
	}
	if (event.target.closest('.dot-location-2')) {
		location2.classList.remove('show-location');
	}
	if (event.target.closest('.dot-location-3')) {
		location3.classList.remove('show-location');
	}
	if (event.target.closest('.dot-location-4')) {
		location4.classList.remove('show-location');
	}
};

if (window.innerWidth < 768) {
	locationsContent.append(location1);
	locationsContent.append(location2);
	locationsContent.append(location3);
	locationsContent.append(location4);
}

window.onresize = function () {
	if (window.innerWidth < 768) {
		locationsContent.append(location1);
		locationsContent.append(location2);
		locationsContent.append(location3);
		locationsContent.append(location4);
	} else {
		locationMap.append(location1);
		locationMap.append(location2);
		locationMap.append(location3);
		locationMap.append(location4);
	}
}
