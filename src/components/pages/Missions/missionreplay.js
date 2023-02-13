import React, { useState, useEffect, useReducer } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Link, useLocation } from 'react-router-dom';

import { useParams } from 'react-router-dom';
import VideoCard from '../../../components/layout/card/VideoCard'
import Navbar from '../../layout/navigation/Navbar/Navbar';
import MissionReplayCard from '../../layout/card/MissionReplayCard';
import StatusCard from '../../layout/card/StatusCard';
import MissionDetailCard from '../../layout/card/MissionDetailCard';
import MissionNameCard from '../../layout/card/MissionNameCard';
import DefaultPatch from '../../../assets/images/Rockets/MissionPatch.png';
import MissionCardCompact from '../../layout/card/MissionCardCompact';

import Slider from "react-slick";

export default function LaunchDetails({match}) {
    const [error, setError] = useState(null)
    const [isLoaded, setIsLoaded] = useState(false);
    const [launch, setLaunch] = useState([]);
    const [launchPad, setLaunchPad] = useState([]);
    const [rockets, setRockets] = useState([]);
    const [landingPads, setLandingPads] = useState([]);
    const [boosterCores, setBoosterCores] = useState([]);
    const [previousLaunch, setPreviousLaunch] = useState([]);
    const [loadingComponent, setLoadingComponent] = useState(false);

    useEffect(() => {
        const base = "https://api.spacexdata.com/v4";            
        let isReloaded = true;
        const fetchSpaceX = async () => {
            const selectedLaunch = `https://api.spacexdata.com/v4/launches/${match.params.id}`;
            const launchPad = "https://api.spacexdata.com/v4/launchpads";
            const rocket = "https://api.spacexdata.com/v4/rockets";
            const landingPad = "https://api.spacexdata.com/v4/landpads";
            const boosterCore = "https://api.spacexdata.com/v4/cores";
            
                const selectedLaunchResponse = await fetch(selectedLaunch);
                const selectedLaunchData = await selectedLaunchResponse.json();

                const launchPadResponse = await fetch(launchPad);
                const launchPadData = await launchPadResponse.json();

                const rocketResponse = await fetch(rocket);
                const rocketData = await rocketResponse.json();
                
                const landingPadResponse = await fetch(landingPad);
                const landingPadData = await landingPadResponse.json();
                
                const boosterCoreReponse = await fetch(boosterCore);
                const boosterCoreData = await boosterCoreReponse.json();

                const previousLaunchResponse = await fetch(`${base}/launches/past`);
                const previousLaunchJson = await previousLaunchResponse.json();

                if (isReloaded) {
                    setLaunch(selectedLaunchData);
                    setLaunchPad(launchPadData);
                    setRockets(rocketData);
                    setLandingPads(landingPadData);
                    setBoosterCores(boosterCoreData);
                    setPreviousLaunch(previousLaunchJson.reverse());
                    setIsLoaded(true);
                    setLoadingComponent(true);
                }            

            }
            fetchSpaceX()
            return () => isReloaded = false;

    }, [match]);

    const dateTimeOption = {
        day: "2-digit",
        month: "long",
        year: "numeric",
        hour12: true
    }

    if(error) {
        return <div>Error: {error.message}</div>
    } else if (!isLoaded) {
        return (<div className='bg-starship_hero_4  bg-cover bg-center bg-no-repeat min-h-screen'></div>)
        } else {
            return (
                <div className='bg-starship_hero_4 bg-cover bg-center bg-no-repeat min-h-screen pb-10'>
                    <Navbar/>
                    <div className='flex justify-center h-[65vh] xs:flex xs:flex-col'>
                        {!loadingComponent ?   
                            <div className='w-1/2 flex justify-center items-center'><CircularProgress className='w-[60px]' color="secondary" /></div>
                        :
                        <div className='w-1/2 xs:w-screen'>
                                <MissionNameCard 
                                    mission_name={launch.name}
                                    mission_status={ <StatusCard isSuccessful={launch.success}/>}
                                    flight_number={launch.flight_number}
                                    mission_patch={launch.links.patch.small || DefaultPatch}
                                />
                                <VideoCard 
                                    url={launch.links.webcast}
                                />
                                <div className=''>
                                    <MissionReplayCard 
                                        mission_details={"Mission Details"}
                                        gallery={(launch.links.flickr.original).length > 0 ? "Gallery" : ""}
                                        gallery_images={launch.links.flickr.original.map((gallery, index) => {
                                            return (
                                                <img key={index} src={gallery} className="w-full h-[150px] object-cover"/>
                                            )
                                        })}
                                        card_1={<MissionDetailCard 
                                            background={"bg-launch_hero"}
                                            label_one={"Flight"}
                                            label_one_description={launch.flight_number}
                                            label_two={"Time"}
                                            label_two_description={new Date(launch.date_utc).toDateString()}
                                            label_three={"Rocket"}
                                            label_three_description={rockets.map((rocketID, index) => {
                                                if(rocketID.id === launch.rocket) {
                                                    return (
                                                        <div key={index}>
                                                            <span>{rocketID.name}</span>
                                                        </div>
                                                    )
                                                }
                                            })}
                                            label_five={"Booster"}
                                            label_five_description={boosterCores.map((coreID, index) => {
                                                if(coreID.id === launch.cores[0].core) {
                                                    return (
                                                        <div key={index}>
                                                            <span>{coreID.serial}</span>
                                                        </div>
                                                    )
                                                }
                                            })}
                                            label_six={"Flights"}
                                            label_six_description={boosterCores.map((coreID, index) => {
                                                if(coreID.id === launch.cores[0].core) {
                                                    return (
                                                        <div key={index}>
                                                            <span>{launch.cores[0].flight}</span>
                                                        </div>
                                                    )
                                                }
                                            })}
                                            />}
                                        card_2={launchPad.map((launchPadID, index) => {
                                            if(launchPadID.id === launch.launchpad)
                                            {
                                                return (
                                                    <div key={index}>
                                                        <MissionDetailCard 
                                                            background={"bg-launchpad_hero"}
                                                            label_one={"Launch site"}
                                                            label_one_description={launchPadID.name}
                                                            label_two={"Location"}
                                                            label_two_description={launchPadID.region}
                                                            label_four={"Locality"}
                                                            label_four_description={launchPadID.locality}
                                                            label_five={"Status"}
                                                            label_five_description={launchPadID.status}
                                                            label_six={"Landings"}
                                                            label_six_description={(launchPadID.launches).length}
                                                        />
                                                    </div>
                                                )
                                            }
                                        })}
                                        card_3={landingPads.map((landingPadID, index) => {
                                            if(landingPadID.id === launch.cores[0].landpad)
                                            {
                                                return (
                                                    <div key={index}>
                                                        <MissionDetailCard 
                                                            background={"bg-landingpad_hero"}
                                                            label_one={"Landing pad"}
                                                            label_one_description={landingPadID.name}
                                                            label_two={"Location"}
                                                            label_two_description={landingPadID.region}
                                                            label_four={"Locality"}
                                                            label_four_description={landingPadID.locality}
                                                            label_five={"Status"}
                                                            label_five_description={landingPadID.status}
                                                            label_six={"Landings"}
                                                            label_six_description={landingPadID.landing_attempts}
                                                        />
                                                    </div>
                                                )
                                            }
                                        })}
                                            
                                        />
                                </div>
                            </div>
                        }
                        <div className='bg-white pb-'>
                            <div className='text-xl capitalize text-center font-semibold px-5 py-6'>
                                <span>Watch Previous Missions</span>
                            </div>
                            <div className='bg-white p-5 rounded-md max-h-full overflow-auto'>
                            {previousLaunch.map((previousMission, index) => {
                                return (
                                    <div key={index}>
                                    <Link to={`/launch/${previousMission.id}`} onClick={() => setLoadingComponent(!loadingComponent)}>
                                    <MissionCardCompact
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
                </div>
            );
    }
}