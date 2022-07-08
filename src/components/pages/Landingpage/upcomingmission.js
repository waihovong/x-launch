import React from 'react';

export default function UpcomingMission({missionName, missionDetails, flightNumber, missionDate, launchpad}) {
    return (
        <div className='flex justify-around'>
            <div className='flex justify-center flex-col h-80v'>
                <h2 className='font-semi uppercase text-xl text-white'>Upcoming Mission</h2>
                <h1 className='font-semibold uppercase text-6xl text-white'>{missionName}</h1>
                <div></div>
                <span className='text-white'>{missionDetails}</span>
            </div>
            <div className='flex justify-center flex-col h-80v text-2xl'>
                <h2 className='font-semibold uppercase text-white'>{flightNumber}</h2>
                <h2 className='font-semibold uppercase text-white'>{missionDate}</h2>
                <h2 className='text-white'>{launchpad}</h2>
            </div>
        </div>
    );
}
