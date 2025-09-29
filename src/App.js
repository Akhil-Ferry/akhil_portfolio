// Modern Black & White Portfolio with Spline Background
import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import './App.css';

const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <main className="modern-portfolio">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-brand">Akhil Pulipaka</div>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <motion.div
            className="hero-text"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="hero-title">
              <span className="gradient-text">Computer Science</span><br />
              Student & Developer
            </h1>
            <p className="hero-description">
              Passionate about creating innovative solutions through code.
              Currently pursuing B.Tech at SR University, Warangal.
            </p>
            <div className="hero-buttons">
              <a href="#projects" className="btn-primary">View Projects</a>
              <a href="mailto:pulipakaakhil@gmail.com" className="btn-secondary">Contact Me</a>
            </div>
          </motion.div>
        </div>

        {/* Spline Background */}
        <div className="hero-spline">
          <Spline
            scene="https://prod.spline.design/hmTzkUgC8bJjZveF/scene.splinecode"
            style={{ pointerEvents: 'none' }}
          />
          <div className="spline-gradient-overlay"></div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section about-section">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">About Me</h2>
            <div className="title-underline"></div>
          </motion.div>

          <div className="about-content">
            <motion.div
              className="about-text"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <p>
                I'm an undergraduate Computer Science student at SR University (2021-2025),
                passionate about software development and artificial intelligence. I love
                solving complex problems and building innovative solutions.
              </p>
              <div className="social-links">
                <a href="https://www.linkedin.com/in/akhil-pulipaka-6901a7263/" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="https://github.com/Akhil-Ferry" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-github"></i>
                </a>
                <a href="https://leetcode.com/u/pulipakaakhil/" target="_blank" rel="noopener noreferrer">
                  <i className="fas fa-code"></i>
                </a>
              </div>
            </motion.div>

            <motion.div
              className="profile-image-container"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <img src="mask.png" alt="Akhil Pulipaka" className="profile-image" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="section skills-section">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Technical Skills</h2>
            <div className="title-underline"></div>
          </motion.div>

          <div className="skills-grid">
            {[
              { name: 'C', icon: 'c.png', level: 90 },
              { name: 'C++', icon: 'c++.png', level: 85 },
              { name: 'Java', icon: 'java.png', level: 80 },
              { name: 'Python', icon: 'python.png', level: 88 },
              { name: 'HTML', icon: 'html.png', level: 95 },
              { name: 'CSS', icon: 'css.png', level: 90 },
              { name: 'JavaScript', icon: 'javascript.png', level: 85 },
              { name: 'MySQL', icon: 'mysql.png', level: 75 }
            ].map((skill, index) => (
              <motion.div
                key={skill.name}
                className="skill-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="skill-icon-wrapper">
                  <img src={skill.icon} alt={skill.name} className="skill-icon" />
                </div>
                <h3 className="skill-name">{skill.name}</h3>
                <div className="skill-progress">
                  <div
                    className="skill-progress-bar"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section projects-section">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Featured Projects</h2>
            <div className="title-underline"></div>
          </motion.div>

          <div className="projects-grid">
            {[
              {
                title: "Resume AI",
                description: "An AI-driven tool for resume optimization using NLP and React. Features intelligent content suggestions and formatting optimization.",
                tech: ["React", "NLP", "AI", "Node.js"],
                image: "project1.jpg"
              },
              {
                title: "Student Database Management",
                description: "A comprehensive system to track and manage student data using Flask and MySQL with advanced filtering and reporting.",
                tech: ["Flask", "MySQL", "Python", "Bootstrap"],
                image: "project2.jpg"
              },
              {
                title: "Bus Reservation System",
                description: "A complete ticketing and reservation system implemented in C with seat selection and payment processing.",
                tech: ["C", "Data Structures", "Algorithms"],
                image: "project3.jpg"
              }
            ].map((project, index) => (
              <motion.div
                key={project.title}
                className="project-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="project-image">
                  <div className="project-overlay">
                    <button className="view-project-btn">View Project</button>
                  </div>
                </div>
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tech">
                    {project.tech.map(tech => (
                      <span key={tech} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="section education-section">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Education</h2>
            <div className="title-underline"></div>
          </motion.div>

          <div className="education-timeline">
            {[
              {
                degree: "B.Tech Computer Science",
                institution: "SR University, Warangal",
                period: "2021-2025",
                description: "Currently pursuing undergraduate degree with focus on software development and AI."
              },
              {
                degree: "Intermediate (12th)",
                institution: "SR-Edu Center, Hanamakonda",
                period: "2019-2021",
                description: "Completed with 71% focusing on Mathematics, Physics, and Chemistry."
              },
              {
                degree: "SSC (10th)",
                institution: "Oxford High School, Hanamakonda",
                period: "2019",
                description: "Graduated with GPA 8.7 with strong foundation in core subjects."
              }
            ].map((edu, index) => (
              <motion.div
                key={edu.degree}
                className="education-item"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="education-content">
                  <div className="education-year">{edu.period}</div>
                  <h3 className="education-degree">{edu.degree}</h3>
                  <h4 className="education-institution">{edu.institution}</h4>
                  <p className="education-description">{edu.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section contact-section">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Get In Touch</h2>
            <div className="title-underline"></div>
            <p className="section-subtitle">
              Let's collaborate on exciting projects or discuss opportunities
            </p>
          </motion.div>

          <div className="contact-content">
            <motion.a
              href="mailto:pulipakaakhil@gmail.com"
              className="contact-email"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
            >
              pulipakaakhil@gmail.com
            </motion.a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2025 Akhil Pulipaka. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
};

export default App;
