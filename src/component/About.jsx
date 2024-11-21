import React from 'react'

function About() {
    return (
        <div id='about'>
            <div className='rounded-lg  py-20 '>
                <div className='md:pl-8'>
                    <div className='bg-gradient-to-r from-[#a454b8] to-[#d58836cd] w-[40px] h-[10px] rounded-lg '></div>
                    <h2 className=' text-orange-400 font-semibold text-[26px] mt-[3px]'>About Us </h2>

                    <div className="mt-4 md:w-[50%]">
                        {/* heading */}
                        <h2 className="text-2xl md:text-4xl font-semibold text-transparent inline-block  bg-gradient-to-r from-[#a246b9ee] via-[#f56025] to-[#ea5317] bg-clip-text">Empowering the future of Finance</h2>

                        {/* paragraph */}
                        <p className="text-sm md:text-4xl text-blue-400 font-normal mt-2">
                            At Uootes Technologies, we're  driven by a vision of a world where financial freedom is a reality for all. As a web3 company, we're  dedicated to empowering individuals and businesses to thrive in a global economy.</p>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row lg:justify-between items-center">
                    <div>

                        <div className="flex mt-[60px] md:pl-8">
                            <div className="bg-gradient-to-t from-[#d58836cd] to-[#a454b8] w-[10px] md:h-[90px] rounded-lg"></div>

                            <h3 className="text-sm md:text-lg text-blue-400 font-normal md:pl-8 pl-2 my-auto md:w-[80%]">Our mission is to ensure cash flow by making earning easy and money borderless.</h3>
                        </div>

                        <div className="flex flex-col md:pl-20 pt-16 text-lg">
                            <div className="flex">
                                <div className="md:pr-4 pt-2">
                                    <img src="./Asset/Group.png" alt="" className='' />
                                </div>
                                <div className="flex flex-col">
                                    <h4 className=" text-[24px] text-[#b88e32b1]">Innovation</h4>
                                    <p className="text-[16px] text-blue-400 font-normal">We believe in pushing the boundaries of what's <br /> possible, leveraging blockchain and other advanced  technologies to develop groundbreaking financial  products and services.</p>
                                </div>
                            </div>

                            <div className="flex flex-row pt-16">
                                <div className="pr-4 pt-2">
                                    <img src="./Asset/Group1.png" alt="" />
                                </div>
                                <div className="flex flex-col">
                                    <h4 className="text-[24px] text-[#b88e32b1]">Inclusion</h4>
                                    <p className="text-[16px] text-blue-400 font-normal">Our solutions are designed to be accessible to all. enterprises can benefit from the new financial lanscape</p>
                                </div>
                            </div>

                            <div className="flex flex-row pt-16">
                                <div className="pr-4 pt-2">
                                    <img src="./Asset/Group 4.png" alt="" />
                                </div>
                                <div className="flex flex-col">
                                    <h4 className="text-[24px] text-[#b88e32b1]">Security</h4>
                                    <p className="text-[16px] text-blue-400 font-normal">Ensuring the highest levels of security for our users' data and transactions is paramount, as we build  systems that are resilent agains threats and vulnerabilities  products and services.</p>
                                </div>
                            </div>
                        </div>
                    </div>


                    <img src='../Asset/intro7.png' alt="" className="" />

                </div>

            </div>
        </div>
    )
}

export default About;