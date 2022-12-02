import { React } from 'react';
import Shapes from './Components/Shapes';
import './App.scss';

const App = () =>
	<div className="App" role="App">
		<Shapes/>
		<Shapes top={ 400 } left={ 500 }/>
	</div>;

export default App;
