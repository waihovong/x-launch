import React from "react";

function MissionCard({missionName, time, status, flightNumber, rocket, launchPad, missionPatch}) {
    return (
        <div className="container w-fit flex flex-row justify-end p-4 bg-[#1e293b] rounded-md mb-5">
			<div className="flex flex-row pr-4">
				<img className="object-contain h-28 w-48" src={missionPatch} />
			</div>
			<div className="container flex flex-row justify-around">
				<div className="w-64 flex flex-col uppercase">
					<div>
						<label className="font-bold text-gray-300 text-sm">Mission Name</label>
					</div>
					<div>
						<span className="text-white text-lg font-semibold whitespace-normal ...">{missionName}</span>
					</div>
					<div>
						<span className="font-bold text-gray-300 text-sm">Flight</span>
					</div>
					<div>
						<span className="text-white text-lg font-semibold">{flightNumber}</span>
					</div>
				</div>
				<div className="w-64 flexflex-col uppercase">
					<div>
						<span className="font-bold text-gray-300 text-sm">Time (UTC)</span>
					</div>
					<div>
						<span className="text-white text-lg font-semibold">{time}</span>
					</div>
					<div>
						<span className="font-bold text-gray-300 text-sm">Rocket</span>
					</div>
					<div>
						<span className="text-white text-lg font-semibold">{rocket}</span>
					</div>
				</div>
				<div className="w-40 flex flex-col uppercase">
					<div>
						<span className="font-bold text-gray-300 text-sm">status</span>
					</div>
					<div>
						<span>{status}</span>
					</div>
					<div>
						<span className="font-bold text-gray-300 text-sm">launchpad</span>
					</div>
					<div>
						<span className="text-white text-lg font-semibold">{launchPad}</span>
					</div>
				</div>
			</div>
        </div>
    )
}

export default MissionCard;

