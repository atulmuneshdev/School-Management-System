import React, { useState, useEffect } from 'react'
import SideNav from '../../auth/adminAuth/SideNav'
import { Outlet, useLocation } from 'react-router-dom'
import { MdMenu, MdClose } from 'react-icons/md'

function DasBord() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();

  // Close sidebar on route change (for mobile)
  useEffect(() => {
    setIsSidebarOpen(false);
  }, [location]);

  return (
    <div className='w-screen h-screen flex bg-[#020617] overflow-hidden selection:bg-blue-500/30 font-sans'>

      {/* Mobile Hamburger Button */}
      <button
        onClick={() => setIsSidebarOpen(true)}
        className='lg:hidden fixed top-6 left-6 z-[60] p-3 bg-blue-600 text-white rounded-2xl shadow-xl shadow-blue-600/20 active:scale-95 transition-all'
      >
        <MdMenu size={24} />
      </button>

      {/* Sidebar Overlay (Mobile) */}
      {isSidebarOpen && (
        <div
          className='lg:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-[70] animate-in fade-in duration-300'
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar Container */}
      <div className={`
        fixed lg:relative z-[80] h-full transition-all duration-500 ease-in-out
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        ${isSidebarOpen ? 'w-[280px]' : 'lg:min-w-fit'}
      `}>
        {/* Close Button (Mobile Only) */}
        {isSidebarOpen ? <button
          onClick={() => setIsSidebarOpen(false)}
          className='lg:hidden absolute top-8 right-[-50px] p-2 bg-white/10 text-white rounded-xl backdrop-blur-md border border-white/10'
        >
          <MdClose size={24} className={` `} />
        </button> : ""}

        <SideNav onLinkClick={() => setIsSidebarOpen(false)} />
      </div>

      {/* Main Content Area */}
      <div className='flex-1 h-full flex flex-col relative'>
        <div className='p-8  h-full overflow-y-auto custom-scrollbar '>
          {location.pathname === '/das-bord' || location.pathname === '/das-bord/' ? (
            <div className='w-[100%]  h-full flex flex-col items-center justify-center text-center space-y-8 animate-in zoom-in-95 duration-700'>
              <div className='relative'>
                <div className='absolute -inset-4 bg-blue-600/20 blur-2xl rounded-full animate-pulse'></div>
                <img src="forLargScr.png" alt="Welcome" className='w-96 relative z-10 drop-shadow-2xl' />
              </div>
              <div className='space-y-4'>
                <h2 className='text-5xl font-black text-white tracking-tighter'>Welcome to the School  <span className='bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent'>Management Dashboard.</span></h2>
                <p className='text-gray-400 font-bold text-lg max-w-xl mx-auto'>
                 This centralized platform allows administrators to efficiently manage students, teachers, academic records, and institutional operations. Monitor key activities, track performance, and maintain smooth communication across the entire school system from one secure interface.
                </p>
              </div>
              <div className='flex gap-4'>
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
  )
}

export default DasBord