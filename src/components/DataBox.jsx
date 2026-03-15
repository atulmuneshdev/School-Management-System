import React from 'react'

function DataBox({ total, name, onClick, icon }) {
  return (
    <div className='w-full' onClick={onClick}>
      <div className='flex items-center p-8 rounded-[35px] bg-white/5 backdrop-blur-3xl border border-white/10 shadow-2xl hover:shadow-blue-500/10 hover:border-white/20 hover:scale-[1.02] transition-all duration-500 group cursor-pointer relative overflow-hidden'>
        {/* Background Glow */}
        <div className='absolute -right-10 -bottom-10 w-32 h-32 bg-blue-600/10 rounded-full blur-3xl group-hover:bg-blue-600/20 transition-all duration-700'></div>
        
        <div className='flex-1 z-10'>
          <p className='text-[10px] font-black text-gray-500 uppercase tracking-[0.2em] mb-2 group-hover:text-blue-400 transition-colors'>{name}</p>
          <div className='flex items-baseline gap-1'>
            <p className='text-4xl font-black text-white group-hover:scale-110 origin-left transition-transform duration-500'>{total}</p>
            <span className='text-[10px] font-bold text-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity'>+12%</span>
          </div>
        </div>
        
        <div className='w-16 h-16 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center text-blue-400/40 group-hover:text-blue-400 group-hover:bg-blue-600/10 group-hover:border-blue-500/20 transition-all duration-500 transform group-hover:rotate-12 z-10 shadow-inner'>
          {React.cloneElement(icon, { size: 28 })}
        </div>
      </div>
    </div>
  )
}

export default DataBox