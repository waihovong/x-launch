import React from "react";

function MissionCard({missionName, time, status, flightNumber, rocket, launchPad, flightPatch}) {
    return (
        <div className="container">
            <div className="image">

            </div>
            <div className="grid grid-cols-3 gap-8">
                <div className="uppercase bg-gray-400">
                    Mission Name
                    <div className="bg-white">
                        {missionName}
                    </div>
                </div>
                <div className="uppercase">
                    Time (UTC)
                    <div>
                        {time}
                    </div>
                </div>
                <div className="uppercase">
                    Status
                    <div>
                        {status}
                    </div>
                </div>
                <div>04</div>
                <div>05</div>
                <div>06</div>
                <div>07</div>
                <div>08</div>
                <div>09</div>
            </div>
        </div>
    )
}

export default MissionCard;