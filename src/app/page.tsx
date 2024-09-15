"use client"
import { useState } from 'react';

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={isDarkMode ? 'dark-mode' : 'light-mode'}>
      <div className="container">
        <header className="header">
          <h1 className="title">Static Resume</h1>
          <button onClick={toggleDarkMode} className="toggle-button">
            Toggle {isDarkMode ? 'Light' : 'Dark'} Mode
          </button>
        </header>

        <div className="resume">
          <h2>Khalid Hussain</h2>
          <p><strong>Email:</strong> Khalidunar103@gmail.com</p>
          <p><strong>Current Position:</strong> Learning Frontend Development</p>

          <section>
            <h3>Education</h3>
            <p>FSC</p>
          </section>

          <section>
            <h3>Work Experience</h3>
            <p>1+ Year of Experience</p>
          </section>

          <section>
            <h3>Skills</h3>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>TypeScript</li>
              <li>React</li>
            </ul>
          </section>

          <section>
            <h3>Certifications</h3>
            <p>Not yet certified by any authenticated organization</p>
          </section>

          <section>
            <h3>Projects</h3>
            <p>
              Neuros.AI (MY FUTURE AI - COMPANY) -{' '}
              <a href="https://neurosai.b12sites.com/index#services" target="_blank">
                View Project
              </a>
            </p>
          </section>
        </div>
      </div>

      <style jsx>{`
        /* Base Styles */
        body {
          font-family: 'Arial', sans-serif;
          margin: 0;
          padding: 0;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 20px;
        }

        /* Header Styling */
        .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 10px;
          border-bottom: 2px solid #007acc;
        }

        .header h1 {
          margin: 0;
          font-size: 2.5rem;
        }

        /* Button for Dark/Light Mode */
        .toggle-button {
          background-color: #007acc;
          color: white;
          border: none;
          padding: 10px 20px;
          font-size: 1rem;
          border-radius: 5px;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        .toggle-button:hover {
          background-color: #005f99;
        }

        /* Resume Section Styling */
        .resume {
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-gap: 20px;
          margin-top: 20px;
        }

        .resume-section {
          background-color: #f9f9f9;
          padding: 15px;
          border-radius: 10px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }

        .resume-section h2,
        .resume-section h3 {
          margin-top: 0;
        }

        /* Dark Mode */
        .dark-mode {
          background-color: #333;
          color: white;
        }

        .dark-mode .resume-section {
          background-color: #444;
          color: white;
        }

        /* Light Mode */
        .light-mode {
          background-color: white;
          color: black;
        }

        .light-mode .resume-section {
          background-color: #f9f9f9;
        }

        /* Media Queries for Responsiveness */
        @media (max-width: 768px) {
          .resume {
            grid-template-columns: 1fr;
          }

          .header h1 {
            font-size: 2rem;
          }
        }

        @media (max-width: 480px) {
          .header h1 {
            font-size: 1.5rem;
          }

          .toggle-button {
            font-size: 0.8rem;
            padding: 8px 15px;
          }
        }
      `}</style>
    </div>
  );
}
