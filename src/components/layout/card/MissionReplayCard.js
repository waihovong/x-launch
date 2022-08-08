import React, { useState } from "react";

export default function MissionReplayCard(props) {
    const [isOpened, setIsOpened] = useState(false);
    return (
        <div className="bg-white rounded-bl-xl rounded-br-xl p-5">
            <div className="flex flex-row">
                <div className={`uppercase font-bold text-2xl mr-10 ${!isOpened ? "text-black" : "text-slate-400"}`}>
                    <button className="uppercase" onClick={() => setIsOpened(!isOpened)} disabled={!isOpened}>{props.mission_details}</button>
                </div>
                {/* TODO: Add icons and wikipedia links in between here */}
                <div className={`uppercase font-bold text-2xl ${ isOpened ? "text-black" : "text-slate-400"}`}>
                    <button className="uppercase" onClick={() => setIsOpened(!isOpened)} disabled={isOpened}>{props.gallery}</button>
                </div>
            </div>
            <hr/>
            {!isOpened && 
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
            }
            {isOpened && 
                <div className="mt-5 w-full justify-evenly grid gap-1 grid-cols-5 grid-flow-row ">{props.gallery_images}</div>
            }
        </div>
    )
}