function LaunchSites({name, locality, region, launchAttempts, launchSuccess, status, imgSrc}) {
    return (
        //TODO: Find better way to get image inside div
            <div className={`container flex flex-row bg-missions-image [background-position-x:53%] py-3 px-2.5 bg-[#1e293b] rounded-md mb-3`}>
                <div className="container flex flex-row">
                    <div className="w-48 flex flex-col uppercase pr-2 mr-1.5">
                        <div>
                            <span className="text-white text-sm font-semibold">{locality}, {region}</span>
                        </div>
                        <div className="-mt-1">
                            <span className="text-white text-xs font-semibold whitespace-normal">{name}</span>
                        </div>
                        <div>
                            <span className="text-white text-sm font-semibold"></span>
                        </div>
                    </div>
                    <div className="w-40 flex flex-col uppercase">
                        <div>
                            <span className="text-white text-sm font-semibold">{status}</span>
                        </div>
                        <div>
                            <span className="font-bold text-gray-400 text-xs">No. Launches</span>
                        </div>
                        <div className="-mt-1">
                            <span className="text-white text-sm font-semibold">{launchSuccess}/{launchAttempts}</span>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default LaunchSites;

