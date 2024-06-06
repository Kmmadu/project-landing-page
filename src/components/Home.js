import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div>
      <header>
        <h1>Project Name</h1>
        <p>A one-line phrase or description of your project</p>
        <nav>
          <ul>
            <li><a href="#features">Features</a></li>
            <li><a href="#about">About</a></li>
          </ul>
        </nav>
        <Link to="/app" className="button">Go to App</Link>
      </header>

      <section id="features">
        <h2>Key Features</h2>
        <div className="feature">
          <img src="feature1.jpg" alt="Feature 1" />
          <h3>Feature 1</h3>
          <p>Description of feature 1.</p>
        </div>
        <div className="feature">
          <img src="feature2.jpg" alt="Feature 2" />
          <h3>Feature 2</h3>
          <p>Description of feature 2.</p>
        </div>
        <div className="feature">
          <img src="feature3.jpg" alt="Feature 3" />
          <h3>Feature 3</h3>
          <p>Description of feature 3.</p>
        </div>
      </section>

      <section id="about">
        <h2>About the Project</h2>
        <p>Description of what inspired the project. Include timeline and mention this is a Portfolio Project for Holberton School with a link.</p>
        <h3>Team Members</h3>
        <ul>
          <li>
            <a href="https://linkedin.com/in/kingsleymmadubugwu" target="_blank">LinkedIn</a>
            <a href="https://github.com/kingsleymmadubugwu" target="_blank">GitHub</a>
            <a href="https://twitter.com/kingsleymmadubugwu" target="_blank">Twitter</a>
          </li>
          !-- Add more team members as needed --
        </ul>
        <h3>GitHub Repository</h3>
        <a href="https://github.com/kingsleymmadubugwu/project-repo" target="_blank">Project Repo</a>
      </section>
    </div>
  );
}

export default Home;
