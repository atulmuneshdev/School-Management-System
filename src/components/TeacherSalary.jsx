import React, { useState } from "react";

function TeacherSalary({ teachers = [] }) {
  const [salaryRecords, setSalaryRecords] = useState([
    {
      id: 1,
      teacherName: "Rahul Sharma",
      month: "2026-03",
      baseSalary: 45000,
      workingDays: 26,
      presentDays: 24,
      absentDays: 2,
      calculatedSalary: 41538,
      status: "Paid"
    },
    {
      id: 2,
      teacherName: "Anita Verma",
      month: "2026-03",
      baseSalary: 42000,
      workingDays: 26,
      presentDays: 26,
      absentDays: 0,
      calculatedSalary: 42000,
      status: "Unpaid"
    }
  ]);

  const [form, setForm] = useState({
    teacherId: "",
    month: new Date().toISOString().slice(0, 7),
    workingDays: 26,
    presentDays: 26,
    status: "Unpaid"
  });

  const [showAddForm, setShowAddForm] = useState(false);

  const handleAddSalary = (e) => {
    e.preventDefault();
    const selectedTeacher = teachers.find(t => t.id === parseInt(form.teacherId));
    if (!selectedTeacher) return;

    const baseSalary = parseInt(selectedTeacher.salary || 0);
    const absentDays = form.workingDays - form.presentDays;
    const calculatedSalary = Math.round((baseSalary / form.workingDays) * form.presentDays);

    const newRecord = {
      id: Date.now(),
      teacherName: selectedTeacher.name,
      month: form.month,
      baseSalary,
      workingDays: form.workingDays,
      presentDays: form.presentDays,
      absentDays,
      calculatedSalary,
      status: form.status
    };

    setSalaryRecords([newRecord, ...salaryRecords]);
    setShowAddForm(false);
    setForm({
      teacherId: "",
      month: new Date().toISOString().slice(0, 7),
      workingDays: 26,
      presentDays: 26,
      status: "Unpaid"
    });
  };

  const toggleStatus = (id) => {
    setSalaryRecords(salaryRecords.map(r => 
      r.id === id ? { ...r, status: r.status === "Paid" ? "Unpaid" : "Paid" } : r
    ));
  };

  return (
    <div className="w-full mt-8 animate-in fade-in slide-in-from-bottom-4 duration-300">
      <div className="bg-white shadow-2xl rounded-3xl overflow-hidden border border-gray-100">
        
        {/* Header */}
        <div className="p-8 bg-gradient-to-r from-emerald-50 to-teal-50 border-b border-gray-200 flex justify-between items-center">
          <div>
            <h2 className="text-3xl font-black text-gray-800">Salary & Attendance</h2>
            <p className="text-gray-500 font-medium mt-1">Track monthly payments and attendance records</p>
          </div>
          <button 
            onClick={() => setShowAddForm(!showAddForm)}
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2.5 rounded-xl font-bold shadow-lg transition-all active:scale-95 flex items-center gap-2"
          >
            {showAddForm ? "Close Form" : "Process New Salary"}
          </button>
        </div>

        {/* Add Salary Form */}
        {showAddForm && (
          <div className="p-8 bg-gray-50 border-b border-gray-200 animate-in fade-in slide-in-from-top-4">
            <form onSubmit={handleAddSalary} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 items-end">
              <div className="space-y-1">
                <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Select Teacher</label>
                <select 
                  className="w-full p-2.5 rounded-xl border border-gray-200 bg-white focus:ring-2 focus:ring-emerald-500 outline-none text-sm font-bold"
                  value={form.teacherId}
                  onChange={(e) => setForm({...form, teacherId: e.target.value})}
                  required
                >
                  <option value="">Choose...</option>
                  {teachers.map(t => <option key={t.id} value={t.id}>{t.name} (₹{t.salary})</option>)}
                </select>
              </div>
              <div className="space-y-1">
                <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Month</label>
                <input 
                  type="month" 
                  className="w-full p-2.5 rounded-xl border border-gray-200 bg-white focus:ring-2 focus:ring-emerald-500 outline-none text-sm font-bold"
                  value={form.month}
                  onChange={(e) => setForm({...form, month: e.target.value})}
                  required
                />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Working Days</label>
                <input 
                  type="number" 
                  className="w-full p-2.5 rounded-xl border border-gray-200 bg-white focus:ring-2 focus:ring-emerald-500 outline-none text-sm font-bold"
                  value={form.workingDays}
                  onChange={(e) => setForm({...form, workingDays: parseInt(e.target.value)})}
                  required
                />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Present Days</label>
                <input 
                  type="number" 
                  max={form.workingDays}
                  className="w-full p-2.5 rounded-xl border border-gray-200 bg-white focus:ring-2 focus:ring-emerald-500 outline-none text-sm font-bold"
                  value={form.presentDays}
                  onChange={(e) => setForm({...form, presentDays: parseInt(e.target.value)})}
                  required
                />
              </div>
              <button type="submit" className="bg-emerald-600 text-white p-2.5 rounded-xl font-bold shadow-md hover:bg-emerald-700 transition-all">
                Add Record
              </button>
            </form>
          </div>
        )}

        {/* Salary List Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="p-6 font-bold text-gray-600 uppercase text-xs tracking-wider">Teacher & Month</th>
                <th className="p-6 font-bold text-gray-600 uppercase text-xs tracking-wider">Attendance</th>
                <th className="p-6 font-bold text-gray-600 uppercase text-xs tracking-wider">Base Salary</th>
                <th className="p-6 font-bold text-gray-600 uppercase text-xs tracking-wider">Calculated</th>
                <th className="p-6 font-bold text-gray-600 uppercase text-xs tracking-wider">Status</th>
                <th className="p-6 font-bold text-gray-600 uppercase text-xs tracking-wider text-center">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {salaryRecords.map((record) => (
                <tr key={record.id} className="hover:bg-gray-50 transition-colors">
                  <td className="p-6">
                    <div className="flex flex-col">
                      <span className="font-bold text-gray-800">{record.teacherName}</span>
                      <span className="text-xs text-emerald-600 font-black uppercase tracking-widest">{record.month}</span>
                    </div>
                  </td>
                  <td className="p-6">
                    <div className="flex flex-col">
                      <span className="text-sm font-bold text-gray-700">{record.presentDays} / {record.workingDays} Days</span>
                      <span className="text-[10px] font-bold text-red-400">{record.absentDays} Absents</span>
                    </div>
                  </td>
                  <td className="p-6">
                    <span className="text-sm font-bold text-gray-500">₹ {record.baseSalary}</span>
                  </td>
                  <td className="p-6">
                    <span className="text-lg font-black text-emerald-700">₹ {record.calculatedSalary}</span>
                  </td>
                  <td className="p-6">
                    <button 
                      onClick={() => toggleStatus(record.id)}
                      className={`px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider transition-all border-2 ${
                        record.status === "Paid" 
                        ? "bg-emerald-100 text-emerald-700 border-emerald-200" 
                        : "bg-red-100 text-red-700 border-red-200"
                      }`}
                    >
                      {record.status}
                    </button>
                  </td>
                  <td className="p-6">
                    <div className="flex justify-center gap-3">
                      <button className="text-gray-400 hover:text-emerald-600 transition-colors">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"></path></svg>
                      </button>
                      <button 
                        onClick={() => setSalaryRecords(salaryRecords.filter(r => r.id !== record.id))}
                        className="text-gray-400 hover:text-red-600 transition-colors"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {salaryRecords.length === 0 && (
            <div className="p-12 text-center text-gray-400 italic font-medium">No salary records processed yet.</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default TeacherSalary;