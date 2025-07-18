import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:8080/register', {
        username,
        email,
        password,
      });
      alert('Registration successful!');
      window.location.href = '/'; // Redirect to home page
      console.log(res.data);
    } catch (error) {
      alert('Registration failed!');
      console.error(error);
    }
  };

  return (
    <div className="min-h-fit pt-28 flex items-center justify-center overflow-hidden">
      <form
        onSubmit={handleRegister}
        className="bg-violet-50 p-8 border-2 border-violet-300 rounded shadow-md w-full max-w-sm"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>

        <div className="mb-4">
          <label className="block mb-1 font-medium">Username</label>
          <input
            type="text"
            className="w-full px-4 py-2 border rounded"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1 font-medium">Email</label>
          <input
            type="email"
            className="w-full px-4 py-2 border rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="mb-6">
          <label className="block mb-1 font-medium">Password</label>
          <input
            type="password"
            className="w-full px-4 py-2 border rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-violet-600 font-semibold text-white py-2 rounded hover:bg-green-600 transition"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
