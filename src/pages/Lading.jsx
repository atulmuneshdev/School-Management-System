import React from 'react'
// import BgforLanding from '../components/BgforLanding'
import { useNavigate } from 'react-router-dom'

function Lading() {
    const navigate = useNavigate()
    return (
        <div className='bg-gradient-to-t from-blue-300 to-blue-200 h-[100dvh] overflow-hidden scroll-hidden'>
            {/* small screen  */}
            <div className=' bg-[url("landing-bg.png")] lg:bg-none bg-cover bg-center h-[100dvh] relative lg:hidden md:hidden'>
                <div className=' backdrop-blur-sm bg-white/20 h-[99dvh] '>

                    <div className=' flex flex-col items-center justify-center absolute m-2 h-[98dvh]'>
                        <img src="l-image.png" alt="" className='duration-700' />
                        <p className=' text-center font-light text-sm shadow-lg rounded-2xl  p-2 shadow-amber-50/20 bg-amber-50/20'>A <span className=' font-bold text-red-600'> School Management System </span> (SMS) is a software application used to manage and automate the daily operations of a school.</p>

                        <div className=' h-[48%] w-[100%] flex flex-col justify-center items-center gap-3 '>
                            <div className=' h-[60%] w-[95%] bg-gradient-to-b from-blue-100/30  to-blue-300  rounded-2xl shadow-2xl hover:shadow-amber-200/30 flex flex-row'>
                                <img src="l-box.png" alt="" />

                                <div className=' flex flex-col items-center justify-center'>
                                    <p className=' text-xs text-center '>It reduces paperwork and improves communication between school staff and students.</p>
                                    <button onClick={()=>navigate('/auth-page')}
                                     className=' bg-gradient-to-r from-green-300 to-blue-400 px-4 py-2 rounded-lg text-sm font-bold m-2 shadow-lg '>Get Started</button>
                                </div>

                            </div>
                            <p className=' text-center font-bold text-sm bg-blue-300/60 rounded-2xl p-2 shadow-xl'>It helps administrators, teachers, students, and parents to manage academic activities efficiently.</p>


                        </div>

                    </div>



                </div>


            </div>

            {/* large screen */}

            <div className=' h-[100dvh] hidden md:block lg:block relative'>
                <div className=' h-90 w-90  rounded-tr-[100%] bg-gradient-to-t from-green-300/60 to-green-200/60 absolute mt-[48dvh] overflow-hidden shadow-xl '></div>
                <div className=' h-90 w-90  rounded-bl-[100%] ml-[171dvh] bg-gradient-to-t from-green-300/60 to-green-200/60 absolute shadow-xl animate-pulse'></div>
                <p className=' text-center font-bold text-[20px] shadow-lg rounded-2xl  p-2 shadow-amber-50/10 bg-amber-50/20 py-4 '>A <span className=' font-bold text-red-600 text-2xl font-serif'> School Management System </span> (SMS) is a software application used to manage and automate the daily operations of a school.</p>

                <div className=' w-[100%] h-[100%] flex flex-row items-center justify-center gap-6'>

                    <div className='w-[100%] relative'>
                        <img src="forLargScr.png" alt="" className='box-animate h-[50%] ' />

                    </div>
                    <div className=' w-[100%]  flex flex-col justify-center items-center gap-5'>
                        <p className="text-center w-[90%] mx-auto bg-gradient-to-l from-green-500 to-blue-900 bg-clip-text text-transparent text-2xl font-bold">
                            Transforming school administration with technology.
                            Manage students, teachers, classes, and academic data easily.
                        </p>
                        

                        <div  onClick={()=>navigate('/auth-page')}
                        className=' flex justify-center items-center font-bold cursor-pointer h-12  w-[40%] rounded-xl bg-gradient-to-l from-green-200 to-blue-100 shadow-xl hover:shadow-white/20 transition-all active:scale-95'>
                        Get Started

                        </div>

                    </div>
                </div>


            </div>


        </div>
    )
}

export default Lading