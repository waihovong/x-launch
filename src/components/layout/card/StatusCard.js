import React from "react";

export default function StatusCard(props) {
    const isSuccessful = props.isSuccessful;
    if (isSuccessful) {
        return (
            <div className="bg-green-200 rounded-md w-fit">
                <div className="text-green-600 font-semibold capitalize text-[14px] text-center px-1.5 pt-0.5">
                    Successful
                </div>
            </div>
        )
    }
    else 
    {
        return (
            <div className="bg-red-200 rounded-md w-fit">
                <div className="text-red-500 font-semibold capitalize text-[14px] text-center px-1.5 pt-0.5">
                    Failure
                </div>
            </div>
        )
    }
}