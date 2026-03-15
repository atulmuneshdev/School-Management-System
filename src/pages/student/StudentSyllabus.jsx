import React, { useState } from 'react'
import {
  MdMenuBook, MdOutlineSchool, MdExpandMore, MdCheckCircle,
  MdOutlinePendingActions, MdLocalLibrary, MdScience, MdLanguage,
  MdFunctions, MdHistoryEdu, MdPublic
} from 'react-icons/md'

function StudentSyllabus() {
  const [selectedSubject, setSelectedSubject] = useState(null);

  const syllabusData = {
    class: "All Classes",
    section: "A",
    session: "2024-25",
    subjects: [
      {
        id: 1,
        name: "Mathematics",
        icon: <MdFunctions size={24} />,
        color: "blue",
        teacher: "Mr. Sharma",
        progress: 75,
        topics: [
          { name: "Integers", status: "Completed", weightage: "10%" },
          { name: "Fractions and Decimals", status: "Completed", weightage: "12%" },
          { name: "Data Handling", status: "Completed", weightage: "8%" },
          { name: "Simple Equations", status: "In Progress", weightage: "15%" },
          { name: "Lines and Angles", status: "Pending", weightage: "10%" },
          { name: "The Triangle and its Properties", status: "Pending", weightage: "15%" }
        ]
      },
      {
        id: 2,
        name: "Science",
        icon: <MdScience size={24} />,
        color: "emerald",
        teacher: "Mrs. Verma",
        progress: 60,
        topics: [
          { name: "Nutrition in Plants", status: "Completed", weightage: "8%" },
          { name: "Nutrition in Animals", status: "Completed", weightage: "10%" },
          { name: "Heat", status: "In Progress", weightage: "12%" },
          { name: "Acids, Bases and Salts", status: "Pending", weightage: "15%" },
          { name: "Physical and Chemical Changes", status: "Pending", weightage: "10%" }
        ]
      },
      {
        id: 3,
        name: "English",
        icon: <MdLanguage size={24} />,
        color: "purple",
        teacher: "Ms. Das",
        progress: 85,
        topics: [
          { name: "Three Questions", status: "Completed", weightage: "10%" },
          { name: "The Squirrel (Poem)", status: "Completed", weightage: "5%" },
          { name: "A Gift of Chappals", status: "Completed", weightage: "10%" },
          { name: "The Rebel (Poem)", status: "In Progress", weightage: "5%" },
          { name: "Gopal and the Hilsa Fish", status: "Pending", weightage: "12%" }
        ]
      },
      {
        id: 4,
        name: "Social Science",
        icon: <MdPublic size={24} />,
        color: "amber",
        teacher: "Mr. Gupta",
        progress: 45,
        topics: [
          { name: "Tracing Changes Through a Thousand Years", status: "Completed", weightage: "10%" },
          { name: "New Kings and Kingdoms", status: "In Progress", weightage: "15%" },
          { name: "The Delhi Sultans", status: "Pending", weightage: "15%" },
          { name: "The Mughal Empire", status: "Pending", weightage: "15%" }
        ]
      },
      {
        id: 5,
        name: "Hindi",
        icon: <MdHistoryEdu size={24} />,
        color: "rose",
        teacher: "Mrs. Joshi",
        progress: 90,
        topics: [
          { name: "Hum Panchi Unmukt Gagan Ke", status: "Completed", weightage: "10%" },
          { name: "Dadi Maa", status: "Completed", weightage: "12%" },
          { name: "Himalaya ki Betiyan", status: "Completed", weightage: "10%" },
          { name: "Kathputli", status: "In Progress", weightage: "8%" }
        ]
      }
    ]
  };

  return (
    <div className='w-full space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700 pb-16'>
      {/* Header Section */}
      <div className='relative overflow-hidden bg-white/5 rounded-[40px] border border-white/10 p-8 md:p-12'>
        <div className='relative z-10 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8'>
          <div className='space-y-6'>
            <div className='bg-white/5 px-6 py-2 rounded-2xl border border-white/10 flex items-center gap-3 w-fit'>
              <MdMenuBook className='text-blue-400' />
              <span className='text-xs font-black text-white uppercase tracking-widest'>Curriculum Overview</span>
            </div>
            <div className='space-y-2'>
              <h1 className='text-4xl md:text-5xl font-black text-white tracking-tighter leading-none'>Academic <span className='text-blue-400'>Syllabus</span></h1>
              <p className='text-gray-400 font-medium text-lg max-w-xl'>Detailed breakdown of subjects and topics for <span className='text-white font-bold'>{syllabusData.class}-{syllabusData.section}</span></p>
            </div>
          </div>

          <div className='hidden xl:block relative group'>
            <div className='absolute -inset-4 bg-blue-500/20 blur-2xl rounded-full'></div>
            <div className='relative z-10 bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-[40px] flex flex-col items-center gap-4'>
              <div className='w-20 h-20 bg-blue-600 rounded-3xl flex items-center justify-center text-white shadow-xl shadow-blue-600/20'>
                <MdLocalLibrary size={40} />
              </div>
              <div className='text-center'>
                <p className='text-2xl font-black text-white'>5 Subjects</p>
                <p className='text-[10px] font-black text-gray-500 uppercase tracking-[0.2em]'>Session {syllabusData.session}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Subjects Grid */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {syllabusData.subjects.map((subject) => (
          <div
            key={subject.id}
            onClick={() => setSelectedSubject(selectedSubject?.id === subject.id ? null : subject)}
            className={`group bg-white/5 border border-white/10 rounded-[35px] p-8 cursor-pointer transition-all duration-500 hover:bg-white/10 ${selectedSubject?.id === subject.id ? 'ring-2 ring-blue-500/50 bg-white/10' : ''}`}
          >
            <div className='flex items-start justify-between mb-8'>
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg transition-transform duration-500 group-hover:scale-110 ${subject.color === 'blue' ? 'bg-blue-600/20 text-blue-400 shadow-blue-500/10' :
                  subject.color === 'emerald' ? 'bg-emerald-600/20 text-emerald-400 shadow-emerald-500/10' :
                    subject.color === 'purple' ? 'bg-purple-600/20 text-purple-400 shadow-purple-500/10' :
                      subject.color === 'amber' ? 'bg-amber-600/20 text-amber-400 shadow-amber-500/10' :
                        'bg-rose-600/20 text-rose-400 shadow-rose-500/10'
                }`}>
                {subject.icon}
              </div>
              <div className='text-right'>
                <p className='text-xs font-black text-gray-500 uppercase tracking-widest'>Progress</p>
                <p className='text-2xl font-black text-white'>{subject.progress}%</p>
              </div>
            </div>

            <div className='space-y-1 mb-8'>
              <h3 className='text-xl font-black text-white group-hover:text-blue-400 transition-colors'>{subject.name}</h3>
              <p className='text-xs font-bold text-gray-500 uppercase tracking-widest'>{subject.teacher}</p>
            </div>

            <div className='w-full h-2 bg-white/5 rounded-full overflow-hidden mb-8'>
              <div
                className={`h-full transition-all duration-1000 ${subject.color === 'blue' ? 'bg-blue-500' :
                    subject.color === 'emerald' ? 'bg-emerald-500' :
                      subject.color === 'purple' ? 'bg-purple-500' :
                        subject.color === 'amber' ? 'bg-amber-500' :
                          'bg-rose-500'
                  }`}
                style={{ width: `${subject.progress}%` }}
              ></div>
            </div>

            <div className='flex items-center justify-between'>
              <span className='text-[10px] font-black text-gray-500 uppercase tracking-widest'>{subject.topics.length} Topics Total</span>
              <div className={`p-2 rounded-xl bg-white/5 border border-white/10 transition-transform duration-300 ${selectedSubject?.id === subject.id ? 'rotate-180' : ''}`}>
                <MdExpandMore className='text-white' />
              </div>
            </div>

            {/* Expandable Topics List */}
            {selectedSubject?.id === subject.id && (
              <div className='mt-8 pt-8 border-t border-white/5 space-y-4 animate-in slide-in-from-top-4 duration-500'>
                {subject.topics.map((topic, idx) => (
                  <div key={idx} className='flex items-center justify-between p-4 bg-white/5 rounded-2xl border border-white/5'>
                    <div className='flex items-center gap-3'>
                      <div className={`w-2 h-2 rounded-full ${topic.status === 'Completed' ? 'bg-emerald-500' :
                          topic.status === 'In Progress' ? 'bg-blue-500 animate-pulse' :
                            'bg-gray-600'
                        }`}></div>
                      <span className='text-sm font-bold text-white'>{topic.name}</span>
                    </div>
                    <div className='flex items-center gap-4'>
                      <span className='text-[10px] font-black text-gray-500 uppercase'>{topic.weightage}</span>
                      {topic.status === 'Completed' ? (
                        <MdCheckCircle className='text-emerald-500' size={18} />
                      ) : topic.status === 'In Progress' ? (
                        <MdOutlinePendingActions className='text-blue-400' size={18} />
                      ) : null}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Info Section */}
      <div className='bg-gradient-to-r from-indigo-600/10 to-blue-600/10 rounded-[40px] border border-white/10 p-8 flex flex-col md:flex-row items-center gap-8'>
        <div className='w-20 h-20 bg-white/5 rounded-3xl flex items-center justify-center text-blue-400 border border-white/10'>
          <MdOutlineSchool size={40} />
        </div>
        <div className='flex-1 text-center md:text-left'>
          <h3 className='text-xl font-black text-white'>Academic Standard 2024-25</h3>
          <p className='text-gray-400 mt-1'>The syllabus is designed according to the latest educational standards to ensure comprehensive learning and skill development for all students across the school.</p>
        </div>
        <button className='px-8 py-3 bg-white/5 hover:bg-white/10 text-white rounded-2xl font-bold text-sm border border-white/10 transition-all'>
          Download Full PDF
        </button>
      </div>
    </div>
  );
}

export default StudentSyllabus;
