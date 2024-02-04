document.addEventListener('DOMContentLoaded', function () {
	const toggleButtons = document.querySelectorAll('.filter__button');
	const filterInputsList = document.querySelectorAll('.filter__inputs');
	const deployIcons = document.querySelectorAll('.filter__icon');

	const filterInputsTransport = document.querySelector('.filter__inputs-transport');
	const toggleButtonTransport = document.getElementById('transport');
	const deployIconTransport = document.getElementById('transport-icon');

	const filterRangeWrapper = document.querySelector('.filter__range');
	const toggleRangeButton = document.getElementById('range-button');
	const deployRangeIcon = document.getElementById('range-icon');

	toggleButtons.forEach((toggleButton, index) => {
		toggleButton.addEventListener('click', function () {
			const windowWidth = window.innerWidth;
			if (windowWidth < 731 || windowWidth >= 1360) {
				filterInputsList[index].classList.toggle('filter__inputs_open');
				deployIcons[index].classList.toggle('filter__icon_deployed');
			}
		});
	});

	toggleButtonTransport.addEventListener('click', function () {
		const windowWidth = window.innerWidth;
		if (windowWidth < 731 || windowWidth >= 1360) {
			filterInputsTransport.classList.toggle('filter__inputs-transport_open');
			deployIconTransport.classList.toggle('filter__icon_deployed');
		}
	})

	toggleRangeButton.addEventListener('click', function () {
		const windowWidth = window.innerWidth;
		if (windowWidth < 731 || windowWidth >= 1360) {
			filterRangeWrapper.classList.toggle('filter__range_open');
			deployRangeIcon.classList.toggle('filter__icon_deployed');
		}
	})
});


document.addEventListener('DOMContentLoaded', function () {
	const rangeInput = document.getElementById('range');
	const maxValueSpan = document.getElementById('max-value');

	rangeInput.addEventListener('input', function () {
		maxValueSpan.textContent = this.value;
	});
});
