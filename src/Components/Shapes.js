import { React } from 'react';
import Square from './Square';

const Shapes = ({ config, multiplier = 1 }) => {
	const { dimensions: { circle: { top, left, height, width }}} = config;

	return (
		<div
			className="circle"
			style={ {
				top: `${ top * multiplier }px`,
				left: `${ left * multiplier }px`,
				width: `${ width * multiplier }px`,
				height: `${ height * multiplier }px`,
			} }
		>
			<Square { ...{ ...config, multiplier } }/>
		</div>
	);
};

export default Shapes;
