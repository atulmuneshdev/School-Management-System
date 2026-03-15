import React, { useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import StudentSideNave from './StudentSideNave'
import { MdMenu, MdClose, MdSchool } from 'react-icons/md'

function StudentDasBord() {

  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const location = useLocation()

  const isHome =
    location.pathname === '/student-Dasbord' ||
    location.pathname === '/student-Dasbord/'

  return (
    <div className='w-screen h-[100dvh] flex flex-col md:flex-row bg-[#020617] overflow-hidden selection:bg-blue-500/30 font-sans'>

      {/* Mobile Top Header */}
      <header className='md:hidden h-[60px] bg-[#0f172a] border-b border-white/5 px-6 flex items-center justify-between z-[60]'>
        <div className='flex items-center gap-3'>
          <div className='w-8 h-8 bg-gradient-to-tr from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center shadow-lg shadow-blue-500/20'>
            <MdSchool size={20} className='text-white' />
          </div>

          <h2 className='text-sm font-black text-white uppercase tracking-tighter'>
            Student Portal
          </h2>
        </div>

        <button
          onClick={() => setIsSidebarOpen(true)}
          className='p-2 text-gray-400 hover:text-white transition-colors'
        >
          <MdMenu size={28} />
        </button>
      </header>

      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div
          className='md:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-[70] animate-in fade-in duration-300'
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar Drawer */}
      <div
        className={`
        fixed md:relative top-0 left-0 h-full w-[280px] z-[80] transition-transform duration-500 ease-out transform
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
        md:flex-shrink-0
      `}
      >

        {/* Mobile Close Button */}
        <button
          onClick={() => setIsSidebarOpen(false)}
          className='md:hidden absolute top-6 right-6 p-2 text-gray-400 hover:text-white z-10'
        >
          <MdClose size={28} />
        </button>

        <StudentSideNave onLinkClick={() => setIsSidebarOpen(false)} />
      </div>

      {/* Main Content */}
      <div className='flex-1 h-[calc(100dvh-60px)] md:h-full flex flex-col relative'>

        {/* Decorative Background */}
        <div className='absolute top-0 right-0 w-1/2 h-1/2 bg-blue-600/5 blur-[120px] rounded-full -mr-20 -mt-20 -z-10 pointer-events-none'></div>
        <div className='absolute bottom-0 left-0 w-1/3 h-1/3 bg-indigo-600/5 blur-[100px] rounded-full -ml-20 -mb-20 -z-10 pointer-events-none'></div>

        <div className='flex-1 h-full flex flex-col relative'>

          <div className='p-8 h-full overflow-y-auto custom-scrollbar'>

            {isHome ? (

              <div className='w-full h-full flex flex-col items-center justify-center text-center space-y-8 animate-in zoom-in-95 duration-700'>

                {/* Image */}
                <div className='relative'>
                  <div className='absolute -inset-4 bg-blue-600/20 blur-2xl rounded-full animate-pulse'></div>

                  <img
                    src="/bag.png"
                    alt="Welcome"
                    className='lg:w-80 w-40 relative z-10 drop-shadow-2xl'
                  />
                </div>

                {/* Text */}
                <div className='space-y-4'>
                  <h2 className='lg:text-5xl text-xl font-black text-white tracking-tighter'>
                    Welcome to the School
                    <span className='bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent'>
                      {" "}Management Dashboard
                    </span>
                  </h2>

                  <p className='text-gray-400 font-bold lg:text-lg text-sm max-w-xl mx-auto'>
                    This centralized platform allows students to view their
                    academic records, results, notices, and activities.
                    Stay updated with your school performance and important
                    announcements through one secure digital portal.
                  </p>
                </div>

                {/* Info Boxes */}
                <div className='flex flex-wrap justify-center gap-4'>

                  <div className='px-6 py-3 bg-white/5 rounded-2xl border border-white/10 text-blue-400 font-bold text-sm uppercase tracking-widest'>
                    Secure Portal Access
                  </div>

                  <div className='px-6 py-3 bg-blue-600/20 rounded-2xl border border-blue-500/30 text-white font-bold text-sm uppercase tracking-widest'>
                    School ID: #A-1001
                  </div>

                </div>

              </div>

            ) : (
              <Outlet />
            )}

          </div>
        </div>
      </div>
    </div>
  )
}

export default StudentDasBord