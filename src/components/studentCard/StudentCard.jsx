import photoImg from "../../assets/images/horse.jpg";
import React, { useState } from "react";
import "./studentCard.style.css";

const studentInfo = [
  { src: photoImg, name: "tom", email: "a@th.com", lifeMotto: "Work hard" },
  { src: photoImg, name: "tom", email: "a@th.com", lifeMotto: "Work hard" },
  { src: photoImg, name: "tomm", email: "a@th.com", lifeMotto: "Work hard" },
  { src: photoImg, name: "tom", email: "a@th.com", lifeMotto: "Work hard" },
  { src: photoImg, name: "tom", email: "a@th.com", lifeMotto: "Work hard" },
  { src: photoImg, name: "tom", email: "a@th.com", lifeMotto: "Work hard" },
];

const createStudentCard = studentInfo.map((student, index) => {
  return (
    <div className="card-container">
      <img
        src={student.src}
        className="student-photo"
        alt="student"
        key={index}
      />
      <p className="student-facts">
        <ul>
          <li>Name: {student.name}</li>
          <li>Email: {student.email}</li>
          <li>Life motto: {student.lifeMotto}</li>
        </ul>
        <button className="more-info">Click</button>
      </p>
    </div>
  );
});

const StudentCard = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <div className="dropdown">
        <button
          onMouseEnter={() => setShowMenu(true)}
          onMouseLeave={() => setShowMenu(false)}
          className="menuBtn"
        >
          Show student cards
        </button>
        {showMenu && (
          <div
            onMouseEnter={() => setShowMenu(true)}
            onMouseLeave={() => setShowMenu(false)}
            className="cards"
          >
            {createStudentCard}
          </div>
        )}
      </div>
    </>
  );
};

export default StudentCard;
