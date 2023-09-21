"use client"
import Input from '@/components/Input'
import CusButton from '@/components/CusButton'
import React from 'react'
import { signup as signupData } from '@/data/regester'
import { useAuth } from '@/context/AuthContext'

const page = () => {

    const { signup, alertN } = useAuth()

    const handlesignup = async (e) => {
        e.preventDefault();
        
        if(e.target.password.value != e.target.Cpassword.value){
            alertN("Password doesn't match.",1)
            return
        }
        signup({
            password: e.target.password.value,
            email: e.target.email.value,
            name: e.target.name.value,
            link: "student"
        });
        // console.log(a)


    };

    return (
        <main className='center'>
            <form action="" className='center flex-col' onSubmit={handlesignup}>
                {
                    signupData.map((e, i) => (
                        <Input data={e} key={i} />
                    ))
                }
                <CusButton text="Login" />
            </form>
        </main>
    )
}

export default page