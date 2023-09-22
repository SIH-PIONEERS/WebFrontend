"use client"
import CusButton from '@/components/CusButton'
import Hr from '@/components/Hr'
import Input from '@/components/Input'
import { useAuth } from '@/context/AuthContext'
import React from 'react'

const page = () => {
    const { addSingle, addBulk } = useAuth()

    const handleBulk = async (e) => {
        e.preventDefault();
        // let a = await link.Login
        addBulk({
            file: e.target.file.files[0],
            link: "collegeworking/addstudent/bulk"
        });
        // console.log(a)
    };

    const handleSingle = async (e) => {
        e.preventDefault();
        // let a = await link.Login
        addSingle({
            "name": e.target.clgName.value,
            "email": e.target.clgEmail.value,
            "link": "collegeworking/addstudent"
        });
        // console.log(a)
    };

    return (
        <main className='center flex-col'>
            <h1 className='font-medium text-xl tracking-wide'>Add Student from Excel file</h1>
            <form action="" className='mb-10 center flex-col' onSubmit={handleBulk}>
                <Input data={
                    {
                        type: "file",
                        label: "Excel file",
                        name: "file",
                        required: true,
                    }
                } />
                <CusButton text="Add Students" />
            </form>
            <Hr text="Or" />
            <h1 className='font-medium text-xl tracking-wide mt-10'>Add Student Manually</h1>
            <form action="" className='center flex-col' onSubmit={handleSingle}>
                <Input data={
                    {
                        type: "text",
                        label: "Student Name",
                        name: "clgName",
                        required: true,
                    }} />
                <Input data={
                    {
                        type: "email",
                        label: "Student Email",
                        name: "clgEmail",
                        required: true,
                    }} />
                <CusButton text="Add Student" />
            </form>
        </main>
    )
}

export default page