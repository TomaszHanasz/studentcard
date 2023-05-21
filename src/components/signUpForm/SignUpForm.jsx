import React, { useState } from "react";
import "./signUpForm.style.css";

const defaultSignUpForm = {
  name: "",
  birthDate: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [signUpForm, setSignUpForm] = useState(defaultSignUpForm);
  const [submittedForm, setSubmittedForm] = useState(false);
  const [userData, setUserData] = useState([]);

  const onChangeHandler = (e) => {
    console.log(userData);
    setSignUpForm({ ...signUpForm, [e.target.name]: e.target.value });
  };

  const addData = () => {
    setUserData([...userData, signUpForm]);
  };

  const onSubmitHandler = (e) => {
    console.log(userData);
    e.preventDefault();
    setSubmittedForm(true);
    addData();
  };

  const doneForm = userData.map((el, index) => {
    return (
      <div key={index} className="single-form">
        <h2>Name: {el.name}</h2>
        <h2>Date of Birth: {el.birthDate}</h2>
        <h2>Password: {el.password}</h2>
        <h2>Confirm Password: {el.confirmPassword}</h2>
      </div>
    );
  });

  return (
    <>
      {/* <div className="form-container">
        <div className="done-forms">{doneForm}</div>
        <form onSubmit={onSubmitHandler}>
          <h1>Sign up</h1>
          <label htmlFor="name">First and last Name</label>
          <input
            type="text"
            name="name"
            onChange={onChangeHandler}
            value={signUpForm.name}
          ></input>
          <label htmlFor="birthDate">Date of birth</label>
          <input
            type="date"
            name="birthDate"
            onChange={onChangeHandler}
            value={signUpForm.birthDate}
          ></input>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            onChange={onChangeHandler}
            value={signUpForm.password}
          ></input>
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            onChange={onChangeHandler}
            value={signUpForm.confirmPassword}
          ></input>
          <button type="submit" className="submit">
            Submit
          </button>
          {submittedForm &&
            signUpForm.password === signUpForm.confirmPassword && (
              <div>
                <h2>Name: {signUpForm.name}</h2>
                <h2>Date of Birth: {signUpForm.birthDate}</h2>
                <h2>Password: {signUpForm.password}</h2>
                <h2>Confirm Password: {signUpForm.confirmPassword}</h2>
              </div>
            )}
          {submittedForm &&
            signUpForm.password !== signUpForm.confirmPassword && (
              <h1>Password doesnt match</h1>
            )}
        </form>
      </div> */}
      <div className="flexbox">
        <div className="row">
          <h6 className="box">
            <div className="small-box2"></div>
            <div className="small-box1"></div>
            <div className="small-box1"></div>
            <div className="small-box2"></div>
          </h6>
          <h6 className="box">
            <div className="small-box2"></div>
            <div className="small-box1"></div>
            <div className="small-box1"></div>
            <div className="small-box2"></div>
          </h6>
          <h6 className="box">
            <div className="small-box2"></div>
            <div className="small-box1"></div>
            <div className="small-box1"></div>
            <div className="small-box2"></div>
          </h6>
        </div>
        <div className="row">
          <h6 className="box">
            <div className="small-box2"></div>
            <div className="small-box1"></div>
            <div className="small-box1"></div>
            <div className="small-box2"></div>
          </h6>
          <h6 className="box">
            <div className="small-box2"></div>
            <div className="small-box1"></div>
            <div className="small-box1"></div>
            <div className="small-box2"></div>
          </h6>
          <h6 className="box">
            <div className="small-box2"></div>
            <div className="small-box1"></div>
            <div className="small-box1"></div>
            <div className="small-box2"></div>
          </h6>
        </div>
        <div className="row">
          <h6 className="box">
            <div className="small-box2"></div>
            <div className="small-box1"></div>
            <div className="small-box1"></div>
            <div className="small-box2"></div>
          </h6>
          <h6 className="box">
            <div className="small-box2"></div>
            <div className="small-box1"></div>
            <div className="small-box1"></div>
            <div className="small-box2"></div>
          </h6>
          <h6 className="box">
            <div className="small-box2"></div>
            <div className="small-box1"></div>
            <div className="small-box1"></div>
            <div className="small-box2"></div>
          </h6>
        </div>
      </div>
    </>
  );
};

export default SignUpForm;
