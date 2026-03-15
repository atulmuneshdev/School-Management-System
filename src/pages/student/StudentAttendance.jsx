import React from 'react'
import { MdCalendarToday, MdCheckCircle, MdCancel } from 'react-icons/md'

function StudentAttendance() {
  return (
    <div className='w-full space-y-8 animate-in fade-in duration-700'>
      <div className='flex justify-between items-center'>
        <h1 className='text-3xl font-black text-white tracking-tight'>Attendance <span className='text-blue-400'>Record</span></h1>
        <div className='bg-white/5 px-4 py-2 rounded-xl border border-white/10'>
          <span className='text-xs font-black text-gray-500 uppercase tracking-widest'>Total Sessions: 180</span>
        </div>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-4 gap-6'>
        <div className='bg-white/5 p-6 rounded-3xl border border-white/5 flex flex-col items-center'>
          <p className='text-4xl font-black text-white'>165</p>
          <p className='text-[10px] font-bold text-emerald-400 uppercase tracking-widest mt-2'>Days Present</p>
        </div>
        <div className='bg-white/5 p-6 rounded-3xl border border-white/5 flex flex-col items-center'>
          <p className='text-4xl font-black text-white'>12</p>
          <p className='text-[10px] font-bold text-red-400 uppercase tracking-widest mt-2'>Days Absent</p>
        </div>
        <div className='bg-white/5 p-6 rounded-3xl border border-white/5 flex flex-col items-center'>
          <p className='text-4xl font-black text-white'>03</p>
          <p className='text-[10px] font-bold text-amber-400 uppercase tracking-widest mt-2'>On Leave</p>
        </div>
        <div className='bg-blue-600/20 p-6 rounded-3xl border border-blue-500/30 flex flex-col items-center'>
          <p className='text-4xl font-black text-blue-400'>92%</p>
          <p className='text-[10px] font-black text-blue-400 uppercase tracking-widest mt-2'>Percentage</p>
        </div>
      </div>

      <div className='bg-white/5 rounded-[40px] border border-white/10 overflow-hidden'>
        <div className='p-8 border-b border-white/5'>
          <h2 className='text-lg font-black text-white uppercase tracking-wider'>Recent Attendance</h2>
        </div>
        <div className='p-8'>
          <p className='text-gray-500 italic text-sm'>Monthly calendar view coming soon...</p>
        </div>
      </div>
    </div>
  )
}

export default StudentAttendance
