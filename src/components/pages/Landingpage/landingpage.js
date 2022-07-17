import React, { useState, useEffect } from "react";

import CircularProgress from '@material-ui/core/CircularProgress';

import Navbar from '../../layout/navigation/Navbar/Navbar';
import UpcomingMission  from "../../../components/layout/card/UpcomingMission";
import MissionCard from "../../layout/card/MissionCard";

export default function LandingPage() {
	const [error, setError] = useState(null);
	const [isLoaded, setIsLoaded] = useState(false);
	const [nextLaunch, setNextLaunch] = useState([]);
	const [launchPad, setLaunchPad] = useState([]);

	useEffect(() => {

		const apiConstant = "https://api.spacexdata.com/v4";
		fetchLandingPage();
		//call constant here or something
		async function fetchLandingPage() {
			try {
				const nextLaunchResponse = await fetch(`${apiConstant}/launches/next`);
				const launchPadResponse = await fetch(`${apiConstant}/launchpads`);
				
				const nextLaunchJson = await nextLaunchResponse.json();
				const launchPadJson = await launchPadResponse.json();

				setNextLaunch(nextLaunchJson);
				setLaunchPad(launchPadJson);

				setIsLoaded(true);
			} catch(error) {
				setIsLoaded(false);
				setError(error);
			}
		};
	}, []);

	const getLaunchPadName = launchPad.map((listLaunchPad, index) => {
		if (listLaunchPad.id === nextLaunch.launchpad ) {
			return listLaunchPad.name;
		}
	});
	
	return (
		//TODO: add error loading page or skeleton loading page
		// TODO: Change the responsiveness of the nav bar for mobiles - burger menu
		<div className="bg-landing-image-gradient bg-cover min-h-screen bg-no-repeat bg-center">
			<Navbar/>
			<UpcomingMission 
				missionName={nextLaunch.name}
				missionDetails={nextLaunch.details ? nextLaunch.details : "No Mission Details"}
				flightNumber={nextLaunch.flight_number}
				missionDate={new Date(nextLaunch.date_utc).toDateString()}
				launchPad = {getLaunchPadName.filter(name => name)}
			/>
		</div>
	);
}