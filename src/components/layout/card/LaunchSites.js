function LaunchSites({name, locality, region, launchAttempts, launchSuccess, status}) {
    return (
        //TODO: Find better way to get image inside div
            <div className={`container flex flex-row bg-cover bg-launch_site_2 py-2 px-2.5 bg-[#1e293b] rounded-md mb-2  sm:max-w-xl`}>
                <div className="container flex flex-row md:flex md:flex-col sm:max-w-xs">
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
                            <span className="font-bold text-orange-400 text-xs">No. Launches</span>
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

//TODO: use imgSrc to class and add Id to it, check if ID's are incremental in map or unique, then add the exact same className to tailwindconfig
//FIXME: This doesn't work properly with tailwind see: https://tailwindcss.com/docs/content-configuration#dynamic-class-names