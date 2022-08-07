import React from 'react';
import  {BrowserRouter as HashRouter, Switch, Route, Router} from 'react-router-dom';

import Navbar from './components/layout/navigation/Navbar/Navbar';
import LandingPage from './components/pages/Landingpage/landingpage';
import FalconHeavy from './components/pages/Rockets/vehicle_falconheavy';
import Starship from './components/pages/Rockets/vehicle_starship';
import Missions from './components/pages/Missions/missionspage';
import Launch from './components/pages/Missions/missionreplay';
import Falcon9 from './components/pages/Rockets/vehicle_falcon9';

function App() {
	return (
		<div className="App">
			<HashRouter basename="/x-launch">	
				<Switch>
					<Route exact path="/">
						<LandingPage />
					</Route>
					<Route path='/Missions'>
						<Missions />
					</Route>
					<Route path='/rocket/falcon9'>
						< Falcon9 />
					</Route>
					 
					<Route path='/rocket/falconheavy'>
						< FalconHeavy />
					</Route>
					<Route path='/rocket/starship'>
						< Starship />
					</Route>
					<Route path='/launch/:id' component={Launch}></Route>
				</Switch>
			</HashRouter>
		</div>
	);
}

export default App;