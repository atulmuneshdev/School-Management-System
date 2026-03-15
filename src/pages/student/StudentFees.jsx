import React from 'react'
import { MdMonetizationOn, MdCheckCircle, MdError, MdHistory } from 'react-icons/md'

function StudentFees() {
  return (
    <div className='w-full space-y-8 animate-in fade-in duration-700'>
      <div className='flex justify-between items-center'>
        <h1 className='text-3xl font-black text-white tracking-tight'>Fee <span className='text-blue-400'>Management</span></h1>
        <div className='flex items-center gap-2 px-4 py-2 bg-emerald-500/10 rounded-xl border border-emerald-500/20 text-emerald-400'>
          <MdCheckCircle size={18} />
          <span className='text-xs font-black uppercase tracking-widest'>All Clear</span>
        </div>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        <div className='bg-white/5 p-8 rounded-[35px] border border-white/10 flex items-center gap-6'>
          <div className='w-16 h-16 bg-blue-600/20 rounded-2xl flex items-center justify-center text-blue-400'>
            <MdMonetizationOn size={32} />
          </div>
          <div>
            <p className='text-3xl font-black text-white'>₹4,500</p>
            <p className='text-xs font-bold text-gray-500 uppercase tracking-widest mt-1'>Total Paid Fees</p>
          </div>
        </div>

        <div className='bg-white/5 p-8 rounded-[35px] border border-white/10 flex items-center gap-6'>
          <div className='w-16 h-16 bg-emerald-500/20 rounded-2xl flex items-center justify-center text-emerald-400'>
            <MdCheckCircle size={32} />
          </div>
          <div>
            <p className='text-3xl font-black text-white'>₹0.00</p>
            <p className='text-xs font-bold text-gray-500 uppercase tracking-widest mt-1'>Current Balance</p>
          </div>
        </div>
      </div>

      <div className='bg-white/5 rounded-[40px] border border-white/10 overflow-hidden'>
        <div className='p-8 border-b border-white/5 flex items-center gap-3'>
          <MdHistory className='text-blue-400' size={24} />
          <h2 className='text-lg font-black text-white uppercase tracking-wider'>Payment History</h2>
        </div>
        <div className='p-12 text-center'>
          <p className='text-gray-500 italic'>Transaction history and digital receipts will be listed here.</p>
        </div>
      </div>
    </div>
  )
}

export default StudentFees
