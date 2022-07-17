import React, { useState, useEffect } from 'react';
import  { Link } from 'react-router-dom';

import CircularProgress from '@material-ui/core/CircularProgress';
import Navbar from '../../layout/navigation/Navbar/Navbar';
import MissionCard from '../../layout/card/MissionCard';
import StatusCard from '../../layout/card/StatusCard';

export default function PreviousLaunch() {
    const [error, setError] = useState(null)
    const [isLoaded, setIsLoaded] = useState(false);
    const [prevLaunch, setPrevLaunch] = useState([]);
    const [launchPad, setLaunchPad] = useState([]);
    const [rockets, setRockets] = useState([]);
 
    useEffect(() => {
        fetchSpaceX();
        async function fetchSpaceX() {
            try {
                //TODO: rewrite api calls to landingpage.js
            const url = "https://api.spacexdata.com/v4/launches/past"            
            const response = await fetch(url);
            const data = await response.json();
            setPrevLaunch(data.reverse())

            const url2 = "https://api.spacexdata.com/v4/launchpads"
            const response2 = await fetch(url2);
            const data2 = await response2.json();
            setLaunchPad(data2);

            const url3 = "https://api.spacexdata.com/v4/rockets"
            const response3 = await fetch(url3);
            const data3 = await response3.json();
            setRockets(data3);

            setIsLoaded(true);
            } catch (error) {
                setIsLoaded(false);
                setError(error);
            }
        }
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
        hour: "2-digit",
        minute: "2-digit",
        hour12: true
    }

    if(error) {
        return <div>Error: {error.message}</div>
    } else if (!isLoaded) {
        return <div className="loading-progress"> <CircularProgress color="secondary" /></div>
        } else {
            return (
                <div className='bg-missions-image h-30v bg-no-repeat [background-position-y:30%] [background-position-x:40%] md:[background-position-x:35%] sm:[background-position-x:30%] xs:[background-position-x:25%]'>
                    <Navbar/>
                    {prevLaunch.map((previousMission, index) => {
                        console.log(previousMission);
                        return (
                            //TODO: On click of mission card, go to specific mission link to new page
                            <MissionCard
                            //TODO: Find default mission f9 logo patch
                            missionPatch={previousMission.links.patch.small} 
                            missionName={previousMission.name}
                            flightNumber={previousMission.flight_number}
                            time={new Date (previousMission.date_utc).toLocaleDateString("en-GB", dateTimeOption)}
                            //TODO: Find utc string time component, maybe use momentjs
                            // time={new Date (previousMission.date_utc).toUTCString("en-GB", dateTimeOption)}
                            //TODO: Find if there is better way to map and return just rocket.id and rocket.name
                            //so no mapping is needed here and only comparison is name
                            rocket={rockets.map((rocket, index) => {
                                if(rocket.id === previousMission.rocket) {
                                    return <>{rocket.name}</>
                                }
                            })}
                            launchPad={launchPad.map((listOfLaunchPads, index) => {
                                if(listOfLaunchPads.id === previousMission.launchpad) {
                                    return <>{listOfLaunchPads.name}</>
                                }
                            })}
                            status={
                                <StatusCard 
                                isSuccessful={previousMission.success}
                                />
                            }
                            />
                        )
                    })}

                </div>
        );
    }
}
