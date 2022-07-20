import { useState, useEffect } from 'react';

import CircularProgress from '@material-ui/core/CircularProgress';
import Navbar from '../../layout/navigation/Navbar/Navbar';
import MissionCard from '../../layout/card/MissionCard';
import StatusCard from '../../layout/card/StatusCard';
import DefaultPatch from '../../../assets/images/Rockets/MissionPatch.png';
import LaunchSites from '../../layout/card/LaunchSites';
import Images from '../../../assets/images/Wallpapers/dragon.jpg'

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
                <div className='bg-black lg:bg-green-400 md:bg-red-400 sm:bg-blue-400 xs:bg-pink-400 min-h-screen'>
                    <div className='bg-missions-image h-30v bg-no-repeat [background-position-y:30%] [background-position-x:40%] md:[background-position-x:35%] sm:[background-position-x:30%] xs:[background-position-x:25%]'>
                        <Navbar/>
                    </div>
                    <div className='grid grid-cols-2 gap-x-12 mx-3 xs:flex justify-center '>
                        <div className='grid grid-rows-1 justify-end pl-3 xs:pl-0'>
                            <div className='h-32 text-8xl -mt-14 text-white font-semibold grid justify-start flex-col z-40 md:text-6xl md:h-20 md:mb-2 md:flex md:justify-end sm:text-4xl sm:h-16 sm:flex sm:justify-end xs:text-4xl xs:h-16 xs:justify-center xs:text-slate-200'>
                                MISSIONS
                            </div>
                            <div className='row lg:max-h-[58vh] overflow-auto xs:max-h-[30vh] xs:flex xs:flex-col xs:mb-2 '>
                                {previousLaunch.map((previousMission, index) => {
                                    return (
                                        <div className='row' key={index}>
                                            <MissionCard
                                            //TODO: Find out way to key list this nicer
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
                        </div>
                        <div className='row max-h-0 pr-3 xs:hidden'>
                            <div className='h-14 text-4xl text-white font-semibold flex justify-end flex-col z-40 mb-4 md:text-3xl md:h-10 md:mb-1 sm:text-2xl sm:h-8 sm:flex sm:justify-end sm:mb-1 xs:text-2xl xs:h-8 xs:mb-1'>
                                UPCOMING
                            </div>
                            {upcomingMission.slice(0,2).map((upcomingLaunches, index) => {
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
                                            upcoming="Upcoming"
                                            />
                                        }
                                        />
                                    </div>
                                )
                            })}

                            {/* <div className='grid grid-cols-2 max-w-fit gap-x-3 '>
                                {launchPad.filter(statusResult => statusResult.status !== "retired").sort((a,b) => b.launch_attempts-a.launch_attempts).map((launchPadInfo, index) => {
                                    return (
                                        //TODO: Fix grid row/col
                                        //TODO: Add image to launch sites with props and link?
                                        <div className='grid grid-rows-1 ' key={index}>
                                            <LaunchSites 
                                            name={launchPadInfo.name}
                                            locality={launchPadInfo.locality}
                                            region={launchPadInfo.region}
                                            launchAttempts={launchPadInfo.launch_attempts}
                                            launchSuccess={launchPadInfo.launch_successes}
                                            status={launchPadInfo.status}
                                            />
                                        </div>
                                    )
                                })}
                            </div> */}
                        </div>
                    </div>
                </div>
        );
    }
}
