import React from 'react'
import CusButton from './CusButton'
import Link from 'next/link'

const Nav = ({ data }) => {
    return (
        <div className='w-full min-h-[60px] flex flex-wrap'>
            {
                data.map((e, i) => (

                    <Link href={e.link} key={i}><CusButton text={e.text} /></Link>
                ))
            }
        </div>
    )
}

export default Nav