'use strict';
'bg-[#000]';

const toolbarBtns = document.querySelectorAll('.toolbar-btns'),
	colorNavigation = document.querySelectorAll('.color-navigation'),
	colorInput = document.querySelector('.my-color'),
	settingColor = document.querySelector('.set-color'),
	polette = document.querySelector('.polette');
const submitBtn = document.querySelector('.submit');

toolbarBtns.forEach(btn => {
	btn.addEventListener('click', testToggle);
});

colorNavigation.forEach(btn => {
	btn.addEventListener('click', (event) => {
		if (event.target.classList.contains('first')) {
			settingColor.classList.add('flex');
			settingColor.classList.remove('hidden');
			polette.classList.remove('flex');
			polette.classList.add('hidden');
		} else if (event.target.classList.contains('second')) {
			polette.classList.remove('hidden');
			polette.classList.add('flex');
			settingColor.classList.remove('flex');
			settingColor.classList.add('hidden');
		} else {return null}
		removingWithForeach(colorNavigation, 'active');
		event.target.classList.add('active');
	});
});
colorInput.addEventListener('change', () => {
	const card = document.querySelector('.setting-color');
	const value = colorInput.value;
	card.classList.add(`bg-[${value}]`);
});

submitBtn.addEventListener('click', () => {
	colorInput.value = '#000';
})

function testToggle(event) {
	if (event.target.classList.contains('active')) {
		event.target.classList.remove('active');
	} else {
		removingWithForeach(toolbarBtns, 'active');
		event.target.classList.add('active');
	}
}

function removingWithForeach(array, className) {
	array.forEach(el => {
		el.classList.remove(className);
	})
}