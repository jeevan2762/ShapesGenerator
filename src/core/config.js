/* eslint-disable no-magic-numbers */
const size = 110;
const squareSize = size / (2 ** 0.5);
const config = {
	dimensions: {
		circle:
		{
			top: 300,
			left: 300,
			height: size,
			width: size,
		},
		square:
		{
			top: size * 0.15,
			left: size * 0.15,
			height: squareSize,
			width: squareSize,
		},
		innerCircle:
		{
			top: 0,
			left: 0,
			height: squareSize,
			width: squareSize,
		},
	},
};

export default config;
