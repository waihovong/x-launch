import React from "react";

export default function MissionDetailCard(props) {
    return (
        <div className={`${props.background} grid grid-rows-2 grid-flow-col gap-x-7 rounded-lg p-2 text-sm uppercase`}>
            <div className="grid">
                <span className="text-slate-400">
                    {props.label_one}
                </span>
                <span className="font-semibold text-white">
                    {props.label_one_description}
                </span>
            </div>
            <div className="grid">
                <span className="text-slate-400">
                    {props.label_two}
                </span>
                <span className="font-semibold text-white">
                    {props.label_two_description}
                </span>
            </div>
            <div className="grid">
                <span className="text-slate-400">
                    {props.label_three}
                </span>
                <span className="font-semibold text-white">
                    {props.label_three_description}
                </span>
            </div>
            <div className="grid">
                <span className="text-slate-400">
                    {props.label_four}
                </span>
                <span className="font-semibold text-white">
                    {props.label_four_description}
                </span>
            </div>
            <div className="grid right-0">
                <span className="text-slate-400">
                    {props.label_five}
                </span>
                <span className="font-semibold text-white">
                    {props.label_five_description}
                </span>
            </div>
            <div className="grid right-0">
                <span className="text-slate-400">
                    {props.label_six}
                </span>
                <span className="font-semibold text-white">
                    {props.label_six_description}
                </span>
            </div>
        </div>
    )
}