import React, { useState, useEffect } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

import ReactPlayer from 'react-player';
import { useParams } from 'react-router-dom';
import VideoCard from '../../../components/layout/card/VideoCard'
import Navbar from '../../layout/navigation/Navbar/Navbar';
import MissionReplayCard from '../../layout/card/MissionReplayCard';
import StatusCard from '../../layout/card/StatusCard';
import LaunchSites from '../../layout/card/LaunchSites';
import MissionDetailCard from '../../layout/card/MissionDetailCard';
import MissionNameCard from '../../layout/card/MissionNameCard';
import falconHeavy_3 from '../../../assets/images/Wallpapers/heavy_3.jpg'

export default function LaunchDetails({match}) {
    const [error, setError] = useState(null)
    const [isLoaded, setIsLoaded] = useState(false);
    const [launch, setLaunch] = useState([]);
    const [launchPad, setLaunchPad] = useState([]);
    const [rockets, setRockets] = useState([]);
    const [landingPads, setLandingPads] = useState([]);
    const [boosterCores, setBoosterCores] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        fetchSpaceX();
        async function fetchSpaceX() {
            try {
            const selectedLaunch = `https://api.spacexdata.com/v4/launches/${match.params.id}`;
            const launchPad = "https://api.spacexdata.com/v4/launchpads";
            const rocket = "https://api.spacexdata.com/v4/rockets";
            const landingPad = "https://api.spacexdata.com/v4/landpads";
            const boosterCore = "https://api.spacexdata.com/v4/cores";
            
                const selectedLaunchResponse = await fetch(selectedLaunch);
                const selectedLaunchData = await selectedLaunchResponse.json();
                setLaunch(selectedLaunchData);

                const launchPadResponse = await fetch(launchPad);
                const launchPadData = await launchPadResponse.json();
                setLaunchPad(launchPadData);

                const rocketResponse = await fetch(rocket);
                const rocketData = await rocketResponse.json();
                setRockets(rocketData);
                
                const landingPadResponse = await fetch(landingPad);
                const landingPadData = await landingPadResponse.json();
                setLandingPads(landingPadData);
                
                const boosterCoreReponse = await fetch(boosterCore);
                const boosterCoreData = await boosterCoreReponse.json();
                setBoosterCores(boosterCoreData);

                // TODO: Fix const variables
                // TODO: More research on the additional apis needed to fill in the card details
                // TODO: Get more background images for card images
                
                

                setIsLoaded(true);
            } catch (error) {
                setIsLoaded(false);
                setError(error);
            }
        }
    }, []);

    if(error) {
        return <div>Error: {error.message}</div>
    } else if (!isLoaded) {
        return <div className="loading-progress"> <CircularProgress color="secondary" /></div>
        } else {
            return (
                <div className='bg-starship_hero_4 bg-cover bg-center bg-no-repeat min-h-screen pb-10'>
                    <Navbar/>
                    <div className='flex justify-around'>
                        <div className='w-fit'>
                            <MissionNameCard 
                                mission_name={launch.name}
                                mission_status={ <StatusCard isSuccessful={launch.success}/>}
                                flight_number={launch.flight_number}
                            />
                            <VideoCard 
                                url={launch.links.webcast}
                            />
                            <div>
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
                                                        label_one={"Landing pad"}
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
                        <div>
                            asdasd
                        </div>
                    </div>
                </div>
            );
    }
}

//function LaunchSites({name, locality, region, launchAttempts, launchSuccess, status, imgSrc}) {
