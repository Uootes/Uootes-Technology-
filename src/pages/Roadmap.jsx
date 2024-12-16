import React from 'react';
import '../App.css';

const Roadmap = () => {
    return (
        <div className='pt-20 mx-10  md:p-12' id='roadmap'>

            <div>
                <div className='bg-gradient-to-r from-[#a454b8] to-[#d58836cd] w-[40px] h-[10px] rounded-lg'></div>

                <h2 className=' text-orange-400 font-semibold text-[26px] mt-[3px]'>
                    Roadmap
                </h2>
            </div>

            {/* roadmap details */}
            <div className='w-full mt-8'>
                <div className='flex w-full md:justify-end'>
                    {/* numbering */}
                    <div className='w-[20%] h-[20%] md:w-[60px] md:h-[60px] border-[3px] border-blue-800 rounded-full p-1 md:mx-8 mx-2'>

                        <div className='w-full h-full rounded-full md:rounded-full flex justify-center items-center bg-blue-800 text-white'>01</div>

                    </div>

                    <div className="md:p-6  p-2 rounded-xl border-all md:w-[45%] sm:w-full w-full">

                        <div className=''>
                            <h2 className='text-white text-[22px] font-semibold'>PHASE 1</h2>

                            <div className='bg-blue-800 w-[25%] md:w-[10%] h-[5px] rounded-lg'></div>
                        </div>

                        <p className='flex flex-col text-white text-md font-normal md:m-8 m-2'>Initial Idea generation and developement of the project's foundation. </p>

                    </div>

                </div>

                {/* second roadmap */}
                <div className='flex w-[full] mt-8'>

                    <div className="md:p-6 p-2 rounded-xl borderall md:w-[45%] w-full">

                        <div className=''>
                            <h2 className='text-white text-[22px] font-semibold'>PHASE 2</h2>

                            <div className='bg-[#2821aec0] w-[25%] md:w-[10%] h-[5px] rounded-lg'></div>
                        </div>

                        <p className='text-white text-md font-normal md:m-8 m-2'>Beta launch and testing of the platform to ensure stability and functionality. </p>

                    </div>
                    {/* numbering */}
                    <div className='w-[20%] h-[20%] md:w-[60px] md:h-[60px] border-[3px] border-[#2821aec0] rounded-full p-1 md:mx-8 mx-2'>

                        <div className='w-full h-full rounded-full flex justify-center items-center bg-[#2821aec0] text-white'>02</div>

                    </div>
                </div>

                {/* third roadmap */}
                <div className='flex w-full md:justify-end mt-8'>
                    {/* numbering */}
                    <div className='w-[20%] h-[20%] md:w-[60px] md:h-[60px] border-[3px] border-[#6340c2] rounded-full p-1 md:mx-8 mx-2'>

                        <div className='w-full h-full rounded-full flex justify-center items-center bg-[#6340c2] text-white'>03</div>

                    </div>

                    <div className="md:p-6 p-2 rounded-xl border-all md:w-[45%] w-full">

                        <div className=''>
                            <h2 className='text-white text-[22px] font-semibold'>PHASE 3</h2>

                            <div className='bg-gradient-to-r from-[#a454b8] to-[#6340c2] w-[25%] md:w-[10%] h-[5px] rounded-lg'></div>
                        </div>

                        <p className='text-white text-md font-normal md:m-8 m-2'>Pre-sale of CPT tokens to early adopters and investors. </p>

                    </div>

                </div>

                {/* fourth roadmap */}
                <div className='flex w-full mt-8'>

                    <div className="md:p-6 p-2 rounded-xl borderall md:w-[45%] w-full">

                        <div className=''>
                            <h2 className='text-white text-[22px] font-semibold'>PHASE 4</h2>

                            <div className='bg-gradient-to-r from-[#a454b8] to-[#d58836cd] w-[25%] md:w-[10%] h-[5px] rounded-lg'></div>
                        </div>

                        <p className='text-white text-md font-normal md:m-8 m-2'>Launch of the Uootes wallet mobile app, enabling users to manage their finances on-the-go. </p>

                    </div>
                    {/* numbering */}
                    <div className='w-[20%] h-[20%] md:w-[60px] md:h-[60px] border-[3px] border-[#8e459b] rounded-full p-1 md:mx-8 mx-2'>

                        <div className='w-full h-full rounded-full flex justify-center items-center bg-[#8e459b] text-white'>04</div>

                    </div>
                </div>

                {/* fifth roadmap */}
                <div className='flex w-full md:justify-end mt-8'>
                    {/* numbering */}
                    <div className='w-[20%] h-[20%] md:w-[60px] md:h-[60px] border-[3px] border-blue-300 rounded-full p-1 md:mx-8 mx-2'>

                        <div className='w-full h-full rounded-full flex justify-center items-center bg-blue-300 text-white'>05</div>

                    </div>

                    <div className="md:p-6 p-2 rounded-xl border-all md:w-[45%] w-full">

                        <div className=''>
                            <h2 className='text-white text-[22px] font-semibold'>PHASE 5</h2>

                            <div className='bg-blue-300 w-[25%] md:w-[10%] h-[5px] rounded-lg'></div>
                        </div>

                        <p className='text-white text-md font-normal md:m-8 m-2'>Launch of Uootes use cases products and introduction of the Uootes gas fee, providing users with real-life applications and a seamless transaction experience. </p>

                    </div>

                </div>

                {/* sixth roadmap */}
                <div className='flex w-full mt-8'>

                    <div className="md:p-6 p-2 rounded-xl borderall md:w-[45%] w-full">

                        <div className=''>
                            <h2 className='text-white text-[22px] font-semibold'>PHASE 6</h2>

                            <div className='bg-orange-300 w-[25%] md:w-[10%] h-[5px] rounded-lg'></div>
                        </div>

                        <p className='text-white text-md font-normal md:m-8 m-2'>Establishment of partnerships with institutions and commercial entities, expanding the reach and adoption of Uootes technologies.</p>

                    </div>
                    {/* numbering */}
                    <div className='w-[20%] h-[20%] md:w-[60px] md:h-[60px] border-[3px] border-orange-300 rounded-full p-1 md:mx-8 mx-2'>

                        <div className='w-full h-full rounded-full flex justify-center items-center bg-orange-300 text-white'>06</div>

                    </div>
                </div>
                {/* seventh roadmap */}
                <div className='flex w-full mt-8 md:justify-end'>
                    {/* numbering */}
                    <div className='w-[20%] h-[20%] md:w-[60px] md:h-[60px] border-[3px] border-pink-600 rounded-full p-1 md:mx-8 mx-2'>

                        <div className='w-full h-full rounded-full flex justify-center items-center bg-pink-600 text-white'>07</div>

                    </div>
                    <div className="md:p-6 p-2 rounded-xl border-all md:w-[45%] w-full">

                        <div className=''>
                            <h2 className='text-white text-[22px] font-semibold'>PHASE 7</h2>

                            <div className='bg-pink-600 w-[25%] md:w-[10%] h-[5px] rounded-lg'></div>
                        </div>

                        <p className='text-white text-md font-normal md:m-8 m-2'>Launch of the Uootes game show, a interactive and engaging experience for users to earn, connect and be entertained.</p>

                    </div>

                </div>

            </div>

        </div>

    )
}

export default Roadmap;