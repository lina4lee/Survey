import "./App.css";
import React, { useState } from "react";
import SurveyAnswers from "./SurveyAnswers";
import Question from "./Question";
import { AllQuestions, Responses, CurrQuestion } from "./types";
import logo from "./blueberry.png";

const DEFAULT_QUESTIONS: string[] = ["cough_sentence", "cough_blue", "cough_length"];

const ALL_QUESTIONS: AllQuestions = {
  "cough_sentence": {
    "wording": "Is your child able to finish a sentence without needing a breath?",
    "if_yes_ask": [],
    "if_no_ask": [],
  },
  "cough_blue": {
    "wording": "Are your child's lips or face turning blue?",
    "if_yes_ask": [],
    "if_no_ask": [],
  },
  "cough_length": {
    "wording": "Has your child had a cough for more than 3 days?",
    "if_yes_ask": ["cough_worsening", "cough_ribs_pulling"],
    "if_no_ask": ["cough_wheezing"]
  },
  "cough_ribs_pulling": {
    "wording": "When your child breathes, is the skin around their ribs pulling in with each breath and outlining their ribs?",
    "if_yes_ask": ["cough_pain"],
    "if_no_ask": [],
  },
  "cough_pain": {
    "wording": "Does your child have pain when trying to take a breath?",
    "if_yes_ask": ["cough_ingest"],
    "if_no_ask": [],
  },
  "cough_wheezing": {
    "wording": "Is your child's breathing between coughs noisy?",
    "if_yes_ask": ["cough_ingest"],
    "if_no_ask": [],
  },
  "cough_worsening": {
    "wording": "Since your child's cough started, has it been getting worse?",
    "if_yes_ask": [],
    "if_no_ask": [],
  },
  "cough_ingest": {
    "wording": "Did the cough start after your child choked on something, even if it was a very minor incident?",
    "if_yes_ask": [],
    "if_no_ask": [],
  }
};

function App() {

  const [responses, setResponses] = useState<Responses>({});
  const [questionList, setQuestionList] = useState<string[]>([...DEFAULT_QUESTIONS]);

  const currQuestion: CurrQuestion = questionList[0];

  const buttonHandler = (answer: ("yes" | "no")) => {
    // store answer in responses object
    const wording: string = ALL_QUESTIONS[currQuestion].wording;
    setResponses({ ...responses, [wording]: answer });
    // check ALL_QUESTIONS obj for subsequent questions to ask, update questionList accordingly
    const nextQuestions: string[] = ALL_QUESTIONS[currQuestion][`if_${answer}_ask`];
    setQuestionList([...questionList.slice(1), ...nextQuestions]);
    return;
  };

  return (
    !questionList.length
      ? <SurveyAnswers responses={responses} />
      : 
      <>
        <div className="App">
          <Question wording={ALL_QUESTIONS[currQuestion].wording}/>
          <br/>
          <button id="yesButton" onClick={() => buttonHandler("yes")}>Yes</button>
          <button id="noButton" onClick={() => buttonHandler("no")}>No</button>
        </div>
        <img src={logo} className="logo"/>
      </>
  );
}

export default App;
