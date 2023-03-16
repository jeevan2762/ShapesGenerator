import { React } from 'react';
import Shapes from './Components/Shapes';
import './App.scss';

const multiplier = 2;

const App = (context) =>
	<div className="App" role="App">
		<Shapes { ...context }/>
		<Shapes { ...{ ...context, multiplier } }/>
	</div>;

export default App;
