import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import utLogo from '../../assets/utlogo.png';
// import { Link } from 'react-router-dom';
import { menuList } from "../../constant/index_euex";

const Navbar2 = ({ selectedMenu, setSelectedMenu }) => {
    const [isMenuOpen, setIsMenuOpen] = useState();
    // const [userMenu]

    const toggle = () => {
        if(isMenuOpen){
            setIsMenuOpen(false);
        } else{
            setIsMenuOpen(true);
        }
    }

    const handleClick = () => {
        if(!isMenuOpen) return;

        setIsMenuOpen(false);
    }

  return (
    <div className='bg-gradient-to-r from-blue-900 to-black shadow-blue-900 h-screen'>

        <div className="border border-r- h-20 w-full" >
            <div className='fixed top-0 flex right-0 text-white p-6 flex-row border-b-slate-800'>
                {/* Mobile Menu Button */}
                <div className="md:hidden px-8">
                    <button
                        onClick={toggle}
                        className="text-gray-300 hover:text-purple-400"
                        aria-label="Toggle"
                        aria-expanded={isMenuOpen}
                    >
                        {isMenuOpen ? (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                            ) : (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                l                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )}
                    </button>
                </div>

                {/* <div>
                    <img src={utLogo} alt="" />
                </div> */}
                
                {/* {walletMenu.map((nav) => (
                    <div key={nav.name} className=''>
                        <span className='a' style={{ color: nav.name === selectedMenu ? '#FC2360' : '#FEfEEF', marginRight: '2px'}}>
                            <a href="">{nav.icon}</a>
                        </span>
                        <span className='' style={{ opacity: nav.name === selectedMenu ? '1' : '0.8', marginRight: '15px'  }}>
                            <a href=''>{nav.name}</a>
                        </span>
                    </div>
                    // <a className='px-6 hover:text-purple-400'>
                    //     {nav.name}
                    // </a>
                ))} */}
            </div>
        </div>

        <div className='hidden md:fixed border border-r-black border-t-0 top-3 left-0 h-screen w-48 justify-start bg-gradient-to-r  from-black to-blue-800 md:flex flex-col'>
            <div className='mx-6 w-6 '>
                {menuList.map((item) => (
                    <button
                        className='px-4 py-4 flex flex-row border rounded-lg leading-4 mb-2.5'
                        onClick={() => setSelectedMenu(item.name)}
                        style={{
                            background: item.name === selectedMenu && '#FC1503' ,
                            // border: "2px solid #4e4e4e",
                            color: 'white'
                        }}
                        key={item.name}
                    >
                        <span className='' style={{ color: item.name === selectedMenu ? '#FC2360' : '#FEfEEF', marginRight: '15px'}}>{item.icon}</span>
                        <span className='' style={{ opacity: item.name === selectedMenu ? '1' : '0.8'  }}>{item.name}</span>
                    </button>
                ))}
            </div>
        </div>

        {isMenuOpen && (
            <div className='md:hidden fixed flex flex-col leading-6 top-20 h-screen px-10 font-bold bg-gradient-to-r  from-black to-blue-800 '>
            {menuList.map((item) => (
                <button
                    className='flex flex-row justify-start py-4 mb-1'
                    onClick={() => setSelectedMenu(item.name)}
                        style={{
                            background: item.name === selectedMenu && '#FC1503' ,
                            // border: "2px solid #4e4e4e",
                            color: 'white'
                        }}
                        key={item.name}
                >
                    <span className='color-white'>{item.icon}</span>
                    <span className='hover:opacity-45 '>{item.name}</span>
                </button>
            ))}
        </div>
        )}

    </div>
  )
}

export default Navbar2