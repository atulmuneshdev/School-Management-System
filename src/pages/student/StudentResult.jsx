import React, { useState } from 'react'
import { FaGraduationCap, FaFilePdf } from 'react-icons/fa'
import { MdTrendingUp, MdStars, MdClose, MdEventNote, MdSchool } from 'react-icons/md'
import AllResult from './AllResult'

function StudentResult() {
  const [selectedResult, setSelectedResult] = useState(null);

  return (
    <div className='w-full space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700 pb-10'>
      {/* 1. TOP HERO SECTION: Performance Overview */}
      <div className='relative overflow-hidden bg-white/5 rounded-[40px] border border-white/10 p-8 md:p-12'>
        <div className='relative z-10 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8'>
          <div className='space-y-6'>
            <div className='bg-white/5 px-6 py-2 rounded-2xl border border-white/10 flex items-center gap-3 w-fit'>
              <div className='w-2 h-2 rounded-full bg-emerald-500 animate-pulse' />
              <span className='text-xs font-black text-white uppercase tracking-widest'>Current Rank: #05 / 45</span>
            </div>
            <div className='space-y-2'>
              <h1 className='text-4xl md:text-5xl font-black text-white tracking-tighter leading-none'>Academic <span className='text-blue-400'>Performance</span></h1>
              <p className='text-gray-400 font-medium text-lg max-w-xl'>Track your progress, view detailed marksheets, and monitor your semester-wise growth.</p>
            </div>
            <div className='flex flex-wrap gap-4'>
              <button className='bg-blue-600 hover:bg-blue-700 text-white px-8 py-3.5 rounded-2xl font-black uppercase tracking-widest text-[10px] shadow-xl shadow-blue-500/20 transition-all active:scale-95'>
                Download Full Report
              </button>
              <button className='bg-white/5 hover:bg-white/10 text-white px-8 py-3.5 rounded-2xl font-black uppercase tracking-widest text-[10px] border border-white/10 transition-all active:scale-95'>
                Request Verification
              </button>
            </div>
          </div>

          <div className='hidden xl:block relative group'>
            <div className='absolute -inset-4 bg-blue-500/20 blur-2xl rounded-full group-hover:bg-blue-500/30 transition-all duration-700'></div>
            <img src="/student.png" alt="Student Hero" className='w-80 relative z-10 drop-shadow-2xl hover:scale-105 transition-transform duration-700' />
          </div>
        </div>

        {/* Decorative background shapes */}
        <div className='absolute -right-20 -top-20 w-80 h-80 bg-blue-600/5 rounded-full blur-[100px]'></div>
        <div className='absolute -left-20 -bottom-20 w-80 h-80 bg-indigo-600/5 rounded-full blur-[100px]'></div>
      </div>

      {/* Summary Cards */}
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
        <div className='group bg-gradient-to-br from-blue-600/20 to-indigo-600/5 p-8 rounded-[35px] border border-white/10 flex flex-col items-center text-center hover:border-blue-500/50 transition-all duration-500'>
          <div className='w-16 h-16 bg-blue-600/20 rounded-2xl flex items-center justify-center text-blue-400 mb-4 group-hover:scale-110 transition-transform'>
            <MdTrendingUp size={32} />
          </div>
          <p className='text-4xl font-black text-white'>8.8</p>
          <p className='text-xs font-bold text-blue-400 uppercase tracking-widest mt-2'>Current CGPA</p>
        </div>

        <div className='group bg-gradient-to-br from-emerald-600/20 to-teal-600/5 p-8 rounded-[35px] border border-white/10 flex flex-col items-center text-center hover:border-emerald-500/50 transition-all duration-500'>
          <div className='w-16 h-16 bg-emerald-600/20 rounded-2xl flex items-center justify-center text-emerald-400 mb-4 group-hover:scale-110 transition-transform'>
            <FaGraduationCap size={32} />
          </div>
          <p className='text-4xl font-black text-white'>A+</p>
          <p className='text-xs font-bold text-emerald-400 uppercase tracking-widest mt-2'>Overall Grade</p>
        </div>

        <div className='group bg-gradient-to-br from-amber-600/20 to-orange-600/5 p-8 rounded-[35px] border border-white/10 flex flex-col items-center text-center hover:border-amber-500/50 transition-all duration-500'>
          <div className='w-16 h-16 bg-amber-600/20 rounded-2xl flex items-center justify-center text-amber-400 mb-4 group-hover:scale-110 transition-transform'>
            <MdStars size={32} />
          </div>
          <p className='text-4xl font-black text-white'>92%</p>
          <p className='text-xs font-bold text-amber-400 uppercase tracking-widest mt-2'>Last Exam %</p>
        </div>
      </div>

      {/* Results History Section (Imported Component) */}
      <AllResult onSelectResult={(result) => setSelectedResult(result)} />

      {/* Marksheet Modal */}
      {selectedResult && (
        <div className='fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8'>
          <div className='absolute inset-0 bg-black/80 backdrop-blur-md' onClick={() => setSelectedResult(null)} />

          <div className='relative w-full max-w-2xl bg-[#0f172a] rounded-[40px] border border-white/10 shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300 flex flex-col max-h-[90vh]'>
            {/* Modal Header */}
            <div className='p-8 border-b border-white/10 bg-gradient-to-r from-blue-600/10 to-transparent'>
              <div className='flex justify-between items-start'>
                <div className='flex items-center gap-4'>
                  <div className='w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-blue-600/20'>
                    <MdSchool size={32} />
                  </div>
                  <div>
                    <h2 className='text-2xl font-black text-white leading-tight'>{selectedResult.term}</h2>
                    <p className='text-blue-400 font-bold text-xs uppercase tracking-widest mt-1'>Excellence International School</p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedResult(null)}
                  className='p-2 hover:bg-white/10 rounded-xl transition-colors text-gray-400 hover:text-white'
                >
                  <MdClose size={24} />
                </button>
              </div>
            </div>

            {/* Modal Content - Scrollable */}
            <div className='flex-1 overflow-y-auto p-8 space-y-8'>
              {/* Stats Grid */}
              <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
                <div className='bg-white/5 p-4 rounded-2xl border border-white/5 text-center'>
                  <p className='text-[10px] font-black text-gray-500 uppercase tracking-widest'>Percentage</p>
                  <p className='text-xl font-black text-white'>{selectedResult.percentage}</p>
                </div>
                <div className='bg-white/5 p-4 rounded-2xl border border-white/5 text-center'>
                  <p className='text-[10px] font-black text-gray-500 uppercase tracking-widest'>Grade</p>
                  <p className='text-xl font-black text-emerald-400'>{selectedResult.grade}</p>
                </div>
                <div className='bg-white/5 p-4 rounded-2xl border border-white/5 text-center'>
                  <p className='text-[10px] font-black text-gray-500 uppercase tracking-widest'>Rank</p>
                  <p className='text-xl font-black text-white'>#{selectedResult.rank}</p>
                </div>
                <div className='bg-white/5 p-4 rounded-2xl border border-white/5 text-center'>
                  <p className='text-[10px] font-black text-gray-500 uppercase tracking-widest'>Status</p>
                  <p className='text-xl font-black text-emerald-400'>{selectedResult.status}</p>
                </div>
              </div>

              {/* Subject Breakdown */}
              <div className='space-y-4'>
                <div className='flex justify-between items-center px-2'>
                  <h3 className='text-sm font-black text-white uppercase tracking-widest'>Subject Breakdown</h3>
                  <span className='text-xs text-gray-500 font-bold'>Session 2024-25</span>
                </div>

                <div className='space-y-2'>
                  {selectedResult.subjects.map((subject, idx) => (
                    <div key={idx} className='flex items-center justify-between p-5 bg-white/5 rounded-2xl border border-white/5 hover:bg-white/10 transition-colors'>
                      <div className='flex items-center gap-4'>
                        <div className='w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center text-blue-400 font-bold text-xs'>
                          0{idx + 1}
                        </div>
                        <span className='font-bold text-white'>{subject.name}</span>
                      </div>
                      <div className='flex items-center gap-6'>
                        <div className='text-right'>
                          <span className='text-white font-black'>{subject.marks}</span>
                          <span className='text-gray-500 font-bold text-xs ml-1'>/ {subject.total}</span>
                        </div>
                        <div className='w-10 h-10 rounded-lg bg-blue-600/20 border border-blue-500/20 flex items-center justify-center text-blue-400 font-black'>
                          {subject.grade}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className='p-8 border-t border-white/10 bg-white/5 flex flex-col md:flex-row justify-between items-center gap-4'>
              <div className='text-center md:text-left'>
                <p className='text-xs font-bold text-gray-500'>Result Generated on: {selectedResult.date}</p>
                <p className='text-[10px] text-gray-600 mt-1 uppercase tracking-widest'>Digital Certified Copy</p>
              </div>
              <button className='w-full md:w-auto px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-black text-sm transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-600/20'>
                <FaFilePdf />
                Download PDF
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Notice Section */}
      <div className='bg-gradient-to-r from-blue-600/10 to-indigo-600/10 rounded-[40px] border border-blue-500/20 p-8 flex flex-col md:flex-row items-center gap-6 text-center md:text-left'>
        <div className='w-20 h-20 bg-blue-600/20 rounded-3xl flex items-center justify-center text-blue-400 border border-blue-500/30'>
          <MdEventNote size={40} />
        </div>
        <div className='flex-1'>
          <h3 className='text-xl font-black text-white'>Next Examination Schedule</h3>
          <p className='text-gray-400 mt-1'>The Pre-Board Examination for Session 2024-25 is scheduled to start from May 15, 2025. Please check the assignments section for the syllabus.</p>
        </div>
        <button className='px-6 py-3 bg-white/5 hover:bg-white/10 text-white rounded-2xl font-bold text-sm transition-all border border-white/10'>
          View Schedule
        </button>
      </div>
    </div>
  )
}

export default StudentResult
