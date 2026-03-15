import React, { useState } from 'react'
import { 
  MdOutlineWavingHand, MdNotificationsActive, MdCalendarToday, 
  MdOutlineAssignment, MdCampaign, MdEvent, MdInfoOutline,
  MdOutlineAutoGraph, MdOutlineSchool, MdAccessTime, MdCheckCircleOutline
} from 'react-icons/md'

function StudentHome() {
  const [notices] = useState([
    { id: 1, title: "Annual Sports Meet 2026", content: "Registration for all outdoor and indoor games is now open. Register at the sports complex.", date: "Mar 14", type: "Event", color: "blue" },
    { id: 2, title: "Mid-Term Results Out", content: "The results for the mid-term examinations have been declared. Check your portal.", date: "Mar 12", type: "Academic", color: "emerald" },
    { id: 3, title: "Weekend Science Workshop", content: "A special workshop on Robotics and AI will be held this Saturday in the main hall.", date: "Mar 10", type: "Workshop", color: "purple" }
  ])

  const [schedule] = useState([
    { id: 1, subject: "Mathematics", time: "09:00 - 10:00 AM", status: "Completed", room: "Room 101" },
    { id: 2, subject: "Physics", time: "10:00 - 11:00 AM", status: "In Progress", room: "Lab 2" },
    { id: 3, subject: "Break", time: "11:00 - 11:30 AM", status: "Upcoming", room: "Cafeteria" },
    { id: 4, subject: "English Literature", time: "11:30 - 12:30 PM", status: "Upcoming", room: "Room 204" }
  ])

  const [progress] = useState([
    { subject: "Mathematics", percent: 82, color: "blue" },
    { subject: "Science", percent: 65, color: "emerald" },
    { subject: "Social Studies", percent: 45, color: "amber" }
  ])

  const getNoticeColor = (type) => {
    switch(type) {
      case 'Event': return 'text-blue-400 bg-blue-500/10 border-blue-500/20';
      case 'Academic': return 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20';
      case 'Workshop': return 'text-purple-400 bg-purple-500/10 border-purple-500/20';
      default: return 'text-gray-400 bg-gray-500/10 border-gray-500/20';
    }
  }

  return (
    <div className='w-full space-y-8 animate-in fade-in duration-700 pb-16'>
      
      {/* 1. TOP HERO SECTION: Welcome & Status */}
      <div className='relative overflow-hidden bg-white/5 rounded-[40px] border border-white/10 p-8 md:p-12'>
        <div className='relative z-10 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8'>
          <div className='space-y-6'>
            <div className='flex items-center gap-3 px-4 py-2 bg-blue-500/10 rounded-full border border-blue-500/20 w-fit'>
              <MdOutlineWavingHand className='text-blue-400 animate-bounce' size={18} />
              <span className='text-[10px] font-black text-blue-400 uppercase tracking-widest'>Learning Hub Dashboard</span>
            </div>
            <div className='space-y-2'>
              <h1 className='text-4xl md:text-5xl font-black text-white tracking-tighter leading-none'>Hello, <span className='text-blue-400'>Munesh Atul!</span></h1>
              <p className='text-gray-400 font-medium text-lg max-w-xl'>You've completed <span className='text-white font-bold'>85%</span> of your weekly learning goals. Keep it up!</p>
            </div>
            <div className='flex flex-wrap gap-4'>
              <button className='bg-blue-600 hover:bg-blue-700 text-white px-8 py-3.5 rounded-2xl font-black uppercase tracking-widest text-[10px] shadow-xl shadow-blue-500/20 transition-all active:scale-95'>
                View Assignments
              </button>
              <button className='bg-white/5 hover:bg-white/10 text-white px-8 py-3.5 rounded-2xl font-black uppercase tracking-widest text-[10px] border border-white/10 transition-all active:scale-95'>
                My Timetable
              </button>
            </div>
          </div>

          <div className='hidden xl:block relative group'>
            <div className='absolute -inset-4 bg-blue-500/20 blur-2xl rounded-full group-hover:bg-blue-500/30 transition-all duration-700'></div>
            <img src="/student.png" alt="Student Hero" className='w-80 relative z-10 drop-shadow-2xl hover:scale-105 transition-transform duration-700' />
          </div>
        </div>

        {/* Decorative background shapes */}
        <div className='absolute -right-20 -top-20 w-80 h-80 bg-blue-600/5 rounded-full blur-[100px]'></div>
        <div className='absolute -left-20 -bottom-20 w-80 h-80 bg-indigo-600/5 rounded-full blur-[100px]'></div>
      </div>

      {/* 2. STATS GRID: Quick Metrics */}
      <div className='grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6'>
        <div className='bg-white/5 p-6 rounded-[30px] border border-white/10 backdrop-blur-xl group hover:bg-white/10 transition-all'>
          <div className='p-3 bg-blue-500/20 rounded-2xl text-blue-400 w-fit mb-4'>
            <MdCalendarToday size={24} />
          </div>
          <p className='text-3xl font-black text-white leading-none'>92%</p>
          <p className='text-[10px] font-black text-gray-500 uppercase tracking-widest mt-2'>Attendance</p>
        </div>
        
        <div className='bg-white/5 p-6 rounded-[30px] border border-white/10 backdrop-blur-xl group hover:bg-white/10 transition-all'>
          <div className='p-3 bg-emerald-500/20 rounded-2xl text-emerald-400 w-fit mb-4'>
            <MdOutlineAutoGraph size={24} />
          </div>
          <p className='text-3xl font-black text-white leading-none'>8.8</p>
          <p className='text-[10px] font-black text-gray-500 uppercase tracking-widest mt-2'>CGPA Score</p>
        </div>

        <div className='bg-white/5 p-6 rounded-[30px] border border-white/10 backdrop-blur-xl group hover:bg-white/10 transition-all'>
          <div className='p-3 bg-amber-500/20 rounded-2xl text-amber-400 w-fit mb-4'>
            <MdOutlineAssignment size={24} />
          </div>
          <p className='text-3xl font-black text-white leading-none'>04</p>
          <p className='text-[10px] font-black text-gray-500 uppercase tracking-widest mt-2'>Pending Tasks</p>
        </div>

        <div className='bg-white/5 p-6 rounded-[30px] border border-white/10 backdrop-blur-xl group hover:bg-white/10 transition-all'>
          <div className='p-3 bg-purple-500/20 rounded-2xl text-purple-400 w-fit mb-4'>
            <MdNotificationsActive size={24} />
          </div>
          <p className='text-3xl font-black text-white leading-none'>{notices.length}</p>
          <p className='text-[10px] font-black text-gray-500 uppercase tracking-widest mt-2'>New Notices</p>
        </div>
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
        {/* 3. MAIN CONTENT: Notice Board & Academic Progress */}
        <div className='lg:col-span-2 space-y-8'>
          
          {/* NOTICE BOARD */}
          <div className='bg-white/5 rounded-[40px] border border-white/10 backdrop-blur-xl overflow-hidden shadow-2xl'>
            <div className='p-8 border-b border-white/5 flex items-center justify-between'>
              <div className='flex items-center gap-4'>
                <div className='w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-blue-500/20'>
                  <MdCampaign size={28} />
                </div>
                <div>
                  <h2 className='text-2xl font-black text-white tracking-tight'>Notice <span className='text-blue-400'>Board</span></h2>
                  <p className='text-[10px] font-black text-gray-500 uppercase tracking-widest mt-1'>School Announcements</p>
                </div>
              </div>
              <MdInfoOutline className='text-gray-500' size={24} />
            </div>

            <div className='p-8 space-y-6'>
              {notices.map((notice) => (
                <div key={notice.id} className='group bg-white/5 p-6 rounded-3xl border border-white/5 hover:border-blue-500/30 transition-all relative overflow-hidden'>
                  <div className='flex justify-between items-start mb-4'>
                    <span className={`px-3 py-1 rounded-xl text-[8px] font-black uppercase tracking-widest border ${getNoticeColor(notice.type)}`}>
                      {notice.type}
                    </span>
                    <span className='text-[10px] font-bold text-gray-500 uppercase tracking-widest flex items-center gap-2'>
                      <MdEvent size={14} className='text-blue-500' />
                      {notice.date}
                    </span>
                  </div>
                  <h3 className='text-lg font-black text-white group-hover:text-blue-400 transition-colors mb-2'>{notice.title}</h3>
                  <p className='text-sm text-gray-400 leading-relaxed opacity-70 group-hover:opacity-100 transition-opacity'>{notice.content}</p>
                  {/* Decorative background number */}
                  <span className='absolute -right-2 -bottom-4 text-6xl font-black text-white/[0.02] pointer-events-none italic group-hover:text-blue-500/[0.05] transition-colors'>0{notice.id}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ACADEMIC PROGRESS */}
          <div className='bg-white/5 rounded-[40px] border border-white/10 backdrop-blur-xl p-8 shadow-2xl'>
            <div className='flex items-center gap-4 mb-8'>
              <div className='w-12 h-12 bg-emerald-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-emerald-500/20'>
                <MdOutlineSchool size={28} />
              </div>
              <div>
                <h2 className='text-2xl font-black text-white tracking-tight'>Academic <span className='text-emerald-400'>Progress</span></h2>
                <p className='text-[10px] font-black text-gray-500 uppercase tracking-widest mt-1'>Syllabus Completion</p>
              </div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
              {progress.map((item, i) => (
                <div key={i} className='space-y-4 bg-white/5 p-6 rounded-3xl border border-white/5'>
                  <div className='flex justify-between items-end'>
                    <h4 className='text-xs font-black text-white uppercase tracking-wider'>{item.subject}</h4>
                    <span className='text-lg font-black text-white'>{item.percent}%</span>
                  </div>
                  <div className='w-full h-2 bg-white/5 rounded-full overflow-hidden'>
                    <div 
                      className={`h-full bg-${item.color}-500 transition-all duration-1000 shadow-[0_0_10px_rgba(59,130,246,0.3)]`} 
                      style={{ width: `${item.percent}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 4. SIDEBAR CONTENT: Schedule Timeline */}
        <div className='space-y-8'>
          <div className='bg-white/5 rounded-[40px] border border-white/10 backdrop-blur-xl p-8 shadow-2xl relative overflow-hidden'>
            <div className='flex items-center gap-4 mb-8'>
              <div className='w-12 h-12 bg-indigo-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-indigo-500/20'>
                <MdAccessTime size={28} />
              </div>
              <div>
                <h2 className='text-xl font-black text-white tracking-tight'>Today's <span className='text-indigo-400'>Schedule</span></h2>
                <p className='text-[10px] font-black text-gray-500 uppercase tracking-widest mt-1'>Daily Timeline</p>
              </div>
            </div>

            <div className='space-y-6 relative'>
              {/* Timeline Line */}
              <div className='absolute left-[23px] top-2 bottom-2 w-px bg-white/10'></div>

              {schedule.map((item) => (
                <div key={item.id} className='relative flex gap-6 group'>
                  <div className={`w-12 h-12 rounded-2xl flex-shrink-0 flex items-center justify-center relative z-10 border transition-all ${
                    item.status === 'In Progress' 
                    ? 'bg-blue-600 border-blue-500 shadow-lg shadow-blue-500/30' 
                    : item.status === 'Completed'
                    ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400'
                    : 'bg-white/5 border-white/10 text-gray-500'
                  }`}>
                    {item.status === 'Completed' ? <MdCheckCircleOutline size={20} /> : <MdOutlineSchool size={20} />}
                  </div>
                  <div className='flex-1 py-1'>
                    <p className={`text-xs font-black uppercase tracking-widest ${item.status === 'In Progress' ? 'text-blue-400' : 'text-gray-500'}`}>{item.time}</p>
                    <h4 className='text-sm font-black text-white mt-0.5'>{item.subject}</h4>
                    <p className='text-[10px] font-bold text-gray-500 mt-1 uppercase tracking-wider'>{item.room}</p>
                    {item.status === 'In Progress' && (
                      <span className='inline-block mt-2 px-2 py-0.5 bg-blue-500/20 text-blue-400 text-[8px] font-black uppercase tracking-widest rounded-md animate-pulse'>Live Session</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Decorative background circle */}
            <div className='absolute -right-10 -bottom-10 w-32 h-32 bg-indigo-500/5 rounded-full blur-2xl pointer-events-none'></div>
          </div>

          <div className='bg-gradient-to-br from-amber-600/20 to-orange-600/5 p-8 rounded-[40px] border border-white/10 backdrop-blur-xl'>
            <h3 className='text-sm font-black text-white uppercase tracking-widest mb-4'>Exam Countdown</h3>
            <div className='flex justify-between items-center'>
              <div>
                <p className='text-2xl font-black text-white'>12 Days</p>
                <p className='text-[10px] font-bold text-amber-500 uppercase tracking-widest mt-1'>Physics Finals</p>
              </div>
              <div className='w-12 h-12 rounded-2xl bg-amber-500/20 flex items-center justify-center text-amber-400'>
                <MdEvent size={24} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StudentHome
