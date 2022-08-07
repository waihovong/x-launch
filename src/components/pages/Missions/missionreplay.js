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
    const {id} = useParams();

    useEffect(() => {
        fetchSpaceX();
        console.log('match', match);
        console.log(id);
        async function fetchSpaceX() {
            try {
            const url = `https://api.spacexdata.com/v4/launches/${match.params.id}`
            const url2 = "https://api.spacexdata.com/v4/launchpads"
            const url3 = "https://api.spacexdata.com/v4/rockets"
            
                const response = await fetch(url);
                const data = await response.json();
                setLaunch(data);

                const response2 = await fetch(url2);
                const data2 = await response2.json();
                setLaunchPad(data2);

                const response3 = await fetch(url3);
                const data3 = await response3.json();

                // TODO: Fix const variables
                // TODO: More research on the additional apis needed to fill in the card details
                // TODO: Get more background images for card images
                
                setRockets(data3);

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
                //TODO:
                <div className='bg-starship_hero_4 bg-cover bg-center bg-no-repeat h-100v'>
                    <Navbar/>
                    <div className='flex justify-around'>
                        <div className=''>
                            <MissionNameCard 
                                mission_name={launch.name}
                                mission_status={ <StatusCard isSuccessful={launch.success}/>}
                                flight_number={launch.flight_number}
                            />
                            <VideoCard 
                                url={launch.links.webcast}
                            />
                            <div>
                                {/* TODO: background-size cover for missiondetailcard background images */}
                                {/* TODO: Make mission name and Flight number on top of the video player and keep the cards on the bottom  */}
                                <MissionReplayCard 
                                    card_1={<MissionDetailCard 
                                        background={"bg-falcon_heavy_hero"}
                                        label_one={"Flight"}
                                        label_one_description={"175"}
                                        label_two={"Time"}
                                        label_two_description={"29 June 2022"}
                                        label_three={"Rocket"}
                                        label_three_description={"Falcon 9"}
                                        label_five={"Booster"}
                                        label_five_description={"B105XS"}
                                        label_six={"Flights"}
                                        label_six_description={"17"}
                                        />}
                                    card_2={<MissionDetailCard 
                                        background={"bg-starship_hero_2"}
                                        label_one={"Flight"}
                                        label_one_description={"175"}
                                        label_two={"Time"}
                                        label_two_description={"29 June 2022"}
                                        label_three={"Rocket"}
                                        label_three_description={"Falcon 9"}
                                        label_five={"Booster"}
                                        label_five_description={"B105XS"}
                                        label_six={"Flights"}
                                        label_six_description={"17"}
                                        />}
                                    card_3={<MissionDetailCard 
                                        background={"bg-starship_hero_4"}
                                        label_one={"Flight"}
                                        label_one_description={"175"}
                                        label_two={"Time"}
                                        label_two_description={"29 June 2022"}
                                        label_three={"Rocket"}
                                        label_three_description={"Falcon 9"}
                                        label_five={"Booster"}
                                        label_five_description={"B105XS"}
                                        label_six={"Flights"}
                                        label_six_description={"17"}
                                        />}
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
