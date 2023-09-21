import Link from 'next/link'
import React from 'react'
import { BiSolidBuildings } from 'react-icons/bi';

const BigButton = ({ text }) => {
    return (
        <Link href='' type="submit" className="border shadow-lg w-[80vw] m-5 text-gray-700 hover:text-black  font-medium rounded-lg text-md px-5 py-2.5 active:scale-[.99] hover:shadow-xl transition ease-in-out delay-50  hover:-translate-y-1 hover:scale-[1.01]  duration-300 flex items-center"><BiSolidBuildings className='border rounded-full center p-2 m-2 w-auto text-md h-auto ' />{text}</Link>
    )
}

export default BigButton