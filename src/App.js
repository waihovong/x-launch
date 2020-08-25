import React from 'react';
import  {BrowserRouter as HashRouter, Switch, Route, } from 'react-router-dom';
import Headroom from 'react-headroom';

import Navbar from './components/navbar';
import LandingPage from './components/landingpage';
import LatestLaunch from './components/latestlaunch';
import FalconHeavy from './components/vehicle_falconheavy';
import Starship from './components/vehicle_starship';
import PreviousLaunch from './components/previous';
import Launch from './components/launch';
import F9 from './components/vehicle_falcon9';

import './App.css';

function App() {
	return (
		<div className="App">
			<HashRouter basename="/x-launch">
				<Headroom>
					< Navbar />
				</Headroom>
				<Switch>
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
						< LandingPage />
						< LatestLaunch />
					</Route>
				</Switch>
			</HashRouter>
		</div>
	);
}

export default App;