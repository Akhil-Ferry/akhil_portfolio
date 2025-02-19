// Updated Terminal-themed Portfolio Website for Akhil Pulipaka
import React from 'react';
import './App.css';

const App = () => {
  return (
    <div>
      <header className="header">
        <div className="header-left">
          <img
            src="profile.png"
            alt="Profile"
            className="profile-photo"
          />
          <div>
            <h1>Akhil Pulipaka</h1>
            <a
              className="email"
              href="mailto:pulipakaakhil@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              pulipakaakhil@gmail.com
            </a>
          </div>
        </div>
        <div className="links">
          <a
            href="https://www.linkedin.com/in/akhil-pulipaka-6901a7263/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/Akhil-Ferry"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://leetcode.com/u/pulipakaakhil/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LeetCode
          </a>
        </div>
      </header>

      <main>
        <section className="about">
          <h2>About Me</h2>
          <p>
            I am an undergraduate Computer Science student at SR University (2021-2025),
            Warangal, India. Passionate about software development and problem-solving.
          </p>
        </section>

        <section className="skills">
          <h2>Skills</h2>
          <div className="skills-logos">
            {['C', 'C++', 'Java', 'Python', 'HTML', 'CSS', 'JavaScript', 'MySQL'].map(
              (skill) => (
                <div className="skill-item" key={skill}>
                  <img
                    src={`/${skill.toLowerCase()}.png`}
                    alt={skill}
                    className="skill-logo"
                  />
                  <p>{skill}</p>
                </div>
              )
            )}
          </div>
        </section>

        <section className="projects">
          <h2>Projects</h2>
          <ul>
            <li>
              <strong>Resume AI:</strong>
              <p>An AI-driven tool for resume optimization using NLP and React.</p>
            </li>
            <li>
              <strong>Student Database Management System:</strong>
              <p>A system to track and manage student data using Flask and MySQL.</p>
            </li>
            <li>
              <strong>Bus Reservation System:</strong>
              <p>A ticketing system implemented in C.</p>
            </li>
          </ul>
        </section>

        <section className="education">
          <h2>Education</h2>
          <ul>
            <li>
              (UG)SR University, Warangal, India (B.Tech, Computer Science, 2021-2025)
            </li>
            <li>SR-Edu Center, Hanamakonda, India (Intermediate, 71%)</li>
            <li>Oxford High School, Hanamakonda, India (SSC, GPA: 8.7)</li>
          </ul>
        </section>

        <section className="certifications">
          <h2>Certifications</h2>
          <ul>
            <li>Java Programming Fundamentals</li>
            <li>IBM Data Structures & Algorithms Using C++</li>
            <li>AI-ML Virtual Internship</li>
            <li>Financial Accounting and Analysis</li>
            <li>Project Management Project</li>
            <li>AI Workflow: Machine Learning, Visual Recognition and NLP</li>
            <li>Fundamentals of C++</li>
          </ul>
        </section>
      </main>

      <footer className="footer">
        <p>\u00A9 2025 Akhil Pulipaka. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
