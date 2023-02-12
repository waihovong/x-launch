export default function InformationCard(props) {
    return (
        <div className="text-white text-xl font-semibold max-w-lg grid grid-rows-2 grid-flow-col">
            <div className="grid pb-1">
                <span className="text-lg font-light uppercase">Engines</span>
                <span>{props.engines}</span>
            </div>
            <div className="grid">
                <span className="text-lg font-light uppercase">{props.thrust_one}</span>
                <span>{props.thrust_one_info}</span>
            </div>
            <div className="grid pb-1">
                <span className="text-lg font-light uppercase">Burn time</span>
                <span>{props.burntime}</span>
            </div>
            <div className="grid">
                <span className="text-lg font-light uppercase">{props.thrust_two}</span>
                <span>{props.thrust_two_info}</span>
            </div>
            <div className="grid">
                <span className="text-lg font-light uppercase">{props.reusable}</span>
                <span className="uppercase">{props.reusable_stage}</span>
            </div>
        </div>
    )    
}