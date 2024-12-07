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

// modal
const modalController = ({modal, btnOpen, btnClose}) => {
	const buttonEl = document.querySelectorAll(btnOpen);
	const modalEl = document.querySelector(modal);

	modalEl.style.cssText = `
		display: flex;
		visibility: hidden;
		line-height: 1.3;
		opacity: 0;
		transition: opacity 300ms ease-in-out;
		z-index: 9999;
	`;

	const openModal = () => {
		modalEl.style.visibility = 'visible';
		modalEl.style.opacity = 1;
	};

	const closeModal = event => {
		const target = event.target;

		if (target === modalEl || target.closest(btnClose)) {
			modalEl.style.opacity = 0;
			setTimeout(() => { modalEl.style.visibility = 'hidden'; }, 300);
		}
	};

	buttonEl.forEach(btn => { btn.addEventListener('click', openModal); });
	modalEl.addEventListener('click', closeModal);
};

const modals = [
	{modal: '.modal1', btnOpen: '.section__btn1'},
	{modal: '.modal2', btnOpen: '.section__btn2'},
	{modal: '.modal3', btnOpen: '.section__btn3'},
];

modals.forEach(({modal, btnOpen}) => {
	modalController({modal, btnOpen, btnClose: '.modal__close'});
});