import React, { useState, useMemo } from 'react'
import {
  MdSubject, MdAdd, MdEdit, MdDelete, MdClose, MdCheckCircle,
  MdTimer, MdFlag, MdSearch, MdFilterList, MdMoreVert,
  MdOutlineAssignment, MdOutlineMenuBook, MdOutlineTrendingUp
} from 'react-icons/md'
import { FaCalendarAlt, FaClock, FaBookOpen } from 'react-icons/fa'

function TeacherSubject() {
  // 1. Initial State & Mock Data
  const [subjects] = useState([
    { id: 1, name: "Mathematics", code: "MTH-101", students: 85, progress: 72, color: "blue" },
    { id: 2, name: "Advanced Calculus", code: "CAL-202", students: 42, progress: 45, color: "indigo" },
    { id: 3, name: "Physics", code: "PHY-301", students: 60, progress: 88, color: "emerald" }
  ])

  const [selectedSubject, setSelectedSubject] = useState(subjects[0])
  const [searchQuery, setSearchQuery] = useState("")
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editingTopic, setEditingTopic] = useState(null)

  const [syllabusData, setSyllabusData] = useState([
    { id: 1, subjectId: 1, topic: "Trigonometry Basics", description: "Introduction to sine, cosine, and tangent functions.", date: "2026-03-10", time: "10:30 AM", status: "Completed", priority: "High" },
    { id: 2, subjectId: 1, topic: "Linear Algebra", description: "Systems of linear equations and matrix operations.", date: "2026-03-15", time: "09:00 AM", status: "In Progress", priority: "Medium" },
    { id: 3, subjectId: 1, topic: "Probability", description: "Basic concepts of probability and random variables.", date: "2026-03-22", time: "11:00 AM", status: "Not Started", priority: "Low" },
    { id: 4, subjectId: 2, topic: "Integration Techniques", description: "Advanced methods of integration including parts and substitution.", date: "2026-03-12", time: "02:00 PM", status: "In Progress", priority: "High" },
    { id: 5, subjectId: 3, topic: "Quantum Mechanics", description: "Fundamental principles of quantum theory and wave functions.", date: "2026-03-14", time: "01:00 PM", status: "Completed", priority: "High" }
  ])

  const [form, setForm] = useState({
    topic: "",
    description: "",
    date: new Date().toISOString().split('T')[0],
    time: "09:00",
    status: "Not Started",
    priority: "Medium"
  })

  // 2. Computed Properties
  const filteredSyllabus = useMemo(() => {
    return syllabusData.filter(item =>
      item.subjectId === selectedSubject.id &&
      (item.topic.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()))
    )
  }, [syllabusData, selectedSubject, searchQuery])

  const stats = useMemo(() => {
    const total = syllabusData.filter(s => s.subjectId === selectedSubject.id).length
    const completed = syllabusData.filter(s => s.subjectId === selectedSubject.id && s.status === "Completed").length
    const inProgress = syllabusData.filter(s => s.subjectId === selectedSubject.id && s.status === "In Progress").length
    return { total, completed, inProgress, percent: total > 0 ? Math.round((completed / total) * 100) : 0 }
  }, [syllabusData, selectedSubject])

  // 3. Handlers
  const handleOpenModal = (topic = null) => {
    if (topic) {
      setEditingTopic(topic)
      setForm(topic)
    } else {
      setEditingTopic(null)
      setForm({
        topic: "",
        description: "",
        date: new Date().toISOString().split('T')[0],
        time: "09:00",
        status: "Not Started",
        priority: "Medium"
      })
    }
    setIsModalOpen(true)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (editingTopic) {
      setSyllabusData(syllabusData.map(s => s.id === editingTopic.id ? { ...form, id: s.id } : s))
    } else {
      setSyllabusData([...syllabusData, { ...form, id: Date.now(), subjectId: selectedSubject.id }])
    }
    setIsModalOpen(false)
  }

  const handleDelete = (id) => {
    if (window.confirm("Delete this topic from the curriculum?")) {
      setSyllabusData(syllabusData.filter(s => s.id !== id))
    }
  }

  const getPriorityColor = (p) => {
    switch (p) {
      case 'High': return 'text-red-400 bg-red-400/10 border-red-400/20';
      case 'Medium': return 'text-amber-400 bg-amber-400/10 border-amber-400/20';
      case 'Low': return 'text-blue-400 bg-blue-400/10 border-blue-400/20';
      default: return 'text-gray-400 bg-gray-400/10 border-gray-400/20';
    }
  }

  const getStatusColor = (s) => {
    switch (s) {
      case 'Completed': return 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20';
      case 'In Progress': return 'text-blue-400 bg-blue-400/10 border-blue-400/20';
      default: return 'text-gray-400 bg-gray-400/10 border-gray-400/20';
    }
  }

  return (
    <div className='w-full h-full text-white animate-in fade-in duration-700 selection:bg-blue-500/30 px-4 md:px-0'>

      {/* 1. HERO SECTION: Stats & Subject Info */}
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8'>
        <div className='lg:col-span-2 bg-gradient-to-br from-blue-600/20 to-indigo-600/5 p-6 md:p-8 rounded-[30px] md:rounded-[40px] border border-white/10 backdrop-blur-xl relative overflow-hidden group'>
          <div className='relative z-10 flex flex-col md:flex-row justify-between h-full gap-6'>
            <div className='space-y-4'>
              <div className='flex items-center gap-3'>
                <div className='p-2.5 bg-blue-600 rounded-xl shadow-lg shadow-blue-500/30 flex-shrink-0'>
                  <MdOutlineMenuBook size={24} />
                </div>
                <div>
                  <h1 className='text-2xl md:text-3xl font-black tracking-tight leading-tight'>{selectedSubject.name}</h1>
                  <p className='text-blue-400 text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] md:tracking-[0.3em]'>{selectedSubject.code} • Academic Portfolio</p>
                </div>
              </div>
              <p className='text-gray-400 text-xs md:text-sm max-w-md italic leading-relaxed opacity-80'>"Managing core academic curriculum and delivery schedules for current session."</p>
              <div className='flex flex-wrap gap-3 pt-2'>
                <div className='px-3 py-1.5 bg-white/5 rounded-lg border border-white/10 flex items-center gap-2'>
                  <MdOutlineTrendingUp className='text-emerald-400' size={14} />
                  <span className='text-[10px] md:text-xs font-bold text-emerald-400'>{stats.percent}% Completion</span>
                </div>
                <div className='px-3 py-1.5 bg-white/5 rounded-lg border border-white/10 flex items-center gap-2'>
                  <MdOutlineAssignment className='text-blue-400' size={14} />
                  <span className='text-[10px] md:text-xs font-bold text-blue-400'>{stats.total} Topics</span>
                </div>
              </div>
            </div>

            <div className='flex flex-row md:flex-col items-center justify-between md:justify-center bg-white/5 p-4 md:p-6 rounded-2xl md:rounded-[30px] border border-white/10 min-w-full md:min-w-[160px] gap-4'>
              <div className='relative w-16 h-16 md:w-24 md:h-24 flex items-center justify-center'>
                <svg className='w-full h-full transform -rotate-90'>
                  <circle cx='32' cy='32' r='28' stroke='currentColor' strokeWidth='5' fill='transparent' className='text-white/5 md:hidden' />
                  <circle cx='48' cy='48' r='40' stroke='currentColor' strokeWidth='8' fill='transparent' className='text-white/5 hidden md:block' />

                  <circle cx='32' cy='32' r='28' stroke='currentColor' strokeWidth='5' fill='transparent' strokeDasharray='175.8' strokeDashoffset={175.8 - (175.8 * stats.percent) / 100} className='text-blue-500 transition-all duration-1000 ease-out md:hidden' />
                  <circle cx='48' cy='48' r='40' stroke='currentColor' strokeWidth='8' fill='transparent' strokeDasharray='251.2' strokeDashoffset={251.2 - (251.2 * stats.percent) / 100} className='text-blue-500 transition-all duration-1000 ease-out hidden md:block' />
                </svg>
                <span className='absolute text-sm md:text-xl font-black'>{stats.percent}%</span>
              </div>
              <p className='text-[9px] md:text-[10px] font-black text-gray-400 uppercase tracking-widest text-right md:text-center'>Progress<br className='md:hidden' /> Overview</p>
            </div>
          </div>
          <div className='absolute -right-10 -bottom-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl'></div>
        </div>

        <div className='bg-white/5 p-6 rounded-[30px] border border-white/10 backdrop-blur-xl'>
          <h2 className='text-sm md:text-lg font-black mb-4 md:mb-6 flex items-center gap-2 uppercase tracking-wider'>
            <MdSubject className='text-blue-400' />
            Assigned Subjects
          </h2>
          <div className='flex flex-row lg:flex-col gap-3 overflow-x-auto lg:overflow-x-visible pb-2 lg:pb-0 custom-scrollbar'>
            {subjects.map(sub => (
              <button
                key={sub.id}
                onClick={() => setSelectedSubject(sub)}
                className={`flex-shrink-0 lg:w-full flex items-center justify-between p-3 md:p-4 rounded-xl md:rounded-2xl transition-all duration-300 border ${selectedSubject.id === sub.id
                  ? 'bg-blue-600 border-blue-500 shadow-lg shadow-blue-500/20 scale-[1.02] min-w-[180px] lg:min-w-0'
                  : 'bg-white/5 border-white/5 hover:bg-white/10 min-w-[150px] lg:min-w-0'
                  }`}
              >
                <div className='flex items-center gap-3 md:gap-4'>
                  <div className={`w-8 h-8 md:w-10 md:h-10 rounded-lg md:rounded-xl flex items-center justify-center font-bold text-xs md:text-base ${selectedSubject.id === sub.id ? 'bg-white/20' : 'bg-blue-600/20 text-blue-400'}`}>
                    {sub.name[0]}
                  </div>
                  <div className='text-left'>
                    <p className='text-xs md:text-sm font-black truncate w-24 md:w-32'>{sub.name}</p>
                    <p className={`text-[8px] md:text-[9px] font-bold uppercase tracking-widest ${selectedSubject.id === sub.id ? 'text-blue-200' : 'text-gray-500'}`}>{sub.code}</p>
                  </div>
                </div>
                <div className='hidden md:flex flex-col items-end'>
                  <span className='text-[10px] md:text-xs font-black'>{sub.progress}%</span>
                  <div className='w-10 md:w-12 h-0.5 md:h-1 bg-white/20 rounded-full mt-1'>
                    <div className='h-full bg-white rounded-full' style={{ width: `${sub.progress}%` }}></div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 2. MAIN CONTENT: Syllabus List & Actions */}
      <div className='bg-white/5 rounded-[30px] md:rounded-[45px] border border-white/10 backdrop-blur-2xl overflow-hidden shadow-2xl mb-10'>
        <div className='p-6 md:p-8 border-b border-white/5 flex flex-col md:flex-row justify-between items-start md:items-center gap-6'>
          <div className='flex flex-col gap-2'>
            <div className='flex items-center gap-3'>
              <div className='w-1 h-6 md:w-1.5 md:h-8 bg-blue-600 rounded-full'></div>
              <h2 className='text-xl md:text-2xl font-black tracking-tight'>Curriculum <span className='text-blue-400'>Timeline</span></h2>
            </div>
            <span className='inline-block w-fit px-3 py-1 bg-white/5 rounded-full text-[9px] font-black text-gray-500 uppercase tracking-widest border border-white/10 ml-4 md:ml-6'>
              {filteredSyllabus.length} Topics Listed
            </span>
          </div>

          <div className='flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto'>
            <div className='relative w-full sm:flex-1 md:flex-none'>
              <MdSearch className='absolute left-4 top-1/2 -translate-y-1/2 text-gray-500' size={18} />
              <input
                type="text"
                placeholder="Search topics..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className='w-full md:w-56 bg-white/5 border border-white/10 p-2.5 pl-10 rounded-xl text-xs focus:ring-2 focus:ring-blue-500 outline-none placeholder:text-gray-600 transition-all'
              />
            </div>
            <div className='flex gap-2 w-full sm:w-auto'>
              <button className='p-2.5 bg-white/5 border border-white/10 rounded-xl text-gray-400 hover:text-white transition-colors flex-1 sm:flex-none flex justify-center'>
                <MdFilterList size={20} />
              </button>
              <button
                onClick={() => handleOpenModal()}
                className='flex-1 sm:flex-none bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-xl font-black uppercase tracking-widest text-[9px] shadow-lg shadow-blue-500/20 transition-all flex items-center justify-center gap-2 active:scale-95'
              >
                <MdAdd size={18} />
                Add Topic
              </button>
            </div>
          </div>
        </div>

        <div className='p-6 md:p-8'>
          <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6'>
            {filteredSyllabus.map((item, index) => (
              <div key={item.id} className='group bg-white/5 p-5 md:p-6 rounded-2xl md:rounded-[35px] border border-white/5 hover:border-blue-500/40 transition-all duration-500 relative overflow-hidden flex flex-col'>
                {/* Status & Priority Badges */}
                <div className='flex justify-between items-center mb-5'>
                  <span className={`px-2.5 py-1 rounded-lg text-[7px] md:text-[8px] font-black uppercase tracking-widest border ${getStatusColor(item.status)}`}>
                    {item.status}
                  </span>
                  <div className='flex items-center gap-1.5'>
                    <MdFlag size={12} className={getPriorityColor(item.priority).split(' ')[0]} />
                    <span className={`text-[7px] md:text-[8px] font-black uppercase tracking-widest ${getPriorityColor(item.priority).split(' ')[0]}`}>
                      {item.priority}
                    </span>
                  </div>
                </div>

                <div className='flex-1'>
                  <div className='flex justify-between items-start mb-2 gap-4'>
                    <h3 className='text-lg md:text-xl font-black text-white group-hover:text-blue-400 transition-colors leading-tight tracking-tight'>{item.topic}</h3>
                    <div className='opacity-0 group-hover:opacity-100 transition-all flex gap-1 flex-shrink-0'>
                      <button onClick={() => handleOpenModal(item)} className='p-1.5 text-blue-400 hover:bg-blue-500/10 rounded-lg'><MdEdit size={16} /></button>
                      <button onClick={() => handleDelete(item.id)} className='p-1.5 text-red-400 hover:bg-red-500/10 rounded-lg'><MdDelete size={16} /></button>
                    </div>
                  </div>
                  <p className='text-[11px] md:text-xs text-gray-500 italic leading-relaxed line-clamp-2 mb-6'>"{item.description}"</p>
                </div>

                {/* Date & Time Footer */}
                <div className='mt-auto pt-5 border-t border-white/5 flex justify-between items-center'>
                  <div className='flex flex-wrap gap-x-4 gap-y-2'>
                    <div className='flex items-center gap-1.5 text-[8px] md:text-[10px] font-bold text-gray-500'>
                      <FaCalendarAlt className='text-blue-500' size={10} />
                      {item.date}
                    </div>
                    <div className='flex items-center gap-1.5 text-[8px] md:text-[10px] font-bold text-gray-500'>
                      <FaClock className='text-blue-500' size={10} />
                      {item.time}
                    </div>
                  </div>
                  <div className='w-7 h-7 md:w-8 md:h-8 rounded-full bg-white/5 flex items-center justify-center text-gray-600 group-hover:text-blue-500 transition-colors'>
                    <MdMoreVert size={16} />
                  </div>
                </div>

                {/* Decorative background number */}
                <span className='absolute -right-1 -bottom-2 text-5xl md:text-7xl font-black text-white/[0.02] pointer-events-none italic group-hover:text-blue-500/[0.05] transition-colors'>
                  {index + 1 < 10 ? `0${index + 1}` : index + 1}
                </span>
              </div>
            ))}

            {filteredSyllabus.length === 0 && (
              <div className='col-span-full py-16 md:py-24 flex flex-col items-center justify-center text-center space-y-4 bg-white/[0.02] rounded-[30px] md:rounded-[40px] border-2 border-dashed border-white/10'>
                <div className='w-16 h-16 md:w-24 md:h-24 rounded-full bg-white/5 flex items-center justify-center mb-2'>
                  <MdOutlineMenuBook size={32} className='text-gray-700 md:size-48' />
                </div>
                <div className='px-4'>
                  <h3 className='text-lg md:text-xl font-black text-gray-500 uppercase tracking-widest'>No topics found</h3>
                  <p className='text-xs md:text-sm text-gray-600 italic'>Adjust your search or add a new topic to this subject.</p>
                </div>
                <button
                  onClick={() => handleOpenModal()}
                  className='text-blue-400 text-[10px] md:text-xs font-black uppercase tracking-widest mt-4 hover:text-blue-300 transition-colors flex items-center gap-2'
                >
                  <MdAdd size={16} /> Add first topic
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* 3. MODAL: Add/Edit Topic */}
      {isModalOpen && (
        <div className='fixed inset-0 bg-black/80 backdrop-blur-xl flex items-center justify-center z-[100] p-4 animate-in fade-in duration-300'>
          <div className='bg-[#0f172a] rounded-[30px] w-full max-w-xl max-h-[95vh] flex flex-col overflow-hidden shadow-[0_0_80px_rgba(0,0,0,0.6)] border border-white/10 animate-in zoom-in-95 duration-300'>
            {/* Modal Header - Compact */}
            <div className='p-6 border-b border-white/5 flex justify-between items-center bg-gradient-to-r from-blue-600/10 to-transparent flex-shrink-0'>
              <div className='flex items-center gap-4'>
                <div className='w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center shadow-lg shadow-blue-500/20'>
                  <FaBookOpen size={20} className='text-white' />
                </div>
                <div>
                  <h3 className='text-xl font-black text-white tracking-tight'>{editingTopic ? 'Modify Topic' : 'New Academic Entry'}</h3>
                  <p className='text-[9px] font-black text-blue-400 uppercase tracking-[0.2em] mt-0.5'>{selectedSubject.name} Curriculum</p>
                </div>
              </div>
              <button onClick={() => setIsModalOpen(false)} className='w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-gray-400 hover:bg-red-500/20 hover:text-red-400 transition-all active:scale-95'>
                <MdClose size={24} />
              </button>
            </div>

            {/* Scrollable Form Content */}
            <div className='overflow-y-auto custom-scrollbar p-6 flex-1'>
              <form onSubmit={handleSubmit} className='space-y-5'>
                <div className='space-y-2'>
                  <label className='text-[10px] font-black text-gray-500 uppercase tracking-widest ml-1'>Topic Title</label>
                  <input
                    type="text"
                    placeholder="e.g. Fundamental Theorem of Calculus"
                    className='w-full bg-white/5 border border-white/10 p-4 rounded-xl text-sm text-white focus:ring-2 focus:ring-blue-500 outline-none placeholder:text-gray-700 transition-all'
                    value={form.topic}
                    onChange={(e) => setForm({ ...form, topic: e.target.value })}
                    required
                  />
                </div>

                <div className='space-y-2'>
                  <label className='text-[10px] font-black text-gray-500 uppercase tracking-widest ml-1'>Description / Notes</label>
                  <textarea
                    placeholder="Summarize the core concepts..."
                    rows="3"
                    className='w-full bg-white/5 border border-white/10 p-4 rounded-xl text-sm text-white focus:ring-2 focus:ring-blue-500 outline-none resize-none placeholder:text-gray-700 transition-all'
                    value={form.description}
                    onChange={(e) => setForm({ ...form, description: e.target.value })}
                  ></textarea>
                </div>

                <div className='grid grid-cols-2 gap-4'>
                  <div className='space-y-2'>
                    <label className='text-[10px] font-black text-gray-500 uppercase tracking-widest ml-1'>Delivery Status</label>
                    <select
                      className='w-full bg-white/5 border border-white/10 p-4 rounded-xl text-sm text-white focus:ring-2 focus:ring-blue-500 outline-none appearance-none transition-all'
                      value={form.status}
                      onChange={(e) => setForm({ ...form, status: e.target.value })}
                    >
                      <option value="Not Started" className='bg-[#0f172a]'>Not Started</option>
                      <option value="In Progress" className='bg-[#0f172a]'>In Progress</option>
                      <option value="Completed" className='bg-[#0f172a]'>Completed</option>
                    </select>
                  </div>
                  <div className='space-y-2'>
                    <label className='text-[10px] font-black text-gray-500 uppercase tracking-widest ml-1'>Topic Priority</label>
                    <select
                      className='w-full bg-white/5 border border-white/10 p-4 rounded-xl text-sm text-white focus:ring-2 focus:ring-blue-500 outline-none appearance-none transition-all'
                      value={form.priority}
                      onChange={(e) => setForm({ ...form, priority: e.target.value })}
                    >
                      <option value="Low" className='bg-[#0f172a]'>Low Priority</option>
                      <option value="Medium" className='bg-[#0f172a]'>Medium Priority</option>
                      <option value="High" className='bg-[#0f172a]'>High Priority</option>
                    </select>
                  </div>
                </div>

                <div className='grid grid-cols-2 gap-4'>
                  <div className='space-y-2'>
                    <label className='text-[10px] font-black text-gray-500 uppercase tracking-widest ml-1'>Target Date</label>
                    <input
                      type="date"
                      className='w-full bg-white/5 border border-white/10 p-4 rounded-xl text-sm text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all'
                      value={form.date}
                      onChange={(e) => setForm({ ...form, date: e.target.value })}
                      required
                    />
                  </div>
                  <div className='space-y-2'>
                    <label className='text-[10px] font-black text-gray-500 uppercase tracking-widest ml-1'>Period Time</label>
                    <input
                      type="time"
                      className='w-full bg-white/5 border border-white/10 p-4 rounded-xl text-sm text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all'
                      value={form.time}
                      onChange={(e) => setForm({ ...form, time: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <div className='pt-4'>
                  <button type="submit" className='w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 py-4 rounded-2xl font-black uppercase tracking-[0.2em] text-xs shadow-2xl shadow-blue-500/40 transition-all active:scale-[0.98] text-white'>
                    {editingTopic ? 'Confirm Modifications' : 'Publish to Curriculum'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default TeacherSubject
