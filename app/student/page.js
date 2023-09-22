"use client"
import BigButton from '@/components/BigButton'
import Nav from '@/components/Nav'
import React, { useEffect, useState } from 'react'
import { useAuth } from '@/context/AuthContext'

const page = () => {
    const nav = [
        {
            link: "/student/title",
            text: "Add title"
        },
        {
            link: "/student/dissertation",
            text: "Add Dissertation"
        },
    ]

    return (
        <main >
            <Nav data={nav} />
            <h1 className='text-3xl font-bold indent-10 drop-shadow-xl m-5' >Progress Report:</h1>
            <div className='center flex-col'>
                {/* {
                    list.map((e, i) => (
                        <BigButton key={i} text={e.Name} />
                    ))
                } */}
            </div>
        </main>
    )
}

export default page