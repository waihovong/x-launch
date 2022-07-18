import div, { useState, useEffect } from 'react';

import CircularProgress from '@material-ui/core/CircularProgress';
import Navbar from '../../layout/navigation/Navbar/Navbar';
import MissionCard from '../../layout/card/MissionCard';
import StatusCard from '../../layout/card/StatusCard';
import DefaultPatch from '../../../assets/images/Rockets/MissionPatch.png';

export default function Missions() {
    const [error, setError] = useState(null)
    const [isLoaded, setIsLoaded] = useState(false);
    const [previousLaunch, setPreviousLaunch] = useState([]);
    const [launchPad, setLaunchPad] = useState([]);
    const [rockets, setRockets] = useState([]);
    const [upcomingMission, setUpcomingMission] = useState([]);
 
    useEffect(() => {

        const base = "https://api.spacexdata.com/v4";
        spaceXMissions();
        async function spaceXMissions() {
            try {

                const previousLaunchResponse = await fetch(`${base}/launches/past`);
                const previousLaunchJson = await previousLaunchResponse.json();
                setPreviousLaunch(previousLaunchJson.reverse());
                
                const launchPadResponse = await fetch(`${base}/launchpads`);
                const launchPadJson = await launchPadResponse.json();
                setLaunchPad(launchPadJson);
                
                const rocketsResponse = await fetch(`${base}/rockets`);
                const rocketsJson = await rocketsResponse.json();
                setRockets(rocketsJson);

                const upcomingMissionResponse = await fetch(`${base}/launches/upcoming`);
                const upcomingMissionJson = await upcomingMissionResponse.json();
                setUpcomingMission(upcomingMissionJson);

                setIsLoaded(true);
            } catch (error) {
                setIsLoaded(false);
                setError(error);
            }
        };
    }, []);


    //TODO: Find how to map specific const and use them later without needing to map them again, return flat?
    // const getRocketID = rockets.map((rocket, index) => {
    //     return rocket.id;
    // });
    // const getRocketName = rockets.map((rocket, index) => {
    //     return rocket.name;
    // })

    const dateTimeOption = {
        day: "2-digit",
        month: "long",
        year: "numeric",
        hour12: true
    }

    if(error) {
        return <div>Error: {error.message}</div>
    } else if (!isLoaded) {
        return <div className="loading-progress"> <CircularProgress color="secondary" /></div>
        } else {
            return (
                <div className='bg-black'>
                    <div className='bg-missions-image h-30v bg-no-repeat [background-position-y:30%] [background-position-x:40%] md:[background-position-x:35%] sm:[background-position-x:30%] xs:[background-position-x:25%]'>
                        <Navbar/>
                    </div>
                    <div className='grid grid-cols-2 gap-x-14'>
                        <div className='grid justify-end'>
                            <div className='h-40 text-8xl -mt-14 text-white font-semibold grid justify-start flex-col z-40'>
                                MISSIONS
                            </div>
                            
                            {previousLaunch.map((previousMission, index) => {
                                return (
                                    <div className='row' key={index}>
                                        <MissionCard
                                        //TODO: Find out way to key list this nicer
                                        //TODO: Find default mission f9 logo patch
                                        //TODO:responsive design on cards, smaller = square possibly remove logo
                                        //TODO:On click of mission card, go to specific mission link to new page
                                        //TODO: Find utc string time component, maybe use momentjs
                                        // time={new Date (previousMission.date_utc).toUTCString("en-GB", dateTimeOption)}
                                        //TODO: Find if there is better way to map and return just rocket.id and rocket.name
                                        //so no mapping is needed here and only comparison is name
                                        missionPatch={previousMission.links.patch.small || DefaultPatch} 
                                        missionName={previousMission.name}
                                        flightNumber= {previousMission.flight_number}
                                        time={new Date (previousMission.date_utc).toLocaleDateString("en-GB", dateTimeOption)}
                                        rocket={rockets.map((rocket, index) => {
                                            if(rocket.id === previousMission.rocket) {
                                                return (
                                                    <li key={index} className="list-none">
                                                        {rocket.name}
                                                    </li>
                                                )
                                            }
                                        })}
                                        launchPad={launchPad.map((listOfLaunchPads, index) => {
                                            if(listOfLaunchPads.id === previousMission.launchpad) {
                                                return ( 
                                                    <li key={index} className="list-none">
                                                        {listOfLaunchPads.name}
                                                    </li>
                                                )
                                            }
                                        })}
                                        status={
                                            <StatusCard 
                                            isSuccessful={previousMission.success}
                                            />
                                        }
                                        />
                                    </div>
                                )
                            })}
                        </div>
                        <div className='grid max-h-1'>
                            <div className='z-40 h-40  mb-10 text-6xl text-white font-semibold flex justify-end flex-col'>
                                UPCOMING
                            </div>
                            {upcomingMission.slice(0,3).map((upcomingLaunches, index) => {
                                return (
                                    <div className='row' key={index}>
                                        <MissionCard
                                        missionPatch={upcomingLaunches.links.patch.small || DefaultPatch} 
                                        missionName={upcomingLaunches.name}
                                        flightNumber= {upcomingLaunches.flight_number}
                                        time={new Date (upcomingLaunches.date_utc).toLocaleDateString("en-GB", dateTimeOption)}
                                        rocket={rockets.map((rocket, index) => {
                                            if(rocket.id === upcomingLaunches.rocket) {
                                                return (
                                                    <li key={index} className="list-none">
                                                        {rocket.name}
                                                    </li>
                                                )
                                            }
                                        })}
                                        launchPad={launchPad.map((listOfLaunchPads, index) => {
                                            if(listOfLaunchPads.id === upcomingLaunches.launchpad) {
                                                return (
                                                    <li key={index} className="list-none">
                                                        {listOfLaunchPads.name}
                                                    </li>
                                                )
                                            }
                                        })}
                                        status={
                                            <StatusCard 
                                            isSuccessful={"Upcoming"}
                                            />
                                        }
                                        />
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
        );
    }
}
