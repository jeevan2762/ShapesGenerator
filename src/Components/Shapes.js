import { React } from 'react';
import Square from './Square';

const topValue = 500;
const leftValue = 300;

const Shapes = ({ top = topValue, left = leftValue }) =>
	<div className="circle" style={ { top: `${ top }px`, left: `${ left }px` } }>
		<Square/>
	</div>;

export default Shapes;
