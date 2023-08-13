import React, { createContext } from "react";

const AnswersContext = createContext({
    answers: [
        {
            questionId: 0,
            selectedAnswerText: '',
            //...
        }
    ], 
    selectAnswer: () => {}}
)

export default AnswersContext