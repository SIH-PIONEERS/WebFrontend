import React from 'react'

const CusButton = ({ text }) => {
    return (
        <button type="submit" className=" bg-indigo-500 shadow-lg shadow-indigo-500/50 hover:shadow-indigo-800/50  min-w-[150px] m-5 text-white hover:bg-indigo-800  font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 active:scale-75   hover:shadow-xl transition ease-in-out delay-50  hover:-translate-y-1 hover:scale-110  duration-300">{text}</button>
    )
}

export default CusButton