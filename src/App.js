import React from 'react';
import  {BrowserRouter as HashRouter, Switch, Route, Router} from 'react-router-dom';

import Navbar from './components/layout/navigation/Navbar/Navbar';
import LandingPage from './components/pages/Landingpage/landingpage';
import FalconHeavy from './components/vehicle_falconheavy';
import Starship from './components/vehicle_starship';
import PreviousLaunch from './components/pages/PreviousMissions/previousmissionspage';
import Launch from './components/launch';
import F9 from './components/vehicle_falcon9';

function App() {
	return (
		<div className="App">
			<HashRouter basename="/x-launch">	
				<Switch>
					<Route exact path="/">
						<LandingPage />
					</Route>
					<Route path='/Previous'>
						< PreviousLaunch />
					</Route>
					{/* <Route path='/rocket/falcon9'>
						< F9 />
					</Route>
					<Route path='/rocket/falconheavy'>
						< FalconHeavy />
					</Route>
					<Route path='/rocket/starship'>
						< Starship />
					</Route> */}
					{/* <Route path='/launch/:id' component={Launch}></Route> */}
				</Switch>
			</HashRouter>
		</div>
	);
}

export default App;