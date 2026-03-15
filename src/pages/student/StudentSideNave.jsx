import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import {
  MdDashboard, MdPerson, MdCalendarToday, MdAssignment,
  MdMonetizationOn, MdLogout, MdSchool, MdMenuBook,
  MdCalendarMonth, MdKeyboardArrowRight
} from 'react-icons/md'
import { FaGraduationCap } from 'react-icons/fa'

function StudentSideNave({ onLinkClick }) {
  const location = useLocation()
  const navigate = useNavigate()

  const navGroups = [
    {
      title: 'General',
      links: [
        { name: 'Dashboard', path: '/student-Dasbord/home', icon: <MdDashboard size={22} /> },
        { name: 'Attendance', path: '/student-Dasbord/attendance', icon: <MdCalendarToday size={22} /> },
      ]
    },
    {
      title: 'Academic',
      links: [
        { name: 'Syllabus', path: '/student-Dasbord/syllabus', icon: <MdMenuBook size={22} /> },
        { name: 'Timetable', path: '/student-Dasbord/timetable', icon: <MdCalendarMonth size={22} /> },
        { name: 'Results', path: '/student-Dasbord/results', icon: <FaGraduationCap size={22} /> },
        { name: 'Assignments', path: '/student-Dasbord/assignments', icon: <MdAssignment size={22} /> },
      ]
    },
    {
      title: 'Personal',
      links: [
        { name: 'Fees', path: '/student-Dasbord/fees', icon: <MdMonetizationOn size={22} /> },
        { name: 'Profile', path: '/student-Dasbord/profile', icon: <MdPerson size={22} /> },
      ]
    }
  ]

  const isActive = (path) => location.pathname === path

  return (
    <div className='h-full w-full bg-[#0f172a] text-white flex flex-col border-r border-white/5 relative overflow-hidden'>
      {/* Decorative Glows */}
      <div className='absolute -top-24 -left-24 w-48 h-48 bg-blue-600/10 rounded-full blur-[80px]'></div>
      <div className='absolute bottom-0 -right-24 w-48 h-48 bg-indigo-600/10 rounded-full blur-[80px]'></div>

      {/* Brand Header */}
      <div className='p-8 flex items-center gap-4 mb-2 relative z-10'>
        <div className='group w-12 h-12 bg-gradient-to-tr from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/20 hover:scale-110 transition-transform duration-500'>
          <MdSchool size={28} className='group-hover:rotate-12 transition-transform' />
        </div>
        <div className='flex flex-col'>
          <h2 className='text-lg font-black tracking-tight leading-none'>Student <span className='text-blue-400'>Portal</span></h2>
          <span className='text-[8px] font-black text-gray-500 uppercase tracking-[0.3em] mt-1.5'>Learning Management</span>
        </div>
      </div>

      {/* Navigation Scroll Area */}
      <div className='flex-1 overflow-y-auto px-4 py-4 space-y-8 relative z-10 custom-scrollbar'>
        {navGroups.map((group, groupIdx) => (
          <div key={groupIdx} className='space-y-2'>
            <p className='text-[10px] font-black text-gray-500 uppercase tracking-[0.3em] ml-4 mb-4 opacity-50'>{group.title}</p>
            <div className='space-y-1'>
              {group.links.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={onLinkClick}
                  className={`flex items-center gap-4 px-4 py-3.5 rounded-2xl transition-all duration-300 group relative ${isActive(link.path)
                    ? 'bg-blue-600/10 text-white border border-blue-500/20 shadow-lg shadow-blue-500/5'
                    : 'text-gray-400 hover:bg-white/5 hover:text-white border border-transparent'
                    }`}
                >
                  {/* Active Indicator Bar */}
                  {isActive(link.path) && (
                    <div className='absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-blue-500 rounded-r-full shadow-[0_0_10px_rgba(59,130,246,0.5)]'></div>
                  )}

                  <div className={`transition-all duration-300 ${isActive(link.path) ? 'text-blue-400 scale-110' : 'group-hover:scale-110 group-hover:text-blue-400'}`}>
                    {link.icon}
                  </div>

                  <span className={`font-bold text-sm tracking-wide transition-colors ${isActive(link.path) ? 'text-white' : 'group-hover:text-white'}`}>
                    {link.name}
                  </span>

                  {isActive(link.path) ? (
                    <div className='ml-auto w-1.5 h-1.5 bg-blue-400 rounded-full shadow-[0_0_8px_rgba(59,130,246,0.8)]'></div>
                  ) : (
                    <MdKeyboardArrowRight className='ml-auto opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-gray-600' />
                  )}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Footer Profile Section */}
      <div className='p-6 border-t border-white/5 space-y-4 relative z-10 bg-[#0f172a]/80 backdrop-blur-md'>
        <div className='flex items-center gap-4 px-4 py-3 bg-white/5 rounded-2xl border border-white/5 hover:border-blue-500/20 transition-all group cursor-default'>
          <div className='w-10 h-10 rounded-xl bg-gradient-to-r from-blue-400 to-indigo-500 p-0.5 shadow-lg group-hover:scale-105 transition-transform'>
            <img
              src="/student.png"
              alt="Avatar"
              className='w-full h-full rounded-[10px] bg-[#0f172a] object-cover'
            />
          </div>
          <div className='flex-1 min-w-0'>
            <p className='text-xs font-black truncate text-white'>Munesh Atul</p>
            <p className='text-[9px] font-bold text-gray-500 uppercase tracking-widest mt-0.5'>Session 2024-25</p>
          </div>
        </div>

        <button
          onClick={() => {
            if (onLinkClick) onLinkClick()
            navigate('/auth-page')
          }}
          className='w-full flex items-center gap-4 px-4 py-3.5 rounded-2xl text-red-400 hover:bg-red-500/10 transition-all duration-300 font-black text-xs uppercase tracking-widest border border-transparent hover:border-red-500/20 active:scale-95'
        >
          <MdLogout size={20} className='group-hover:-translate-x-1 transition-transform' />
          Sign Out
        </button>
      </div>
    </div>
  )
}

export default StudentSideNave
