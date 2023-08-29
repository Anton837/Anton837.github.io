const languages = document.querySelectorAll('.lang__item:not(.lang__item_active)');
let lang_active = document.querySelector('.lang__item_active');

languages.forEach(language => {
	language.addEventListener('click', changeLang, { once: true });
});

function changeLang(event) {
	const newLangElement = event.currentTarget;

	lang_active.classList.remove('lang__item_active');
	lang_active.addEventListener('click', changeLang, { once: true });

	newLangElement.classList.add('lang__item_active');
	lang_active = newLangElement;
}
