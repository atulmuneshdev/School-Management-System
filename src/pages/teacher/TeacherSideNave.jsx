import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FaHome, FaChalkboardTeacher, FaCalendarAlt, FaUserGraduate } from 'react-icons/fa'
import { MdClass, MdSubject, MdLogout } from 'react-icons/md'

function TeacherSideNave() {
  const location = useLocation()
  
  const menuItems = [
    { name: 'Dashboard', icon: <FaHome />, path: '/teacher-dasbord/home' },
    { name: 'My Classes', icon: <MdClass />, path: '/teacher-dasbord/class' },
    { name: 'My Subjects', icon: <MdSubject />, path: '/teacher-dasbord/subject' },
    { name: 'Attendance', icon: <FaCalendarAlt />, path: '/teacher-dasbord/attendance' },
  ]

  return (
    <div className='w-full h-full bg-blue-900/40 backdrop-blur-xl border-r border-white/10 flex flex-col p-6'>
      <div className='mb-10 flex items-center gap-3 px-2'>
        <div className='w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/30'>
          <FaChalkboardTeacher className='text-white' size={20} />
        </div>
        <h2 className='text-xl font-black text-white tracking-tighter'>TEACHER <span className='text-blue-400'>HUB</span></h2>
      </div>

      <nav className='flex-1 space-y-2'>
        {menuItems.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className={`flex items-center gap-4 px-4 py-3.5 rounded-2xl font-bold transition-all duration-300 group ${
              location.pathname === item.path
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/20 scale-[1.02]'
                : 'text-gray-400 hover:bg-white/5 hover:text-white'
            }`}
          >
            <span className={`text-xl transition-transform duration-300 group-hover:scale-110 ${location.pathname === item.path ? 'text-white' : 'text-blue-400'}`}>
              {item.icon}
            </span>
            {item.name}
          </Link>
        ))}
      </nav>

      <div className='mt-auto pt-6 border-t border-white/10'>
        <div className='flex items-center gap-3 p-3 bg-white/5 rounded-2xl mb-4 border border-white/5'>
          <div className='w-10 h-10 bg-gradient-to-tr from-blue-500 to-indigo-600 rounded-full flex items-center justify-center font-bold text-white shadow-md'>
            RS
          </div>
          <div className='overflow-hidden'>
            <p className='text-sm font-bold text-white truncate'>Rahul Sharma</p>
            <p className='text-[10px] text-blue-300 font-black uppercase tracking-widest'>Senior Faculty</p>
          </div>
        </div>
        
        <Link 
          to="/"
          className='flex items-center gap-4 px-4 py-3 rounded-2xl font-bold text-red-400 hover:bg-red-500/10 transition-all'
        >
          <MdLogout size={22} />
          Logout
        </Link>
      </div>
    </div>
  )
}

export default TeacherSideNave
