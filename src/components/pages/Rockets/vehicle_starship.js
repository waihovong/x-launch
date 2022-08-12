import React, { useState, useEffect } from "react";
import StatsCard from "../../layout/grid/StatisticsCard";
import Navbar from "../../layout/navigation/Navbar/Navbar";
import StarshipRender from '../../../assets/images/Rockets/starship_ren_high.png'
import starship_1 from '../../../assets/images/Wallpapers/starship_wall_1.jpg'
import starship_3 from '../../../assets/images/Wallpapers/starship_wall_3.jpg'
import TechnicalDetailsTable from "../../layout/grid/TechnicalDetailsTable";
import InformationCard from "../../layout/grid/InformationCard";

import CircularProgress from '@material-ui/core/CircularProgress';

export default function VehicleStarship() {
    const [error, setError] = useState(null)
    const [isLoaded, setIsLoaded] = useState(false);
    const [rocket, setRocket] = useState([]);

    useEffect(() => {
        fetchSpaceXRockets() 
            async function fetchSpaceXRockets() {
                try {
                    const rockets = "https://api.spacexdata.com/v4/rockets/5e9d0d96eda699382d09d1ee";
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
        } else {
    return (
        <div>
            <div className="bg-starship_hero_4 bg-cover bg-center bg-no-repeat h-100v">
                <Navbar/>
                <div className="text-8xl font-semibold text-white flex flex-col mx-auto justify-center h-90v">
                    <span className="flex items-end justify-center xs:text-center text-white">STARSHIP</span>
                </div>
            </div>
            <div className="h-100v flex flex-row w-full bg-gradient-to-t from-black via-zinc-900 to-black min-h-screen xs:flex  xs:flex-col">
                <div className="flex flex-col justify-center w-screen ml-3 md:flex md:flex-col md:w-screen md:ml-2 sm:w-8/12 xs:ml-0">
                    <div className="text-white flex flex-col items-center justify-center h-60v xs:mt-0">
                        <TechnicalDetailsTable
                            stages={rocket.stages}
                            height={rocket.height.meters + "m" + " | " + rocket.height.feet + "ft"}
                            diameter={rocket.diameter.meters + "m" + " | " + rocket.diameter.feet + "ft"} 
                            mass={(rocket.mass.kg).toLocaleString() + "kg"  + " | " + (rocket.mass.lb).toLocaleString() + "lb"}
                            leo={(rocket.payload_weights[0].kg).toLocaleString()  + "kg" + " | " + (rocket.payload_weights[0].lb).toLocaleString() + "lb"}
                            gto={(rocket.payload_weights[1].kg).toLocaleString() + "kg" + " | " + (rocket.payload_weights[1].lb).toLocaleString() + "lb"}
                            mars={(rocket.payload_weights[2].kg).toLocaleString() + "kg" + " | " + (rocket.payload_weights[2].lb).toLocaleString() + "lb"}
                            image={starship_3}
                        />
                    </div>
                </div>
                <div className="flex justify-center w-1/2 h-auto items-center md:p-0 md:m-0 md:w-8/12 sm:w-1/5 xs:hidden">
                    <img src={StarshipRender}
                        alt="falcon9 rocket"
                        className="rocket-side-image w-11/12">
                    </img>
                </div>
                <div className="flex flex-col justify-around w-screen mr-3 ml-8 md:flex md:flex-row md:justify-center md:items-center md:w-screen md:mr-2 sm:w-4/6 sm:mr-2 xs:flex xs:pl-5 xs:pr-5">
                    <div>
                        <p className="text-white text-5xl font-semibold uppercase stroke-current">Second Stage</p>
                        <InformationCard 
                            thrust_one={"Thrust"}
                            engines={rocket.second_stage.engines}
                            burntime={rocket.second_stage.burn_time_sec ? rocket.second_stage.burn_time_sec : "-"}
                            thrust_one_info={(rocket.second_stage.thrust.kN).toLocaleString() + "kN"}
                            reusable={"Reuseable"}
                            reusable_stage={rocket.second_stage.reusable + ""}
                        />
                    </div>
                    <div className="relative">
                        <div className="relative z-10">
                            <p className="text-white text-5xl font-light uppercase stroke-current max-w-3xl">Designed for Crew and Cargo</p>
                            <p className="text-white max-w-sm pb-5">{rocket.description}</p>
                            <a href={rocket.wikipedia} className="text-white uppercase font-semibold hover:text-yellow-500">Read more</a>
                        </div>
                        <img className="rounded-tr-[40px] rounded-bl-[40px] absolute inset-y-0 right-20 top-20 w-1/2 opacity-80" src={starship_1} />
                    </div>
                    <div>
                        <p className="text-white text-5xl font-semibold uppercase stroke-current">First Stage</p>
                        <InformationCard
                            thrust_one={"Thrust Sea level"}
                            thrust_two={"Thrust Vacuum"}
                            engines={rocket.first_stage.engines}
                            burntime={rocket.first_stage.burn_time_sec ? rocket.first_stage.burn_time_sec : "-"}
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