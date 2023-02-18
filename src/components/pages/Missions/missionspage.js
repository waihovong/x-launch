import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import CircularProgress from '@material-ui/core/CircularProgress';
import Navbar from '../../layout/navigation/Navbar/Navbar';
import MissionCard from '../../layout/card/MissionCard';
import StatusCard from '../../layout/card/StatusCard';
import DefaultPatch from '../../../assets/images/Rockets/MissionPatch.png';
import LaunchSites from '../../layout/card/LaunchSites';
import Images from '../../../assets/images/Wallpapers/dragon.jpg'
import { fetchLaunchPadData, fetchPreviousLaunchData, fetchRocketData, fetchUpcomingLaunchData } from '../../../api/spacex_api';

export default function Missions() {
    const [error, setError] = useState(null)
    const [isLoaded, setIsLoaded] = useState(false);
    const [previousLaunch, setPreviousLaunch] = useState([]);
    const [launchPad, setLaunchPad] = useState([]);
    const [rockets, setRockets] = useState([]);
    const [upcomingMission, setUpcomingMission] = useState([]);
 
    useEffect(() => {
        async function fetchData() {
            try {
                const previousLaunchData = await fetchPreviousLaunchData();
                const launchPadData = await fetchLaunchPadData();
                const upcomingMissionData = await fetchUpcomingLaunchData();
                const rocketData = await fetchRocketData();

                setPreviousLaunch(previousLaunchData.reverse());
                setLaunchPad(launchPadData);
                setUpcomingMission(upcomingMissionData);
                setRockets(rocketData);

                setIsLoaded(true);
            } catch (error) {
                setIsLoaded(false);
                setError(error);
            }
        };
        fetchData();
    }, []);

    const dateTimeOption = {
        day: "2-digit",
        month: "long",
        year: "numeric",
        hour12: true
    }

    if(error) {
        return <div>Error: {error.message}</div>
    } else if (!isLoaded) {
        return <div className="bg-missions-image bg-center bg-no-repeat min-h-screen [background-position-x:40%]"></div>
        } else {
            return (
                <div className='bg-gradient-to-l from-black via-zinc-800 to-black min-h-screen'>
                    <div className='bg-missions-image h-30v bg-no-repeat [background-position-y:30%] [background-position-x:40%] md:[background-position-x:35%] sm:[background-position-x:30%] xs:[background-position-x:25%]'>
                        <Navbar/>
                    </div>
                    <div className='grid grid-cols-2 gap-x-12 mx-3 justify-center xs:flex xs:flex-col '>
                        <div className='grid grid-rows-1 justify-end pl-3 xs:pl-0 xs:mx-auto'>
                            <div className='h-32 text-8xl -mt-14 text-white font-semibold grid justify-start flex-col z-40 md:text-6xl md:h-20 md:mb-2 md:flex md:justify-end sm:text-4xl sm:h-16 sm:flex sm:justify-end xs:text-4xl xs:h-16 xs:justify-center xs:text-slate-200'>
                                MISSIONS
                            </div>
                            <div className='row lg:max-h-[58vh] overflow-auto xs:max-h-[30vh] '>
                                <div className=''>
                                {previousLaunch.map((previousMission, index) => {
                                    return (
                                        <div className='row' key={index}>
                                            <Link to={`/launch/${previousMission.id}`}>
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
                                            </Link>
                                        </div>
                                    )
                                })}
                                </div>
                            </div>
                        </div>
                        <div className='row max-h-0 pr-3 xs:flex xs:flex-col xs:max-w-md xs:mx-auto xs:items-center xs:min-h-screen'>
                            <div className='h-14 text-4xl text-white font-semibold flex justify-end flex-col z-40 mb-4 md:text-3xl md:h-10 md:mb-1 sm:text-2xl sm:h-8 sm:flex sm:justify-end sm:mb-1 xs:text-2xl xs:h-8 xs:mb-1 xs:hidden'>
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

                            <div className='grid grid-cols-2 max-w-3xl md:max-w-md justify-center grid-flow-rows auto-rows-max sm:grid-cols-1 xs:flex xs:flex-col xs:mx-auto xs:max-w-fit'>
                                {launchPad.filter(statusResult => statusResult.status !== "retired").sort((a,b) => b.launch_attempts-a.launch_attempts).map((launchPadInfo, index) => {
                                    return (
                                        //TODO: Fix grid row/col
                                        //TODO: Add image to launch sites with props and link?
                                        <div className='grid justify-start max-w-fit' key={index}>
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
                            </div>
                        </div>
                    </div>
                </div>
        );
    }
}
