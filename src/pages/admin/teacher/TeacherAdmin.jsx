import React, { useEffect, useState, useMemo } from 'react'
import {
  MdPersonAdd, MdGroups, MdSchool, MdSearch,
  MdCheckCircle, MdError, MdFileDownload, MdDelete, MdEdit,
  MdFilterList, MdClose, MdSave, MdArrowForward, MdAnalytics,
  MdOutlineLibraryBooks, MdOutlineCalculate, MdSort, MdPayment,
  MdCalendarMonth, MdAssignmentInd, MdBadge
} from 'react-icons/md'
import { FaChalkboardTeacher } from 'react-icons/fa'

function TeacherAdmin() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('All');

  // Modal states
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [editingTeacher, setEditingTeacher] = useState(null);

  const [teachers, setTeachers] = useState([
    {
      id: 1,
      name: "Rahul Sharma",
      email: "rahul@gmail.com",
      subject: "Mathematics",
      phone: "9876543210",
      isClassTeacher: true,
      assignedClasses: ["10th-A", "11th-B"],
      salary: "45000",
      status: 'Active',
      joinDate: '12 Aug 2023',
      timetable: [
        { period: "1st", class: "10th-A" },
        { period: "3rd", class: "11th-B" }
      ]
    },
    {
      id: 2,
      name: "Anita Verma",
      email: "anita@gmail.com",
      subject: "Science",
      phone: "9876543211",
      isClassTeacher: false,
      assignedClasses: ["9th-C", "10th-B"],
      salary: "42000",
      status: 'Active',
      joinDate: '05 Jan 2024',
      timetable: [
        { period: "2nd", class: "9th-C" },
        { period: "4th", class: "10th-B" }
      ]
    }
  ])

  const [teacherForm, setTeacherForm] = useState({
    name: '',
    email: '',
    subject: 'Mathematics',
    phone: '',
    password: 'password123',
    isClassTeacher: false,
    assignedClasses: [],
    salary: '',
    timetable: []
  })

  const subjects = ['Mathematics', 'Science', 'English', 'Hindi', 'Social Science', 'Computer'];
  const availableClasses = ["1st-A", "2nd-B", "3rd-C", "4th-A", "5th-B", "6th-C", "7th-A", "8th-B", "9th-C", "10th-A", "10th-B", "11th-A", "11th-B", "12th-A"]
  const periods = ["1st", "2nd", "3rd", "4th", "5th", "6th", "7th", "8th"]

  const stats = useMemo(() => ({
    total: teachers.length,
    active: teachers.filter(t => t.status === 'Active').length,
    classTeachers: teachers.filter(t => t.isClassTeacher).length
  }), [teachers]);

  const filteredTeachers = teachers.filter(t =>
    (selectedSubject === 'All' || t.subject === selectedSubject) &&
    (t.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.email.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const handleAddClick = () => {
    setEditingTeacher(null);
    setTeacherForm({
      name: '', email: '', subject: 'Mathematics', phone: '',
      password: 'password123', isClassTeacher: false,
      assignedClasses: [], salary: '', timetable: []
    });
    setCurrentStep(1);
    setIsAddModalOpen(true);
  };

  const handleEditClick = (teacher) => {
    setEditingTeacher(teacher);
    setTeacherForm(teacher);
    setCurrentStep(1);
    setIsAddModalOpen(true);
  };

  const handleSaveTeacher = (e) => {
    e.preventDefault();
    if (editingTeacher) {
      setTeachers(prev => prev.map(t => t.id === editingTeacher.id ? { ...teacherForm } : t));
    } else {
      setTeachers(prev => [...prev, { ...teacherForm, id: Date.now(), status: 'Active', joinDate: 'Just now' }]);
    }
    setIsAddModalOpen(false);
  };

  const toggleAssignedClass = (className) => {
    setTeacherForm(prev => ({
      ...prev,
      assignedClasses: prev.assignedClasses.includes(className)
        ? prev.assignedClasses.filter(c => c !== className)
        : [...prev.assignedClasses, className]
    }))
  }

  const updateTimetable = (period, className) => {
    setTeacherForm(prev => {
      const existing = prev.timetable.find(t => t.period === period)
      let newTimetable = existing
        ? (className === "" ? prev.timetable.filter(t => t.period !== period) : prev.timetable.map(t => t.period === period ? { ...t, class: className } : t))
        : [...prev.timetable, { period, class: className }];
      return { ...prev, timetable: newTimetable }
    })
  }

  return (
    <div className='w-full space-y-10 animate-in fade-in slide-in-from-bottom-6 duration-1000 pb-20 relative'>

      {/* 1. Header with Advanced Stats */}
      <div className='flex flex-col xl:flex-row justify-between items-start xl:items-end gap-8'>
        <div className='space-y-4'>
          <div className='flex items-center gap-3'>
            <div className='w-12 h-12 bg-indigo-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-indigo-600/30'>
              <FaChalkboardTeacher size={28} />
            </div>
            <div>
              <h1 className='text-4xl font-black text-white tracking-tighter uppercase'>Teacher <span className='text-indigo-400'>Master</span></h1>
              <p className='text-gray-500 font-bold text-xs uppercase tracking-[0.2em] mt-1.5'>Comprehensive Teacher & Schedule Management</p>
            </div>
          </div>
        </div>

        <div className='flex flex-wrap gap-4 w-full xl:w-auto'>
          <div className='flex-1 xl:flex-none bg-white/5 border border-white/10 rounded-3xl p-4 flex items-center gap-4 min-w-[180px]'>
            <div className='w-10 h-10 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center'>
              <MdGroups size={20} />
            </div>
            <div>
              <p className='text-[10px] font-black text-gray-500 uppercase tracking-widest'>Total Teachers</p>
              <p className='text-xl font-black text-white'>{stats.total}</p>
            </div>
          </div>
          <div className='flex-1 xl:flex-none bg-white/5 border border-white/10 rounded-3xl p-4 flex items-center gap-4 min-w-[180px]'>
            <div className='w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center'>
              <MdCheckCircle size={20} />
            </div>
            <div>
              <p className='text-[10px] font-black text-gray-500 uppercase tracking-widest'>Active Status</p>
              <p className='text-xl font-black text-white'>{stats.active}</p>
            </div>
          </div>
          <button
            onClick={handleAddClick}
            className='w-full sm:w-auto bg-indigo-600 hover:bg-indigo-700 text-white px-10 py-4 rounded-[20px] font-black uppercase tracking-widest text-[10px] shadow-2xl shadow-indigo-600/20 transition-all active:scale-95 flex items-center justify-center gap-3'
          >
            <MdPersonAdd size={20} />
            Register Teacher
          </button>
        </div>
      </div>

      {/* 2. Teacher Ledger */}
      <div className='bg-white/5 rounded-[45px] border border-white/10 overflow-hidden backdrop-blur-3xl'>
        {/* Ledger Toolbar */}
        <div className='p-8 border-b border-white/10 bg-white/5 flex flex-col lg:flex-row justify-between items-center gap-6'>
          <div className='flex items-center gap-4 w-full lg:w-auto overflow-x-auto no-scrollbar pb-2 lg:pb-0'>
            <div className='flex bg-black/20 p-1.5 rounded-2xl border border-white/5'>
              {['All', ...subjects.slice(0, 4)].map(sub => (
                <button
                  key={sub}
                  onClick={() => setSelectedSubject(sub)}
                  className={`px-6 py-2.5 rounded-xl font-black text-[10px] uppercase tracking-widest transition-all whitespace-nowrap ${selectedSubject === sub ? 'bg-indigo-600 text-white shadow-lg' : 'text-gray-500 hover:text-white'
                    }`}
                >
                  {sub}
                </button>
              ))}
            </div>
          </div>

          <div className='relative w-full lg:w-[400px]'>
            <MdSearch className='absolute left-5 top-1/2 -translate-y-1/2 text-gray-500' size={22} />
            <input
              type="text"
              placeholder="Search teacher name or email..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className='w-full bg-black/20 border border-white/10 rounded-[20px] pl-14 pr-6 py-4 text-sm font-bold text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/50'
            />
          </div>
        </div>

        {/* Ledger List */}
        <div className='overflow-x-auto'>
          <table className='w-full text-left border-collapse'>
            <thead>
              <tr className='bg-white/5'>
                <th className='p-8 text-[10px] font-black text-gray-500 uppercase tracking-[0.3em]'>Teacher Profile</th>
                <th className='p-8 text-[10px] font-black text-gray-500 uppercase tracking-[0.3em]'>Department</th>
                <th className='p-8 text-[10px] font-black text-gray-500 uppercase tracking-[0.3em]'>Status</th>
                <th className='p-8 text-[10px] font-black text-gray-500 uppercase tracking-[0.3em]'>Joining Date</th>
                <th className='p-8 text-[10px] font-black text-gray-500 uppercase tracking-[0.3em] text-right'>Command</th>
              </tr>
            </thead>
            <tbody className='divide-y divide-white/5'>
              {filteredTeachers.map((teacher) => (
                <tr key={teacher.id} className='hover:bg-indigo-600/[0.03] transition-colors group'>
                  <td className='p-8'>
                    <div className='flex items-center gap-5'>
                      <div className='w-14 h-14 rounded-[20px] bg-gradient-to-tr from-indigo-600/20 to-blue-600/20 text-indigo-400 flex items-center justify-center text-xl font-black border border-white/5 group-hover:scale-110 transition-transform duration-500'>
                        {teacher.name.charAt(0)}
                      </div>
                      <div>
                        <div className='flex items-center gap-2'>
                          <p className='text-base font-black text-white group-hover:text-indigo-400 transition-colors'>{teacher.name}</p>
                          {teacher.isClassTeacher && (
                            <span className='px-2 py-0.5 bg-amber-500/10 text-amber-400 border border-amber-500/20 rounded-md text-[8px] font-black uppercase tracking-tighter'>Class Teacher</span>
                          )}
                        </div>
                        <p className='text-[10px] text-gray-500 font-bold uppercase tracking-widest mt-1'>{teacher.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className='p-8'>
                    <div className='space-y-1'>
                      <p className='text-sm font-black text-white'>{teacher.subject}</p>
                      <p className='text-[10px] font-bold text-gray-500 uppercase tracking-tighter'>Lead Educator</p>
                    </div>
                  </td>
                  <td className='p-8'>
                    <div className={`flex items-center gap-2.5 px-4 py-2 rounded-2xl w-fit border ${teacher.status === 'Active'
                      ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
                      : 'bg-rose-500/10 text-rose-400 border-rose-500/20'
                      }`}>
                      <div className={`w-1.5 h-1.5 rounded-full ${teacher.status === 'Active' ? 'bg-emerald-500' : 'bg-rose-500'}`}></div>
                      <span className='text-[10px] font-black uppercase tracking-[0.1em]'>{teacher.status}</span>
                    </div>
                  </td>
                  <td className='p-8'>
                    <span className='text-xs font-bold text-gray-500'>{teacher.joinDate}</span>
                  </td>
                  <td className='p-8'>
                    <div className='flex items-center justify-end gap-3'>
                      <button
                        onClick={() => handleEditClick(teacher)}
                        className='w-10 h-10 bg-white/5 hover:bg-indigo-600/20 text-indigo-400 rounded-xl transition-all flex items-center justify-center border border-white/5'
                        title="Edit Profile"
                      >
                        <MdEdit size={18} />
                      </button>
                      <button className='w-10 h-10 bg-white/5 hover:bg-amber-600/20 text-amber-400 rounded-xl transition-all flex items-center justify-center border border-white/5' title="Salary Ledger">
                        <MdPayment size={18} />
                      </button>
                      <button
                        onClick={() => {
                          if (window.confirm('Are you sure you want to remove this teacher record?')) {
                            setTeachers(prev => prev.filter(t => t.id !== teacher.id));
                          }
                        }}
                        className='w-10 h-10 bg-white/5 hover:bg-rose-600/20 text-rose-400 rounded-xl transition-all flex items-center justify-center border border-white/5'
                        title="Terminate"
                      >
                        <MdDelete size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filteredTeachers.length === 0 && (
          <div className='p-32 text-center space-y-6'>
            <div className='w-24 h-24 bg-white/5 rounded-full flex items-center justify-center mx-auto text-gray-700 border border-white/5'>
              <FaChalkboardTeacher size={48} />
            </div>
            <div className='space-y-2'>
              <p className='text-xl font-black text-white'>No Teacher Found</p>
              <p className='text-gray-500 font-medium max-w-xs mx-auto text-sm'>Adjust your filters or search terms to locate specific teacher profiles.</p>
            </div>
          </div>
        )}
      </div>

      {/* 3. Multi-Step Registration Modal */}
      {isAddModalOpen && (
        <div className='fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 overflow-hidden'>
          <div className='absolute inset-0 bg-[#020617]/95 backdrop-blur-2xl animate-in fade-in duration-500' onClick={() => setIsAddModalOpen(false)} />

          <form
            onSubmit={handleSaveTeacher}
            className='relative w-full max-w-4xl bg-[#0f172a] rounded-[50px] border border-white/10 shadow-2xl overflow-hidden animate-in zoom-in-95 duration-500 flex flex-col max-h-[95vh]'
          >
            {/* Modal Header */}
            <div className='p-10 border-b border-white/10 bg-gradient-to-r from-indigo-600/10 via-blue-600/5 to-transparent flex flex-col md:flex-row justify-between items-start md:items-center gap-6'>
              <div className='flex items-center gap-6'>
                <div className='w-20 h-20 bg-indigo-600 rounded-[25px] flex items-center justify-center text-white shadow-2xl shadow-indigo-600/40 border border-white/10'>
                  <MdPersonAdd size={40} />
                </div>
                <div className='space-y-1'>
                  <h2 className='text-3xl font-black text-white tracking-tighter leading-tight'>Teacher <span className='text-indigo-400'>Terminal</span></h2>
                  <div className='flex items-center gap-3'>
                    <p className='text-white font-bold text-sm tracking-wide'>{editingTeacher ? 'Update Record' : 'New Registration'}</p>
                    <div className='w-1 h-1 bg-white/20 rounded-full'></div>
                    <p className='text-gray-500 font-bold text-xs uppercase tracking-widest'>Step {currentStep} of 3</p>
                  </div>
                </div>
              </div>

              {/* Step Indicators */}
              <div className='flex gap-2 bg-black/20 p-1.5 rounded-2xl border border-white/5'>
                {[1, 2, 3].map(step => (
                  <div key={step} className={`w-8 h-8 rounded-xl flex items-center justify-center text-xs font-black transition-all ${currentStep === step ? 'bg-indigo-600 text-white shadow-lg' : 'text-gray-500'
                    }`}>
                    {step}
                  </div>
                ))}
              </div>
            </div>

            {/* Modal Content */}
            <div className='flex-1 overflow-y-auto p-10 custom-scrollbar'>
              {currentStep === 1 && (
                <div className='grid grid-cols-1 md:grid-cols-2 gap-8 animate-in fade-in slide-in-from-right-8 duration-500'>
                  <div className='space-y-3 group'>
                    <label className='text-[10px] font-black text-gray-500 uppercase tracking-widest ml-1'>Full Name</label>
                    <div className='relative'>
                      <MdBadge className='absolute left-5 top-1/2 -translate-y-1/2 text-gray-500' />
                      <input
                        type="text"
                        value={teacherForm.name}
                        onChange={(e) => setTeacherForm({ ...teacherForm, name: e.target.value })}
                        className='w-full bg-white/5 border border-white/10 rounded-2xl pl-14 pr-6 py-5 text-sm font-bold text-white focus:ring-2 focus:ring-indigo-500/50'
                        placeholder="Dr. John Smith"
                        required
                      />
                    </div>
                  </div>
                  <div className='space-y-3 group'>
                    <label className='text-[10px] font-black text-gray-500 uppercase tracking-widest ml-1'>Email Address</label>
                    <div className='relative'>
                      <MdOutlineLibraryBooks className='absolute left-5 top-1/2 -translate-y-1/2 text-gray-500' />
                      <input
                        type="email"
                        value={teacherForm.email}
                        onChange={(e) => setTeacherForm({ ...teacherForm, email: e.target.value })}
                        className='w-full bg-white/5 border border-white/10 rounded-2xl pl-14 pr-6 py-5 text-sm font-bold text-white focus:ring-2 focus:ring-indigo-500/50'
                        placeholder="john@school.com"
                        required
                      />
                    </div>
                  </div>
                  <div className='space-y-3 group'>
                    <label className='text-[10px] font-black text-gray-500 uppercase tracking-widest ml-1'>Phone Number</label>
                    <div className='relative'>
                      <MdOutlineCalculate className='absolute left-5 top-1/2 -translate-y-1/2 text-gray-500' />
                      <input
                        type="tel"
                        value={teacherForm.phone}
                        onChange={(e) => setTeacherForm({ ...teacherForm, phone: e.target.value })}
                        className='w-full bg-white/5 border border-white/10 rounded-2xl pl-14 pr-6 py-5 text-sm font-bold text-white focus:ring-2 focus:ring-indigo-500/50'
                        placeholder="+91 98765 43210"
                      />
                    </div>
                  </div>
                  <div className='space-y-3 group'>
                    <label className='text-[10px] font-black text-gray-500 uppercase tracking-widest ml-1'>Portal Password</label>
                    <div className='relative'>
                      <MdBadge className='absolute left-5 top-1/2 -translate-y-1/2 text-gray-500' />
                      <input
                        type="password"
                        value={teacherForm.password}
                        onChange={(e) => setTeacherForm({ ...teacherForm, password: e.target.value })}
                        className='w-full bg-white/5 border border-white/10 rounded-2xl pl-14 pr-6 py-5 text-sm font-bold text-white focus:ring-2 focus:ring-indigo-500/50'
                        required
                      />
                    </div>
                  </div>
                </div>
              )}

              {currentStep === 2 && (
                <div className='space-y-10 animate-in fade-in slide-in-from-right-8 duration-500'>
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                    <div className='space-y-3'>
                      <label className='text-[10px] font-black text-gray-500 uppercase tracking-widest ml-1'>Primary Department</label>
                      <select
                        value={teacherForm.subject}
                        onChange={(e) => setTeacherForm({ ...teacherForm, subject: e.target.value })}
                        className='w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-sm font-bold text-white focus:ring-2 focus:ring-indigo-500/50 outline-none'
                      >
                        {subjects.map(s => <option key={s} value={s} className='bg-[#0f172a]'>{s}</option>)}
                      </select>
                    </div>
                    <div className='flex items-center gap-4 bg-white/5 border border-white/10 rounded-2xl px-8 py-5 mt-7'>
                      <input
                        type="checkbox"
                        id="isClassTeacher"
                        checked={teacherForm.isClassTeacher}
                        onChange={(e) => setTeacherForm({ ...teacherForm, isClassTeacher: e.target.checked })}
                        className='w-5 h-5 rounded-lg border-white/10 bg-black/20 text-indigo-600 focus:ring-indigo-500'
                      />
                      <label htmlFor="isClassTeacher" className='text-xs font-black text-white uppercase tracking-widest cursor-pointer'>Designate as Class Teacher</label>
                    </div>
                  </div>

                  <div className='space-y-4'>
                    <label className='text-[10px] font-black text-gray-500 uppercase tracking-widest ml-1'>Assigned Classes to Attend</label>
                    <div className='flex flex-wrap gap-3'>
                      {availableClasses.map((className) => (
                        <button
                          key={className}
                          type="button"
                          onClick={() => toggleAssignedClass(className)}
                          className={`px-6 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all border ${teacherForm.assignedClasses.includes(className)
                            ? 'bg-indigo-600 text-white border-indigo-500 shadow-lg shadow-indigo-600/20'
                            : 'bg-white/5 text-gray-500 border-white/10 hover:border-indigo-500/50'
                            }`}
                        >
                          {className}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {currentStep === 3 && (
                <div className='space-y-10 animate-in fade-in slide-in-from-right-8 duration-500'>
                  <div className='max-w-md space-y-3'>
                    <label className='text-[10px] font-black text-gray-500 uppercase tracking-widest ml-1'>Remuneration Package (Annual CTC)</label>
                    <div className='relative'>
                      <MdPayment className='absolute left-5 top-1/2 -translate-y-1/2 text-indigo-400' />
                      <input
                        type="number"
                        value={teacherForm.salary}
                        onChange={(e) => setTeacherForm({ ...teacherForm, salary: e.target.value })}
                        className='w-full bg-white/5 border border-white/10 rounded-2xl pl-14 pr-6 py-5 text-lg font-black text-white focus:ring-2 focus:ring-indigo-500/50'
                        placeholder="5,40,000"
                      />
                    </div>
                  </div>

                  <div className='space-y-6'>
                    <div className='flex items-center gap-3'>
                      <MdCalendarMonth className='text-indigo-400 text-xl' />
                      <h3 className='text-sm font-black text-white uppercase tracking-widest'>Weekly Duty Roster</h3>
                    </div>
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
                      {periods.map(period => (
                        <div key={period} className='p-6 bg-white/5 rounded-3xl border border-white/10 space-y-3 group hover:border-indigo-500/50 transition-colors'>
                          <p className='text-[8px] font-black text-gray-500 uppercase tracking-[0.3em] group-hover:text-indigo-400 transition-colors'>{period} Period</p>
                          <select
                            className='w-full bg-black/20 border border-white/5 rounded-xl px-3 py-2 text-xs font-bold text-white focus:ring-2 focus:ring-indigo-500/50 outline-none'
                            value={teacherForm.timetable.find(t => t.period === period)?.class || ""}
                            onChange={(e) => updateTimetable(period, e.target.value)}
                          >
                            <option value="" className='bg-[#0f172a]'>Unassigned</option>
                            {teacherForm.assignedClasses.map(c => (
                              <option key={c} value={c} className='bg-[#0f172a]'>{c}</option>
                            ))}
                          </select>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className='p-10 border-t border-white/10 bg-white/5 flex flex-col sm:flex-row justify-between items-center gap-6'>
              <button
                type="button"
                onClick={() => setIsAddModalOpen(false)}
                className='w-full sm:w-auto px-10 py-4 bg-white/5 hover:bg-white/10 text-white rounded-[20px] font-black text-[10px] uppercase tracking-widest transition-all border border-white/10'
              >
                Discard
              </button>
              <div className='flex flex-col sm:flex-row gap-4 w-full sm:w-auto'>
                {currentStep > 1 && (
                  <button
                    type="button"
                    onClick={() => setCurrentStep(prev => prev - 1)}
                    className='px-10 py-4 bg-white/5 hover:bg-white/10 text-white rounded-[20px] font-black text-[10px] uppercase tracking-widest transition-all border border-white/10'
                  >
                    Previous
                  </button>
                )}
                {currentStep < 3 ? (
                  <button
                    type="button"
                    onClick={() => setCurrentStep(prev => prev + 1)}
                    className='px-12 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-[20px] font-black text-[10px] uppercase tracking-widest transition-all flex items-center justify-center gap-3 shadow-2xl shadow-indigo-600/30'
                  >
                    Continue <MdArrowForward />
                  </button>
                ) : (
                  <button
                    type="submit"
                    className='px-12 py-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-[20px] font-black text-[10px] uppercase tracking-widest transition-all flex items-center justify-center gap-3 shadow-2xl shadow-emerald-600/30'
                  >
                    <MdSave size={20} />
                    Authorize Record
                  </button>
                )}
              </div>
            </div>
          </form>
        </div>
      )}
    </div>
  )
}

export default TeacherAdmin