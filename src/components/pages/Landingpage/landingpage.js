import React, { useState, useEffect } from "react";

import Navbar from '../../layout/navigation/Navbar/Navbar';
import UpcomingMission  from "../../../components/layout/card/UpcomingMission";
import MissionCard from "../../layout/card/MissionCard";

import  { fetchNextLaunchData, fetchLaunchPadData } from '../../../api/spacex_api'

export default function LandingPage() {
	const [error, setError] = useState(null);
	const [isLoaded, setIsLoaded] = useState(false);
	const [nextLaunch, setNextLaunch] = useState([]);
	const [launchPad, setLaunchPad] = useState([]);

	useEffect(() => {
		async function fetchData() {
			try {

				const nextLaunch = await fetchNextLaunchData();
				const launchPads = await fetchLaunchPadData();

				setNextLaunch(nextLaunch);
				setLaunchPad(launchPads);

				setIsLoaded(true);

			} catch(error) {
				setIsLoaded(false);
				setError(error);
			}
		};
		fetchData();
	}, []);

	const getLaunchPadName = launchPad.map((listLaunchPad) => {
		return listLaunchPad.id === nextLaunch.launchpad ? listLaunchPad.name : null;
	});
	
	return (
		// TODO: add error loading page or skeleton loading page
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