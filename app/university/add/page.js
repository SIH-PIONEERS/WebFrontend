import CusButton from '@/components/CusButton'
import Hr from '@/components/Hr'
import Input from '@/components/Input'
import React from 'react'

const page = () => {
    return (
        <main className='center flex-col'>
            <h1 className='font-medium text-xl tracking-wide'>Add Colleges from Excel file</h1>
            <form action="" className='mb-10 center flex-col'>
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
            <form action="" className='center flex-col'>
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