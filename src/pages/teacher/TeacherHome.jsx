import React, { useState } from 'react'
import DataBox from '../../components/DataBox'
import NotisBord from '../../components/NotisBord'
import { FaUserGraduate, FaChalkboardTeacher, FaCalendarCheck, FaClock, FaBullhorn } from 'react-icons/fa'
import { MdClass, MdSubject } from 'react-icons/md'

function TeacherHome() {
  const [notices] = useState([
    { id: 1, title: "Staff Meeting", message: "Emergency staff meeting today at 4:00 PM in the conference hall.", date: "2026-03-14" },
    { id: 2, title: "Exam Schedule", message: "Final term exam schedule for grades 9-12 has been posted on the portal.", date: "2026-03-12" },
    { id: 3, title: "Holiday Notice", message: "School will remain closed on Monday due to local festival.", date: "2026-03-10" }
  ])

  const stats = [
    { name: "My Classes Today", num: 4, icon: <MdClass size={40} /> },
    { name: "Total Students", num: 120, icon: <FaUserGraduate size={40} /> },
    { name: "Subjects Taught", num: 2, icon: <MdSubject size={40} /> },
    { name: "Attendance %", num: "98%", icon: <FaCalendarCheck size={40} /> }
  ]

  return (
    <div className='w-full h-full text-white animate-in fade-in duration-500'>
      <div className='flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4 bg-white/10 p-6 rounded-3xl border border-white/20'>
        <div>
          <h1 className='font-black text-4xl text-white tracking-tight'>Teacher Dashboard</h1>
          <p className='text-blue-100 font-medium opacity-80 mt-1 italic'>"Inspiring minds, shaping the future"</p>
        </div>
        <div className='flex items-center gap-6 bg-blue-900/40 px-6 py-3 rounded-2xl border border-blue-400/30 backdrop-blur-md'>
          <div className='flex items-center gap-2 text-blue-100'>
            <FaCalendarCheck className='text-blue-400' />
            <span className='font-bold'>{new Date().toDateString()}</span>
          </div>
        </div>
      </div>

      <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 mb-10'>
        {stats.map((item, index) => (
          <DataBox
            key={index}
            total={item.num}
            name={item.name}
            icon={item.icon}
          />
        ))}
      </div>

      <div className='grid lg:grid-cols-2 gap-6 mb-10'>
        <div className='bg-white/10 p-6 rounded-3xl border border-white/20 backdrop-blur-md'>
          <h2 className='text-xl font-bold mb-4 flex items-center gap-2 text-white'>
            <FaClock className='text-blue-400' />
            My Schedule Today
          </h2>
          <div className='space-y-3'>
            {[
              { time: "09:00 AM", class: "10th-A", subject: "Mathematics" },
              { time: "11:00 AM", class: "11th-B", subject: "Calculus" },
              { time: "01:30 PM", class: "10th-A", subject: "Geometry" },
              { time: "03:00 PM", class: "12th-C", subject: "Advanced Math" },
            ].map((slot, i) => (
              <div key={i} className='flex items-center justify-between p-4 bg-white/5 rounded-2xl border border-white/5 hover:bg-white/10 transition-all'>
                <div className='flex items-center gap-4'>
                  <span className='text-blue-300 font-bold text-sm'>{slot.time}</span>
                  <div>
                    <p className='font-bold text-white'>{slot.subject}</p>
                    <p className='text-xs text-gray-400'>{slot.class}</p>
                  </div>
                </div>
                <span className='px-3 py-1 bg-emerald-500/20 text-emerald-400 rounded-full text-[10px] font-black uppercase tracking-wider border border-emerald-500/30'>Upcoming</span>
              </div>
            ))}
          </div>
        </div>

        <div className='flex flex-col gap-6'>
          <div className='bg-white/10 p-6 rounded-3xl border border-white/20 backdrop-blur-md'>
            <h2 className='text-xl font-bold mb-4 flex items-center gap-2 text-white'>
              <FaUserGraduate className='text-pink-400' />
              Recent Class Activity
            </h2>
            <div className='space-y-4'>
              <div className='p-4 bg-white/5 rounded-2xl border border-white/5'>
                <p className='text-sm font-medium text-gray-300 mb-2'>Homework assigned to 10th-A</p>
                <div className='flex justify-between items-center'>
                  <span className='text-xs text-blue-300'>Topic: Trigonometry Identities</span>
                  <span className='text-[10px] text-gray-500'>2 hours ago</span>
                </div>
              </div>
              <div className='p-4 bg-white/5 rounded-2xl border border-white/5'>
                <p className='text-sm font-medium text-gray-300 mb-2'>Attendance marked for 11th-B</p>
                <div className='flex justify-between items-center'>
                  <span className='text-xs text-emerald-300'>Status: Completed</span>
                  <span className='text-[10px] text-gray-500'>4 hours ago</span>
                </div>
              </div>
            </div>
          </div>

          <NotisBord notices={notices} darkMode={true} />
        </div>
      </div>
    </div>
  )
}

export default TeacherHome
