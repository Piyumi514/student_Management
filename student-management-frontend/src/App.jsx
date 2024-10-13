import { FaEdit } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";

function App() {
  const sampleStudentData = [
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
  ];

  return (
    <div className="container mx-auto p-6">
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
    </div>
  );
}

export default App;
