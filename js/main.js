'use strict';

const toolbarBtns = document.querySelectorAll('.toolbar-btns'),
	colorNavigation = document.querySelectorAll('.color-navigation'),
	colorInput = document.querySelector('.my-color'),
	settingColor = document.querySelector('.set-color'),
	polette = document.querySelector('.polette');
const submitBtn = document.querySelector('.submit');
const uiElements = document.querySelectorAll('.ui-navigation'),
	chevronDown = document.querySelector('.chevron-down'),
	categories = document.querySelectorAll('.categories');
const categoryList = document.querySelector('.category-list');

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
});

uiElements.forEach(el => {
	el.addEventListener('click', (event) => {
		const pattern = document.querySelector('.pattern-list');
		const equipment = document.querySelector('.equip-list');
		if (event.target.classList.contains('equip')) {
			equipment.classList.add('flex');
			equipment.classList.remove('hidden');
			pattern.classList.remove('flex');
			pattern.classList.add('hidden');
			chevronDown.style.display = 'inline-block';
		} else if (event.target.classList.contains('pattern')) {
			pattern.classList.remove('hidden');
			pattern.classList.add('flex');
			equipment.classList.remove('flex');
			equipment.classList.add('hidden');
			categoryList.classList.remove('opacuty-100', 'visible', 'top-[-3.5rem]');
			categoryList.classList.add('opacity-0', 'invisible', 'top-[-15rem]');
			chevronDown.style.display = 'none';
		} else { return null }
		removingWithForeach(uiElements, 'active');
		event.target.classList.add('active');
	});
});

chevronDown.addEventListener('click', toggleList);

categories.forEach(el => {
	el.addEventListener('click', (event) => {
		if (event.target.classList.contains('active')) {
			event.target.classList.remove('active');
		} else {
			event.target.classList.add('active');
		}
	})
});

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

function toggleList(event) {
	event.target.classList.toggle('active');
	if (event.target.classList.contains('active')) {
		categoryList.classList.remove('opacuty-0', 'invisible', 'top-[-15rem]');
		categoryList.classList.add('opacity-100', 'visible', 'top-[3.5rem]');
	} else {
		categoryList.classList.add('opacuty-0', 'invisible', 'top-[-15rem]');
		categoryList.classList.remove('opacity-100', 'visible', 'top-[3.5rem]');
	}
}