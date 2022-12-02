import { React } from 'react';
import SmallCircle from './SmallCircle';

const Square = ({ dimensions, multiplier }) => {
	const { square: { top, left, width, height }} = dimensions;

	return (
		<div
			className="square"
			style={ {
				top: `${ top * multiplier }px`,
				left: `${ left * multiplier }px`,
				width: `${ width * multiplier }px`,
				height: `${ height * multiplier }px`,
			} }
		>
			<SmallCircle { ...{ ...dimensions, multiplier } }/>
		</div>
	);
};

export default Square;
