import React from "react";
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import backgroundImages from "../../../../src/assets/images/Wallpapers/dragon.jpg"

function MissionCard({missionName, time, status, flightNumber, rocket, launchPad, flightPatch}) {
    return (
        <div className="container w-fit flex flex-row mx-auto p-4 bg-sky-900 rounded-md mb-5">
			<div className="flex flex-row pr-4">
				<img className="object-cover h-28 w-42" src={backgroundImages} />
			</div>
			<div className="container flex flex-row justify-around">
				<div className="w-64 flex flex-col uppercase">
					<div>
						<label className="font-semibold text-gray-200">Mission Name</label>
					</div>
					<div>
						{/* <span>{missionName}</span> */}
						<span className="text-white text-lg font-semibold whitespace-normal ...">{missionName}</span>
					</div>
					<div>
						<span className="font-semibold text-gray-200">Flight</span>
					</div>
					<div>
						{/* <span>{flightNumber}</span> */}
						<span className="text-white text-lg font-semibold">{flightNumber}</span>
					</div>
				</div>
				<div className="w-64 flexflex-col uppercase">
					<div>
						<span className="font-semibold text-gray-200">Time (UTC)</span>
					</div>
					<div>
						{/* <span>{missionName}</span> */}
						<span className="text-white text-lg font-semibold">{time}</span>
					</div>
					<div>
						<span className="font-semibold text-gray-200">Rocket</span>
					</div>
					<div>
						{/* <span>{flightNumber}</span> */}
						<span className="text-white text-lg font-semibold">{rocket}</span>
					</div>
				</div>
				<div className="w-40 flex flex-col uppercase">
					<div>
						<span className="font-semibold text-gray-200">status</span>
					</div>
					<div>
						{/* <span>{missionName}</span> */}
						<span>{status}</span>
					</div>
					<div>
						<span className="font-semibold text-gray-200">launchpad</span>
					</div>
					<div>
						{/* <span>{flightNumber}</span> */}
						<span className="text-white text-lg font-semibold">{launchPad}</span>
					</div>
				</div>
			</div>
        </div>
    )
}

export default MissionCard;

