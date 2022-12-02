import { React } from 'react';

const SmallCircle = ({ innerCircle, multiplier }) => {
	const { top, left, width, height } = innerCircle;

	return (
		<div
			className="smallCircle"
			style={ {
				top: `${ top * multiplier }px`,
				left: `${ left * multiplier }px`,
				width: `${ width * multiplier }px`,
				height: `${ height * multiplier }px`,
			} }
		/>
	);
};

export default SmallCircle;
