import React from 'react'

type Props = {}

const Hero = (props: Props) => {
    const ContentStyle = "text-white drop-shadow-md font-bold"
    const CardStyle = "w-64 h-96 rounded-xl py-2.5 px-4 my-4 mx-3.5 bg-center bg-cover transition duration-150 hover:translate-x-6 hover:cursor-pointer"

    return (
        <section className='sec'>
            <div className='border-black w-full max-w-7xl mx-auto flex items-center justify-around'>
                <div>
                    <h1 className='text-white text-8xl font-bold'>MovieHub</h1>
                    <p className='text-white text-base leading-8'>Watch exciting and amazing movies</p>
                    <button className='w-40 rounded-3xl p-2 mt-4 bg-gradient-to-r from-black to-red-800 text-white hover:bg-gradient-to-r hover:from-red-800 hover:to-black'>Explore</button>
                </div>
                <div className='grid grid-cols-2'>
                    <div className={`${CardStyle} card1`}>
                        <h1 className={`${ContentStyle}`}>Avarter</h1>
                        <p className={`${ContentStyle}`}>May 23rd 2023</p>
                    </div>
                    <div className={`${CardStyle} card2`}>
                        <h1 className={`${ContentStyle}`}>Avarter</h1>
                        <p className={`${ContentStyle}`}>May 23rd 2023</p>
                    </div>
                    <div className={`${CardStyle} card3`}>
                        <h1 className={`${ContentStyle}`}>Avarter</h1>
                        <p className={`${ContentStyle}`}>May 23rd 2023</p>
                    </div>
                    <div className={`${CardStyle} card4`}>
                        <h1 className={`${ContentStyle}`}>Avarter</h1>
                        <p className={`${ContentStyle}`}>May 23rd 2023</p>
                    </div>
                </div>
            </div >
        </section >
    )
}

export default Hero