import Image from "next/image"

export function CaseStudiesAnimated() {
    return (
        <div className="text-center mx-auto  pb-18 px-24 w-full  mt-24">
            {/* <h1 className="text-7xl font-editorial font-thin ">
                Features
            </h1> */}

            <div className="flex mt-24 justify-center w-full">
                <div className='w-[300px] h-[470px] border mt-0 hover:p-2  hover:-translate-y-10 transition-all duration-500 ease-in-out relative group' >
                    <div className='h-full pt-4 pb-4 px-12 hover:bg-[#F5A3A3]  hover:rounded-2xl transition-all duration-500 ease-in-out flex flex-col justify-between'>
                        <Image alt='girl' className='absolute group-hover:hidden w-full h-auto left-0 mx-auto ' width={290} height={200} src='/newgirl.png' />
                        <div className="z-10 text-left flex flex-col justify-end h-full pb-7 mt-auto relative bottom-0 items-end justify-self-end justify-items-end ">
                            <h3 className="text-3xl font-medium transition-all duration-500 ease-in-out">AI Matchmaking</h3>
                            <p className="text-sm mt-4 opacity-0 max-h-0 overflow-hidden group-hover:opacity-100 group-hover:max-h-96 transition-all duration-500 ease-in-out">
                                Our AI finds matches on deep compatibility, not just swipes
                            </p>
                        </div>
                    </div>
                </div>
                <div className='-ml-[1px] w-[300px] h-[470px] border mt-24 hover:p-2 hover:-translate-y-10 transition-all duration-500 ease-in-out relative group'>
                    <div className='h-full pt-4 pb-4 px-12 hover:bg-[#F8C794] hover:rounded-2xl transition-all duration-500 ease-in-out flex flex-col justify-between'>
                        <Image
                            alt='Global Community'
                            className='absolute group-hover:hidden w-full h-auto left-0 mx-auto'
                            width={290}
                            height={200}
                            src='/download.png'
                        />
                        <div className='z-10 text-left flex flex-col justify-end h-full pb-7 mt-auto relative bottom-0 items-end'>
                            <h3 className='text-3xl font-medium transition-all duration-500 ease-in-out'>
                                Global Community
                            </h3>
                            <p className='text-sm mt-4 opacity-0 max-h-0 overflow-hidden group-hover:opacity-100 group-hover:max-h-96 transition-all duration-500 ease-in-out'>
                                Connect with Muslims worldwide through shared values and meaningful connections.
                            </p>
                        </div>
                    </div>
                </div>

                <div className='-ml-[1px] w-[300px] h-[470px] border mt-12 hover:p-2 hover:-translate-y-10 transition-all duration-500 ease-in-out relative group'>
                    <div className='h-full pt-4 pb-4 px-12 hover:bg-[#A7D8DE] hover:rounded-2xl transition-all duration-500 ease-in-out flex flex-col justify-between'>
                        <Image
                            src='/nowValue.webp'
                            width={290}
                            height={200}
                            alt='Value-Based'
                            className='absolute group-hover:hidden w-full h-auto left-0 mx-auto'
                        />
                        <div className='z-10 text-left flex flex-col justify-end h-full pb-7 mt-auto relative bottom-0 items-end'>
                            <h3 className='text-3xl font-medium transition-all duration-500 ease-in-out'>
                                Value-Based
                            </h3>
                            <p className='text-sm mt-4 opacity-0 max-h-0 overflow-hidden group-hover:opacity-100 group-hover:max-h-96 transition-all duration-500 ease-in-out'>
                                We prioritize your beliefs, goals, and emotional compatibility.
                            </p>
                        </div>
                    </div>
                </div>

                <div className='-ml-[1px] w-[300px] h-[470px] border hover:p-2 hover:-translate-y-10 transition-all duration-500 ease-in-out relative group'>
                    <div className='h-full pt-4 pb-4 px-12 hover:bg-[#CBB7F6] hover:rounded-2xl transition-all duration-500 ease-in-out flex flex-col justify-between'>
                        <Image
                            src='/valueBased.png'
                            width={290}
                            height={200}
                            alt='Psychological Frameworks'
                            className='absolute group-hover:hidden w-full h-auto left-0 mx-auto'
                        />
                        <div className='z-10 text-left flex flex-col justify-end h-full pb-7 mt-auto relative   bottom-0 items-end'>
                            <h3 className='text-3xl font-medium transition-all duration-500 ease-in-out'>
                                Psychological Frameworks
                            </h3>
                            <p className='text-sm mt-4 opacity-0 max-h-0 overflow-hidden group-hover:opacity-100 group-hover:max-h-96 transition-all duration-500 ease-in-out'>
                                Built using science-backed personality and compatibility models.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}