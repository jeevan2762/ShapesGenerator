/* eslint-disable no-magic-numbers */
const rootTwo = 2 ** 0.5;

const getDimension = (size) => {
	const squareSize = size / rootTwo;
	const squareOffset = 0.15;
	const squarePosition = size * squareOffset;

	return {
		circle: {
			top: 300, left: 300,
			height: size, width: size,
		},
		square:	{
			top: squarePosition, left: squarePosition,
			height: squareSize, width: squareSize,
		},
		innerCircle: {
			top: 0, left: 0,
			height: squareSize, width: squareSize,
		},
	};
};

export default getDimension;
