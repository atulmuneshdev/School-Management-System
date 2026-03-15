import React, { useState } from "react";

function AllResult() {

  const [selectedClass, setSelectedClass] = useState(null);

  const students = [
    {
      name: "Rahul Kumar",
      class: "6",
      rollNo: "21",
      subjects: [
        { name: "Hindi", marks: 70 },
        { name: "English", marks: 65 },
        { name: "Math", marks: 80 },
        { name: "Science", marks: 60 },
        { name: "SST", marks: 55 }
      ]
    },
    {
      name: "Rahul Kumar",
      class: "5",
      rollNo: "21",
      subjects: [
        { name: "Hindi", marks: 72 },
        { name: "English", marks: 68 },
        { name: "Math", marks: 75 },
        { name: "Science", marks: 66 },
        { name: "SST", marks: 70 }
      ]
    },
    {
      name: "Rahul Kumar",
      class: "7",
      rollNo: "21",
      subjects: [
        { name: "Hindi", marks: 60 },
        { name: "English", marks: 55 },
        { name: "Math", marks: 65 },
        { name: "Science", marks: 58 },
        { name: "SST", marks: 62 }
      ]
    }
  ];

  // If no class selected → show class list
  if (!selectedClass) {
    return (
      <div className="p-10 text-center">

        <h1 className="text-3xl font-bold mb-10">Select Class</h1>

        <div className="flex justify-center gap-8">

          {[5,6,7].map((cls)=>(
            <div
              key={cls}
              onClick={()=>setSelectedClass(cls)}
              className="cursor-pointer bg-blue-200 hover:bg-blue-300 p-8 rounded-lg shadow-md w-40"
            >
              <h2 className="text-xl font-semibold">Class {cls}</h2>
              <p className="text-gray-600 text-sm mt-2">Click to view result</p>
            </div>
          ))}

        </div>

      </div>
    );
  }

  // Find student of selected class
  const student = students.find(s => s.class === String(selectedClass));

  const total = student.subjects.reduce((sum, sub) => sum + sub.marks, 0);
  const percentage = total / student.subjects.length;
  const pass = student.subjects.every(sub => sub.marks >= 33);

  return (
    <div className="p-6 flex justify-center">

      <div className="w-full max-w-3xl bg-white shadow-lg rounded-lg p-6 bg-gradient-to-t from-blue-200">

        <button
          onClick={()=>setSelectedClass(null)}
          className="mb-4 bg-gray-200 px-4 py-2 rounded"
        >
          ← Back
        </button>

        <h1 className="text-2xl font-bold text-center mb-6">
          Class {student.class} Result
        </h1>

        {/* Student Info */}
        <div className="flex justify-between mb-6 text-lg">
          <p><span className="font-semibold">Name:</span> {student.name}</p>
          <p><span className="font-semibold">Class:</span> {student.class}</p>
          <p><span className="font-semibold">Roll No:</span> {student.rollNo}</p>
        </div>

        {/* Result Table */}
        <table className="w-full border">
          <thead className="bg-gray-100">
            <tr>
              <th className="border p-2">Subject</th>
              <th className="border p-2">Marks</th>
            </tr>
          </thead>

          <tbody>
            {student.subjects.map((sub, index) => (
              <tr key={index} className="text-center">
                <td className="border p-2">{sub.name}</td>
                <td className="border p-2">{sub.marks}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Result Summary */}
        <div className="mt-6 text-lg space-y-2">
          <p><span className="font-semibold">Total:</span> {total}</p>
          <p><span className="font-semibold">Percentage:</span> {percentage.toFixed(2)}%</p>
          <p className={`font-bold ${pass ? "text-green-600" : "text-red-600"}`}>
            Result: {pass ? "Pass" : "Fail"}
          </p>
        </div>

      </div>

    </div>
  );
}

export default AllResult;