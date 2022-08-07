export default function MissionDetailCard(props) {
    return (
        <div className="bg-white rounded-tl-xl rounded-tr-xl p-5">
            <div className="flex flex-row justify-between items-center">
                <div className="">
                    <span className="font-semibold text-3xl"><span className="text-lg uppercase text-slate-600">Mission: </span>{props.mission_name}</span>
                </div>
                <div className="">
                    <span className="font-semibold text-3xl"><span className="text-lg uppercase text-slate-600">Flight: </span>{props.flight_number}</span>
                </div>
                <div className="">
                    {props.mission_status}
                </div>
                {/* Add mission patch */}
            </div>
        </div>
    )
}