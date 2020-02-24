document.addEventListener("DOMContentLoaded", () => {
	// Custom JS
	console.log('Hello, World!');

	//ПЛАВНЫЙ ПЕРЕХОД ПО ЯКОРНЫМ ССЫЛКАМ
	const menu_ = document.querySelector('.nav__list');
	// const scrollspy = new VanillaScrollspy(menu_);
	// scrollspy.init();

	const menu_desctop = document.querySelectorAll(".item");
	const menu_desctop2 = document.querySelectorAll(".nav__list-lvl2");
	menu_desctop[0].addEventListener("mouseover", e => {
		menu_desctop2[0].classList.add("menu-desctop");
	});
	menu_desctop[0].addEventListener("mouseout", e => {
		menu_desctop2[0].classList.remove("menu-desctop");
	});
	menu_desctop[1].addEventListener("mouseover", e => {
		menu_desctop2[1].classList.add("menu-desctop");
	});
	menu_desctop[1].addEventListener("mouseout", e => {
		menu_desctop2[1].classList.remove("menu-desctop");
	});
	menu_desctop[2].addEventListener("mouseover", e => {
		menu_desctop2[2].classList.add("menu-desctop");
	});
	menu_desctop[2].addEventListener("mouseout", e => {
		menu_desctop2[2].classList.remove("menu-desctop");
	});
});