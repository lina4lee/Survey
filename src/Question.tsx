import React from "react";

type QuestionProps = {
  wording: string,
}


function Question({ wording }: QuestionProps) {
  
  return (
    <div className="App">
      {wording}
    </div>
  );
}


export default Question;