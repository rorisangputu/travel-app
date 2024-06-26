import Image from 'next/image'
import React from 'react'
import camp from '../public/camp.svg';
import meter from '../public/meter.svg';
import boat from '../public/boat.png';

const Guide = () => {
    return (
        <section className="flexCenter flex-col">
            <div className=' padding-container max-container
                w-full pb-24'>
                <Image src={camp} alt='camp' width={50} height={50} />
                <p className='uppercase'>
                    We are here for you
                </p>
                <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
                    <h2 className="bold-40 lg:bold-64 xl:max-w-[390px]">Guiding You To The Easy Path</h2>
                    <p>
                        With the Hilink application, you will no longer get lost,
                        even without an Internet connection, because we support offline maps.
                        Invite your friends and relatives to have fun in the wilderness,
                        traverse valleys, and reach mountain peaks.
                    </p>
                </div>
            </div>
            <div className='flexCenter max-container relative w-full'>
                <Image
                    src={boat}
                    alt='boat'
                    height={1440}
                    width={580}
                    className='w-full object-cover object-center 2xl:rounded-5xl'
                />
                <div className='absolute flex bg-white py-8 pl-5 pr-7
                    gap-3 rounded-3xl border shadow-md md:left-[5%] lg:top-20'>
                    <Image src={meter}
                        alt='meter'
                        width={16}
                        height={158}
                        className='h-full w-auto'
                    />
                    <div className="flexBetween flex-col">
                        <div className="flex w-full flex-col">
                            <div className='flexBetween w-full'>
                                <p className='regular-16 text-gray-20'>Destination</p>
                                <p className='bold-16 text-green-50'>48 min</p>
                            </div>
                            <p className='bold-20 mt-2'>Mahai Campsite</p>
                        </div>
                        <div className="flex w-full flex-col">
                            <p className='regular-16 text-gray-20'>Start Track</p>

                            <h4 className='bold-20 mt-2'>Royal Natal National Park</h4>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Guide