const adaptiveMenu = document.querySelector('.adaptive-menu')
const buttonBurger = document.querySelector('.header-burger')
const objectHeader = document.querySelector('.header')
let accept_btn = document.querySelector('#accept_id');
let decline_btn = document.querySelector('#decline_id');
let modal = document.querySelector('.cookie__banner');
const formElement = document.querySelector('#connection_form');




// Модальное окно Cookies

function checkedCookies() { 
	if (!sessionStorage.getItem('modalClosed'))  { 
	  showModal(); 
	} 
}
  
function showModal() {
	var modal = document.getElementById('cookies_id');
	modal.style.display = 'block';
}
  
checkedCookies();   

function hideModal() {
	modal.style.opacity = '0';
	modal.style.pointerEvents = 'none';
	setTimeout(() => {
		modal.style.display = 'none';
	}, 500);
	sessionStorage.setItem('modalClosed', 'true');
}

accept_btn.addEventListener('click', () => {
	hideModal();
});

decline_btn.addEventListener('click', () => {
	hideModal();
});

function openMenu(){
	objectHeader.classList.toggle('color')
	adaptiveMenu.classList.toggle('open')
	buttonBurger.classList.toggle('active')
}

document.addEventListener('DOMContentLoaded', () => {

// SWIPER JS
	if(document.querySelector('.swiper-client')){
		let swiper = new Swiper(".swiper-client", {
			slidesPerView: 3,
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			keyboard: {
				enabled: true,
				onlyInViewport: true,
			},
			breakpoints: {
				0: {
					slidesPerView: 1,
				},
				710: {
					slidesPerView: 2,
				},
				1300: {
					slidesPerView: 3,
				},
			},
		});
		
	}

// Функции
	const accordions = document.querySelectorAll('.accordion');
	if(accordions){
		accordions.forEach(el => {
			el.addEventListener('click', (e) => {
				const self = e.currentTarget;
				const control = self.querySelector('.accordion__control');
				const content = self.querySelector('.accordion__content');
				self.classList.toggle('open');
				if (self.classList.contains('open')) {
					control.setAttribute('aria-expanded', true);
					content.setAttribute('aria-hidden', false);
					content.style.maxHeight = content.scrollHeight + 'px';
				} else {
					control.setAttribute('aria-expanded', false);
					content.setAttribute('aria-hidden', true);
					content.style.maxHeight = null;
				}
			});
		});
	}


	function animFlashing(name, int){
		var arrayAbility = document.querySelectorAll(name);
		var currentItem = 0
		setInterval(function(){
			if(currentItem < arrayAbility.length){
				if(currentItem != 0){
					arrayAbility[currentItem - 1].classList.remove('active');
				}
				arrayAbility[currentItem].classList.add('active');
				currentItem++
			} else{
				arrayAbility[arrayAbility.length - 1].classList.remove('active');
				currentItem = 0;
			}
		}, int)
	}

	
	function tabs(buttons, tabs){
		buttons = document.querySelectorAll(buttons)
		tabs = document.querySelectorAll(tabs)
		for (let i = 0; i < buttons.length; i++) {
			const e = buttons[i];
			e.addEventListener('click', function(){
				if(!e.classList.contains('active'))
				buttons.forEach(parent => {
					if(parent.classList.contains('active')){
						parent.classList.remove('active')
					}
				});
				tabs.forEach(daughter => {
					if(daughter.classList.contains('show')){
						daughter.classList.remove('show')
					}
				});
				e.classList.add('active')
				tabs[i].classList.add('show')
			})
		}
	}

	if(document.querySelector('.respons__item')){
		animFlashing(".respons__item", 1600)
	}
	if(document.querySelector('.ability-item')){
		animFlashing(".ability-item", 1600)
	}
	if(document.querySelector('.character__item')){
		animFlashing(".character__item", 1600)
	}
	if(document.querySelector('.way-item')){
		tabs('.way-item', '.way-tabs__item')
	}
	if(document.querySelector('.phase-item')){
		tabs('.phase-item', '.phase-content__item')
	}

	// Модальное окно об успешной обработке

	let popup_window = document.querySelector('.popup__window');
	let popup_button = document.querySelector('.prod-tab__button-remove');
	let body = document.querySelector('body');



	popup_button.addEventListener('click', () => {
		popup_window.style.opacity = '0';
		popup_window.style.pointerEvents = 'none';
		setTimeout(() => {
			popup_window.style.display = 'none';
		}, 500);
		body.style.overflow = 'auto';
	});

	// Модальное окно об ошибке
	
	let popup_error = document.querySelector('.popup__error');
	let popup_button_error = document.querySelector('.prod-tab__button-remove__error');


	popup_button_error.addEventListener('click', () => {
		popup_error.style.opacity = '0';
		popup_error.style.pointerEvents = 'none';
		setTimeout(() => {
			popup_error.style.display = 'none';
		}, 500);
		body.style.overflow = 'auto';
	});

	 
	
})
