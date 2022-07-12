import React from 'react';

function UpcomingMission({missionName, missionDetails, flightNumber, missionDate, launchPad}) {
    return (
        <div className='flex justify-around min-h-[80vh] align-center xs:flex xs:flex-col sm:flex sm:flex-col'>
            <div className='flex justify-center flex-col sm:text-center xs:text-center'>
                <h2 className='font-semi uppercase text-xl text-white'>Upcoming Mission</h2>
                <h1 className='font-semibold uppercase text-6xl text-white'>{missionName}</h1>
                <div></div>
                <span className='text-white'>{missionDetails}</span>
            </div>
            <div className='flex justify-center flex-col text-2xl sm:text-center xs:text-center'>
                <h2 className='font-semibold uppercase text-white'>{flightNumber}</h2>
                <h2 className='font-semibold uppercase text-white'>{missionDate}</h2>
                <h2 className='text-white font-semibold'>{launchPad}</h2>
            </div>
        </div>
    );
}

export default UpcomingMission;