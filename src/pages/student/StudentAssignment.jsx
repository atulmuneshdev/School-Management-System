import React from 'react'
import { MdOutlineAssignment, MdCheckCircle, MdAccessTime } from 'react-icons/md'

function StudentAssignment() {
  const assignments = [
    { id: 1, title: "Trigonometry Worksheet", subject: "Math", dueDate: "2026-03-20", status: "Pending" },
    { id: 2, title: "Newton's Laws Lab Report", subject: "Physics", dueDate: "2026-03-18", status: "Submitted" },
    { id: 3, title: "Organic Chemistry Quiz", subject: "Chemistry", dueDate: "2026-03-22", status: "Not Started" },
  ]

  return (
    <div className='w-full space-y-8 animate-in fade-in duration-700'>
      <div className='flex justify-between items-center'>
        <h1 className='text-3xl font-black text-white tracking-tight'>My <span className='text-blue-400'>Assignments</span></h1>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {assignments.map(a => (
          <div key={a.id} className='bg-white/5 p-6 rounded-[35px] border border-white/10 backdrop-blur-xl group hover:bg-white/10 transition-all'>
            <div className='flex justify-between items-start mb-4'>
              <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${
                a.status === 'Submitted' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
              }`}>
                {a.status}
              </span>
              <MdOutlineAssignment className='text-blue-400' size={24} />
            </div>
            <h3 className='text-xl font-black text-white mb-2'>{a.title}</h3>
            <p className='text-xs font-bold text-blue-400 uppercase tracking-widest mb-6'>{a.subject}</p>
            <div className='pt-4 border-t border-white/5 flex items-center justify-between'>
              <div className='flex items-center gap-2 text-[10px] font-bold text-gray-500'>
                <MdAccessTime size={14} />
                Due: {a.dueDate}
              </div>
              {a.status === 'Submitted' ? <MdCheckCircle className='text-emerald-500' size={18} /> : null}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default StudentAssignment
