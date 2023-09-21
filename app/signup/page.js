import Input from '@/components/Input'
import CusButton from '@/components/CusButton'
import React from 'react'
import { signup } from '@/data/regester'

const page = () => {
    return (
        <main className='center'>
            <form action="" className='center flex-col'>
                {
                    signup.map((e, i) => (
                        <Input data={e} key={i} />
                    ))
                }
                <CusButton text="Sign Up" />
            </form>
        </main>
    )
}

export default page