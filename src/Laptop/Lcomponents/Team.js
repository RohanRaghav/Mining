import React, { useState } from 'react';

const Team = () => {
  const [users, setUsers] = useState([]);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [editUsername, setEditUsername] = useState('');
  const [newPassword, setNewPassword] = useState('');

  // Function to handle user registration
  const handleRegister = (e) => {
    e.preventDefault();
    if (username && password) {
      const userExists = users.some(user => user.username === username);
      if (userExists) {
        alert('Username already exists. Please choose a different username.');
      } else {
        setUsers([...users, { username, password }]);
        setUsername('');
        setPassword('');
      }
    } else {
      alert('Please enter both username and password.');
    }
  };

  // Function to handle user removal
  const handleRemove = (usernameToRemove) => {
    setUsers(users.filter(user => user.username !== usernameToRemove));
  };

  // Function to handle password editing
  const handleEditPassword = (e) => {
    e.preventDefault();
    setUsers(users.map(user => 
      user.username === editUsername ? { ...user, password: newPassword } : user
    ));
    setEditUsername('');
    setNewPassword('');
  };

  return (
    <div className="team-container">
      <h2 className="title">User Management</h2>

      {/* User Registration Form */}
      <form onSubmit={handleRegister} className="form-container">
        <h3 className="form-title">Register User</h3>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          className="input-field"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="input-field"
          required
        />
        <button type="submit" className="btn-register">
          Register
        </button>
      </form>

      {/* Edit Password Form */}
      <form onSubmit={handleEditPassword} className="form-container">
        <h3 className="form-title">Edit Password</h3>
        <input
          type="text"
          value={editUsername}
          onChange={(e) => setEditUsername(e.target.value)}
          placeholder="Username to edit"
          className="input-field"
          required
        />
        <input
          type="password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          placeholder="New Password"
          className="input-field"
          required
        />
        <button type="submit" className="btn-edit">
          Edit Password
        </button>
      </form>

      {/* Users List */}
      <h3 className="user-list-title">Registered Users</h3>
      <ul className="user-list">
        {users.length > 0 ? (
          users.map(user => (
            <li key={user.username} className="user-item">
              <span style={{color:'white'}}>{user.username}</span>
              <button
                onClick={() => handleRemove(user.username)}
                className="btn-remove"
              >
                Remove
              </button>
            </li>
          ))
        ) : (
          <li>No registered users.</li>
        )}
      </ul>
    </div>
  );
};

export default Team;
