import { useState } from "react";
import { FaEdit, FaPlus } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";
import axios from "axios";
function App() {
  const [sampleStudentData, setSampleStudentData] = useState([
    {
      name: 'Alice Johnson',
      date: '2024-01-15',
      reg: 'F20APC1001'
    },
    {
      name: 'Bob Smith',
      date: '2024-01-22',
      reg: '20APC1002'
    },
    {
      name: 'Charlie Brown',
      date: '2024-02-05',
      reg: '20APC1003'
    },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newStudent, setNewStudent] = useState({ name: "", date: "", reg: "" });

  const handleAddStudent = () => {
    setSampleStudentData([...sampleStudentData, newStudent]);
    
    axios.post("http://localhost:5000/students",newStudent)
    .then(()=>{
      alert("Student Added Successfully");
    })
    .catch(()=>{
      alert("Error Adding Student");
    })
    setNewStudent({ name: "", date: "", reg: "" });

    setIsModalOpen(false);
  };

  return (
    <div className="container mx-auto p-6 relative">
      {/* Add Button */}
      <button 
        className="fixed bottom-6 right-6 bg-blue-500 p-4 rounded-full text-white shadow-lg hover:bg-blue-600 transition"
        onClick={() => setIsModalOpen(true)}
      >
        <FaPlus />
      </button>

      {/* Heading */}
      <h1 className="text-2xl font-semibold text-center mb-6 text-gray-800">
        Student Information
      </h1>

      {/* Table Headers */}
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <div className="flex items-center justify-between p-4 bg-gray-100 border-b border-gray-300 text-gray-700 font-semibold">
          <div className="flex-1 text-sm">Registration Number</div>
          <div className="flex-1 text-sm">Name</div>
          <div className="flex-1 text-sm">Date</div>
          <div className="w-16 text-sm text-center">Actions</div>
        </div>

        {/* Student Rows */}
        {sampleStudentData.map((std, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-4 border-b border-gray-200 hover:bg-gray-100 transition duration-300"
          >
            <div className="flex-1 text-sm font-medium text-gray-700">{std.reg}</div>
            <div className="flex-1 text-sm font-medium text-gray-700">{std.name}</div>
            <div className="flex-1 text-sm font-medium text-gray-700">{std.date}</div>
            <div className="flex gap-2">
              <button className="p-2 text-blue-500 hover:text-blue-700 transition duration-200">
                <FaEdit />
              </button>
              <button className="p-2 text-red-500 hover:text-red-700 transition duration-200">
                <FaTrashAlt />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Add Student Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-80">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Add Student</h2>
            
            {/* Form */}
            <div className="mb-4">
              <label className="block text-gray-700">Registration Number</label>
              <input
                type="text"
                value={newStudent.reg}
                onChange={(e) => setNewStudent({ ...newStudent, reg: e.target.value })}
                className="w-full p-2 border border-gray-300 rounded mt-1"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Name</label>
              <input
                type="text"
                value={newStudent.name}
                onChange={(e) => setNewStudent({ ...newStudent, name: e.target.value })}
                className="w-full p-2 border border-gray-300 rounded mt-1"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Date</label>
              <input
                type="date"
                value={newStudent.date}
                onChange={(e) => setNewStudent({ ...newStudent, date: e.target.value })}
                className="w-full p-2 border border-gray-300 rounded mt-1"
              />
            </div>

            {/* Action Buttons */}
            <div className="flex justify-end gap-2">
              <button 
                className="bg-red-500 text-white p-2 rounded hover:bg-red-600 transition"
                onClick={() => setIsModalOpen(false)}
              >
                Cancel
              </button>
              <button 
                className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition"
                onClick={handleAddStudent}
              >
                Add Student
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
 