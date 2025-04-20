import React, { useEffect, useState } from 'react';
import { ref, onValue } from 'firebase/database';
import { database } from '../firebase';

const Display = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const studentsRef = ref(database, 'students/');

    const unsubscribe = onValue(studentsRef, (snapshot) => {
      const data = snapshot.val();
      const loadedStudents = [];

      for (let key in data) {
        loadedStudents.push({
          id: key,
          name: data[key].studentName,
          phone: data[key].phoneNumber,
        });
      }

      setStudents(loadedStudents);
    });

    return () => unsubscribe(); // Cleanup listener on unmount
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h2 className="text-2xl font-bold mb-4 text-center">Student List</h2>
      <div className="max-w-2xl mx-auto bg-white shadow-md rounded-lg p-6">
        {students.length === 0 ? (
          console.log("no students found")
        ) : (
          <ul className="space-y-4">
            {students.map((student) => (
              <li
                key={student.id}
                className="p-4 border border-gray-300 rounded-lg"
              >
                <p className="font-semibold">Name: {student.name}</p>
                <p>Phone: {student.phone}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Display;
