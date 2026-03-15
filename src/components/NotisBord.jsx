import React from 'react'
import { MdNotificationsActive, MdDelete, MdAccessTime, MdPushPin } from 'react-icons/md'

function NotisBord({ notices = [], onDeleteNotice }) {
  return (
    <div className='w-full h-[50%]'>
      <div className='bg-white/5 border border-white/10 backdrop-blur-3xl p-8 rounded-[40px] shadow-2xl relative overflow-hidden group min-h-[450px]'>
        {/* Background Glow */}
        <div className='absolute -right-20 -top-20 w-64 h-64 bg-blue-600/10 rounded-full blur-[100px] group-hover:bg-blue-600/20 transition-all duration-700'></div>

        <div className='flex items-center justify-between mb-10 relative z-10'>
          <div className='flex items-center gap-4'>
            <div className='w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center text-white shadow-xl shadow-blue-600/20'>
              <MdNotificationsActive size={28} />
            </div>
            <div>
              <h2 className='text-2xl font-black text-white tracking-tight uppercase'>Bulletin <span className='text-blue-400'>Board</span></h2>
              <p className='text-gray-500 font-bold text-[10px] uppercase tracking-widest mt-1'>Official School Announcements</p>
            </div>
          </div>
          <span className='bg-white/5 border border-white/10 text-gray-400 px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest'>
            {notices.length} Active
          </span>
        </div>

        <div className='space-y-4 overflow-y-auto max-h-[500px] pr-4 custom-scrollbar relative z-10'>
          {notices.length > 0 ? (
            notices.map((notice) => (
              <div key={notice.id} className='p-6 rounded-[30px] bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/10 transition-all duration-300 group/item relative overflow-hidden'>
                <div className='flex justify-between items-start mb-4'>
                  <div className='flex items-center gap-3'>
                    <div className='w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]'></div>
                    <h3 className='font-black text-white text-lg group-hover/item:text-blue-400 transition-colors'>{notice.title}</h3>
                  </div>
                  <div className='flex items-center gap-3'>
                    <div className='flex items-center gap-1.5 bg-black/20 px-3 py-1.5 rounded-lg border border-white/5'>
                      <MdAccessTime className='text-gray-500' size={14} />
                      <span className='text-[10px] font-black text-gray-400 uppercase tracking-widest'>
                        {notice.date}
                      </span>
                    </div>
                    {onDeleteNotice && (
                      <button
                        onClick={() => onDeleteNotice(notice.id)}
                        className='text-gray-500 hover:text-red-400 transition-colors p-1.5 bg-white/5 rounded-lg border border-white/5 hover:border-red-400/20'
                        title="Archive Notice"
                      >
                        <MdDelete size={18} />
                      </button>
                    )}
                  </div>
                </div>
                <p className='text-gray-400 text-sm leading-relaxed font-medium pl-5'>{notice.message}</p>

                {/* Decorative pin icon */}
                <MdPushPin className='absolute -bottom-2 -right-2 text-white/5 -rotate-45' size={40} />
              </div>
            ))
          ) : (
            <div className='flex flex-col items-center justify-center py-20 text-center space-y-4'>
              <div className='w-20 h-20 bg-white/5 rounded-full flex items-center justify-center text-gray-700 border border-white/5'>
                <MdNotificationsActive size={40} />
              </div>
              <div className='space-y-1'>
                <p className='text-xl font-black text-white'>No Active Notices</p>
                <p className='text-gray-500 text-sm font-medium'>Stay tuned for upcoming school updates.</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default NotisBord