import React, { useState } from 'react'
import { FaUserGraduate, FaSearch, FaFilter } from 'react-icons/fa'
import { MdClass } from 'react-icons/md'

function TeacherClassDetail() {
  const [selectedClass, setSelectedClass] = useState('10th-A')
  
  const students = [
    { id: 1, name: "Arjun Kumar", rollNo: "101", attendance: "95%", performance: "Excellent" },
    { id: 2, name: "Priya Singh", rollNo: "102", attendance: "92%", performance: "Good" },
    { id: 3, name: "Rahul Verma", rollNo: "103", attendance: "88%", performance: "Average" },
    { id: 4, name: "Sanya Gupta", rollNo: "104", attendance: "98%", performance: "Excellent" },
    { id: 5, name: "Vikram Shah", rollNo: "105", attendance: "85%", performance: "Good" },
  ]

  return (
    <div className='w-full h-full text-white animate-in fade-in duration-500'>
      <div className='flex justify-between items-center mb-8'>
        <h1 className='text-3xl font-black flex items-center gap-3'>
          <MdClass className='text-blue-400' />
          Class Details
        </h1>
        <div className='flex gap-4'>
          <select 
            value={selectedClass}
            onChange={(e) => setSelectedClass(e.target.value)}
            className='bg-white/10 border border-white/20 p-2 rounded-xl text-white outline-none focus:ring-2 focus:ring-blue-500'
          >
            <option value="10th-A" className='text-black'>10th-A</option>
            <option value="11th-B" className='text-black'>11th-B</option>
            <option value="12th-C" className='text-black'>12th-C</option>
          </select>
        </div>
      </div>

      <div className='grid lg:grid-cols-3 gap-6 mb-8'>
        <div className='bg-gradient-to-br from-blue-600 to-indigo-700 p-6 rounded-3xl shadow-xl'>
          <p className='text-blue-100 text-xs font-black uppercase tracking-widest opacity-70'>Total Students</p>
          <p className='text-4xl font-black mt-1'>45</p>
        </div>
        <div className='bg-gradient-to-br from-emerald-500 to-teal-600 p-6 rounded-3xl shadow-xl'>
          <p className='text-emerald-100 text-xs font-black uppercase tracking-widest opacity-70'>Avg Attendance</p>
          <p className='text-4xl font-black mt-1'>92%</p>
        </div>
        <div className='bg-gradient-to-br from-amber-500 to-orange-600 p-6 rounded-3xl shadow-xl'>
          <p className='text-amber-100 text-xs font-black uppercase tracking-widest opacity-70'>Pending Tasks</p>
          <p className='text-4xl font-black mt-1'>03</p>
        </div>
      </div>

      <div className='bg-white/10 rounded-3xl border border-white/20 overflow-hidden backdrop-blur-md'>
        <div className='p-6 border-b border-white/10 flex justify-between items-center bg-white/5'>
          <h2 className='text-xl font-bold'>Student List - {selectedClass}</h2>
          <div className='flex gap-4'>
            <div className='relative'>
              <FaSearch className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-400' size={14} />
              <input 
                type="text" 
                placeholder="Search students..." 
                className='bg-white/5 border border-white/10 pl-10 pr-4 py-2 rounded-xl text-sm outline-none focus:ring-2 focus:ring-blue-500'
              />
            </div>
          </div>
        </div>
        <div className='overflow-x-auto'>
          <table className='w-full text-left'>
            <thead className='bg-white/5'>
              <tr>
                <th className='p-4 text-xs font-black text-gray-400 uppercase tracking-widest'>Roll No</th>
                <th className='p-4 text-xs font-black text-gray-400 uppercase tracking-widest'>Student Name</th>
                <th className='p-4 text-xs font-black text-gray-400 uppercase tracking-widest'>Attendance</th>
                <th className='p-4 text-xs font-black text-gray-400 uppercase tracking-widest'>Performance</th>
                <th className='p-4 text-xs font-black text-gray-400 uppercase tracking-widest text-center'>Actions</th>
              </tr>
            </thead>
            <tbody className='divide-y divide-white/5'>
              {students.map(student => (
                <tr key={student.id} className='hover:bg-white/5 transition-colors'>
                  <td className='p-4 font-mono text-blue-300'>{student.rollNo}</td>
                  <td className='p-4 font-bold'>{student.name}</td>
                  <td className='p-4'>
                    <div className='flex items-center gap-2'>
                      <div className='flex-1 h-1.5 bg-white/10 rounded-full max-w-[60px]'>
                        <div 
                          className='h-full bg-emerald-500 rounded-full' 
                          style={{ width: student.attendance }}
                        ></div>
                      </div>
                      <span className='text-xs font-bold text-emerald-400'>{student.attendance}</span>
                    </div>
                  </td>
                  <td className='p-4'>
                    <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider border ${
                      student.performance === 'Excellent' 
                      ? 'bg-blue-500/20 text-blue-400 border-blue-500/30'
                      : 'bg-amber-500/20 text-amber-400 border-amber-500/30'
                    }`}>
                      {student.performance}
                    </span>
                  </td>
                  <td className='p-4'>
                    <div className='flex justify-center gap-2'>
                      <button className='bg-white/5 hover:bg-white/20 p-2 rounded-lg text-xs font-bold transition-all'>Report</button>
                      <button className='bg-blue-600 hover:bg-blue-700 p-2 rounded-lg text-xs font-bold transition-all'>Details</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default TeacherClassDetail
