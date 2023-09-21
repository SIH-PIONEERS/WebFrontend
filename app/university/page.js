import BigButton from '@/components/BigButton'
import React from 'react'

const page = () => {
    const clg = [
        "Meerut Institute of Engineering and Technology",
        "Savita Devi Mahavidyalaya.",
        "MD Paramedical & Hotel Management Institute.",
        "Carrier Education Consultancy.",
        "Aryavart Group Of Educational Institutions.",
        "SR FOUNDATION JEE COLLEGE OF EDUCATION AND TRAINING.",
        "Balram Group Of Institution.",
        "G Singh Degree College & Law College."
    ]
    return (
        <main >
            <h1 className='text-3xl font-bold indent-10 drop-shadow-xl m-5' >Allied Colleges</h1>
            <div className='center flex-col'>
                {
                    clg.map((e, i) => (
                        <BigButton key={i} text={e} />
                    ))
                }
            </div>
        </main>
    )
}

export default page