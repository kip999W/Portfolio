const swiperText = new Swiper('.swiper', {
	speed: 1600,
	allowTouchMove: false,

	pagination: {
		el: '.swiper-pagination',
		clickable: true
	},

	navigation: {
		prevEl: '.swiper-button-prev',
		nextEl: '.swiper-button-next'
	}
});