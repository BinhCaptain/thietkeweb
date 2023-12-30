import React from "react";
import "./CV.css";

const CV = () => {
  return (
    <div>
      <div className="menu">
        <ul>
          <li>
            <a href="#profile">Profile</a>
          </li>
          <li>
            <a href="#skills">My Skills</a>
          </li>
          <li>
            <a href="#experiences">Experiences</a>
          </li>
        </ul>
      </div>

      <div id="profile" className="header">
        <div className="left">
        <img src="Thanhbinh.png" alt="Profile" width="150" height="200" />
          <h2>Nguyễn Thanh Bình</h2>
          <h2>CTTT2020</h2>
          <h2>My student ID is 20521118</h2>
        </div>
        <div className="right">
          <p>
            <strong>CHILL AND FREE</strong>
          </p>
          <p>
            Welcome to my personal webpage! I'm Nguyễn Thanh Bình, a 2023
            student studying Computer Science at UIT.VNU-HCM. My student ID is
            20521118, and I'm on a journey to become a skilled software
            developer.
          </p>
          <p>
            To secure a challenging position in a reputable organization to
            expand my learning knowledge and skill.
          </p>
          <p>
            <b>
              <ion-icon name="logo-facebook"></ion-icon>
              <a href="https://www.facebook.com/binhcaptain2410">Facebook</a>
            </b>
          </p>
          <p>
            <b>
              <ion-icon name="logo-github"></ion-icon>
              <a href="https://github.com/BinhCaptain">Github</a>
            </b>
          </p>
        </div>
      </div>

      <div id="skills" className="skill">
        <h1>My Skills</h1>
        <li>
          <h3>HTML</h3>
          <span className="bar">
            <span className="html"></span>
          </span>
        </li>
        <li>
          <h3>CSS</h3>
          <span className="bar">
            <span className="css"></span>
          </span>
        </li>
        <li>
          <h3>PHP</h3>
          <span className="bar">
            <span className="php"></span>
          </span>
        </li>
        <li>
          <h3>Javascript</h3>
          <span className="bar">
            <span className="javascript"></span>
          </span>
        </li>
      </div>

      <div id="experiences" className="exp">
        <h1 className="title">Experiences</h1>
        <div className="left">
          <p>
            <strong>EDUCATION</strong>
          </p>
        </div>
        <div className="right">
          <p>INFORMATION SYSTEM</p>
          <p>
            The education was mainly system design-based course, but I also
            learned about web, data analysis, and more. During my time in
            college, I specialized in OOP and data science. Now, I'm learning
            web development.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CV;
