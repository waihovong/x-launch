import React, { useState, useEffect } from "react";
import StatsCard from "../../layout/grid/StatisticsCard";
import Navbar from "../../layout/navigation/Navbar/Navbar";
import Falcon9Render from '../../../assets/images/Rockets/falcon9.png'
import GridCard from "../../layout/grid/InformationCard";
import falcon9Wallpaper from '../../../assets/images/Wallpapers/falcon9_2.jpg'
import falcon9Image from '../../../assets/images/Wallpapers/falcon_9_rocket.jpg'
import falcon9Launch from '../../../assets/images/Wallpapers/falcon_9_launch_2.jpg'
import TechnicalDetailsTable from "../../layout/grid/TechnicalDetailsTable";
import InformationCard from "../../layout/grid/InformationCard";

import CircularProgress from '@material-ui/core/CircularProgress';

export default function VehicleFalcon9() {
    const [error, setError] = useState(null)
    const [isLoaded, setIsLoaded] = useState(false);
    const [rocket, setRocket] = useState([]);

    useEffect(() => {
        fetchSpaceXRockets() 
            async function fetchSpaceXRockets() {
                try {
                    const rockets = "https://api.spacexdata.com/v4/rockets/5e9d0d95eda69973a809d1ec";
                    const rocketsResponse = await fetch(rockets);
                    const rocketData = await rocketsResponse.json();
                    setRocket(rocketData);
                    setIsLoaded(true);
                } catch(error) {
                    setIsLoaded(false);
                    setError(error);
                }
            }
        },[]);
        if(!isLoaded)
        {
            return <div className="loading-progress"> <CircularProgress color="secondary" /></div>
        } else 
        {

    return (
        <div>
            <div className="bg-falcon_9 bg-cover bg-center bg-no-repeat h-100v">
                <Navbar/>
                <div className="text-8xl font-semibold text-white flex flex-col mx-auto justify-center h-90v">
                    <span className="flex items-end justify-center xs:text-center">FALCON 9</span>
                </div>
            </div>
            <div className="h-100v flex flex-row w-full bg-gradient-to-t from-black via-zinc-900 to-black min-h-screen xs:flex  xs:flex-col">
                <div className="flex flex-col justify-center w-screen ml-3 md:flex md:flex-col md:w-screen md:ml-2 sm:w-8/12 xs:ml-0">
                    <div className="text-4xl font-semibold uppercase text-white flex justify-center mb-10 md:flex md:mb-4 xs:mb-0">
                    </div>
                    <div className="text-white flex flex-col items-center justify-center h-60v xs:mt-0">
                        <TechnicalDetailsTable
                            stages={rocket.stages}
                            height={rocket.height.meters + "m" + " | " + rocket.height.feet + "ft"}
                            diameter={rocket.diameter.meters + "m" + " | " + rocket.diameter.feet + "ft"} 
                            mass={(rocket.mass.kg).toLocaleString() + "kg"  + " | " + (rocket.mass.lb).toLocaleString() + "lb"}
                            leo={(rocket.payload_weights[0].kg).toLocaleString()  + "kg" + " | " + (rocket.payload_weights[0].lb).toLocaleString() + "lb"}
                            gto={(rocket.payload_weights[1].kg).toLocaleString() + "kg" + " | " + (rocket.payload_weights[1].lb).toLocaleString() + "lb"}
                            mars={(rocket.payload_weights[2].kg).toLocaleString() + "kg" + " | " + (rocket.payload_weights[2].lb).toLocaleString() + "lb"}
                            image={falcon9Image}
                        />
                    </div>
                </div>
                <div className="flex justify-center w-1/3 md:p-0 md:m-0 md:w-8/12 sm:w-1/5 xs:hidden">
                    <img src={Falcon9Render}
                        alt="falcon9 rocket"
                        className="rocket-side-image">
                    </img>
                </div>
                <div className="flex flex-col justify-around w-screen mr-3 md:flex md:flex-row md:justify-center md:items-center md:w-screen md:mr-2 sm:w-4/6 sm:mr-2 xs:flex xs:pl-5 xs:pr-5">
                    <div>
                        <p className="text-white text-5xl font-semibold uppercase stroke-current">Second Stage</p>
                        <InformationCard 
                            thrust_one={"Thrust"}
                            engines={rocket.second_stage.engines}
                            burntime={rocket.second_stage.burn_time_sec + "s"}
                            thrust_one_info={(rocket.second_stage.thrust.kN).toLocaleString() + "kN"}
                            reusable={"Reuseable"}
                            reusable_stage={rocket.second_stage.reusable + ""}
                        />
                    </div>
                    <div className="relative">
                        <div className="relative z-10">
                            <p className="text-white text-7xl font-light uppercase stroke-current">reliable & safe</p>
                            <p className="text-white max-w-md pb-5">{rocket.description}</p>
                            <a href={rocket.wikipedia} className="text-white uppercase font-semibold hover:text-yellow-500">Read more</a>
                        </div>
                        <img className="rounded-tr-[40px] rounded-bl-[40px] absolute inset-y-0 right-20 -top-10 w-1/2" src={falcon9Launch} />
                    </div>
                    <div>
                        <p className="text-white text-5xl font-semibold uppercase stroke-current">First Stage</p>
                        <InformationCard
                            thrust_one={"Thrust Sea level"}
                            thrust_two={"Thrust Vacuum"}
                            engines={rocket.first_stage.engines}
                            burntime={rocket.first_stage.burn_time_sec + "s"}
                            thrust_one_info={(rocket.first_stage.thrust_sea_level.kN).toLocaleString() + "kN"}
                            thrust_two_info={(rocket.first_stage.thrust_vacuum.kN).toLocaleString() + "kN"}
                            reusable={"Reuseable"}
                            reusable_stage={rocket.first_stage.reusable + ""}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

}
//TODO: Add arrow pointing down on hero page
//TODO: Find better gradient backgrounds for the images