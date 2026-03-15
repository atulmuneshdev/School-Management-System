import React from 'react'
import { MdPerson, MdEdit, MdMail, MdPhone, MdLocationOn } from 'react-icons/md'

function StudentProfile() {
  const profileData = {
    name: "Munesh Atul",
    rollNo: "7th-A-45",
    class: "7th-A",
    email: "atul.munesh@example.com",
    phone: "+91 98765 43210",
    address: "123, School Hub, Knowledge City, IN"
  }

  return (
    <div className='w-full space-y-8 animate-in fade-in duration-700'>
      <div className='flex justify-between items-center'>
        <h1 className='text-3xl font-black text-white tracking-tight'>Student <span className='text-blue-400'>Profile</span></h1>
        
      </div>

      <div className='bg-white/5 rounded-[40px] border border-white/10 overflow-hidden backdrop-blur-xl'>
        <div className='bg-gradient-to-r from-blue-600 to-indigo-700 p-12 flex flex-col items-center relative overflow-hidden'>
          <div className='w-32 h-32 rounded-full bg-white/10 p-1 backdrop-blur-md relative z-10'>
            <img 
              src="/student.png" 
              alt="Avatar" 
              className='w-full h-full rounded-full bg-[#0f172a]' 
            />
          </div>
          <h2 className='text-3xl font-black text-white mt-6 relative z-10'>{profileData.name}</h2>
          <p className='text-blue-200 font-bold uppercase tracking-[0.4em] text-xs mt-2 relative z-10'>Roll No: {profileData.rollNo}</p>
          <div className='absolute -right-20 -top-20 w-64 h-64 bg-white/5 rounded-full blur-3xl'></div>
        </div>

        <div className='p-12 grid grid-cols-1 md:grid-cols-2 gap-8'>
          <div className='space-y-6'>
            <div className='flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/5'>
              <div className='p-3 bg-blue-500/20 rounded-xl text-blue-400'>
                <MdMail size={22} />
              </div>
              <div>
                <p className='text-[10px] font-black text-gray-500 uppercase tracking-widest'>Email Address</p>
                <p className='text-sm font-bold text-white'>{profileData.email}</p>
              </div>
            </div>

            <div className='flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/5'>
              <div className='p-3 bg-blue-500/20 rounded-xl text-blue-400'>
                <MdPhone size={22} />
              </div>
              <div>
                <p className='text-[10px] font-black text-gray-500 uppercase tracking-widest'>Phone Number</p>
                <p className='text-sm font-bold text-white'>{profileData.phone}</p>
              </div>
            </div>
          </div>

          <div className='space-y-6'>
            <div className='flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/5'>
              <div className='p-3 bg-blue-500/20 rounded-xl text-blue-400'>
                <MdLocationOn size={22} />
              </div>
              <div>
                <p className='text-[10px] font-black text-gray-500 uppercase tracking-widest'>Current Address</p>
                <p className='text-sm font-bold text-white'>{profileData.address}</p>
              </div>
            </div>

            <div className='flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/5'>
              <div className='p-3 bg-blue-500/20 rounded-xl text-blue-400'>
                <MdPerson size={22} />
              </div>
              <div>
                <p className='text-[10px] font-black text-gray-500 uppercase tracking-widest'>Class & Section</p>
                <p className='text-sm font-bold text-white'>{profileData.class}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StudentProfile
