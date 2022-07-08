import React from 'react';
import  {BrowserRouter as HashRouter, Switch, Route, } from 'react-router-dom';

import Navbar from './components/layout/navigation/Navbar/Navbar';
import LandingPage from './components/pages/Landingpage/landingpage';
import LatestLaunch from './components/latestlaunch';
import FalconHeavy from './components/vehicle_falconheavy';
import Starship from './components/vehicle_starship';
import PreviousLaunch from './components/previous';
import Launch from './components/launch';
import F9 from './components/vehicle_falcon9';

import './App.css';

function App() {
	return (
		<div className="App box-border">
			<HashRouter basename="/x-launch">
				{/* < Navbar /> */}
				< LandingPage />
				{/* <Switch>
					<Route path='/missions'>
						< PreviousLaunch />
					</Route>
					<Route path='/rocket/falcon9'>
						< F9 />
					</Route>
					<Route path='/rocket/falconheavy'>
						< FalconHeavy />
					</Route>
					<Route path='/rocket/starship'>
						< Starship />
					</Route>
					<Route path='/launch/:id' component={Launch}></Route>
					<Route path='/'>
						< LatestLaunch />
					</Route>
				</Switch> */}
			</HashRouter>
		</div>
	);
}

export default App;