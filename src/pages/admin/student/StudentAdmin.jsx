import React, { useState, useMemo } from 'react'
import {
  MdPersonAdd, MdGroups, MdSchool, MdSearch,
  MdCheckCircle, MdError, MdFileDownload, MdDelete, MdEdit,
  MdFilterList, MdClose, MdSave, MdArrowForward, MdAnalytics,
  MdOutlineLibraryBooks, MdOutlineCalculate, MdSort, MdBadge,
  MdCalendarMonth, MdAssignmentInd, MdLocationOn, MdBloodtype,
  MdPhone, MdEmail, MdCake, MdWc
} from 'react-icons/md'

function StudentAdmin() {
  const [classes, setClasses] = useState(['1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th', '9th', '10th', '11th', '12th'])
  const [sections, setSections] = useState(['A', 'B', 'C', 'D'])
  const [searchQuery, setSearchQuery] = useState('')
  const [filterClass, setFilterClass] = useState('All')
  const [filterSection, setFilterSection] = useState('All')

  // Modal states
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedStudent, setSelectedStudent] = useState(null);

  const [students, setStudents] = useState([
    {
      id: 1,
      name: 'Munesh Atul',
      rollNo: '101',
      class: '7th',
      section: 'A',
      gender: 'Male',
      parentName: 'Atul Kumar',
      phone: '9876543210',
      email: 'munesh@example.com',
      address: '123 Excellence St, Sector 4',
      dob: '2011-05-15',
      bloodGroup: 'O+',
      admissionDate: '2023-04-01',
      password: 'password123',
      status: 'Active'
    },
    {
      id: 2,
      name: 'Sneha Singh',
      rollNo: '102',
      class: '6th',
      section: 'B',
      gender: 'Female',
      parentName: 'Vikram Singh',
      phone: '9876543211',
      email: 'sneha@example.com',
      address: '456 Wisdom Ave, Block C',
      dob: '2012-08-20',
      bloodGroup: 'A+',
      admissionDate: '2023-04-01',
      password: 'password123',
      status: 'Active'
    }
  ])

  const [studentForm, setStudentForm] = useState({
    name: '',
    rollNo: '',
    class: '1st',
    section: 'A',
    gender: 'Male',
    parentName: '',
    phone: '',
    email: '',
    address: '',
    dob: '',
    bloodGroup: 'A+',
    admissionDate: new Date().toISOString().split('T')[0],
    password: 'password123'
  })

  const stats = useMemo(() => ({
    total: students.length,
    active: students.filter(s => s.status === 'Active').length,
    newAdmissions: 12 // Placeholder
  }), [students]);

  const filteredStudents = students.filter(student =>
    (filterClass === 'All' || student.class === filterClass) &&
    (filterSection === 'All' || student.section === filterSection) &&
    (student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      student.rollNo.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const handleAddClick = () => {
    setSelectedStudent(null);
    setStudentForm({
      name: '', rollNo: '', class: '1st', section: 'A', gender: 'Male',
      parentName: '', phone: '', email: '', address: '', dob: '',
      bloodGroup: 'A+', admissionDate: new Date().toISOString().split('T')[0],
      password: 'password123'
    });
    setCurrentStep(1);
    setIsAddModalOpen(true);
  };

  const handleSaveStudent = (e) => {
    e.preventDefault();
    setStudents(prev => [...prev, { ...studentForm, id: Date.now(), status: 'Active' }]);
    setIsAddModalOpen(false);
  };

  const generateDummyData = () => {
    const names = ['Alice Brown', 'Bob Wilson', 'Charlie Davis', 'Diana Evans', 'Ethan Hunt', 'Fiona Gallagher', 'George Miller', 'Hannah Abbott', 'Ian Wright', 'Jenny Slate']
    const dummyClasses = ['6th', '7th', '8th', '9th', '10th', '11th', '12th']
    const dummySections = ['A', 'B', 'C', 'D']
    const genders = ['Male', 'Female']
    const bloodGroups = ['A+', 'B+', 'O+', 'AB+', 'A-', 'B-', 'O-', 'AB-']

    const newDummyStudents = names.map((name, index) => ({
      id: Date.now() + index,
      name,
      rollNo: (1000 + index).toString(),
      class: dummyClasses[Math.floor(Math.random() * dummyClasses.length)],
      section: dummySections[Math.floor(Math.random() * dummySections.length)],
      gender: genders[Math.floor(Math.random() * genders.length)],
      parentName: `Parent ${index + 1}`,
      phone: `900000000${index}`,
      email: `${name.toLowerCase().replace(' ', '.')}@example.com`,
      address: `${100 + index} Dummy St, City`,
      dob: '2015-01-01',
      bloodGroup: bloodGroups[Math.floor(Math.random() * bloodGroups.length)],
      admissionDate: new Date().toISOString().split('T')[0],
      password: 'studentpassword',
      status: 'Active'
    }))

    setStudents(prev => [...prev, ...newDummyStudents])
  }

  return (
    <div className='w-full space-y-10 animate-in fade-in slide-in-from-bottom-6 duration-1000 pb-20 relative'>

      {/* 1. Header with Advanced Stats */}
      <div className='flex flex-col xl:flex-row justify-between items-start xl:items-end gap-8'>
        <div className='space-y-4'>
          <div className='flex items-center gap-3'>
            <div className='w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-blue-600/30'>
              <MdGroups size={28} />
            </div>
            <div>
              <h1 className='text-4xl font-black text-white tracking-tighter uppercase'>Student <span className='text-blue-400'>Registry</span></h1>
              <p className='text-gray-500 font-bold text-xs uppercase tracking-[0.2em] mt-1.5'>Admission & Enrollment Management</p>
            </div>
          </div>
        </div>

        <div className='flex flex-wrap gap-4 w-full xl:w-auto'>
          <div className='flex-1 xl:flex-none bg-white/5 border border-white/10 rounded-3xl p-4 flex items-center gap-4 min-w-[180px]'>
            <div className='w-10 h-10 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center'>
              <MdAssignmentInd size={20} />
            </div>
            <div>
              <p className='text-[10px] font-black text-gray-500 uppercase tracking-widest'>Total Enrollment</p>
              <p className='text-xl font-black text-white'>{stats.total}</p>
            </div>
          </div>
          <div className='flex-1 xl:flex-none bg-white/5 border border-white/10 rounded-3xl p-4 flex items-center gap-4 min-w-[180px]'>
            <div className='w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center'>
              <MdCheckCircle size={20} />
            </div>
            <div>
              <p className='text-[10px] font-black text-gray-500 uppercase tracking-widest'>Active Scholars</p>
              <p className='text-xl font-black text-white'>{stats.active}</p>
            </div>
          </div>
          <button
            onClick={handleAddClick}
            className='w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-[20px] font-black uppercase tracking-widest text-[10px] shadow-2xl shadow-blue-600/20 transition-all active:scale-95 flex items-center justify-center gap-3'
          >
            <MdPersonAdd size={20} />
            New Admission
          </button>
        </div>
      </div>

      {/* 2. Student Ledger */}
      <div className='bg-white/5 rounded-[45px] border border-white/10 overflow-hidden backdrop-blur-3xl'>
        {/* Ledger Toolbar */}
        <div className='p-8 border-b border-white/10 bg-white/5 flex flex-col lg:flex-row justify-between items-center gap-6'>
          <div className='flex items-center gap-4 w-full lg:w-auto overflow-x-auto no-scrollbar pb-2 lg:pb-0'>
            <div className='flex bg-black/20 p-1.5 rounded-2xl border border-white/5'>
              <select
                value={filterClass}
                onChange={(e) => setFilterClass(e.target.value)}
                className='bg-transparent border-none outline-none text-[10px] font-black text-white uppercase tracking-widest px-4 py-2 cursor-pointer'
              >
                <option value="All" className='bg-[#0f172a]'>All Classes</option>
                {classes.map(c => <option key={c} value={c} className='bg-[#0f172a]'>{c}</option>)}
              </select>
              <div className='w-px h-4 bg-white/10 self-center mx-2'></div>
              <select
                value={filterSection}
                onChange={(e) => setFilterSection(e.target.value)}
                className='bg-transparent border-none outline-none text-[10px] font-black text-white uppercase tracking-widest px-4 py-2 cursor-pointer'
              >
                <option value="All" className='bg-[#0f172a]'>All Sections</option>
                {sections.map(s => <option key={s} value={s} className='bg-[#0f172a]'>{s}</option>)}
              </select>
            </div>
            <button
              onClick={generateDummyData}
              className='px-6 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl text-[10px] font-black text-gray-400 hover:text-white uppercase tracking-widest transition-all whitespace-nowrap'
            >
              Load Samples
            </button>
          </div>

          <div className='relative w-full lg:w-[400px]'>
            <MdSearch className='absolute left-5 top-1/2 -translate-y-1/2 text-gray-500' size={22} />
            <input
              type="text"
              placeholder="Search student name or roll no..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className='w-full bg-black/20 border border-white/10 rounded-[20px] pl-14 pr-6 py-4 text-sm font-bold text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50'
            />
          </div>
        </div>

        {/* Ledger List */}
        <div className='overflow-x-auto'>
          <table className='w-full text-left border-collapse'>
            <thead>
              <tr className='bg-white/5'>
                <th className='p-8 text-[10px] font-black text-gray-500 uppercase tracking-[0.3em]'>Scholar Info</th>
                <th className='p-8 text-[10px] font-black text-gray-500 uppercase tracking-[0.3em]'>Class/Section</th>
                <th className='p-8 text-[10px] font-black text-gray-500 uppercase tracking-[0.3em]'>Status</th>
                <th className='p-8 text-[10px] font-black text-gray-500 uppercase tracking-[0.3em]'>Enrollment ID</th>
                <th className='p-8 text-[10px] font-black text-gray-500 uppercase tracking-[0.3em] text-right'>Command</th>
              </tr>
            </thead>
            <tbody className='divide-y divide-white/5'>
              {filteredStudents.map((student) => (
                <tr key={student.id} className='hover:bg-blue-600/[0.03] transition-colors group'>
                  <td className='p-8'>
                    <div className='flex items-center gap-5'>
                      <div className='w-14 h-14 rounded-[20px] bg-gradient-to-tr from-blue-600/20 to-indigo-600/20 text-blue-400 flex items-center justify-center text-xl font-black border border-white/5 group-hover:scale-110 transition-transform duration-500'>
                        {student.name.charAt(0)}
                      </div>
                      <div>
                        <p className='text-base font-black text-white group-hover:text-blue-400 transition-colors'>{student.name}</p>
                        <p className='text-[10px] text-gray-500 font-bold uppercase tracking-widest mt-1'>{student.parentName}</p>
                      </div>
                    </div>
                  </td>
                  <td className='p-8'>
                    <div className='flex items-center gap-3'>
                      <span className='px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-xs font-black text-white uppercase tracking-widest'>Grade {student.class}</span>
                      <span className='px-3 py-2 bg-blue-600/10 border border-blue-500/20 rounded-xl text-xs font-black text-blue-400 uppercase tracking-widest'>{student.section}</span>
                    </div>
                  </td>
                  <td className='p-8'>
                    <div className={`flex items-center gap-2.5 px-4 py-2 rounded-2xl w-fit border ${student.status === 'Active'
                        ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
                        : 'bg-rose-500/10 text-rose-400 border-rose-500/20'
                      }`}>
                      <div className={`w-1.5 h-1.5 rounded-full ${student.status === 'Active' ? 'bg-emerald-500' : 'bg-rose-500'}`}></div>
                      <span className='text-[10px] font-black uppercase tracking-[0.1em]'>{student.status}</span>
                    </div>
                  </td>
                  <td className='p-8'>
                    <span className='text-xs font-mono font-black text-gray-400 tracking-widest bg-white/5 px-4 py-2 rounded-xl'>#{student.rollNo}</span>
                  </td>
                  <td className='p-8'>
                    <div className='flex items-center justify-end gap-3'>
                      <button
                        onClick={() => setSelectedStudent(student)}
                        className='w-10 h-10 bg-white/5 hover:bg-blue-600/20 text-blue-400 rounded-xl transition-all flex items-center justify-center border border-white/5'
                        title="View Profile"
                      >
                        <MdAssignmentInd size={18} />
                      </button>
                      <button className='w-10 h-10 bg-white/5 hover:bg-indigo-600/20 text-indigo-400 rounded-xl transition-all flex items-center justify-center border border-white/5' title="Edit Scholar">
                        <MdEdit size={18} />
                      </button>
                      <button
                        onClick={() => {
                          if (window.confirm('Archive this scholar record?')) {
                            setStudents(prev => prev.filter(s => s.id !== student.id));
                          }
                        }}
                        className='w-10 h-10 bg-white/5 hover:bg-rose-600/20 text-rose-400 rounded-xl transition-all flex items-center justify-center border border-white/5'
                        title="Delete Record"
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
      </div>

      {/* 3. Multi-Step Admission Modal */}
      {isAddModalOpen && (
        <div className='fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 overflow-hidden'>
          <div className='absolute inset-0 bg-[#020617]/95 backdrop-blur-2xl animate-in fade-in duration-500' onClick={() => setIsAddModalOpen(false)} />

          <form
            onSubmit={handleSaveStudent}
            className='relative w-full max-w-4xl bg-[#0f172a] rounded-[50px] border border-white/10 shadow-2xl overflow-hidden animate-in zoom-in-95 duration-500 flex flex-col max-h-[95vh]'
          >
            {/* Modal Header */}
            <div className='p-10 border-b border-white/10 bg-gradient-to-r from-blue-600/10 via-indigo-600/5 to-transparent flex flex-col md:flex-row justify-between items-start md:items-center gap-6'>
              <div className='flex items-center gap-6'>
                <div className='w-20 h-20 bg-blue-600 rounded-[25px] flex items-center justify-center text-white shadow-2xl shadow-blue-600/40 border border-white/10'>
                  <MdPersonAdd size={40} />
                </div>
                <div className='space-y-1'>
                  <h2 className='text-3xl font-black text-white tracking-tighter leading-tight'>Scholar <span className='text-blue-400'>Admission</span></h2>
                  <div className='flex items-center gap-3'>
                    <p className='text-white font-bold text-sm tracking-wide'>New Enrollment Portal</p>
                    <div className='w-1 h-1 bg-white/20 rounded-full'></div>
                    <p className='text-gray-500 font-bold text-xs uppercase tracking-widest'>Step {currentStep} of 3</p>
                  </div>
                </div>
              </div>

              <div className='flex gap-2 bg-black/20 p-1.5 rounded-2xl border border-white/5'>
                {[1, 2, 3].map(step => (
                  <div key={step} className={`w-8 h-8 rounded-xl flex items-center justify-center text-xs font-black transition-all ${currentStep === step ? 'bg-blue-600 text-white shadow-lg' : 'text-gray-500'
                    }`}>
                    {step}
                  </div>
                ))}
              </div>
            </div>

            <div className='flex-1 overflow-y-auto p-10 custom-scrollbar'>
              {currentStep === 1 && (
                <div className='grid grid-cols-1 md:grid-cols-2 gap-8 animate-in fade-in slide-in-from-right-8 duration-500'>
                  <div className='space-y-3'>
                    <label className='text-[10px] font-black text-gray-500 uppercase tracking-widest ml-1'>Student Full Name</label>
                    <div className='relative'>
                      <MdBadge className='absolute left-5 top-1/2 -translate-y-1/2 text-gray-500' />
                      <input
                        type="text"
                        value={studentForm.name}
                        onChange={(e) => setStudentForm({ ...studentForm, name: e.target.value })}
                        className='w-full bg-white/5 border border-white/10 rounded-2xl pl-14 pr-6 py-5 text-sm font-bold text-white focus:ring-2 focus:ring-blue-500/50'
                        placeholder="e.g. John Doe"
                        required
                      />
                    </div>
                  </div>
                  <div className='space-y-3'>
                    <label className='text-[10px] font-black text-gray-500 uppercase tracking-widest ml-1'>Roll Number (Unique ID)</label>
                    <div className='relative'>
                      <MdOutlineCalculate className='absolute left-5 top-1/2 -translate-y-1/2 text-gray-500' />
                      <input
                        type="text"
                        value={studentForm.rollNo}
                        onChange={(e) => setStudentForm({ ...studentForm, rollNo: e.target.value })}
                        className='w-full bg-white/5 border border-white/10 rounded-2xl pl-14 pr-6 py-5 text-sm font-bold text-white focus:ring-2 focus:ring-blue-500/50'
                        placeholder="e.g. 202401"
                        required
                      />
                    </div>
                  </div>
                  <div className='space-y-3'>
                    <label className='text-[10px] font-black text-gray-500 uppercase tracking-widest ml-1'>Date of Birth</label>
                    <div className='relative'>
                      <MdCake className='absolute left-5 top-1/2 -translate-y-1/2 text-gray-500' />
                      <input
                        type="date"
                        value={studentForm.dob}
                        onChange={(e) => setStudentForm({ ...studentForm, dob: e.target.value })}
                        className='w-full bg-white/5 border border-white/10 rounded-2xl pl-14 pr-6 py-5 text-sm font-bold text-white focus:ring-2 focus:ring-blue-500/50'
                        required
                      />
                    </div>
                  </div>
                  <div className='space-y-3'>
                    <label className='text-[10px] font-black text-gray-500 uppercase tracking-widest ml-1'>Gender</label>
                    <div className='relative'>
                      <MdWc className='absolute left-5 top-1/2 -translate-y-1/2 text-gray-500' />
                      <select
                        value={studentForm.gender}
                        onChange={(e) => setStudentForm({ ...studentForm, gender: e.target.value })}
                        className='w-full bg-white/5 border border-white/10 rounded-2xl pl-14 pr-6 py-5 text-sm font-bold text-white focus:ring-2 focus:ring-blue-500/50 outline-none appearance-none'
                      >
                        <option value="Male" className='bg-[#0f172a]'>Male</option>
                        <option value="Female" className='bg-[#0f172a]'>Female</option>
                        <option value="Other" className='bg-[#0f172a]'>Other</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}

              {currentStep === 2 && (
                <div className='grid grid-cols-1 md:grid-cols-2 gap-8 animate-in fade-in slide-in-from-right-8 duration-500'>
                  <div className='space-y-3'>
                    <label className='text-[10px] font-black text-gray-500 uppercase tracking-widest ml-1'>Assigned Grade</label>
                    <select
                      value={studentForm.class}
                      onChange={(e) => setStudentForm({ ...studentForm, class: e.target.value })}
                      className='w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-sm font-bold text-white focus:ring-2 focus:ring-blue-500/50'
                    >
                      {classes.map(c => <option key={c} value={c} className='bg-[#0f172a]'>{c}</option>)}
                    </select>
                  </div>
                  <div className='space-y-3'>
                    <label className='text-[10px] font-black text-gray-500 uppercase tracking-widest ml-1'>Assigned Section</label>
                    <select
                      value={studentForm.section}
                      onChange={(e) => setStudentForm({ ...studentForm, section: e.target.value })}
                      className='w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-sm font-bold text-white focus:ring-2 focus:ring-blue-500/50'
                    >
                      {sections.map(s => <option key={s} value={s} className='bg-[#0f172a]'>{s}</option>)}
                    </select>
                  </div>
                  <div className='space-y-3'>
                    <label className='text-[10px] font-black text-gray-500 uppercase tracking-widest ml-1'>Father/Guardian Name</label>
                    <input
                      type="text"
                      value={studentForm.parentName}
                      onChange={(e) => setStudentForm({ ...studentForm, parentName: e.target.value })}
                      className='w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-sm font-bold text-white focus:ring-2 focus:ring-blue-500/50'
                      placeholder="e.g. Robert Smith"
                    />
                  </div>
                  <div className='space-y-3'>
                    <label className='text-[10px] font-black text-gray-500 uppercase tracking-widest ml-1'>Contact Phone</label>
                    <div className='relative'>
                      <MdPhone className='absolute left-5 top-1/2 -translate-y-1/2 text-gray-500' />
                      <input
                        type="tel"
                        value={studentForm.phone}
                        onChange={(e) => setStudentForm({ ...studentForm, phone: e.target.value })}
                        className='w-full bg-white/5 border border-white/10 rounded-2xl pl-14 pr-6 py-5 text-sm font-bold text-white focus:ring-2 focus:ring-blue-500/50'
                        placeholder="+91 00000 00000"
                      />
                    </div>
                  </div>
                </div>
              )}

              {currentStep === 3 && (
                <div className='space-y-8 animate-in fade-in slide-in-from-right-8 duration-500'>
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                    <div className='space-y-3'>
                      <label className='text-[10px] font-black text-gray-500 uppercase tracking-widest ml-1'>Scholar Email</label>
                      <div className='relative'>
                        <MdEmail className='absolute left-5 top-1/2 -translate-y-1/2 text-gray-500' />
                        <input
                          type="email"
                          value={studentForm.email}
                          onChange={(e) => setStudentForm({ ...studentForm, email: e.target.value })}
                          className='w-full bg-white/5 border border-white/10 rounded-2xl pl-14 pr-6 py-5 text-sm font-bold text-white focus:ring-2 focus:ring-blue-500/50'
                          placeholder="scholar@school.com"
                        />
                      </div>
                    </div>
                    <div className='space-y-3'>
                      <label className='text-[10px] font-black text-gray-500 uppercase tracking-widest ml-1'>Blood Group</label>
                      <div className='relative'>
                        <MdBloodtype className='absolute left-5 top-1/2 -translate-y-1/2 text-gray-500' />
                        <select
                          value={studentForm.bloodGroup}
                          onChange={(e) => setStudentForm({ ...studentForm, bloodGroup: e.target.value })}
                          className='w-full bg-white/5 border border-white/10 rounded-2xl pl-14 pr-6 py-5 text-sm font-bold text-white focus:ring-2 focus:ring-blue-500/50 outline-none appearance-none'
                        >
                          {['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'].map(bg => <option key={bg} value={bg} className='bg-[#0f172a]'>{bg}</option>)}
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className='space-y-3'>
                    <label className='text-[10px] font-black text-gray-500 uppercase tracking-widest ml-1'>Permanent Address</label>
                    <div className='relative'>
                      <MdLocationOn className='absolute left-5 top-6 text-gray-500' />
                      <textarea
                        value={studentForm.address}
                        onChange={(e) => setStudentForm({ ...studentForm, address: e.target.value })}
                        className='w-full bg-white/5 border border-white/10 rounded-[30px] pl-14 pr-6 py-5 text-sm font-bold text-white focus:ring-2 focus:ring-blue-500/50 min-h-[120px] resize-none'
                        placeholder="Street, City, State, Zip..."
                      ></textarea>
                    </div>
                  </div>
                </div>
              )}
            </div>

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
                    className='px-12 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-[20px] font-black text-[10px] uppercase tracking-widest transition-all flex items-center justify-center gap-3 shadow-2xl shadow-blue-600/30'
                  >
                    Continue <MdArrowForward />
                  </button>
                ) : (
                  <button
                    type="submit"
                    className='px-12 py-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-[20px] font-black text-[10px] uppercase tracking-widest transition-all flex items-center justify-center gap-3 shadow-2xl shadow-emerald-600/30'
                  >
                    <MdSave size={20} />
                    Complete Admission
                  </button>
                )}
              </div>
            </div>
          </form>
        </div>
      )}

      {/* 4. Scholar Detail Modal (View Only) */}
      {selectedStudent && !isAddModalOpen && (
        <div className='fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 overflow-hidden'>
          <div className='absolute inset-0 bg-[#020617]/95 backdrop-blur-2xl animate-in fade-in duration-500' onClick={() => setSelectedStudent(null)} />
          <div className='relative w-full max-w-2xl bg-[#0f172a] rounded-[50px] border border-white/10 shadow-2xl overflow-hidden animate-in zoom-in-95 duration-500'>
            <div className='p-10 bg-gradient-to-br from-blue-600/20 to-transparent border-b border-white/10 flex justify-between items-center'>
              <div className='flex items-center gap-6'>
                <div className='w-20 h-20 rounded-[30px] bg-blue-600 flex items-center justify-center text-3xl font-black text-white shadow-2xl shadow-blue-600/30'>
                  {selectedStudent.name.charAt(0)}
                </div>
                <div>
                  <h3 className='text-3xl font-black text-white tracking-tighter'>{selectedStudent.name}</h3>
                  <p className='text-blue-400 font-bold text-xs uppercase tracking-[0.3em] mt-1'>Scholar Profile</p>
                </div>
              </div>
              <button onClick={() => setSelectedStudent(null)} className='w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-gray-500 hover:text-white transition-colors border border-white/10'>
                <MdClose size={24} />
              </button>
            </div>
            <div className='p-10 space-y-8'>
              <div className='grid grid-cols-2 gap-8'>
                <div className='space-y-1'>
                  <p className='text-[8px] font-black text-gray-500 uppercase tracking-widest'>Enrollment ID</p>
                  <p className='text-sm font-black text-white tracking-widest'>#{selectedStudent.rollNo}</p>
                </div>
                <div className='space-y-1'>
                  <p className='text-[8px] font-black text-gray-500 uppercase tracking-widest'>Academic Grade</p>
                  <p className='text-sm font-black text-white'>{selectedStudent.class} - Section {selectedStudent.section}</p>
                </div>
                <div className='space-y-1'>
                  <p className='text-[8px] font-black text-gray-500 uppercase tracking-widest'>Parent/Guardian</p>
                  <p className='text-sm font-black text-white'>{selectedStudent.parentName}</p>
                </div>
                <div className='space-y-1'>
                  <p className='text-[8px] font-black text-gray-500 uppercase tracking-widest'>Contact Phone</p>
                  <p className='text-sm font-black text-white'>{selectedStudent.phone}</p>
                </div>
              </div>
              <div className='p-6 bg-white/5 rounded-3xl border border-white/5'>
                <p className='text-[8px] font-black text-gray-500 uppercase tracking-widest mb-2'>Residential Address</p>
                <p className='text-sm font-medium text-gray-400 leading-relaxed italic'>"{selectedStudent.address}"</p>
              </div>
            </div>
            <div className='p-10 bg-white/5 border-t border-white/10 flex justify-end'>
              <button onClick={() => setSelectedStudent(null)} className='px-10 py-4 bg-blue-600 text-white rounded-[20px] font-black text-[10px] uppercase tracking-widest shadow-xl shadow-blue-600/20 active:scale-95 transition-all'>
                Close Record
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default StudentAdmin
