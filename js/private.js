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

let diplomasSlider = new Swiper('.diplomas-slider', {
	speed: 600,
	slidesPerView: 1,
	navigation: {
		nextEl: '.diplomas-slider__btn-next',
		prevEl: '.diplomas-slider__btn-prev'
	},
	spaceBetween: 60,
	breakpoints: {
		636: {
			spaceBetween: 60,
			slidesPerView: 2,
		},
		926: {
			spaceBetween: 60,
			slidesPerView: 3,
		},
	},
});

let photosSlider = new Swiper('.photos-slider', {
	speed: 600,
	slidesPerView: 1,
	navigation: {
		nextEl: '.photos-slider__btn-next',
		prevEl: '.photos-slider__btn-prev'
	},
	spaceBetween: 60,
	breakpoints: {
		636: {
			spaceBetween: 60,
			slidesPerView: 2,
		},
		926: {
			spaceBetween: 60,
			slidesPerView: 3,
		},
		1023: {
			spaceBetween: 60,
			slidesPerView: 2,
		},
	},
});

let bigDiplomasSlider = new Swiper('.big-diplomas-slider', {
	speed: 600,
	slidesPerView: 1,
	navigation: {
		nextEl: '.big-diplomas-slider__btn-next',
		prevEl: '.big-diplomas-slider__btn-prev'
	},
	spaceBetween: 60,
});

let bigPhotosSlider = new Swiper('.big-photos-slider', {
	speed: 600,
	slidesPerView: 1,
	navigation: {
		nextEl: '.big-photos-slider__btn-next',
		prevEl: '.big-photos-slider__btn-prev'
	},
	spaceBetween: 60,
});

let bigSliderWrapperDiplomas = document.querySelector('.big-slider-wrapper-diplomas');
let bigSliderWrapperPhotos = document.querySelector('.big-slider-wrapper-photos');
let closeBigSlider = document.querySelectorAll('.close-big-slider');
let diplomasSlides = document.querySelectorAll('.diplomas-slide');
let photosSlides = document.querySelectorAll('.photos-slide');
for (let i = 0; i < diplomasSlides.length; i++) {
	diplomasSlides[i].onclick = function () {
		bigSliderWrapperDiplomas.classList.add('open-popup');
	}
}
for (let i = 0; i < photosSlides.length; i++) {
	photosSlides[i].onclick = function () {
		bigSliderWrapperPhotos.classList.add('open-popup');
	}
}
for (let i = 0; i < closeBigSlider.length; i++) {
	closeBigSlider[i].onclick = function () {
		bigSliderWrapperPhotos.classList.remove('open-popup');
		bigSliderWrapperDiplomas.classList.remove('open-popup');
	}
}
bigSliderWrapperDiplomas.onclick = function (e) {
	if (!e.target.closest('.private__big-diplomas-wrapper')) {
		bigSliderWrapperDiplomas.classList.remove('open-popup');
	}
}
bigSliderWrapperPhotos.onclick = function (e) {
	if (!e.target.closest('.private__big-photos-wrapper')) {
		bigSliderWrapperPhotos.classList.remove('open-popup');
	}
}

diplomasSlider.controller.control = bigDiplomasSlider;
bigDiplomasSlider.controller.control = diplomasSlider;
photosSlider.controller.control = bigPhotosSlider;
bigPhotosSlider.controller.control = photosSlider;