import React from "react";

function MissionCardCompact({missionName, time, status, flightNumber, rocket, launchPad, missionPatch}) {
    return (
        <div className="container max-w-2xl flex flex-row justify-end p-2 bg-[#1e293b] rounded-md mb-3 md:max-w-md xs:mb-1 bg-gradient-to-t from-gray-900 via-gray-900 to-slate hover:from-gray-700 to-black">
			<div className="flex md:hidden xs:h-fit xs:w-fit">
				<img className="flex object-contain h-28 w-52 xs:h-16 xs:w-28" src={missionPatch} />
			</div>
			<div className="container flex flex-row justify-around xs:grid xs:grid-cols-3 ">
				<div className="grid w-60 uppercase md:w-44 xs:w-16">
					<div >
						<label className="font-bold text-gray-300 text-sm md:text-xs sm:text-xs xs:text-xs xs:hidden">Mission Name</label>
					</div>
					<div className="xs:w-20">
						<span className="text-white text-lg font-semibold whitespace-normal md:text-sm sm:text-sm xs:text-xs xs:flex xs:break-normal xs:w-11/12">{missionName}</span>
					</div>
                    <div>
						<span className="font-bold text-gray-300 text-sm md:text-xs sm:text-xs xs:text-xs xs:hidden">Flight</span>
					</div>
					<div className="">
						<span className="text-white text-lg font-semibold md:text-sm sm:text-sm xs:text-xs">{flightNumber}</span>
					</div>
				</div>
				<div className="grid w-36 uppercase md:w-36 xs:w-20">
					<div>
						<span className="text-white text-lg font-semibold md:text-sm sm:text-sm xs:text-xs xs:w-10/12">{rocket}</span>
					</div>
					<div className="xs:flex">
						<span className="text-white text-lg font-semibold md:text-sm sm:text-sm xs:text-xs">{time}</span>
					</div>
                    <div>
						<span className="xs:hidden">{status}</span>
					</div>
				</div>
			</div>
        </div>
    )
}

export default MissionCardCompact;

