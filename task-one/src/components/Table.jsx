// Table.jsx

import React, { useState } from 'react';

const Table = () => {
  const [data, setData] = useState([
    { id: 1, name: 'John Doe', age: 25 },
    { id: 2, name: 'Jane Doe', age: 30 },
    // Add more data as needed
  ]);

  const handleEdit = (rowIndex, columnName, value) => {
    const newData = [...data];
    newData[rowIndex][columnName] = value;
    setData(newData);
  };

  return (
    <table className="table-auto m-4">
      <thead>
        <tr>
          <th className="border px-4 py-2">ID</th>
          <th className="border px-4 py-2">Name</th>
          <th className="border px-4 py-2">Age</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={row.id}>
            <td className="border px-4 py-2">{row.id}</td>
            <td
              className="border px-4 py-2"
              contentEditable={true}
              onBlur={(e) => handleEdit(index, 'name', e.target.textContent)}
            >
              {row.name}
            </td>
            <td
              className="border px-4 py-2"
              contentEditable={true}
              onBlur={(e) => handleEdit(index, 'age', e.target.textContent)}
            >
              {row.age}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
