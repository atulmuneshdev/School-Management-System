import React from 'react'
import { FaChalkboardTeacher } from "react-icons/fa";
import { MdSchool } from "react-icons/md";
import { PiStudentFill } from "react-icons/pi";
import { FaStudiovinari } from "react-icons/fa6";
import { PiChalkboardTeacherFill } from "react-icons/pi";
import { useNavigate } from 'react-router-dom';







function AuthPage() {
    const icon = [{ id: 1, icons: <FaChalkboardTeacher size={35} /> },
    { id: 2, icons: <MdSchool size={35} /> },
    { id: 3, icons: <PiStudentFill size={35} /> }
    ]

    const navigate = useNavigate()
    return (
        <div className='h-[100dvh] bg-gradient-to-t from-green-300 to-blue-200 overflow-y-auto'>
            <div className='h-full'>
                <p className='text-center py-4 bg-green-100 rounded-br-2xl rounded-bl-2xl font-bold shadow-2xl transition-all duration-200 lg:hidden md:hidden'> 
                    <span className='text-lg text-green-700'>Sign</span> in to manage your <span className='text-lg text-blue-500'>academic</span> activities
                </p>

                <div className='flex flex-col items-center justify-center min-h-[90%] gap-8 py-10 lg:hidden md:hidden'>
                    {/* ------admin---- */}
                    <div className='box-animate gap-4 h-52 w-[85%] backdrop-blur-2xl bg-white/20 shadow-xl flex flex-col items-center justify-center rounded-3xl border border-white/30'>
                        <div className='flex gap-4 text-blue-600'>
                            <FaChalkboardTeacher size={25} />
                            <MdSchool size={25} />
                            <PiStudentFill size={25} />
                        </div>
                        <p className='text-center text-sm font-bold text-gray-800 px-4'>Manage your school system securely.</p>
                        <button 
                        onClick={()=>navigate("/admin-login")}
                        className='font-black bg-gradient-to-l from-green-400 to-blue-200 px-8 py-3 rounded-2xl shadow-lg active:scale-95 transition-all'>Admin Login</button>
                    </div>

                    {/* ----------teacher--------- */}
                    <div className='box-animate gap-4 h-52 w-[85%] backdrop-blur-2xl bg-white/20 shadow-xl flex flex-col items-center justify-center rounded-3xl border border-white/30'>
                        <p className='text-center text-sm font-bold text-gray-800 px-4'>Guide students, track progress, and manage classes efficiently</p>
                        <button onClick={()=>navigate('/teacher-login')}
                        className='font-black bg-gradient-to-l from-green-400 to-blue-200 px-8 py-3 rounded-2xl shadow-lg flex gap-3 items-center justify-center active:scale-95 transition-all'> 
                            <FaChalkboardTeacher size={22} />Teacher Portal
                        </button>
                    </div>

                    {/* -----------student-------------- */}
                    <div className='box-animate gap-4 h-52 w-[85%] backdrop-blur-2xl bg-white/20 shadow-xl flex flex-col items-center justify-center rounded-3xl border border-white/30'>
                        <p className='text-center text-sm font-bold text-gray-800 px-4'>View your classes, attendance, and academic progress.</p>
                        <button onClick={()=>navigate('/student-login')} 
                        className='font-black bg-gradient-to-l from-green-400 to-blue-200 px-8 py-3 rounded-2xl shadow-lg flex gap-3 items-center justify-center active:scale-95 transition-all'> 
                            <PiStudentFill size={22} />Student Portal
                        </button>
                    </div>
                    <p className='text-center w-[90%] mx-auto bg-gradient-to-l from-green-500 to-blue-900 bg-clip-text text-transparent text-xl font-black italic'>Study today, succeed tomorrow.</p>
                </div>

                {/* large screen */}
                <div className='h-full relative flex flex-col justify-center hidden lg:flex md:flex'>
                    <div className='h-80 w-full bg-gradient-to-t from-pink-300/40 absolute top-0 rounded-b-[100px] shadow-2xl -z-10'></div>
                    <div className='flex flex-col items-center py-20 gap-8'>
                        <div className='flex flex-col items-center space-y-2' >
                            <h1 className='font-black text-4xl text-center text-gray-800 tracking-tight'>Welcome to School Hub</h1>
                            <p className='font-bold text-xl text-blue-600'>Secure access for administrators, teachers, and students.</p>
                        </div>
                        <div className="flex gap-12">
                            {icon.map((items) => (
                                <div
                                    key={items.id}
                                    className="text-gray-700 transform hover:scale-125 transition-all duration-300 hover:text-blue-600 cursor-default"
                                >
                                    {items.icons}
                                </div>
                            ))}
                        </div>


                        <div className='flex gap-8 items-center justify-center mt-10'>
                            {/* ------------ adimn---------- */}
                            <div className='group cursor-pointer h-72 w-64 flex flex-col justify-center items-center rounded-[40px] bg-white/30 backdrop-blur-md border border-white/50 shadow-2xl hover:bg-white/50 transition-all duration-500'>
                                <div className='mb-6 p-4 bg-blue-100 rounded-3xl text-blue-600 group-hover:scale-110 transition-transform duration-500'>
                                    <FaStudiovinari size={50} />
                                </div>
                                <div className='flex flex-col items-center justify-center gap-4 px-4'>
                                    <p className='text-center text-sm font-bold text-gray-700'>Manage your school system securely.</p>
                                    <button 
                                    onClick={()=>navigate("/admin-login")}
                                    className='font-black bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-3 rounded-2xl shadow-lg hover:shadow-blue-500/40 active:scale-95 transition-all'>
                                        Admin Login
                                    </button>
                                </div>
                            </div>

                            {/* ----------teacher--------- */}
                            <div className='group cursor-pointer h-72 w-64 flex flex-col justify-center items-center rounded-[40px] bg-white/30 backdrop-blur-md border border-white/50 shadow-2xl hover:bg-white/50 transition-all duration-500'>
                                <div className='mb-6 p-4 bg-emerald-100 rounded-3xl text-emerald-600 group-hover:scale-110 transition-transform duration-500'>
                                    <PiChalkboardTeacherFill size={50} />
                                </div>
                                <div className='flex flex-col items-center justify-center gap-4 px-4'>
                                    <p className='text-center text-sm font-bold text-gray-700'>Guide students and manage your classes.</p>
                                    <button onClick={()=>navigate('/teacher-login')} 
                                    className='font-black bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-3 rounded-2xl shadow-lg hover:shadow-emerald-500/40 active:scale-95 transition-all'>
                                        Teacher Portal
                                    </button>
                                </div>
                            </div>

                            {/* --------student------------ */}
                            <div className='group cursor-pointer h-72 w-64 flex flex-col justify-center items-center rounded-[40px] bg-white/30 backdrop-blur-md border border-white/50 shadow-2xl hover:bg-white/50 transition-all duration-500'>
                                <div className='mb-6 p-4 bg-pink-100 rounded-3xl text-pink-600 group-hover:scale-110 transition-transform duration-500'>
                                    <PiStudentFill size={50} />
                                </div>
                                <div className='flex flex-col items-center justify-center gap-4 px-4'>
                                    <p className='text-center text-sm font-bold text-gray-700'>View your academic progress.</p>
                                    <button onClick={()=>navigate('/student-login')}
                                     className='font-black bg-gradient-to-r from-pink-600 to-rose-600 text-white px-8 py-3 rounded-2xl shadow-lg hover:shadow-pink-500/40 active:scale-95 transition-all'>
                                        Student Portal
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-col items-center mt-12 pb-10'>
                        <p className='text-center w-[90%] mx-auto bg-gradient-to-l from-green-600 to-blue-900 bg-clip-text text-transparent text-xl font-black italic'>Study today, succeed tomorrow.</p>
                        <div className='w-32 h-1 bg-gradient-to-r from-green-500 to-blue-500 rounded-full my-6 opacity-30'></div>
                        <p className='text-center w-[90%] mx-auto text-gray-500 text-xs font-bold uppercase tracking-widest'>
                            © 2026 School Management System | Developed by Atul Munesh | All Rights Reserved.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AuthPage