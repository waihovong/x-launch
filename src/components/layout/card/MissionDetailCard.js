import React from "react";

export default function MissionDetailCard(props) {
    return (
        <div className={`${props.background} grid grid-rows-2 grid-flow-col rounded-lg p-2 gap-x-1 mx-1 text-sm uppercase bg-cover bg-no-repeat bg-center`}>
            <div className="grid grid-flow-row">
                <span className="text-slate-200 font-semibold">
                    {props.label_one}
                </span>
                <span className="font-semibold text-white">
                    {props.label_one_description}
                </span>
            </div>
            <div className="grid grid-flow-row">
                <span className="text-slate-200 font-semibold">
                    {props.label_two}
                </span>
                <span className="font-semibold text-white">
                    {props.label_two_description}
                </span>
            </div>
            <div className="grid grid-flow-row">
                <span className="text-slate-200 font-semibold">
                    {props.label_three}
                </span>
                <span className="font-semibold text-white">
                    {props.label_three_description}
                </span>
            </div>
            <div className="grid grid-flow-row">
                <span className="text-slate-200 font-semibold">
                    {props.label_four}
                </span>
                <span className="font-semibold text-white text-xs">
                    {props.label_four_description}
                </span>
            </div>
            <div className="grid grid-flow-row">
                <span className="text-slate-200 font-semibold">
                    {props.label_five}
                </span>
                <span className="font-semibold text-white">
                    {props.label_five_description}
                </span>
            </div>
            <div className="grid grid-flow-row">
                <span className="text-slate-200 font-semibold">
                    {props.label_six}
                </span>
                <span className="font-semibold text-white">
                    {props.label_six_description}
                </span>
            </div>
        </div>
    )
}