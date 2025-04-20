import React, { useState } from 'react';
import { ref, set } from 'firebase/database';
import { database } from '../firebase';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const navigate = useNavigate(); // to navigate to Display.jsx

  const submitHandler = async (event) => {
    event.preventDefault();

    try {
      const timestamp = Date.now(); // unique key
      await set(ref(database, 'students/' + timestamp), {
        studentName: name,
        phoneNumber: phone,
      });

      setName('');
      setPhone('');
    } catch (error) {
      console.error("Firebase submission error:", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Add Student</h2>
        <form onSubmit={submitHandler} className="space-y-4">
          <input
            type="text"
            placeholder="Student Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full px-4 py-2 border rounded-lg"
          />
          <input
            type="tel"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
            className="w-full px-4 py-2 border rounded-lg"
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
          >
            Submit
          </button>
        </form>

        {/* Display Button */}
        <button
          onClick={() => navigate('/display')}
          className="mt-4 w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600"
        >
          Display Students
        </button>
      </div>
    </div>
  );
};

export default Home;


