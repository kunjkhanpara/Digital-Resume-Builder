import React, { useState } from 'react';
import './Template2.css';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const Template2Page = () => {
  const [step, setStep] = useState(1);
  const [resumeData, setResumeData] = useState({
    name: '',
    designation: '',
    photo: '',
    contact: { email: '', phone: '', address: '' },
    education: [],
    skills: [],
    hobbies: [],
    summary: '',
    workExperience: [],
    projects: [],
    certificates: [],
    showWorkExperience: false,
  });

  const handleInputChange = (section, field, value) => {
    setResumeData((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value,
      },
    }));
  };

  const handleListChange = (section, index, field, value) => {
    const updatedList = [...resumeData[section]];
    updatedList[index][field] = value;
    setResumeData((prev) => ({
      ...prev,
      [section]: updatedList,
    }));
  };

  const addToList = (section, newItem) => {
    setResumeData((prev) => ({
      ...prev,
      [section]: [...prev[section], newItem],
    }));
  };

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  // Enhanced PDF download function with html2canvas
  const handleDownload = async () => {
    const input = document.querySelector('.preview-container');
    const canvas = await html2canvas(input, {
      scale: 2, // High resolution for better PDF quality
      useCORS: true, // Allow cross-origin images
    });

    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF('p', 'mm', 'a4'); // Portrait orientation, A4 size

    const pdfWidth = 210; // A4 width in mm
    const pdfHeight = 297; // A4 height in mm
    const imgWidth = pdfWidth;
    const imgHeight = (canvas.height * pdfWidth) / canvas.width;

    let heightLeft = imgHeight;
    let position = 0;

    pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
    heightLeft -= pdfHeight;

    while (heightLeft > 0) {
      position = heightLeft - imgHeight;
      pdf.addPage();
      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pdfHeight;
    }

    pdf.save('resume.pdf');
  };

  return (
    <div className="resume-builder">
      {/* Left Side: Input Fields */}
      <div className="input-container">
        {step === 1 && (
          <div className="form-section">
            <h3>Step 1: Personal Information</h3>
            <input
              type="text"
              placeholder="Full Name"
              value={resumeData.name}
              onChange={(e) => setResumeData({ ...resumeData, name: e.target.value })}
            />
            <input
              type="text"
              placeholder="Designation"
              value={resumeData.designation}
              onChange={(e) => setResumeData({ ...resumeData, designation: e.target.value })}
            />
            <input
              type="file"
              onChange={(e) => setResumeData({ ...resumeData, photo: URL.createObjectURL(e.target.files[0]) })}
            />
            <button onClick={nextStep}>Next</button>
          </div>
        )}
        {step === 2 && (
          <div className="form-section">
            <h3>Step 2: Contact Information</h3>
            <input
              type="email"
              placeholder="Email"
              value={resumeData.contact.email}
              onChange={(e) => handleInputChange('contact', 'email', e.target.value)}
            />
            <input
              type="text"
              placeholder="Phone"
              value={resumeData.contact.phone}
              onChange={(e) => handleInputChange('contact', 'phone', e.target.value)}
            />
            <input
              type="text"
              placeholder="Address"
              value={resumeData.contact.address}
              onChange={(e) => handleInputChange('contact', 'address', e.target.value)}
            />
            <button onClick={prevStep}>Back</button>
            <button onClick={nextStep}>Next</button>
          </div>
        )}
        {step === 3 && (
          <div className="form-section">
            <h3>Step 3: Education</h3>
            {resumeData.education.map((edu, index) => (
              <div key={index}>
                <input
                  type="text"
                  placeholder="Degree"
                  value={edu.degree}
                  onChange={(e) => handleListChange('education', index, 'degree', e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Institution"
                  value={edu.institution}
                  onChange={(e) => handleListChange('education', index, 'institution', e.target.value)}
                />
                <input
                  type="month"
                  placeholder="Start Date"
                  value={edu.startDate}
                  onChange={(e) => handleListChange('education', index, 'startDate', e.target.value)}
                />
                <input
                  type="month"
                  placeholder="End Date"
                  value={edu.endDate}
                  onChange={(e) => handleListChange('education', index, 'endDate', e.target.value)}
                />
              </div>
            ))}
            <button
              onClick={() =>
                addToList('education', { degree: '', institution: '', startDate: '', endDate: '' })
              }
            >
              Add Education
            </button>
            <button onClick={prevStep}>Back</button>
            <button onClick={nextStep}>Next</button>
          </div>
        )}
        {step === 4 && (
          <div className="form-section">
            <h3>Step 4: Skills and Hobbies</h3>
            <input
              type="text"
              placeholder="Add a Skill"
              onKeyDown={(e) => {
                if (e.key === 'Enter' && e.target.value.trim()) {
                  addToList('skills', e.target.value.trim());
                  e.target.value = '';
                }
              }}
            />
            <ul>
              {resumeData.skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
            <input
              type="text"
              placeholder="Add a Hobby"
              onKeyDown={(e) => {
                if (e.key === 'Enter' && e.target.value.trim()) {
                  addToList('hobbies', e.target.value.trim());
                  e.target.value = '';
                }
              }}
            />
            <ul>
              {resumeData.hobbies.map((hobby, index) => (
                <li key={index}>{hobby}</li>
              ))}
            </ul>
            <button onClick={prevStep}>Back</button>
            <button onClick={nextStep}>Next</button>
          </div>
        )}
        {step === 5 && (
          <div className="form-section">
            <h3>Step 5: Summary, Work Experience, Projects, and Certificates</h3>
            <textarea
              placeholder="Summary"
              value={resumeData.summary}
              onChange={(e) => setResumeData({ ...resumeData, summary: e.target.value })}
            />
            <label>
              <input
                type="checkbox"
                checked={resumeData.showWorkExperience}
                onChange={() =>
                  setResumeData((prev) => ({
                    ...prev,
                    showWorkExperience: !prev.showWorkExperience,
                  }))
                }
              />{' '}
              Include Work Experience
            </label>
            {resumeData.showWorkExperience &&
              resumeData.workExperience.map((work, index) => (
                <div key={index}>
                  <input
                    type="text"
                    placeholder="Job Title"
                    value={work.title}
                    onChange={(e) => handleListChange('workExperience', index, 'title', e.target.value)}
                  />
                  <input
                    type="text"
                    placeholder="Company"
                    value={work.company}
                    onChange={(e) => handleListChange('workExperience', index, 'company', e.target.value)}
                  />
                  <input
                    type="month"
                    placeholder="Start Date"
                    value={work.startDate}
                    onChange={(e) => handleListChange('workExperience', index, 'startDate', e.target.value)}
                  />
                  {!work.currentlyWorking && (
                    <input
                      type="month"
                      placeholder="End Date"
                      value={work.endDate}
                      onChange={(e) =>
                        handleListChange('workExperience', index, 'endDate', e.target.value)
                      }
                    />
                  )}
                  <label>
                    <input
                      type="checkbox"
                      checked={work.currentlyWorking || false}
                      onChange={(e) =>
                        handleListChange('workExperience', index, 'currentlyWorking', e.target.checked)
                      }
                    />{' '}
                    Currently Working
                  </label>
                </div>
              ))}
            {resumeData.showWorkExperience && (
              <button
                onClick={() =>
                  addToList('workExperience', {
                    title: '',
                    company: '',
                    startDate: '',
                    endDate: '',
                    currentlyWorking: false,
                  })
                }
              >
                Add Work Experience
              </button>
            )}
            {resumeData.projects.map((project, index) => (
              <div key={index}>
                <input
                  type="text"
                  placeholder="Project Name"
                  value={project.name}
                  onChange={(e) => handleListChange('projects', index, 'name', e.target.value)}
                />
                <textarea
                  placeholder="Project Description"
                  value={project.description}
                  onChange={(e) =>
                    handleListChange('projects', index, 'description', e.target.value)
                  }
                />
              </div>
            ))}
            <button onClick={() => addToList('projects', { name: '', description: '' })}>
              Add Project
            </button>
            <div className="form-section">
              <h3>Certificates</h3>
              {resumeData.certificates.map((cert, index) => (
                <div key={index}>
                  <input
                    type="text"
                    placeholder="Certificate Name"
                    value={cert.name}
                    onChange={(e) => handleListChange('certificates', index, 'name', e.target.value)}
                  />
                </div>
              ))}
              <button onClick={() => addToList('certificates', { name: '' })}>Add Certificate</button>
            </div>
            <button onClick={prevStep}>Back</button>
            <button onClick={nextStep}>Finish</button>
          </div>
        )}
      </div>

      {/* Right Side: Resume Preview */}
      <div className="preview-container">
        <div className="header">
          <div className="photo">
            {resumeData.photo ? (
              <img src={resumeData.photo} alt="User" />
            ) : (
              <div className="photo-placeholder">Photo</div>
            )}
          </div>
          <div className="name-designation">
            <h1>{resumeData.name || 'Your Name'}</h1>
            <h2>{resumeData.designation || 'Your Designation'}</h2>
          </div>
        </div>
        <div className="body-content">
          <div className="left-section">
            <div className="section">
              <h3>Contact</h3>
              <p>Email: {resumeData.contact.email || 'your.email@example.com'}</p>
              <p>Phone: {resumeData.contact.phone || '123-456-7890'}</p>
              <p>Address: {resumeData.contact.address || '123 Street, City, Country'}</p>
            </div>
            <div className="section">
              <h3>Education</h3>
              {resumeData.education.map((edu, index) => (
                <div key={index}>
                  <p>{edu.degree}</p>
                  <p>
                    {edu.institution} ({edu.startDate} - {edu.endDate})
                  </p>
                </div>
              ))}
            </div>
            <div className="section">
              <h3>Skills</h3>
              {resumeData.skills.map((skill, index) => (
                <p key={index}>{skill}</p>
              ))}
            </div>
            <div className="section">
              <h3>Hobbies</h3>
              {resumeData.hobbies.map((hobby, index) => (
                <p key={index}>{hobby}</p>
              ))}
            </div>
          </div>
          <div className="right-section">
            <div className="section">
              <h3>Summary</h3>
              <p>{resumeData.summary || 'Add a professional summary...'}</p>
            </div>
            {resumeData.showWorkExperience && (
              <div className="section">
                <h3>Work Experience</h3>
                {resumeData.workExperience.map((work, index) => (
                  <div key={index}>
                    <h4>{work.title}</h4>
                    <p>{work.company}</p>
                    <p>
                      {work.startDate} -{' '}
                      {work.currentlyWorking ? 'Present' : work.endDate || 'End Date'}
                    </p>
                  </div>
                ))}
              </div>
            )}
            <div className="section">
              <h3>Projects</h3>
              {resumeData.projects.map((project, index) => (
                <div key={index} className="project-item">
                  <h4>{project.name}</h4>
                  <p>{project.description}</p>
                </div>
              ))}
            </div>
            <div className="section">
              <h3>Certificates</h3>
              {resumeData.certificates.map((cert, index) => (
                <p key={index}>{cert.name}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
      {step > 5 && (
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <button onClick={handleDownload}>Download PDF</button>
        </div>
      )}
    </div>
  );
};

export default Template2Page;
