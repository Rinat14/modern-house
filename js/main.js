'use strict';

const toolbarBtns = document.querySelectorAll('.toolbar-btns');

toolbarBtns.forEach(btn => {
	btn.addEventListener('click', testToggle);
});

function testToggle(event) {
	if (event.target.classList.contains('toolbar-btns__active')) {
		event.target.classList.remove('toolbar-btns__active');
	} else {
		toolbarBtns.forEach(el => {
			el.classList.remove('toolbar-btns__active');
			event.target.classList.add('toolbar-btns__active');
		});
	}
}