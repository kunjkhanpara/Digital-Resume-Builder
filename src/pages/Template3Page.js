import React, { useState } from 'react';
import './Template3.css';
import html2pdf from 'html2pdf.js';

const Template3Page = () => {
    const [photo, setPhoto] = useState(null);

    const handlePhotoUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => setPhoto(e.target.result);
            reader.readAsDataURL(file);
        }
    };

    const downloadResume = () => {
        const resumeElement = document.getElementById('resume-content');
        if (resumeElement) {
            const opt = {
                margin: 0, // Remove margins to fit content
                filename: 'resume.pdf',
                image: { type: 'jpeg', quality: 0.98 },
                html2canvas: { scale: 3, useCORS: true }, // Higher scale for better quality
                jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
            };
            html2pdf()
                .set(opt)
                .from(resumeElement)
                .save()
                .catch((err) => console.error('Error generating PDF:', err));
        } else {
            console.error('Resume content element not found.');
        }
    };

    return (
        <div className="template3-container">
            <div id="resume-content" className="template3-layout">
                <div className="left-panel">
                    {photo && <img src={photo} alt="Profile" className="resume-photo" />}
                    <div className="section">
                        <h2>GET IN TOUCH!</h2>
                        <p contentEditable>Mobile: +91-9925424344</p>
                        <p contentEditable>Email: kunjpatel4647@gmail.com</p>
                    </div>
                    <div className="section">
                        <h2>SKILLS</h2>
                        <ul>
                            <li contentEditable>Software Development</li>
                            <li contentEditable>React.js</li>
                            <li contentEditable>Frontend Web Development</li>
                            <li contentEditable>JavaScript</li>
                            <li contentEditable>HTML</li>
                            <li contentEditable>CSS</li>
                        </ul>
                    </div>
                    <div className="section">
                        <h2>LANGUAGES KNOWN</h2>
                        <ul>
                            <li contentEditable>Gujarati (Both)</li>
                            <li contentEditable>English (Both)</li>
                            <li contentEditable>Hindi (Both)</li>
                        </ul>
                    </div>
                    <div className="section">
                        <h2>CERTIFICATIONS</h2>
                        <ul>
                            <li contentEditable>Explore Machine Learning Using Python</li>
                            <li contentEditable>Design Thinking for Beginners</li>
                            <li contentEditable>Networking Essentials</li>
                            <li contentEditable>Real-World Projects with Flutter</li>
                        </ul>
                    </div>
                </div>
                <div className="right-panel">
                    <h1 contentEditable>Kunj Khanpara</h1>
                    <div className="section">
                        <h2>PERSONAL DETAILS</h2>
                        <p contentEditable>Date of Birth: November 14, 2003</p>
                        <p contentEditable>Gender: Male</p>
                    </div>
                    <div className="section">
                        <h2>EDUCATION</h2>
                        <div className="education-section">
                            <p><strong>Graduation</strong></p>
                            <p>Course: <span contentEditable>B.Tech/B.E. ( Computers )</span></p>
                            <p>College: <span contentEditable>Marwadi University, Rajkot, Rajkot</span></p>
                            <p>Score: <span contentEditable>6.1%</span></p>
                            <p><strong>Schooling</strong></p>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Class</th>
                                        <th>Board Name</th>
                                        <th>Medium</th>
                                        <th>Year of Passing</th>
                                        <th>Score</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Class XII</td>
                                        <td contentEditable>Gujarat</td>
                                        <td contentEditable>Gujarati</td>
                                        <td contentEditable>2021</td>
                                        <td contentEditable>72%</td>
                                    </tr>
                                    <tr>
                                        <td>Class X</td>
                                        <td contentEditable>Gujarat</td>
                                        <td contentEditable>Gujarati</td>
                                        <td contentEditable>2019</td>
                                        <td contentEditable>82%</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="section">
                        <h2>INTERNSHIPS</h2>
                        <ul>
                            <li contentEditable>
                                Prodigy InfoTech | May 2024 - June 2024
                                <ul>
                                    <li>Developed dynamic web applications integrating APIs.</li>
                                    <li>Built a weather application using ReactJS and OpenWeatherMap API.</li>
                                    <li>Designed a tic-tac-toe game with interactive UI.</li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div className="section">
                        <h2>PROJECTS</h2>
                        <ul>
                            <li>
                                <strong contentEditable>Weather Application using API (React, May 2024 - June 2024)</strong>
                                <p contentEditable>
                                    Developed a real-time weather application using React and OpenWeatherMap API,
                                    displaying location-specific weather data. Designed a responsive and user-friendly
                                    interface to enhance accessibility. Optimized performance for seamless real-time updates.
                                </p>
                            </li>
                            <li>
                                <strong contentEditable>Tic-Tac-Toe Game (HTML, CSS, JavaScript, May 2024 - June 2024)</strong>
                                <p contentEditable>
                                    A simple Tic-Tac-Toe game where two players take turns marking cells on a 3x3 grid. 
                                    The game checks for a winner or tie after each move and disables further moves until reset.
                                </p>
                            </li>
                            <li>
                                <strong contentEditable>Hospital Website Using HTML & CSS (Sept 2023 - Dec 2023)</strong>
                                <p contentEditable>
                                    Developed a responsive hospital website featuring detailed information about services, 
                                    doctor profiles, and appointment scheduling. Focused on clean layouts and intuitive 
                                    navigation for enhanced user engagement.
                                </p>
                            </li>
                            <li>
                                <strong contentEditable>ATM Machine using JAVA (Mar 2023 - May 2024)</strong>
                                <p contentEditable>
                                    Built a console-based application simulating core ATM functionalities like cash withdrawal,
                                    deposits, and balance inquiries. Emphasized modular design and robust error handling.
                                </p>
                            </li>
                            <li>
                                <strong contentEditable>Quiz Application Using Java & Swing (Jan 2023 - Apr 2023)</strong>
                                <p contentEditable>
                                    Developed a desktop-based quiz application with an intuitive interface for various topics. 
                                    Integrated real-time feedback and score tracking.
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="controls">
                <input type="file" accept="image/*" onChange={handlePhotoUpload} />
                <button onClick={downloadResume}>Download Resume</button>
            </div>
        </div>
    );
};

export default Template3Page;
