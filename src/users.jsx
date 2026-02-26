import React, { useState } from 'react';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:8080';

function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchUsers = () => {
    setLoading(true);
    setError(null);
    
    fetch(`${API_BASE_URL}/users`)
      .then(response => response.json())
      .then(data => {
        setUsers(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
      });
  };

  return (
    <div>
      <h2>All Users</h2>
      <button 
        onClick={fetchUsers} 
        disabled={loading}
        style={{ padding: '10px 20px', marginBottom: '20px', cursor: 'pointer' }}
      >
        {loading ? 'Loading...' : 'Show All Users'}
      </button>
      
      {error && <div style={{ color: 'red', marginBottom: '10px' }}>Error: {error}</div>}
      
      {users.length > 0 && (
      <table border="1" style={{ width: '100%', marginTop: '20px' }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Username</th>
            <th>Email</th>
            <th>Department</th>
            <th>Section</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.department}</td>
              <td>{user.section}</td>
            </tr>
          ))}
        </tbody>
      </table>
      )}
    </div>
  );
}

export default Users;
