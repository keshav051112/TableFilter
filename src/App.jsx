import React, { useState } from 'react';

const App = () => {
  
  const [data] = useState([
    { id: 1, name: 'keshav', role: 'Developer', location: 'New York' },
    { id: 2, name: 'khushi', role: 'Designer', location: 'San Francisco' },
    { id: 3, name: 'lavya', role: 'Manager', location: 'Chicago' },
    { id: 4, name: 'gunjeet', role: 'Developer', location: 'Boston' },
    { id: 5, name: 'satyakam', role: 'Designer', location: 'Austin' },
  ]);

  const [searchTerm, setSearchTerm] = useState('');


  const filteredData = data.filter(
    (item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Table Filter</h1>
  
      <input
        type="text"
        placeholder="Search by name, role, or location"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border border-gray-300 rounded-md p-2 w-full mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
     
      <table className="table-auto w-full border-collapse border border-gray-200">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-4 py-2">ID</th>
            <th className="border border-gray-300 px-4 py-2">Name</th>
            <th className="border border-gray-300 px-4 py-2">Role</th>
            <th className="border border-gray-300 px-4 py-2">Location</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item) => (
            <tr key={item.id}>
              <td className="border border-gray-300 px-4 py-2">{item.id}</td>
              <td className="border border-gray-300 px-4 py-2">{item.name}</td>
              <td className="border border-gray-300 px-4 py-2">{item.role}</td>
              <td className="border border-gray-300 px-4 py-2">{item.location}</td>
            </tr>
          ))}
          {filteredData.length === 0 && (
            <tr>
              <td
                colSpan="4"
                className="text-center border border-gray-300 py-4 text-gray-500"
              >
                No matching results found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default App;
