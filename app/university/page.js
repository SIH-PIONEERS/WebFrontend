"use client"
import BigButton from '@/components/BigButton'
import Nav from '@/components/Nav'
import React, { useEffect, useState } from 'react'
import { useAuth } from '@/context/AuthContext'

const page = () => {
    const { list, listFetch } = useAuth()
    useEffect(() => {
        listFetch();
    }, [])

    const nav = [
        {
            link: "/university/add",
            text: "Add Colleges"
        },
    ]
    return (
        <main >
            <Nav data={nav} />
            <h1 className='text-3xl font-bold indent-10 drop-shadow-xl m-5' >Allied Colleges</h1>
            <div className='center flex-col'>
                {
                    list.map((e, i) => (
                        <BigButton key={i} text={e.Name} />
                    ))
                }
            </div>
        </main>
    )
}

export default page