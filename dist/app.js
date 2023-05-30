// Accordion Toggle

const questionBoxes = document.querySelectorAll('.question-box');

questionBoxes.forEach((question) => {
	question.addEventListener('click', (e) => {
		const accordionTitle = e.currentTarget.firstElementChild.firstElementChild;
		const accordionArrow = e.currentTarget.firstElementChild.lastElementChild;
		const accordionText = e.currentTarget.lastElementChild;

		accordionTitle.classList.toggle('font-bold');
		accordionArrow.classList.toggle('rotate-180');
		accordionText.classList.toggle('accordion-text-active');
	});
});
