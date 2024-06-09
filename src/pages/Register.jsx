import React, { useState } from "react";
import { auth, db } from "../components/Firebase";
import { setDoc, doc } from "firebase/firestore";
import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { useNavigate } from 'react-router-dom';  // Import useNavigate

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const navigate = useNavigate();  // Initialize useNavigate

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const credential = await createUserWithEmailAndPassword(auth, email, password);
      const user = credential.user;

      console.log("User registered:", user);

      // Send verification email
      await sendEmailVerification(user);

      console.log("Verification email sent!");

      // Save user data to Firestore
      console.log("Saving user data to Firestore...");
      await setDoc(doc(db, "Users", user.uid), {
        email: user.email,
        firstName: fname,
        lastName: lname,
        createdAt: new Date()
      });

      console.log("User data saved to Firestore!");

      // Redirect user to login page
      navigate("/login");  // Use navigate instead of window.location.href
    } catch (error) {
      console.error("Error during registration:", error.message);
      alert("Error: " + error.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={handleRegister} className="bg-white p-6 rounded shadow-md">
        <h3 className="text-xl font-bold mb-4">Sign Up</h3>
        <div className="mb-3">
          <label>First name</label>
          <input
            type="text"
            className="w-full px-3 py-2 border rounded"
            placeholder="First name"
            onChange={(e) => setFname(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label>Last name</label>
          <input
            type="text"
            className="w-full px-3 py-2 border rounded"
            placeholder="Last name"
            onChange={(e) => setLname(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="w-full px-3 py-2 border rounded"
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="w-full px-3 py-2 border rounded"
            placeholder="Enter password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="flex justify-center">
          <button type="submit" className="btn btn-primary bg-blue-500 text-white px-4 py-2 rounded">
            Sign Up
          </button>
        </div>
        <p className="text-right mt-4">
          Already registered? <a href="/login" className="text-blue-500">Login</a>
        </p>
      </form>
    </div>
  );
}

export default Register;
