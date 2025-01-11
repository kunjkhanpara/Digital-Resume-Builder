import React, { useState, useRef } from "react";
import html2pdf from "html2pdf.js";
import "./Template1.css";

const Template1Page = () => {
  const [formData, setFormData] = useState({
    name: "Kunj Khanpara",
    phone: "+91 9925424344",
    email: "kunjpatel4647@gmail.com",
    address: "Porbandar, Gujarat",
    github: "https://github.com/kunjkhanpara",
    linkedin: "https://www.linkedin.com/in/kunj-khanpara/",
    summary:
      "Computer Engineering student currently in the final year of B.Tech with skills in ReactJS, Web Development, and Java. Completed projects such as a Weather Application using API and an ATM machine.",
    skills: "React.js, Web Development, JavaScript, HTML, CSS",
    experience: `Prodigy InfoTech (virtual)\nWeb Developer Internship | 04/2024 – 05/2024\n- Developed web applications using APIs.\n- Created a weather app with real-time data integration.\n- Designed and implemented a tic-tac-toe game.\n- Collaborated with team members on web development projects.`,
    education: `B.Tech Computer Engineer (Final Year)\nMarwadi University | Rajkot, Gujarat (2021-2025) | CGPA: 6.1\n\n12th Science\nS.S. Divine School | Ahmedabad | Gujarat Board | Percentage: 76% (2021)\n\n10th\nShree Saraswati Science School | Porbandar | Gujarat Board | Percentage: 82% (2019)`,
    certificates: `The Complete Tableau Bootcamp for Aspiring Data Scientists\nProgramming with Python\nDesign Thinking for Beginners`,
    projects: `QUIZ Application using JAVA & SWING\nWeather Application using API\nHospital Website Using HTML & CSS\nATM Machine using JAVA`,
  });

  const resumeRef = useRef();

  const handleDownload = () => {
    const options = {
      margin: 0,
      filename: "resume.pdf",
      html2canvas: { scale: 4, useCORS: true },
      jsPDF: { unit: "pt", format: "a4", orientation: "portrait" },
    };
    html2pdf().from(resumeRef.current).set(options).save();
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="template-container">
      {/* Input Section */}
      <div className="input-section">
        <h2>Input Information</h2>
        {Object.keys(formData).map((key) => (
          <div className="input-group" key={key}>
            <label htmlFor={key}>{key.charAt(0).toUpperCase() + key.slice(1)}</label>
            {["summary", "experience", "education", "certificates", "projects"].includes(key) ? (
              <textarea
                id={key}
                name={key}
                value={formData[key]}
                onChange={handleChange}
                rows={4}
                placeholder={`Edit your ${key}`}
              />
            ) : (
              <input
                id={key}
                name={key}
                value={formData[key]}
                onChange={handleChange}
                type={key === "phone" ? "tel" : "text"}
                placeholder={`Edit your ${key}`}
              />
            )}
          </div>
        ))}
      </div>

      {/* Resume Preview Section */}
      <div className="preview-section-wrapper">
        <div className="preview-section" ref={resumeRef}>
          <div className="header">
            <h1>{formData.name}</h1>
            <p>
              {formData.phone} | {formData.email} | {formData.address}&nbsp;&nbsp;&nbsp;
              <a href={formData.github} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
              {" | "}
              <a href={formData.linkedin} target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </p>
          </div>

          <div className="section">
            <h2>Summary</h2>
            <p>{formData.summary}</p>
          </div>

          <div className="section">
            <h2>Skills</h2>
            <p>{formData.skills}</p>
          </div>

          <div className="section">
            <h2>Experience</h2>
            <pre>{formData.experience}</pre>
          </div>

          <div className="section">
            <h2>Education</h2>
            <pre>{formData.education}</pre>
          </div>

          <div className="section">
            <h2>Certificates</h2>
            <pre>{formData.certificates}</pre>
          </div>

          <div className="section">
            <h2>Projects</h2>
            <pre>{formData.projects}</pre>
          </div>
        </div>

        {/* Download Button */}
        <div className="download-button-container">
          <button onClick={handleDownload} className="download-button">
            Download Resume
          </button>
        </div>
      </div>
    </div>
  );
};

export default Template1Page;
