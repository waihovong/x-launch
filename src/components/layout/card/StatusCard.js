import React from "react";

export default function StatusCard(props) {
    const isSuccessful = props.isSuccessful;
    if (isSuccessful) {
        return (
            <div className="bg-green-100 rounded-sm w-fit border-solid border-1 border-green-200">
                <div className="text-green-600 font-semibold capitalize text-[13px] text-center px-1.5 md:text-xs sm:text-xs">
                    Successful
                </div>
            </div>
        )
    }
    else if (props.upcoming) {
        return (
            <div className="bg-orange-200 rounded-sm w-fit border-solid border-1 border-orange-200">
                <div className="text-orange-600 font-semibold capitalize text-[13px] text-center px-1.5 md:text-xs sm:text-xs">
                    Upcoming
                </div>
            </div>
        )
    }
    else 
    {
        return (
            <div className="bg-red-200 rounded-sm w-fit border-solid border-1 border-red-200">
                <div className="text-red-500 font-semibold capitalize text-[13px] text-center px-1.5 md:text-xs sm:text-xs">
                    Failure
                </div>
            </div>
        )
    }
}