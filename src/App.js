import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import ResumeGenerator from './pages/ResumeGenerator';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Template1Page from './pages/Template1Page';
import Template2Page from './pages/Template2Page';
import Template3Page from './pages/Template3Page';
import { auth } from './firebase';

const App = () => {
  const [user, setUser] = useState(null);
  const [resumeData, setResumeData] = useState({
    name: '',
    title: '',
    contact: '',
    summary: '',
    experience: [],
    education: [],
    skills: [],
  });

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      if (currentUser) {
        setUser({
          displayName: currentUser.displayName,
          email: currentUser.email,
          photoURL: currentUser.photoURL,
        });
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <Router>
      <Navbar user={user} setUser={setUser} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route 
          path="/resume" 
          element={
            user 
              ? <ResumeGenerator resumeData={resumeData} setResumeData={setResumeData} /> 
              : <Login setUser={setUser} />
          } 
        />
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/signup" element={<Signup setUser={setUser} />} />
        <Route 
          path="/template1" 
          element={<Template1Page resumeData={resumeData} setResumeData={setResumeData} />} 
        />
        <Route 
          path="/template2" 
          element={<Template2Page resumeData={resumeData} setResumeData={setResumeData} />} 
        />
        <Route 
          path="/template3" 
          element={<Template3Page resumeData={resumeData} setResumeData={setResumeData} />} 
        />
      </Routes>
    </Router>
  );
};

export default App;
