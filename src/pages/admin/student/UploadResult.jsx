import React, { useState, useMemo } from 'react'
import {
  MdCloudUpload, MdPeople, MdSchool, MdSearch,
  MdCheckCircle, MdError, MdFileDownload, MdDelete, MdEdit,
  MdFilterList, MdClose, MdSave, MdArrowForward, MdAnalytics,
  MdOutlineLibraryBooks, MdOutlineCalculate, MdSort
} from 'react-icons/md'

function UploadResult() {
  const [selectedClass, setSelectedClass] = useState('1st');
  const [selectedSection, setSelectedSection] = useState('A');
  const [selectedTerm, setSelectedTerm] = useState('Final');
  const [searchQuery, setSearchQuery] = useState('');

  // Modal states
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
  const [uploadingStudent, setUploadingStudent] = useState(null);
  const [marks, setMarks] = useState({
    mathematics: '',
    science: '',
    english: '',
    hindi: '',
    socialScience: ''
  });

  // Helper to calculate totals and grades
  const calculatedResult = useMemo(() => {
    const values = Object.values(marks).map(v => parseFloat(v) || 0);
    const total = values.reduce((sum, val) => sum + val, 0);
    const percentage = (total / 500) * 100;

    let grade = 'F';
    if (percentage >= 90) grade = 'A+';
    else if (percentage >= 80) grade = 'A';
    else if (percentage >= 70) grade = 'B';
    else if (percentage >= 60) grade = 'C';
    else if (percentage >= 50) grade = 'D';

    return { total, percentage: percentage.toFixed(1), grade };
  }, [marks]);

  // Mock student data
  const initialStudents = [
    { id: 1, name: "Munesh Atul", rollNo: "1st-A-45", class: "1st", section: "A", status: "Uploaded", lastUpdate: '2 mins ago', marks: { mathematics: 85, science: 78, english: 92, hindi: 88, socialScience: 84 } },
    { id: 2, name: "Rahul Kumar", rollNo: "1st-A-12", class: "1st", section: "A", status: "Pending", lastUpdate: '---', marks: null },
    { id: 3, name: "Sneha Singh", rollNo: "1st-B-05", class: "1st", section: "B", status: "Uploaded", lastUpdate: '1 day ago', marks: { mathematics: 95, science: 88, english: 82, hindi: 78, socialScience: 94 } },
    { id: 4, name: "Amit Patel", rollNo: "2nd-C-22", class: "2nd", section: "C", status: "Pending", lastUpdate: '---', marks: null },
    { id: 5, name: "Priya Sharma", rollNo: "1st-A-08", class: "1st", section: "A", status: "Uploaded", lastUpdate: '3 hours ago', marks: { mathematics: 75, science: 68, english: 72, hindi: 68, socialScience: 74 } },
  ];

  const [studentsList, setStudentsList] = useState(initialStudents);

  const classes = ['1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th', '9th', '10th', '11th', '12th'];
  const sections = ['A', 'B', 'C', 'D'];

  const filteredStudents = studentsList.filter(student =>
    (selectedClass === '' || student.class === selectedClass) &&
    (selectedSection === '' || student.section === selectedSection) &&
    (student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      student.rollNo.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const handleUploadClick = (student) => {
    setUploadingStudent(student);
    if (student.marks) {
      setMarks(student.marks);
    } else {
      setMarks({ mathematics: '', science: '', english: '', hindi: '', socialScience: '' });
    }
    setIsUploadModalOpen(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (value === '' || (parseFloat(value) >= 0 && parseFloat(value) <= 100)) {
      setMarks(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSaveResult = (e) => {
    e.preventDefault();
    setStudentsList(prev => prev.map(s =>
      s.id === uploadingStudent.id
        ? { ...s, status: 'Uploaded', lastUpdate: 'Just now', marks: { ...marks } }
        : s
    ));
    setIsUploadModalOpen(false);
    setMarks({ mathematics: '', science: '', english: '', hindi: '', socialScience: '' });
  };

  // Header stats calculations
  const stats = useMemo(() => {
    const uploaded = studentsList.filter(s => s.status === 'Uploaded').length;
    const pending = studentsList.filter(s => s.status === 'Pending').length;
    return { uploaded, pending };
  }, [studentsList]);

  return (
    <div className='w-full space-y-10 animate-in fade-in slide-in-from-bottom-6 duration-1000 pb-20 relative'>

      {/* 1. Header with Advanced Stats */}
      <div className='flex flex-col xl:flex-row justify-between items-start xl:items-end gap-8'>
        <div className='space-y-4'>
          <div className='flex items-center gap-3'>
            <div className='w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-blue-600/30'>
              <MdAnalytics size={28} />
            </div>
            <div>
              <h1 className='text-4xl font-black text-white tracking-tighter uppercase'>Academic <span className='text-blue-400'>Ledger</span></h1>
              <p className='text-gray-500 font-bold text-xs uppercase tracking-[0.2em] mt-1'>School Result Management System</p>
            </div>
          </div>
        </div>

        <div className='flex flex-wrap gap-4 w-full xl:w-auto'>
          <div className='flex-1 xl:flex-none bg-white/5 border border-white/10 rounded-3xl p-4 flex items-center gap-4 min-w-[180px]'>
            <div className='w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center'>
              <MdCheckCircle size={20} />
            </div>
            <div>
              <p className='text-[10px] font-black text-gray-500 uppercase tracking-widest'>Uploaded</p>
              <p className='text-xl font-black text-white'>{stats.uploaded} <span className='text-[10px] text-emerald-500 ml-1'>+1</span></p>
            </div>
          </div>
          <div className='flex-1 xl:flex-none bg-white/5 border border-white/10 rounded-3xl p-4 flex items-center gap-4 min-w-[180px]'>
            <div className='w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center'>
              <MdError size={20} />
            </div>
            <div>
              <p className='text-[10px] font-black text-gray-500 uppercase tracking-widest'>Pending</p>
              <p className='text-xl font-black text-white'>{stats.pending}</p>
            </div>
          </div>
          <button
            onClick={() => {
              const csvContent = "data:text/csv;charset=utf-8,"
                + "Roll No,Name,Status,Math,Science,English,Hindi,Social Science\n"
                + studentsList.map(s => `${s.rollNo},${s.name},${s.status},${s.marks?.mathematics || 0},${s.marks?.science || 0},${s.marks?.english || 0},${s.marks?.hindi || 0},${s.marks?.socialScience || 0}`).join("\n");
              const encodedUri = encodeURI(csvContent);
              const link = document.createElement("a");
              link.setAttribute("href", encodedUri);
              link.setAttribute("download", `academic_ledger_${selectedClass}_${selectedSection}.csv`);
              document.body.appendChild(link);
              link.click();
            }}
            className='w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-[20px] font-black uppercase tracking-widest text-[10px] shadow-2xl shadow-blue-600/20 transition-all active:scale-95 flex items-center justify-center gap-3'
          >
            <MdCloudUpload size={20} />
            Export CSV
          </button>
        </div>
      </div>

      {/* 2. Interactive Class Selector Binder */}
      <div className='space-y-6'>
        <div className='flex items-center justify-between px-2'>
          <div className='flex items-center gap-3'>
            <MdOutlineLibraryBooks className='text-blue-400 text-2xl' />
            <h2 className='text-xl font-black text-white tracking-tight'>Class Directories</h2>
          </div>
          <div className='flex items-center gap-2 bg-white/5 px-4 py-2 rounded-xl border border-white/10'>
            <MdSort className='text-gray-500' />
            <span className='text-[10px] font-black text-gray-400 uppercase tracking-widest'>Active Session: 2024-25</span>
          </div>
        </div>

        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4'>
          {classes.map((cls) => (
            <button
              key={cls}
              onClick={() => setSelectedClass(cls)}
              className={`group relative h-24 rounded-[30px] border transition-all duration-500 overflow-hidden flex flex-col items-center justify-center gap-1 ${selectedClass === cls
                ? 'bg-blue-600 border-blue-500 shadow-xl shadow-blue-600/20'
                : 'bg-white/5 border-white/10 hover:bg-white/10'
                }`}
            >
              <div className={`absolute -right-4 -top-4 w-16 h-16 rounded-full blur-2xl opacity-20 ${selectedClass === cls ? 'bg-white' : 'bg-blue-600'}`}></div>
              <span className={`text-2xl font-black tracking-tighter ${selectedClass === cls ? 'text-white' : 'text-gray-400 group-hover:text-white'}`}>{cls}</span>
              <span className={`text-[8px] font-black uppercase tracking-[0.2em] ${selectedClass === cls ? 'text-blue-100' : 'text-gray-600'}`}>Grade Folder</span>
            </button>
          ))}
        </div>
      </div>

      {/* 3. Section & Student Ledger */}
      <div className='bg-white/5 rounded-[45px] border border-white/10 overflow-hidden backdrop-blur-3xl'>
        {/* Ledger Toolbar */}
        <div className='p-8 border-b border-white/10 bg-white/5 flex flex-col lg:flex-row justify-between items-center gap-6'>
          <div className='flex items-center gap-4 w-full lg:w-auto overflow-x-auto no-scrollbar pb-2 lg:pb-0'>
            <div className='flex bg-black/20 p-1.5 rounded-2xl border border-white/5'>
              {sections.map(sec => (
                <button
                  key={sec}
                  onClick={() => setSelectedSection(sec)}
                  className={`px-6 py-2.5 rounded-xl font-black text-[10px] uppercase tracking-widest transition-all ${selectedSection === sec ? 'bg-blue-600 text-white shadow-lg' : 'text-gray-500 hover:text-white'
                    }`}
                >
                  Section {sec}
                </button>
              ))}
            </div>
            <div className='h-8 w-[1px] bg-white/10'></div>
            <select
              value={selectedTerm}
              onChange={(e) => setSelectedTerm(e.target.value)}
              className='bg-transparent text-sm font-black text-blue-400 focus:outline-none cursor-pointer uppercase tracking-widest'
            >
              <option value="Quarterly" className='bg-[#0f172a] text-white'>Quarterly Exam</option>
              <option value="Mid-Term" className='bg-[#0f172a] text-white'>Mid-Term Exam</option>
              <option value="Final" className='bg-[#0f172a] text-white'>Final Examination</option>
            </select>
          </div>

          <div className='relative w-full lg:w-[400px]'>
            <MdSearch className='absolute left-5 top-1/2 -translate-y-1/2 text-gray-500' size={22} />
            <input
              type="text"
              placeholder="Quick search student..."
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
                <th className='p-8 text-[10px] font-black text-gray-500 uppercase tracking-[0.3em]'>Student Profile</th>
                <th className='p-8 text-[10px] font-black text-gray-500 uppercase tracking-[0.3em]'>Academic Info</th>
                <th className='p-8 text-[10px] font-black text-gray-500 uppercase tracking-[0.3em]'>Status</th>
                <th className='p-8 text-[10px] font-black text-gray-500 uppercase tracking-[0.3em]'>Last Modified</th>
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
                        <p className='text-[10px] text-gray-500 font-bold uppercase tracking-widest mt-1'>ID: SCH-2024-{student.id}</p>
                      </div>
                    </div>
                  </td>
                  <td className='p-8'>
                    <div className='space-y-1'>
                      <p className='text-sm font-black text-white'>{student.rollNo}</p>
                      <p className='text-[10px] font-bold text-gray-500 uppercase tracking-tighter'>Section Master List</p>
                    </div>
                  </td>
                  <td className='p-8'>
                    <div className={`flex items-center gap-2.5 px-4 py-2 rounded-2xl w-fit border ${student.status === 'Uploaded'
                      ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
                      : 'bg-amber-500/10 text-amber-400 border-amber-500/20'
                      }`}>
                      <div className={`w-1.5 h-1.5 rounded-full ${student.status === 'Uploaded' ? 'bg-emerald-500' : 'bg-amber-500 animate-pulse'}`}></div>
                      <span className='text-[10px] font-black uppercase tracking-[0.1em]'>{student.status}</span>
                    </div>
                  </td>
                  <td className='p-8'>
                    <span className='text-xs font-bold text-gray-500'>{student.lastUpdate}</span>
                  </td>
                  <td className='p-8'>
                    <div className='flex items-center justify-end gap-3'>
                      {student.status === 'Uploaded' ? (
                        <>
                          <button
                            onClick={() => handleUploadClick(student)}
                            className='w-10 h-10 bg-white/5 hover:bg-blue-600/20 text-blue-400 rounded-xl transition-all flex items-center justify-center border border-white/5'
                            title="Edit Ledger"
                          >
                            <MdEdit size={18} />
                          </button>
                          <button className='w-10 h-10 bg-white/5 hover:bg-emerald-600/20 text-emerald-400 rounded-xl transition-all flex items-center justify-center border border-white/5' title="Export PDF">
                            <MdFileDownload size={18} />
                          </button>
                        </>
                      ) : (
                        <button
                          onClick={() => handleUploadClick(student)}
                          className='px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-[10px] font-black uppercase tracking-widest transition-all flex items-center gap-2 shadow-lg shadow-blue-600/20 active:scale-95'
                        >
                          Process <MdArrowForward />
                        </button>
                      )}
                      <button
                        onClick={() => {
                          if (window.confirm('Are you sure you want to remove this entry?')) {
                            setStudentsList(prev => prev.filter(s => s.id !== student.id));
                          }
                        }}
                        className='w-10 h-10 bg-white/5 hover:bg-red-600/20 text-red-400 rounded-xl transition-all flex items-center justify-center border border-white/5'
                        title="Remove Entry"
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

        {filteredStudents.length === 0 && (
          <div className='p-32 text-center space-y-6'>
            <div className='w-24 h-24 bg-white/5 rounded-full flex items-center justify-center mx-auto text-gray-700 border border-white/5'>
              <MdPeople size={48} />
            </div>
            <div className='space-y-2'>
              <p className='text-xl font-black text-white'>No Records Found</p>
              <p className='text-gray-500 font-medium max-w-xs mx-auto text-sm'>Adjust your filters or search terms to locate specific student profiles.</p>
            </div>
          </div>
        )}
      </div>

      {/* 4. Professional Marks Entry Modal */}
      {isUploadModalOpen && (
        <div className='fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 overflow-hidden'>
          <div className='absolute inset-0 bg-[#020617]/90 backdrop-blur-xl animate-in fade-in duration-500' onClick={() => setIsUploadModalOpen(false)} />

          <form
            onSubmit={handleSaveResult}
            className='relative w-full max-w-4xl bg-[#0f172a] rounded-[50px] border border-white/10 shadow-2xl overflow-hidden animate-in zoom-in-95 duration-500 flex flex-col max-h-[95vh]'
          >
            {/* Modal Header Branding */}
            <div className='p-10 border-b border-white/10 bg-gradient-to-r from-blue-600/10 via-indigo-600/5 to-transparent flex flex-col md:flex-row justify-between items-start md:items-center gap-6'>
              <div className='flex items-center gap-6'>
                <div className='w-20 h-20 bg-blue-600 rounded-[25px] flex items-center justify-center text-white shadow-2xl shadow-blue-600/40 border border-white/10'>
                  <MdCloudUpload size={40} />
                </div>
                <div className='space-y-1'>
                  <h2 className='text-3xl font-black text-white tracking-tighter leading-tight'>Entry <span className='text-blue-400'>Terminal</span></h2>
                  <div className='flex items-center gap-3'>
                    <p className='text-white font-bold text-sm tracking-wide'>{uploadingStudent?.name}</p>
                    <div className='w-1 h-1 bg-white/20 rounded-full'></div>
                    <p className='text-gray-500 font-bold text-xs uppercase tracking-widest'>{uploadingStudent?.rollNo}</p>
                  </div>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setIsUploadModalOpen(false)}
                className='absolute top-8 right-8 p-3 hover:bg-white/10 rounded-2xl transition-all text-gray-500 hover:text-white border border-transparent hover:border-white/10'
              >
                <MdClose size={28} />
              </button>
            </div>

            {/* Modal Content - Two Column Layout */}
            <div className='flex-1 overflow-y-auto p-10 custom-scrollbar'>
              <div className='grid grid-cols-1 xl:grid-cols-3 gap-12'>

                {/* Form Inputs (Left 2 Columns) */}
                <div className='xl:col-span-2 space-y-10'>
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                    {[
                      { label: 'Mathematics', name: 'mathematics', icon: <MdOutlineCalculate /> },
                      { label: 'Science', name: 'science', icon: <MdSchool /> },
                      { label: 'English', name: 'english', icon: <MdOutlineLibraryBooks /> },
                      { label: 'Hindi', name: 'hindi', icon: <MdOutlineLibraryBooks /> },
                      { label: 'Social Science', name: 'socialScience', icon: <MdPeople /> },
                    ].map((subject) => (
                      <div key={subject.name} className='space-y-3 group'>
                        <div className='flex justify-between items-center px-1'>
                          <label className='text-[10px] font-black text-gray-500 uppercase tracking-[0.2em] group-focus-within:text-blue-400 transition-colors'>{subject.label}</label>
                          <span className='text-[8px] font-black text-gray-700 uppercase'>Max: 100</span>
                        </div>
                        <div className='relative'>
                          <div className='absolute left-5 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-blue-400 transition-colors'>
                            {subject.icon}
                          </div>
                          <input
                            type="number"
                            name={subject.name}
                            value={marks[subject.name]}
                            onChange={handleInputChange}
                            placeholder="00"
                            className='w-full bg-white/5 border border-white/10 rounded-[20px] pl-14 pr-6 py-5 text-lg font-black text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:bg-white/10 transition-all placeholder:text-gray-800'
                            required
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Live Preview / Summary (Right Column) */}
                <div className='space-y-8'>
                  <div className='bg-gradient-to-br from-blue-600 to-indigo-700 rounded-[40px] p-8 text-white shadow-2xl shadow-blue-600/20 relative overflow-hidden group'>
                    <div className='absolute -right-10 -top-10 w-40 h-40 bg-white/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700'></div>
                    <div className='relative z-10 space-y-8'>
                      <div className='flex justify-between items-start'>
                        <p className='text-[10px] font-black uppercase tracking-[0.3em] opacity-60'>Live Summary</p>
                        <MdAnalytics size={24} className='opacity-60' />
                      </div>
                      <div className='space-y-1'>
                        <p className='text-5xl font-black tracking-tighter'>{calculatedResult.percentage}%</p>
                        <p className='text-xs font-bold uppercase tracking-widest text-blue-100'>Weighted Average</p>
                      </div>
                      <div className='grid grid-cols-2 gap-4 pt-4 border-t border-white/10'>
                        <div>
                          <p className='text-[8px] font-black uppercase tracking-widest opacity-60'>Total Marks</p>
                          <p className='text-xl font-black'>{calculatedResult.total}/500</p>
                        </div>
                        <div>
                          <p className='text-[8px] font-black uppercase tracking-widest opacity-60'>Final Grade</p>
                          <p className='text-xl font-black text-emerald-300'>{calculatedResult.grade}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className='bg-white/5 border border-white/10 rounded-[35px] p-8 space-y-4'>
                    <h4 className='text-[10px] font-black text-gray-500 uppercase tracking-widest text-center'>Validation Status</h4>
                    <div className='space-y-3'>
                      {Object.entries(marks).map(([name, val]) => (
                        <div key={name} className='flex items-center justify-between text-[10px] font-bold'>
                          <span className='text-gray-500 capitalize'>{name}</span>
                          <span className={val !== '' ? 'text-emerald-500' : 'text-gray-700'}>
                            {val !== '' ? 'Ready' : 'Pending'}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Modal Footer Command Bar */}
            <div className='p-10 border-t border-white/10 bg-white/5 flex flex-col sm:flex-row justify-end items-center gap-6'>
              <button
                type="button"
                onClick={() => setIsUploadModalOpen(false)}
                className='w-full sm:w-auto px-10 py-4 bg-white/5 hover:bg-white/10 text-white rounded-[20px] font-black text-[10px] uppercase tracking-widest transition-all border border-white/10 active:scale-95'
              >
                Discard Entry
              </button>
              <button
                type="submit"
                className='w-full sm:w-auto px-12 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-[20px] font-black text-[10px] uppercase tracking-widest transition-all flex items-center justify-center gap-3 shadow-2xl shadow-blue-600/30 active:scale-95'
              >
                <MdSave size={20} />
                Authorize & Save
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  )
}

export default UploadResult
