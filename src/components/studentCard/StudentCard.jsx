import photoImg from "../../assets/images/horse.jpg"
import React from 'react'
import "./studentCard.style.css"

const studentInfo = [
  {src:photoImg, name: "tom", email: "a@th.com", lifeMotto: "Work hard"},
  {src:photoImg, name: "tom", email: "a@th.com", lifeMotto: "Work hard"}, 
  {src:photoImg, name: "tom", email: "a@th.com", lifeMotto: "Work hard"},   {src:photoImg, name: "tom", email: "a@th.com", lifeMotto: "Work hard"},
  {src:photoImg, name: "tom", email: "a@th.com", lifeMotto: "Work hard"}, 
  {src:photoImg, name: "tom", email: "a@th.com", lifeMotto: "Work hard"}
]

const createStudentCard = studentInfo.map((student, index) => {
  return (
    <div className="card-container">
        <img src={student.src} className="student-photo" alt="student-photo" key={index}/>
        <p className="student-facts">
          <ul>
            <li>Name: {student.name}</li>
            <li>Email: {student.email}</li>
            <li>Life motto: {student.lifeMotto}</li>
          </ul>
        </p>
        <button className="more-info">Click</button>
    </div>
  )
}
)

const StudentCard = () => {
  return (
    <div className="cards">
      {createStudentCard}
    </div>
  )
}

export default StudentCard