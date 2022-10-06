import React from "react";
import { Responses } from "./types";
import logo from "./blueberry.png";

type SurveyProps = {
  responses: Responses,
}

function SurveyAnswers({ responses }: SurveyProps) {
  return (
    <>
      <div className="App">
        <h1>You have completed the survey!</h1>
        {Object.keys(responses).map((question: string, i: number) => (
          <div key={i}>
            <h4>{question} </h4><h5>{responses[question]}</h5>
          </div>
        ))}
      </div>
      <img src={logo} className="logo" />
    </>
  );
}

export default SurveyAnswers;