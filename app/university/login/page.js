"use client"
import Input from '@/components/Input'
import CusButton from '@/components/CusButton'
import React from 'react'
import { login as loginData} from '@/data/University'
import { useAuth } from '@/context/AuthContext'

const page = () => {

    const { login } = useAuth()

    const handlelogin = async (e) => {
        e.preventDefault();
        // let a = await link.Login
        login({
            password: e.target.password.value,
            email: e.target.email.value,
            link: "uni",
        });
        // console.log(a)


    };

    return (
        <main className='center'>
            <form action="" className='center flex-col' onSubmit={handlelogin}>
                {
                    loginData.map((e, i) => (
                        <Input data={e} key={i} />
                    ))
                }
                <CusButton text="Login" />
            </form>
        </main>
    )
}

export default page