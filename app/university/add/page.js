"use client"
import CusButton from '@/components/CusButton'
import Hr from '@/components/Hr'
import Input from '@/components/Input'
import { useAuth } from '@/context/AuthContext'
import React from 'react'

const page = () => {
    const { addSingleClg_Uni, addBulkClg_Uni } = useAuth()

    const handleBulk = async (e) => {
        e.preventDefault();
        // let a = await link.Login
        addBulkClg_Uni({
            file: e.target.file.files[0]
        });
        // console.log(a)
    };

    const handleSingle = async (e) => {
        e.preventDefault();
        // let a = await link.Login
        addSingleClg_Uni({
            "collegeName": e.target.clgName.value,
            "collegeEmail": e.target.clgEmail.value
        });
        // console.log(a)
    };

    return (
        <main className='center flex-col'>
            <h1 className='font-medium text-xl tracking-wide'>Add Colleges from Excel file</h1>
            <form action="" className='mb-10 center flex-col' onSubmit={handleBulk}>
                <Input data={
                    {
                        type: "file",
                        label: "Excel file",
                        name: "file",
                        required: true,
                    }
                } />
                <CusButton text="Add Colleges" />
            </form>
            <Hr text="Or" />
            <h1 className='font-medium text-xl tracking-wide mt-10'>Add College Manually</h1>
            <form action="" className='center flex-col' onSubmit={handleSingle}>
                <Input data={
                    {
                        type: "text",
                        label: "College Name",
                        name: "clgName",
                        required: true,
                    }} />
                <Input data={
                    {
                        type: "email",
                        label: "College Email",
                        name: "clgEmail",
                        required: true,
                    }} />
                <CusButton text="Add College" />
            </form>
        </main>
    )
}

export default page