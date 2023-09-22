"use client"
import CusButton from '@/components/CusButton'
import Hr from '@/components/Hr'
import Input from '@/components/Input'
import { useAuth } from '@/context/AuthContext'
import React, { useEffect } from 'react'

const page = () => {
    const { dissertationUpload, studentStatus, stStatus } = useAuth()

    useEffect(() => {
        if (!stStatus) {
            studentStatus()
        }
    }, [])




    const handleBulk = async (e) => {
        e.preventDefault();
        // let a = await link.Login
        dissertationUpload({
            file: e.target.file.files[0],
        });
        // console.log(a)
    };

    return (
        <main className='center flex-col'>
            <h1 className='font-medium text-xl tracking-wide'>Add Dissertation file {stStatus && `for "${stStatus.title}"`}</h1>
            <form action="" className='mb-10 center flex-col' onSubmit={handleBulk}>
                <Input data={
                    {
                        type: "file",
                        label: "Dissertation pdf",
                        name: "file",
                        required: true,
                    }
                } />
                <CusButton text="Upload Dissertation" />
            </form>
        </main>
    )
}

export default page