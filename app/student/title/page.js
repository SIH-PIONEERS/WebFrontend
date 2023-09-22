"use client"
import CusButton from '@/components/CusButton'
import Hr from '@/components/Hr'
import Input from '@/components/Input'
import { useAuth } from '@/context/AuthContext'
import React from 'react'

const page = () => {
    const { titleUpload } = useAuth()

    const handleSingle = async (e) => {
        e.preventDefault();
        // let a = await link.Login
        titleUpload({
            "title": e.target.title.value,
        });
        // console.log(a)
    };

    return (
        <main className='center flex-col'>
            <h1 className='font-medium text-xl tracking-wide mt-10'>Add Title </h1>
            <form action="" className='center flex-col' onSubmit={handleSingle}>
                <Input data={
                    {
                        type: "text",
                        label: "Title",
                        name: "title",
                        required: true,
                    }} />
                <CusButton text="Add Title" />
            </form>
        </main>
    )
}

export default page