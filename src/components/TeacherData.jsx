import React, { useState } from "react";

function TeacherData({ teachers = [], setTeachers }) {
  const [filterSubject, setFilterSubject] = useState('All')
  const [filterClassTeacher, setFilterClassTeacher] = useState('All')
  const [selectedTeacher, setSelectedTeacher] = useState(null)

  const subjects = ['All', ...new Set(teachers.map(t => t.subject))]

  const filteredTeachers = teachers.filter(teacher => {
    return (filterSubject === 'All' || teacher.subject === filterSubject) &&
           (filterClassTeacher === 'All' || 
            (filterClassTeacher === 'Yes' && teacher.isClassTeacher) || 
            (filterClassTeacher === 'No' && !teacher.isClassTeacher))
  })

  return (
    <div className="w-full mt-8 animate-in fade-in zoom-in duration-300">
      <div className="bg-white shadow-2xl rounded-3xl overflow-hidden border border-gray-100">
        
        {/* Header & Filters */}
        <div className="p-8 bg-gradient-to-r from-blue-50 to-indigo-50 border-b border-gray-200">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
            <div>
              <h2 className="text-3xl font-black text-gray-800">All Teachers</h2>
              <p className="text-gray-500 font-medium mt-1">Manage staff and assigned classes</p>
            </div>
            
            <div className="flex flex-wrap gap-4 bg-white p-3 rounded-2xl shadow-sm border border-gray-100">
              <div className="flex flex-col">
                <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1 mb-1">Subject</label>
                <select 
                  className="bg-gray-50 border-none outline-none text-sm font-bold text-gray-700 px-3 py-1 rounded-lg focus:ring-2 focus:ring-blue-500"
                  value={filterSubject}
                  onChange={(e) => setFilterSubject(e.target.value)}
                >
                  {subjects.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>
              
              <div className="flex flex-col">
                <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1 mb-1">Class Teacher</label>
                <select 
                  className="bg-gray-50 border-none outline-none text-sm font-bold text-gray-700 px-3 py-1 rounded-lg focus:ring-2 focus:ring-blue-500"
                  value={filterClassTeacher}
                  onChange={(e) => setFilterClassTeacher(e.target.value)}
                >
                  <option value="All">All Staff</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="p-6 font-bold text-gray-600 uppercase text-xs tracking-wider">Teacher Name</th>
                <th className="p-6 font-bold text-gray-600 uppercase text-xs tracking-wider">Subject</th>
                <th className="p-6 font-bold text-gray-600 uppercase text-xs tracking-wider">Assigned Classes</th>
                <th className="p-6 font-bold text-gray-600 uppercase text-xs tracking-wider">Class Teacher</th>
                <th className="p-6 font-bold text-gray-600 uppercase text-xs tracking-wider text-center">Actions</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-100">
              {filteredTeachers.map((teacher) => (
                <tr key={teacher.id} className="hover:bg-blue-50/30 transition-colors">
                  <td className="p-6">
                    <div className="flex flex-col">
                      <span className="font-bold text-gray-800">{teacher.name}</span>
                      <span className="text-xs text-gray-500">{teacher.email}</span>
                    </div>
                  </td>
                  <td className="p-6">
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-bold">
                      {teacher.subject}
                    </span>
                  </td>
                  <td className="p-6">
                    <div className="flex flex-wrap gap-1 max-w-[200px]">
                      {teacher.assignedClasses?.map(c => (
                        <span key={c} className="bg-gray-100 text-gray-600 px-2 py-0.5 rounded-md text-[10px] font-bold">
                          {c}
                        </span>
                      )) || <span className="text-gray-400 text-xs italic">No classes assigned</span>}
                    </div>
                  </td>
                  <td className="p-6">
                    {teacher.isClassTeacher ? (
                      <span className="text-green-500 flex items-center gap-1 font-bold text-xs uppercase tracking-wider">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                        Yes
                      </span>
                    ) : (
                      <span className="text-gray-400 font-bold text-xs uppercase tracking-wider">No</span>
                    )}
                  </td>
                  <td className="p-6">
                    <div className="flex justify-center gap-2">
                      <button 
                        onClick={() => setSelectedTeacher(teacher)}
                        className="bg-indigo-50 text-indigo-600 hover:bg-indigo-600 hover:text-white px-4 py-1.5 rounded-xl text-xs font-bold transition-all"
                      >
                        View Profile
                      </button>
                      <button className="text-gray-400 hover:text-blue-600 p-2 rounded-lg transition-colors">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>
                      </button>
                      <button 
                        onClick={() => setTeachers(teachers.filter(t => t.id !== teacher.id))}
                        className="text-gray-400 hover:text-red-600 p-2 rounded-lg transition-colors"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {filteredTeachers.length === 0 && (
            <div className="p-12 text-center text-gray-400 italic">No teachers found matching your filters.</div>
          )}
        </div>
      </div>

      {/* Teacher Profile Modal */}
      {selectedTeacher && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl w-full max-w-2xl overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-200">
            <div className="bg-indigo-600 p-6 text-white flex justify-between items-center">
              <h3 className="text-2xl font-bold">Teacher Profile</h3>
              <button onClick={() => setSelectedTeacher(null)} className="text-white hover:bg-white/20 p-2 rounded-full transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
              </button>
            </div>
            <div className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div>
                    <p className="text-xs font-black text-gray-400 uppercase tracking-widest">Full Name</p>
                    <p className="text-xl font-bold text-gray-900">{selectedTeacher.name}</p>
                  </div>
                  <div>
                    <p className="text-xs font-black text-gray-400 uppercase tracking-widest">Department / Subject</p>
                    <p className="font-bold text-indigo-600">{selectedTeacher.subject}</p>
                  </div>
                  <div>
                    <p className="text-xs font-black text-gray-400 uppercase tracking-widest">Assigned Classes</p>
                    <div className="flex flex-wrap gap-2 mt-1">
                      {selectedTeacher.assignedClasses?.map(c => (
                        <span key={c} className="bg-indigo-50 text-indigo-600 px-3 py-1 rounded-lg text-xs font-bold border border-indigo-100">
                          {c}
                        </span>
                      )) || "None"}
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <p className="text-xs font-black text-gray-400 uppercase tracking-widest">Contact Info</p>
                    <p className="font-semibold text-gray-800">{selectedTeacher.phone || 'N/A'}</p>
                    <p className="text-sm text-gray-500">{selectedTeacher.email}</p>
                  </div>
                  <div>
                    <p className="text-xs font-black text-gray-400 uppercase tracking-widest">Role</p>
                    <p className="font-semibold text-gray-800">
                      {selectedTeacher.isClassTeacher ? "Class Teacher" : "Subject Teacher"}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-black text-gray-400 uppercase tracking-widest">Monthly Salary</p>
                    <p className="font-bold text-green-600">₹ {selectedTeacher.salary || '0'}</p>
                  </div>
                  <div>
                    <p className="text-xs font-black text-gray-400 uppercase tracking-widest">Account Password</p>
                    <p className="font-mono text-gray-600 text-sm bg-gray-50 px-2 py-1 rounded inline-block">
                      {selectedTeacher.password}
                    </p>
                  </div>
                </div>
              </div>

              {/* Timetable Section */}
              <div className="mt-8 pt-6 border-t border-gray-100">
                <p className="text-xs font-black text-gray-400 uppercase tracking-widest mb-4">Daily Attendance Schedule (Timetable)</p>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-2">
                  {["1st", "2nd", "3rd", "4th", "5th", "6th", "7th", "8th"].map(period => {
                    const session = selectedTeacher.timetable?.find(t => t.period === period);
                    return (
                      <div key={period} className={`p-2 rounded-xl border text-center transition-all ${session ? 'bg-blue-50 border-blue-200 shadow-sm' : 'bg-gray-50 border-gray-100 opacity-50'}`}>
                        <p className="text-[10px] font-black text-gray-400 uppercase">{period}</p>
                        <p className="text-xs font-bold text-blue-900 truncate">{session ? session.class : '-'}</p>
                      </div>
                    )
                  })}
                </div>
              </div>

              <div className="mt-10 flex justify-end">
                <button 
                  onClick={() => setSelectedTeacher(null)}
                  className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-10 py-2.5 rounded-xl font-bold transition-all"
                >
                  Close Profile
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default TeacherData;