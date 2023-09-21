import Input from '@/components/Input'
import CusButton from '@/components/CusButton'
import React from 'react'
import { login } from '@/data/regester'

const page = () => {
    return (
        <main className='center'>
            <form action="" className='center flex-col'>
                {
                    login.map((e, i) => (
                        <Input data={e} key={i} />
                    ))
                }
                <CusButton text="Login" />
            </form>
        </main>
    )
}

export default page