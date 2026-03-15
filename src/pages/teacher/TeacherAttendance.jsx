import React, { useState } from 'react'
import { FaCalendarAlt, FaCheck, FaTimes, FaClock } from 'react-icons/fa'
import { MdClass } from 'react-icons/md'

function TeacherAttendance() {
    const [selectedClass, setSelectedClass] = useState('10th-A')
    const [date, setDate] = useState(new Date().toISOString().split('T')[0])
    const [viewMode, setViewMode] = useState('All') // 'All' or 'ClassTeacher'

    // Mock teacher data (representing current logged in teacher)
    const currentTeacher = {
        name: "Rahul Sharma",
        isClassTeacher: true,
        managedClass: "10th-A",
        assignedClasses: ["10th-A", "11th-B", "12th-C"]
    }

    const classTeachers = {
        "10th-A": "Rahul Sharma",
        "11th-B": "Anita Verma",
        "12th-C": "Suresh Gupta"
    }

    const [students, setStudents] = useState([
        { id: 1, name: "Arjun Kumar", rollNo: "101", status: "Present" },
        { id: 2, name: "Priya Singh", rollNo: "102", status: "Present" },
        { id: 3, name: "Rahul Verma", rollNo: "103", status: "Absent" },
        { id: 4, name: "Sanya Gupta", rollNo: "104", status: "Present" },
        { id: 5, name: "Vikram Shah", rollNo: "105", status: "Late" },
    ])

    const handleStatusChange = (id, newStatus) => {
        setStudents(students.map(s => s.id === id ? { ...s, status: newStatus } : s))
    }

    const stats = {
        total: students.length,
        present: students.filter(s => s.status === 'Present').length,
        absent: students.filter(s => s.status === 'Absent').length,
        late: students.filter(s => s.status === 'Late').length
    }

    return (
        <div className='w-full h-full text-white animate-in fade-in duration-500'>
            <div className='flex justify-between items-center mb-8'>
                <h1 className='text-3xl font-black flex items-center gap-3'>
                    <FaCalendarAlt className='text-blue-400' />
                    Class Attendance
                </h1>
                <div className='flex gap-4'>
                    <div className='flex flex-col'>
                        <label className='text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1 mb-1'>View Mode</label>
                        <select
                            value={viewMode}
                            onChange={(e) => setViewMode(e.target.value)}
                            className='bg-white/10 border border-white/20 p-2 rounded-xl text-white outline-none focus:ring-2 focus:ring-blue-500 text-sm'
                        >
                            <option value="All" className='text-black'>All Classes</option>
                            <option value="ClassTeacher" className='text-black'>My Class Teacher Classes</option>
                        </select>
                    </div>
                    <div className='flex flex-col'>
                        <label className='text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1 mb-1'>Date</label>
                        <input
                            type="date"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            className='bg-white/10 border border-white/20 p-2 rounded-xl text-white outline-none focus:ring-2 focus:ring-blue-500 text-sm'
                        />
                    </div>
                    <div className='flex flex-col'>
                        <label className='text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1 mb-1'>Class</label>
                        <select
                            value={selectedClass}
                            onChange={(e) => setSelectedClass(e.target.value)}
                            className='bg-white/10 border border-white/20 p-2 rounded-xl text-white outline-none focus:ring-2 focus:ring-blue-500 text-sm'
                        >
                            {(viewMode === 'All' ? currentTeacher.assignedClasses : [currentTeacher.managedClass]).map(c => (
                                <option key={c} value={c} className='text-black'>{c}</option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>

            {/* Class Teacher Info Badge */}
            <div className='flex items-center gap-2 mb-6'>
                <span className='text-xs font-bold text-gray-400 uppercase tracking-widest'>Current Class Teacher:</span>
                <span className={`px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider border ${classTeachers[selectedClass] === currentTeacher.name
                        ? 'bg-blue-600/20 text-blue-400 border-blue-500/30'
                        : 'bg-gray-500/20 text-gray-400 border-gray-500/30'
                    }`}>
                    {classTeachers[selectedClass]}
                    {classTeachers[selectedClass] === currentTeacher.name && " (You)"}
                </span>
            </div>

            <div className='grid lg:grid-cols-4 gap-6 mb-8'>
                <div className='bg-blue-600/20 p-6 rounded-3xl border border-blue-500/30 backdrop-blur-md'>
                    <p className='text-blue-100 text-xs font-black uppercase tracking-widest opacity-70'>Total Students</p>
                    <p className='text-4xl font-black mt-1'>{stats.total}</p>
                </div>
                <div className='bg-emerald-500/20 p-6 rounded-3xl border border-emerald-500/30 backdrop-blur-md'>
                    <p className='text-emerald-100 text-xs font-black uppercase tracking-widest opacity-70'>Present</p>
                    <p className='text-4xl font-black mt-1'>{stats.present}</p>
                </div>
                <div className='bg-red-500/20 p-6 rounded-3xl border border-red-500/30 backdrop-blur-md'>
                    <p className='text-red-100 text-xs font-black uppercase tracking-widest opacity-70'>Absent</p>
                    <p className='text-4xl font-black mt-1'>{stats.absent}</p>
                </div>
                <div className='bg-amber-500/20 p-6 rounded-3xl border border-amber-500/30 backdrop-blur-md'>
                    <p className='text-amber-100 text-xs font-black uppercase tracking-widest opacity-70'>Late</p>
                    <p className='text-4xl font-black mt-1'>{stats.late}</p>
                </div>
            </div>

            <div className='bg-white/10 rounded-3xl border border-white/20 overflow-hidden backdrop-blur-md'>
                <div className='p-6 border-b border-white/10 flex justify-between items-center bg-white/5'>
                    <h2 className='text-xl font-bold'>Attendance List - {selectedClass}</h2>
                    <button className='bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-xl font-bold text-sm shadow-lg transition-all'>
                        Submit Attendance
                    </button>
                </div>
                <div className='overflow-x-auto'>
                    <table className='w-full text-left'>
                        <thead className='bg-white/5'>
                            <tr>
                                <th className='p-4 text-xs font-black text-gray-400 uppercase tracking-widest'>Roll No</th>
                                <th className='p-4 text-xs font-black text-gray-400 uppercase tracking-widest'>Student Name</th>
                                <th className='p-4 text-xs font-black text-gray-400 uppercase tracking-widest text-center'>Attendance Status</th>
                            </tr>
                        </thead>
                        <tbody className='divide-y divide-white/5'>
                            {students.map(student => (
                                <tr key={student.id} className='hover:bg-white/5 transition-colors'>
                                    <td className='p-4 font-mono text-blue-300'>{student.rollNo}</td>
                                    <td className='p-4 font-bold'>{student.name}</td>
                                    <td className='p-4'>
                                        <div className='flex justify-center gap-2'>
                                            <button
                                                onClick={() => handleStatusChange(student.id, 'Present')}
                                                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-black uppercase transition-all border ${student.status === 'Present'
                                                    ? 'bg-emerald-500 text-white border-emerald-600 shadow-lg shadow-emerald-500/20'
                                                    : 'bg-white/5 text-gray-400 border-white/10 hover:border-emerald-500/30'
                                                    }`}
                                            >
                                                <FaCheck /> Present
                                            </button>
                                            <button
                                                onClick={() => handleStatusChange(student.id, 'Absent')}
                                                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-black uppercase transition-all border ${student.status === 'Absent'
                                                    ? 'bg-red-500 text-white border-red-600 shadow-lg shadow-red-500/20'
                                                    : 'bg-white/5 text-gray-400 border-white/10 hover:border-red-500/30'
                                                    }`}
                                            >
                                                <FaTimes /> Absent
                                            </button>
                                            <button
                                                onClick={() => handleStatusChange(student.id, 'Late')}
                                                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-black uppercase transition-all border ${student.status === 'Late'
                                                    ? 'bg-amber-500 text-white border-amber-600 shadow-lg shadow-amber-500/20'
                                                    : 'bg-white/5 text-gray-400 border-white/10 hover:border-amber-500/30'
                                                    }`}
                                            >
                                                <FaClock /> Late
                                            </button>
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

export default TeacherAttendance
