import React, { useState } from 'react'
import {
  MdCalendarMonth, MdAccessTime, MdOutlineSchool, MdPerson,
  MdLocationOn, MdArrowBackIosNew, MdArrowForwardIos,
  MdFunctions, MdScience, MdLanguage, MdPublic, MdHistoryEdu, MdSportsBaseball
} from 'react-icons/md'

function StudentTimetable() {
  const [selectedDay, setSelectedDay] = useState('Monday');

  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  const scheduleData = {
    'Monday': [
      { period: 1, subject: 'Mathematics', time: '08:30 - 09:20 AM', teacher: 'Mr. Sharma', room: 'Room 101', icon: <MdFunctions /> },
      { period: 2, subject: 'Science', time: '09:20 - 10:10 AM', teacher: 'Mrs. Verma', room: 'Lab 2', icon: <MdScience /> },
      { period: 3, subject: 'English', time: '10:10 - 11:00 AM', teacher: 'Ms. Das', room: 'Room 204', icon: <MdLanguage /> },
      { period: 'Break', subject: 'Short Break', time: '11:00 - 11:20 AM', type: 'break' },
      { period: 4, subject: 'Social Science', time: '11:20 - 12:10 PM', teacher: 'Mr. Gupta', room: 'Room 105', icon: <MdPublic /> },
      { period: 5, subject: 'Hindi', time: '12:10 - 01:00 PM', teacher: 'Mrs. Joshi', room: 'Room 102', icon: <MdHistoryEdu /> },
      { period: 'Lunch', subject: 'Lunch Break', time: '01:00 - 01:45 PM', type: 'break' },
      { period: 6, subject: 'Sports', time: '01:45 - 02:30 PM', teacher: 'Mr. Khan', room: 'Playground', icon: <MdSportsBaseball /> }
    ],
    'Tuesday': [
      { period: 1, subject: 'Science', time: '08:30 - 09:20 AM', teacher: 'Mrs. Verma', room: 'Lab 2', icon: <MdScience /> },
      { period: 2, subject: 'Mathematics', time: '09:20 - 10:10 AM', teacher: 'Mr. Sharma', room: 'Room 101', icon: <MdFunctions /> },
      { period: 3, subject: 'Hindi', time: '10:10 - 11:00 AM', teacher: 'Mrs. Joshi', room: 'Room 102', icon: <MdHistoryEdu /> },
      { period: 'Break', subject: 'Short Break', time: '11:00 - 11:20 AM', type: 'break' },
      { period: 4, subject: 'English', time: '11:20 - 12:10 PM', teacher: 'Ms. Das', room: 'Room 204', icon: <MdLanguage /> },
      { period: 5, subject: 'Social Science', time: '12:10 - 01:00 PM', teacher: 'Mr. Gupta', room: 'Room 105', icon: <MdPublic /> },
      { period: 'Lunch', subject: 'Lunch Break', time: '01:00 - 01:45 PM', type: 'break' },
      { period: 6, subject: 'Library', time: '01:45 - 02:30 PM', teacher: 'Mrs. Rao', room: 'Library', icon: <MdOutlineSchool /> }
    ],
    // For brevity, using same for other days but with variations in a real app
    'Wednesday': [
      { period: 1, subject: 'English', time: '08:30 - 09:20 AM', teacher: 'Ms. Das', room: 'Room 204', icon: <MdLanguage /> },
      { period: 2, subject: 'Social Science', time: '09:20 - 10:10 AM', teacher: 'Mr. Gupta', room: 'Room 105', icon: <MdPublic /> },
      { period: 3, subject: 'Science', time: '10:10 - 11:00 AM', teacher: 'Mrs. Verma', room: 'Lab 2', icon: <MdScience /> },
      { period: 'Break', subject: 'Short Break', time: '11:00 - 11:20 AM', type: 'break' },
      { period: 4, subject: 'Mathematics', time: '11:20 - 12:10 PM', teacher: 'Mr. Sharma', room: 'Room 101', icon: <MdFunctions /> },
      { period: 5, subject: 'Computer', time: '12:10 - 01:00 PM', teacher: 'Mr. Singh', room: 'IT Lab', icon: <MdOutlineSchool /> },
      { period: 'Lunch', subject: 'Lunch Break', time: '01:00 - 01:45 PM', type: 'break' },
      { period: 6, subject: 'Art', time: '01:45 - 02:30 PM', teacher: 'Ms. Mehra', room: 'Art Room', icon: <MdOutlineSchool /> }
    ],
    'Thursday': [
      { period: 1, subject: 'Mathematics', time: '08:30 - 09:20 AM', teacher: 'Mr. Sharma', room: 'Room 101', icon: <MdFunctions /> },
      { period: 2, subject: 'Hindi', time: '09:20 - 10:10 AM', teacher: 'Mrs. Joshi', room: 'Room 102', icon: <MdHistoryEdu /> },
      { period: 3, subject: 'Social Science', time: '10:10 - 11:00 AM', teacher: 'Mr. Gupta', room: 'Room 105', icon: <MdPublic /> },
      { period: 'Break', subject: 'Short Break', time: '11:00 - 11:20 AM', type: 'break' },
      { period: 4, subject: 'Science', time: '11:20 - 12:10 PM', teacher: 'Mrs. Verma', room: 'Lab 2', icon: <MdScience /> },
      { period: 5, subject: 'English', time: '12:10 - 01:00 PM', teacher: 'Ms. Das', room: 'Room 204', icon: <MdLanguage /> },
      { period: 'Lunch', subject: 'Lunch Break', time: '01:00 - 01:45 PM', type: 'break' },
      { period: 6, subject: 'Music', time: '01:45 - 02:30 PM', teacher: 'Mr. Pillai', room: 'Music Room', icon: <MdOutlineSchool /> }
    ],
    'Friday': [
      { period: 1, subject: 'Science', time: '08:30 - 09:20 AM', teacher: 'Mrs. Verma', room: 'Lab 2', icon: <MdScience /> },
      { period: 2, subject: 'English', time: '09:20 - 10:10 AM', teacher: 'Ms. Das', room: 'Room 204', icon: <MdLanguage /> },
      { period: 3, subject: 'Mathematics', time: '10:10 - 11:00 AM', teacher: 'Mr. Sharma', room: 'Room 101', icon: <MdFunctions /> },
      { period: 'Break', subject: 'Short Break', time: '11:00 - 11:20 AM', type: 'break' },
      { period: 4, subject: 'Hindi', time: '11:20 - 12:10 PM', teacher: 'Mrs. Joshi', room: 'Room 102', icon: <MdHistoryEdu /> },
      { period: 5, subject: 'Social Science', time: '12:10 - 01:00 PM', teacher: 'Mr. Gupta', room: 'Room 105', icon: <MdPublic /> },
      { period: 'Lunch', subject: 'Lunch Break', time: '01:00 - 01:45 PM', type: 'break' },
      { period: 6, subject: 'Yoga', time: '01:45 - 02:30 PM', teacher: 'Mrs. Kaur', room: 'Gym Hall', icon: <MdOutlineSchool /> }
    ],
    'Saturday': [
      { period: 1, subject: 'Project Work', time: '08:30 - 10:00 AM', teacher: 'Various', room: 'Respective Rooms', icon: <MdOutlineSchool /> },
      { period: 2, subject: 'Club Activity', time: '10:00 - 11:30 AM', teacher: 'Club Incharges', room: 'Activity Hall', icon: <MdOutlineSchool /> },
      { period: 'Lunch', subject: 'Early Lunch', time: '11:30 - 12:00 PM', type: 'break' },
      { period: 3, subject: 'Assembly/Seminar', time: '12:00 - 01:30 PM', teacher: 'Admin', room: 'Auditorium', icon: <MdOutlineSchool /> }
    ]
  };

  return (
    <div className='w-full space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700 pb-16'>
      {/* Header Section */}
      <div className='relative overflow-hidden bg-white/5 rounded-[40px] border border-white/10 p-8 md:p-12'>
        <div className='relative z-10 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8'>
          <div className='space-y-6'>
            <div className='bg-blue-500/10 px-6 py-2 rounded-2xl border border-blue-500/20 flex items-center gap-3 w-fit'>
              <MdCalendarMonth className='text-blue-400' />
              <span className='text-xs font-black text-blue-400 uppercase tracking-widest'>Weekly Schedule</span>
            </div>
            <div className='space-y-2'>
              <h1 className='text-4xl md:text-5xl font-black text-white tracking-tighter leading-none'>Time <span className='text-blue-400'>Table</span></h1>
              <p className='text-gray-400 font-medium text-lg max-w-xl'>View your daily periods, teachers, and classroom details for the <span className='text-white font-bold'>Current Academic Session</span></p>
            </div>
          </div>

          <div className='hidden xl:block relative group'>
            <div className='absolute -inset-4 bg-blue-500/20 blur-2xl rounded-full'></div>
            <div className='relative z-10 bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-[40px] flex flex-col items-center gap-4'>
              <div className='w-20 h-20 bg-blue-600 rounded-3xl flex items-center justify-center text-white shadow-xl shadow-blue-600/20'>
                <MdAccessTime size={40} />
              </div>
              <div className='text-center'>
                <p className='text-2xl font-black text-white'>8 Periods</p>
                <p className='text-[10px] font-black text-gray-500 uppercase tracking-[0.2em]'>Including Breaks</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Day Selector */}
      <div className='flex items-center gap-4 overflow-x-auto pb-4 no-scrollbar'>
        {days.map((day) => (
          <button
            key={day}
            onClick={() => setSelectedDay(day)}
            className={`px-8 py-4 rounded-2xl font-black text-sm uppercase tracking-widest transition-all whitespace-nowrap border ${selectedDay === day
                ? 'bg-blue-600 text-white border-blue-500 shadow-xl shadow-blue-600/20'
                : 'bg-white/5 text-gray-500 border-white/5 hover:bg-white/10 hover:text-white'
              }`}
          >
            {day}
          </button>
        ))}
      </div>

      {/* Periods - Desktop Table View */}
      <div className='hidden md:block overflow-x-auto bg-white/5 rounded-[40px] border border-white/10 backdrop-blur-xl'>
        <table className='w-full text-left border-collapse min-w-[800px]'>
          <thead>
            <tr className='border-b border-white/10'>
              <th className='p-8 text-[10px] font-black text-gray-500 uppercase tracking-[0.2em]'>Period</th>
              <th className='p-8 text-[10px] font-black text-gray-500 uppercase tracking-[0.2em]'>Subject</th>
              <th className='p-8 text-[10px] font-black text-gray-500 uppercase tracking-[0.2em]'>Time Slot</th>
              <th className='p-8 text-[10px] font-black text-gray-500 uppercase tracking-[0.2em]'>Faculty</th>
              <th className='p-8 text-[10px] font-black text-gray-500 uppercase tracking-[0.2em]'>Venue</th>
            </tr>
          </thead>
          <tbody>
            {scheduleData[selectedDay].map((item, idx) => (
              item.type === 'break' ? (
                <tr key={idx} className='bg-amber-500/5 border-b border-white/5'>
                  <td colSpan="5" className='p-4 text-center'>
                    <div className='flex items-center justify-center gap-3'>
                      <div className='h-[1px] w-20 bg-gradient-to-r from-transparent to-amber-500/20'></div>
                      <div className='flex items-center gap-2 px-6 py-2 bg-amber-500/10 border border-amber-500/20 rounded-full'>
                        <MdAccessTime className='text-amber-400' />
                        <span className='text-[10px] font-black text-amber-400 uppercase tracking-[0.3em]'>{item.subject} • {item.time}</span>
                      </div>
                      <div className='h-[1px] w-20 bg-gradient-to-l from-transparent to-amber-500/20'></div>
                    </div>
                  </td>
                </tr>
              ) : (
                <tr key={idx} className='group hover:bg-white/5 border-b border-white/5 last:border-0 transition-colors'>
                  <td className='p-8'>
                    <div className='flex items-center gap-3'>
                      <div className='w-12 h-12 rounded-xl bg-blue-600/10 border border-blue-500/20 flex flex-col items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all duration-300'>
                        <span className='text-xs font-black'>{item.period}{item.period === 1 ? 'st' : item.period === 2 ? 'nd' : item.period === 3 ? 'rd' : 'th'}</span>
                      </div>
                    </div>
                  </td>
                  <td className='p-8'>
                    <div className='flex items-center gap-4'>
                      <div className='w-10 h-10 rounded-xl bg-blue-600/20 text-blue-400 flex items-center justify-center text-xl'>
                        {item.icon}
                      </div>
                      <span className='text-lg font-black text-white group-hover:text-blue-400 transition-colors'>{item.subject}</span>
                    </div>
                  </td>
                  <td className='p-8'>
                    <div className='flex items-center gap-2 text-gray-400 font-bold text-sm'>
                      <MdAccessTime className='text-blue-400' />
                      {item.time}
                    </div>
                  </td>
                  <td className='p-8'>
                    <div className='flex items-center gap-3'>
                      <div className='w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-blue-400 border border-white/5'>
                        <MdPerson size={16} />
                      </div>
                      <span className='text-sm font-bold text-white'>{item.teacher}</span>
                    </div>
                  </td>
                  <td className='p-8'>
                    <div className='flex items-center gap-3'>
                      <div className='w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-blue-400 border border-white/5'>
                        <MdLocationOn size={16} />
                      </div>
                      <span className='text-sm font-bold text-white'>{item.room}</span>
                    </div>
                  </td>
                </tr>
              )
            ))}
          </tbody>
        </table>
      </div>

      {/* Periods - Mobile Card View */}
      <div className='md:hidden space-y-4'>
        {scheduleData[selectedDay].map((item, idx) => (
          item.type === 'break' ? (
            <div key={idx} className='flex items-center justify-center gap-3 py-4'>
              <div className='h-[1px] flex-1 bg-gradient-to-r from-transparent via-amber-500/20 to-transparent'></div>
              <div className='flex items-center gap-2 px-6 py-2 bg-amber-500/10 border border-amber-500/20 rounded-full'>
                <MdAccessTime className='text-amber-400' size={14} />
                <span className='text-[8px] font-black text-amber-400 uppercase tracking-[0.2em]'>{item.subject} • {item.time}</span>
              </div>
              <div className='h-[1px] flex-1 bg-gradient-to-r from-transparent via-amber-500/20 to-transparent'></div>
            </div>
          ) : (
            <div key={idx} className='bg-white/5 rounded-3xl border border-white/10 p-5 space-y-4'>
              <div className='flex justify-between items-start'>
                <div className='flex items-center gap-3'>
                  <div className='w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center text-sm font-black'>
                    {item.period}
                  </div>
                  <div>
                    <h3 className='text-lg font-black text-white'>{item.subject}</h3>
                    <div className='flex items-center gap-1.5 text-gray-500 text-[10px] font-bold uppercase'>
                      <MdAccessTime className='text-blue-400' />
                      {item.time}
                    </div>
                  </div>
                </div>
                <div className='w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-blue-400 border border-white/5'>
                  {item.icon}
                </div>
              </div>

              <div className='grid grid-cols-2 gap-3 pt-4 border-t border-white/5'>
                <div className='flex items-center gap-2 bg-white/5 p-2.5 rounded-xl border border-white/5'>
                  <MdPerson className='text-blue-400' size={14} />
                  <span className='text-[10px] font-bold text-white truncate'>{item.teacher}</span>
                </div>
                <div className='flex items-center gap-2 bg-white/5 p-2.5 rounded-xl border border-white/5'>
                  <MdLocationOn className='text-blue-400' size={14} />
                  <span className='text-[10px] font-bold text-white truncate'>{item.room}</span>
                </div>
              </div>
            </div>
          )
        ))}
      </div>
    </div>
  )
}

export default StudentTimetable
