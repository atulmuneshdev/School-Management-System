import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import TeacherSideNave from './TeacherSideNave'
import { FaSchool } from 'react-icons/fa'

function TeacherDasbord() {
  const location = useLocation()
  
  return (
    <div className='w-screen h-screen flex bg-[#020617] overflow-hidden selection:bg-blue-500/30 font-sans'>
      {/* Sidebar - fixed width */}
      <div className='w-[280px] h-full flex-shrink-0'>
        <TeacherSideNave />
      </div>

      {/* Main Content Area */}
      <div className='flex-1 h-full flex flex-col relative'>
        {/* Decorative gradient overlay */}
        <div className='absolute top-0 right-0 w-1/2 h-1/2 bg-blue-600/10 blur-[120px] rounded-full -mr-20 -mt-20 -z-10 pointer-events-none'></div>
        <div className='absolute bottom-0 left-0 w-1/3 h-1/3 bg-indigo-600/10 blur-[100px] rounded-full -ml-20 -mb-20 -z-10 pointer-events-none'></div>

        {/* Top Header Section */}
        <header className='px-8 py-4 bg-white/5 border-b border-white/10 flex items-center justify-between backdrop-blur-md z-10'>
          <div className='flex items-center gap-4 group cursor-pointer'>
            <div className='w-12 h-12 bg-gradient-to-tr from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/30 group-hover:rotate-12 transition-transform duration-500'>
              <FaSchool className='text-white' size={24} />
            </div>
            <div className='animate-in slide-in-from-left-4 duration-700'>
              <h1 className='text-2xl font-black text-white tracking-tight leading-none'>EXCELLENCE INTERNATIONAL <span className='text-blue-400'>SCHOOL</span></h1>
              <p className='text-[10px] font-black text-gray-500 uppercase tracking-[0.3em] mt-1'>Shaping Future Leaders</p>
            </div>
          </div>

          <div className='flex items-center gap-6'>
            <div className='flex flex-col items-end'>
              <span className='text-xs font-bold text-gray-400 uppercase tracking-widest'>Current Session</span>
              <span className='text-sm font-black text-white'>2026 - 2027</span>
            </div>
            <div className='w-px h-8 bg-white/10'></div>
            <img 
              src="l-image.png" 
              alt="School Logo" 
              className='w-10 h-10 object-contain animate-bounce hover:animate-none transition-all duration-300' 
            />
          </div>
        </header>

        <div className='p-8 h-full overflow-y-auto custom-scrollbar'>
          {location.pathname === '/teacher-dasbord' || location.pathname === '/teacher-dasbord/' ? (
            <div className='w-full h-full flex flex-col items-center justify-center text-center space-y-8 animate-in zoom-in-95 duration-700'>
              <div className='relative'>
                <div className='absolute -inset-4 bg-blue-600/20 blur-2xl rounded-full animate-pulse'></div>
                <img src="forLargScr.png" alt="Welcome" className='w-96 relative z-10 drop-shadow-2xl' />
              </div>
              <div className='space-y-4'>
                <h2 className='text-5xl font-black text-white tracking-tighter'>Welcome to the <span className='bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent'>Teacher Hub</span></h2>
                <p className='text-gray-400 font-bold text-lg max-w-xl mx-auto'>
                  Access your classes, manage attendance, and update syllabus content from your personal management suite.
                </p>
              </div>
              <div className='flex gap-4'>
                <div className='px-6 py-3 bg-white/5 rounded-2xl border border-white/10 text-blue-400 font-bold text-sm uppercase tracking-widest'>
                  Secure Portal Access
                </div>
                <div className='px-6 py-3 bg-blue-600/20 rounded-2xl border border-blue-500/30 text-white font-bold text-sm uppercase tracking-widest'>
                  Teacher ID: #T-9001
                </div>
              </div>
            </div>
          ) : (
            <Outlet />
          )}
        </div>
      </div>
    </div>
  )
}

export default TeacherDasbord

