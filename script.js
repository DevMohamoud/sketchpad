
const createSquare = () => {
	const square = document.createElement('div');
	square.classList.add('square-wrapper');
	return square;
};

const generateSquares = (byElement, len) => {
	const container = document.getElementById(byElement);
	if (container) {
		container.textContent = "";
		for (let i=0; i < len*len; i++) {
			const newSquare = createSquare();
			container.appendChild(newSquare);
		}
	} else {
		console.error(`Not found "${byElement}"🙄`);
	}
};

document.getElementById('generate-new-grid').addEventListener('click', () => {
	const grid = Number(prompt("Enter number of grids? "));
	if (!isNaN(grid) && grid > 0) {
		generateSquares('container', grid);
	} else {
		alert('Enter valid number great than 0');
	}
});

generateSquares('container', 10);