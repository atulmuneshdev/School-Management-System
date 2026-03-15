import React, { useEffect, useState } from 'react'
import DataBox from '../../components/DataBox'
import NotisBord from '../../components/NotisBord'
import AddNotice from '../../components/AddNotice'
import {
  MdPeople, MdSchool, MdAssignment, MdAttachMoney,
  MdEventAvailable, MdAccessTime, MdTimeline, MdInsertChartOutlined,
  MdSettings, MdNotificationsActive
} from 'react-icons/md'

function HomeAdmin() {
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString())
  const [notices, setNotices] = useState([
    { id: 1, title: "Annual Sports Meet 2024", message: "All students are requested to participate in the upcoming sports meet.", date: "2024-03-20" },
    { id: 2, title: "Parent Teacher Meeting", message: "PTM is scheduled for this Saturday for all classes.", date: "2024-03-25" }
  ])

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date().toLocaleTimeString()), 1000)
    return () => clearInterval(timer)
  }, [])

  const handleAddNotice = (newNotice) => {
    setNotices([
      { ...newNotice, id: Date.now(), date: new Date().toISOString().split('T')[0] },
      ...notices
    ])
  }

  const handleDeleteNotice = (id) => {
    setNotices(notices.filter(notice => notice.id !== id))
  }

  const stats = [
    { name: "Total Students", total: 1240, icon: <MdPeople /> },
    { name: "Total Faculty", total: 86, icon: <MdSchool /> },
    { name: "Course Coverage", total: "92%", icon: <MdAssignment /> },
    { name: "Revenue (MTD)", total: "₹4.2L", icon: <MdAttachMoney /> }
  ]

  return (
    <div className='w-full h-full overflow-y-auto scroll-hidden pb-10'>
      {/* Header Section */}
      <div className='flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8 gap-6 bg-white/5 p-6 md:p-8 rounded-[40px] border border-white/10 backdrop-blur-xl'>
        <div className='space-y-2'>
          <h1 className='font-black text-3xl md:text-4xl text-white tracking-tight uppercase'>Admin <span className='text-blue-400'>Dashboard</span></h1>
          <p className='text-gray-400 font-bold text-xs uppercase tracking-widest italic opacity-60'>"Empowering Education through Excellence"</p>
        </div>
        <div className='flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full lg:w-auto'>
          <div className='flex items-center gap-4 bg-white/5 px-6 py-4 rounded-2xl border border-white/10 flex-1 lg:flex-none'>
            <MdEventAvailable className='text-blue-400' />
            <span className='font-black text-xs text-white uppercase tracking-widest'>{new Date().toDateString()}</span>
          </div>
          <div className='flex items-center gap-4 bg-blue-600 px-6 py-4 rounded-2xl shadow-lg shadow-blue-600/20 flex-1 lg:flex-none'>
            <MdAccessTime className='text-white' />
            <span className='font-mono font-black text-sm text-white w-24'>{currentTime}</span>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-10'>
        {stats.map((item, index) => (
          <DataBox
            key={index}
            total={item.total}
            name={item.name}
            icon={item.icon}
          />
        ))}
      </div>

      {/* Main Content Layout */}
      <div className='grid grid-cols-1 xl:grid-cols-12 gap-10'>
        {/* Notices and Feed Section */}
        <div className='xl:col-span-8 space-y-10'>
          <NotisBord notices={notices} onDeleteNotice={handleDeleteNotice} />

          {/* Quick Stats/Activity Placeholder */}
          <div className='bg-white/5 border border-white/10 p-8 rounded-[40px] backdrop-blur-3xl'>
            <div className='flex items-center justify-between mb-8'>
              <div className='flex items-center gap-4'>
                <div className='w-12 h-12 bg-emerald-500/20 text-emerald-400 rounded-2xl flex items-center justify-center'>
                  <MdTimeline size={24} />
                </div>
                <h3 className='text-xl font-black text-white uppercase tracking-tighter'>System <span className='text-emerald-400'>Analytics</span></h3>
              </div>
              <button className='text-gray-500 hover:text-white transition-colors'>
                <MdInsertChartOutlined size={24} />
              </button>
            </div>
            <div className='h-48 flex items-center justify-center border-2 border-dashed border-white/5 rounded-[30px]'>
              <p className='text-gray-600 font-bold text-xs uppercase tracking-[0.3em]'>Activity Visualization Module</p>
            </div>
          </div>
        </div>

        {/* Action and Control Section */}
        <div className='xl:col-span-4 space-y-10'>
          <AddNotice onAddNotice={handleAddNotice} />

          {/* System Control Panel Placeholder */}
          <div className='bg-white/5 border border-white/10 p-8 rounded-[40px] backdrop-blur-3xl'>
            <div className='flex items-center gap-4 mb-8'>
              <div className='w-12 h-12 bg-amber-500/20 text-amber-400 rounded-2xl flex items-center justify-center'>
                <MdSettings size={24} />
              </div>
              <h3 className='text-xl font-black text-white uppercase tracking-tighter'>Control <span className='text-amber-400'>Hub</span></h3>
            </div>
            <div className='space-y-4'>
              {['User Permissions', 'Academic Year', 'Global Settings'].map((action) => (
                <button key={action} className='w-full p-4 rounded-2xl bg-black/20 border border-white/5 text-left text-xs font-black text-gray-400 uppercase tracking-widest hover:border-amber-500/30 hover:text-white transition-all'>
                  {action}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeAdmin