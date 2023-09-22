import BigButton from '@/components/BigButton'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <main className='center flex-col'>
      <BigButton text={"University"} link={"/university/login"} />
      <BigButton text={"College"} link={"/college/login"} />
      <BigButton text={"Student"} link={"/student/login"} />
    </main>
  )
}

export default page