import React from 'react'

const Input = ({ data }) => {
    return (
        <div className="m-5 relative min-w-[300px] " >
            <input type={data.type} id={data.name} name={data.name} className="shadow-lg block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-1 border-gray-600 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required={data.required} />
            <label htmlFor={data.name} className="absolute text-sm text-gray-500  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">{data.label}</label>
        </div>
    )
}

export default Input