import React from "react";

export default function MissionReplayCard(props) {
    return (
        <div className="bg-white rounded-bl-xl rounded-br-xl p-5">
            <hr/>
            <div className="flex mt-3 justify-between">
                <div>
                    {props.card_1}
                </div>
                <div>
                    {props.card_2}
                </div>
                <div>
                    {props.card_3}
                </div>
            </div>
        </div>
    )
}