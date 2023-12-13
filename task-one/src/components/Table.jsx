// Table.jsx

import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Table = () => {
  const [data, setData] = useState([
    { id: 1, name: 'John Doe', age: 25 },
    { id: 2, name: 'Jane Doe', age: 30 },
    // Add more data as needed
  ]);
const [users, setUsers] = useState([])
   const handleEdit = (rowIndex, columnName, value) => {
    const newData = [...data];
    newData[rowIndex][columnName] = value;
    setData(newData);
  };
const userTable =async()=>{
   const userData = await axios.get("http://localhost:8080/users")
   return userData
}
useEffect(()=>{
  userTable()
  .then((res)=>setUsers(res.data))
},[])
console.log(users)
  return (
    <>
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
    <table className="table-auto m-4">
      <thead>
        <tr>
          <th className="border px-4 py-2">ID</th>
          <th className="border px-4 py-2">Name</th>
          <th className="border px-4 py-2">Age</th>
          <th className="border px-4 py-2">Maried</th>
        </tr>
      </thead>
      <tbody>
        {users.map((row, index) => (
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
            <td
              className="border px-4 py-2"
              contentEditable={true}
              onBlur={(e) => handleEdit(index, 'married', e.target.textContent)}
            >
              {row.married}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    </>
  );
};

export default Table;
