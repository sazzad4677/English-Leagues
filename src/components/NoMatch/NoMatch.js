import React from "react";
import './NoMatch.css';
import Header from "../Header/Header";

const NoMatch = () => {
  return (
    <div className="no-match">
      <div className="mainbox">
        <div className="err">4</div>
        <i className="far fa-question-circle fa-spin"></i>
        <div className="err2">4</div>
        <div className="msg">
          Maybe this page moved? Got deleted? Is hiding out in quarantine? Never
          existed in the first place?
          <p>
            Let's go <a href="#">home</a> and try from there.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NoMatch;
