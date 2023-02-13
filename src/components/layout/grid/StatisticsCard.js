export default function StatsCard(props) {
    return (
        <div className="text-3xl grid grid-cols-3 gap-x-10 md:text-2xl md:flex md:flex-row md:justify-around sm:text-xl xs:text-sm">
            <div className="flex flex-col justify-center md:flex md:flex-col ">
                <span className="text-center">{props.title_left}</span>
                <span className="text-center mt-3">{props.statistic_left}</span>
            </div>
            <div className="flex flex-col justify-center">
                <span>{props.title_center}</span>
                <span className="text-center mt-3">{props.statistic_center}</span>
            </div>
            <div className="flex flex-col justify-center">
                <span>{props.title_right}</span>
                <span className="text-center mt-3">{props.statistic_right}</span>
            </div>
        </div>
    )
}