import React from 'react'

function Footer() {
    return (
        <footer className="bg-[#0a2540] py-8">
            <div className="container mx-auto px-4 flex flex-wrap justify-center md:justify-between items-center">
                <div className="w-full md:w-1/4 mb-6 md:mb-0 text-center md:text-left">
                    {/* <a href="">
                        <img src='./src/assets/utlogo.png' className='w-20 mx-auto md:mx-0' alt='uootes-logo' />
                    </a> */}
                    <a href="#home">
                        <img src="./src/assets/utlogo.png" alt="" className="w-[10em] h-10 mr-2" /> {/* h-8 mr-2 */}
                    </a>
                </div>

                <div className="w-full md:w-3/4 flex flex-wrap justify-between items-start">
                    <div className="w-full md:w-1/3 mb-6 md:mb-0 text-center md:text-left">
                        <h2 className='text-white text-lg font-bold mb-2'>Quick Links</h2>
                        <ul className="text-gray-300 text-base">
                            <li className="pb-2 hover:text-purple-400">
                                <a href="#home">Home</a>
                            </li>
                            <li className="pb-2 hover:text-purple-400">
                                <a href="#about">About</a>
                            </li>
                            <li className="pb-2 hover:text-purple-400">
                                <a href="#services">Services</a>
                            </li>
                            <li className="pb-2 hover:text-purple-400">
                                <a href="#contact">Contact</a>
                            </li>
                            <li className="pb-2 hover:text-purple-400">
                                <a href="#faq">FAQ</a>
                            </li>
                        </ul>
                    </div>
                    <div className="w-full md:w-1/3 mb-6 md:mb-0 text-center md:text-left">
                        <h2 className='text-white text-lg font-bold mb-2'>Follow Us</h2>
                        <div className="flex flex-wrap justify-center md:justify-start">
                            <a href=" https://www.facebook.com/expowerh.o.w?mibextid=ZbWKwL">
                                <img src="./src/assets/face.png" alt="Facebook" className="w-8 h-8 mx-2 my-2" />
                            </a>

                            <a href="https://www.instagram.com/uootes_tech?igsh=OGQ5ZDc2ODk2ZA==">
                                <img src="./src/assets/ints.png" alt="Instagram" className="w-8 h-8 mx-2 my-2" />
                            </a>

                            <a href="https://x.com/Uootes_tech?t=8UyvLaIGCF83Ys_VZmS53w&s=09">
                                <img src="./src/assets/Twitter_Icon.png" alt="Twitter" className="w-8 h-8 mx-2 my-2" />
                            </a>

                            <a href="https://t.me/uootes_tech">
                                <img src="./src/assets/tele.png" alt="Telegram" className="w-8 h-8 mx-2 my-2" />
                            </a>
{/* C:\Users\PC\Desktop\New folder (2)\Tech\uootes-app\public\Asset\atlassian.png */}
                            <a href="https://www.youtube.com/channel/UCpgpQIGgdLjFYS0JBA60EMA">
                                <img src="./src/assets/youbue.png" alt="YouTube" className="w-8 h-8 mx-2 my-2" />
                            </a>
                        </div>
                    </div>

                    <div className="w-full md:w-1/3 mb-6 md:mb-0 text-center md:text-left">
                        <h2 className='text-white text-lg font-bold mb-2'>Contact Us</h2>
                        <div className="flex flex-col items-center md:items-start space-y-2">
                            <div className="flex items-center py-3">
                                <img src='./src/assets/call.png' alt="Call" className="w-6 h-6 mr-2" />
                                <a href="tel:+2348117740077">
                                    <span className="text-gray-300">+234 8117 740 077</span>
                                </a>

                            </div>

                            <div className="flex items-center">
                                <img src='./src/assets/me.png' alt="Email" className="w-6 h-6 mr-2" />
                                <a href="mailto:uootes@gmail.com">
                                    <span className="text-gray-300">uootes@gmail.com</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full text-center mt-6">
                <p className="text-gray-400">© 2024 UOOTES TECHNOLOGIES. All Rights Reserved.</p>
            </div>
        </footer>
    )
}

export default Footer;