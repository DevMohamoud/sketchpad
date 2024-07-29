
function createSquare() {
	const square = document.createElement('div');
	square.classList.add('square-wrapper');
	return square;
};

function generateSquares(getByElementTag, sizeOfSquares) {
	const container = document.getElementById(getByElementTag);
	if (container) {
		for (let i=0; i < sizeOfSquares * sizeOfSquares; i++) {
			const square = createSquare();
			container.appendChild(square);
		}
	} else {
		console.error(`requested container "${getByElementTag}" not found!`);
	}
};

generateSquares('container', 16);
