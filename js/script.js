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

burger.onclick = function () {
	burger.classList.toggle('menu-open');
	nav.classList.toggle('menu-open');
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
