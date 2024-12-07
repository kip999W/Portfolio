// swiper
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

// smooth scroll
const anchors = document.querySelectorAll('a[href*="#"]');
anchors.forEach(anchor => {
	anchor.addEventListener('click', event => {
   	event.preventDefault();

   	const blockID = anchor.getAttribute('href').substring(1);
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
});

// burger
const burgerButton = document.querySelector('.burger');
const navigationMenu = document.querySelector('.header-nav');
const navLinks = navigationMenu.querySelectorAll('a');

if (burgerButton && navigationMenu) {
	burgerButton.addEventListener('click', () => {
		burgerButton.classList.toggle('active');
		navigationMenu.classList.toggle('open');
	});

	navLinks.forEach(link => {
		link.addEventListener('click', () => {
			burgerButton.classList.remove('active');
			navigationMenu.classList.remove('open');
		});
	});
}