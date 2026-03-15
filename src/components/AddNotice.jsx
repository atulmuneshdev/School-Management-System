import React, { useState } from "react";
import { MdAddAlert, MdSend, MdTitle, MdDescription } from 'react-icons/md'

function AddNotice({ onAddNotice }) {
  const [notice, setNotice] = useState({
    title: "",
    message: ""
  });

  const handleChange = (e) => {
    setNotice({
      ...notice,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onAddNotice) {
      onAddNotice(notice);
    }
    setNotice({ title: "", message: "" });
  };

  return (
    <div className="w-full h-[55%]">
      <form
        onSubmit={handleSubmit}
        className="w-full h-full bg-white/5 border border-white/10 backdrop-blur-3xl p-8 rounded-[40px] shadow-2xl flex flex-col relative overflow-hidden group min-h-[450px]"
      >
        {/* Background Glow */}
        <div className='absolute -left-20 -bottom-20 w-64 h-64 bg-indigo-600/10 rounded-full blur-[100px] group-hover:bg-indigo-600/20 transition-all duration-700'></div>

        <div className='flex items-center gap-4 mb-10 relative z-10'>
          <div className='w-14 h-14 bg-indigo-600 rounded-2xl flex items-center justify-center text-white shadow-xl shadow-indigo-600/20'>
            <MdAddAlert size={28} />
          </div>
          <div>
            <h2 className='text-2xl font-black text-white tracking-tight uppercase'>Create <span className='text-indigo-400'>Notice</span></h2>
            <p className='text-gray-500 font-bold text-[10px] uppercase tracking-widest mt-1'>Broadcast to School Community</p>
          </div>
        </div>

        <div className="space-y-6 flex-1 relative z-10">
          <div className="space-y-3 group">
            <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest ml-1 group-focus-within:text-indigo-400 transition-colors">Notice Title</label>
            <div className="relative">
              <MdTitle className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-indigo-400 transition-colors" />
              <input
                type="text"
                name="title"
                value={notice.title}
                onChange={handleChange}
                placeholder="e.g., Annual Sports Meet 2025"
                className="w-full bg-black/20 border border-white/10 p-5 pl-14 rounded-2xl focus:ring-2 focus:ring-indigo-500/50 outline-none text-white font-bold text-sm transition-all placeholder:text-gray-700"
                required
              />
            </div>
          </div>

          <div className="space-y-3 group flex-1 flex flex-col">
            <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest ml-1 group-focus-within:text-indigo-400 transition-colors">Announcement Details</label>
            <div className="relative flex-1 flex flex-col">
              <MdDescription className="absolute left-5 top-6 text-gray-500 group-focus-within:text-indigo-400 transition-colors" />
              <textarea
                name="message"
                value={notice.message}
                onChange={handleChange}
                placeholder="Compose your detailed announcement here..."
                className="w-full flex-1 bg-black/20 border border-white/10 p-5 pl-14 rounded-[30px] focus:ring-2 focus:ring-indigo-500/50 outline-none text-white font-medium text-sm transition-all resize-none placeholder:text-gray-700 custom-scrollbar"
                required
              ></textarea>
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-5 rounded-[20px] font-black text-[10px] uppercase tracking-[0.2em] shadow-2xl shadow-indigo-600/30 hover:bg-indigo-700 transition-all transform active:scale-95 mt-8 flex items-center justify-center gap-3 relative z-10"
        >
          <MdSend size={18} />
          Publish Announcement
        </button>
      </form>
    </div>
  );
}

export default AddNotice;