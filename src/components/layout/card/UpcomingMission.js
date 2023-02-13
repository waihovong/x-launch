import React from 'react';

//Landing page to display upcoming mission details
function UpcomingMission({missionName, missionDetails, flightNumber, missionDate, launchPad}) {
    return (
        <div className='flex justify-around min-h-[80vh] align-center xs:flex xs:flex-col sm:flex sm:flex-col'>
            <div className='flex justify-center flex-col sm:text-center xs:text-center'>
                <h2 className='font-semi uppercase text-xl text-white'>Upcoming Mission</h2>
                <h1 className='font-semibold uppercase text-6xl text-white xs:text-5xl'>{missionName}</h1>
                <span className='text-white'>{missionDetails}</span>
            </div>
            <div className='flex justify-center flex-col text-2xl sm:text-center xs:text-center'>
                <h2 className='font-semibold uppercase text-white'>Flight #{flightNumber}</h2>
                <h2 className='font-semibold uppercase text-white'>{missionDate}</h2>
                <h2 className='text-white font-semibold'>{launchPad}</h2>
            </div>
        </div>
    );
}

export default UpcomingMission;