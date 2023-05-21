import TomPhoto from "../../assets/images/probocsis.png";
import MuratPhoto from "../../assets/images/bocian.jpg";
import EsmaPhoto from "../../assets/images/hedgehog.jpg";
import ShahPhoto from "../../assets/images/lion.jpg";
import TinkPhoto from "../../assets/images/bear.jpg";
import AlinaPhoto from "../../assets/images/owl.jpg";
import AidinaPhoto from "../../assets/images/cat.jpg";
import React, { useState } from "react";
import "./studentCard.style.css";

const studentInfo = [
  {
    src: TomPhoto,
    name: "Tom",
    email: "tom@gmail.com",
    lifeMotto:
      "I walk around like everything’s fine, but deep down, inside my shoe, my sock is sliding off.",
  },
  {
    src: MuratPhoto,
    name: "Murat",
    email: "murat@gmail.com",
    lifeMotto:
      "I like long walks, especially when they are taken by people who annoy me.",
  },
  {
    src: EsmaPhoto,
    name: "Esma",
    email: "esma@gmail.com",
    lifeMotto:
      "I remember it like it was yesterday. Of course, I don’t really remember yesterday all that well.",
  },
  {
    src: ShahPhoto,
    name: "Shahzod",
    email: "shahzod@gmail.com",
    lifeMotto:
      "Truth hurts. Maybe not as much as jumping on a bicycle with a seat missing, but it hurts.",
  },
  {
    src: AlinaPhoto,
    name: "Alina",
    email: "alina@gmail.com",
    lifeMotto: "If I’m not back in five minutes, just wait longer.",
  },
  {
    src: AidinaPhoto,
    name: "Aidina",
    email: "aidina@gmail.com",
    lifeMotto:
      "There is no sunrise so beautiful that it is worth waking me up to see it.",
  },
  {
    src: TinkPhoto,
    name: "Tink",
    email: "tink@gmail.com",
    lifeMotto:
      "My mother always used to say: The older you get, the better you get, unless you’re a banana.",
  },
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
      </p>
    </div>
  );
});

const StudentMenu = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <div className="dropdown">
        <button
          onMouseEnter={() => setShowMenu(true)}
          onMouseLeave={() => setShowMenu(false)}
          className="menuBtn"
        >
          Students ⛛
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

export default StudentMenu;
