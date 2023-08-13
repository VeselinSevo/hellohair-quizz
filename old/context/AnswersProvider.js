import React, { useState } from "react";
import AnswersContext from "./answers-context";


const AnswersProvider = (props) => {

    const [answers, setAnswers] = useState([])

    const selectAnswerHandler = (answerId, selectedAnswerText, questionId, isQuestionMultiple) => {
        console.log('in answersProvider',answerId, selectedAnswerText)
        console.log(isQuestionMultiple, 'sssss')

        setAnswers(prevAnswers => {

            //See if we have existing answers, answers with same question id
            const existingAnswerIndex = prevAnswers.findIndex(
                (answer) => answer.questionId === questionId
            );

            if (!isQuestionMultiple && existingAnswerIndex !== -1) {
                // If the questionId exists, update the existing answer
                const updatedAnswers = [...prevAnswers];
                updatedAnswers[existingAnswerIndex] = {
                    ...updatedAnswers[existingAnswerIndex],
                    answerId,
                    selectedAnswerText,
                };
                return updatedAnswers;
            } else {
            // If the questionId doesn't exist, add a new answer
                if (prevAnswers.find(answer => answer.answerId === answerId && answer.questionId === questionId)) {
                    return prevAnswers.filter(answer => (answer.answerId !== answerId && answer.questionId === questionId) || answer.questionId !== questionId);
                }

                return [
                    ...prevAnswers,
                    {
                    questionId: questionId,
                    answerId: answerId,
                    selectedAnswerText: selectedAnswerText,
                    },
                ];
            }
        });
    };


    let answersContext = {
        answers: answers,
        selectAnswer: selectAnswerHandler
    }

    console.log(answers)
        


    return(
        <AnswersContext.Provider value={answersContext}>
            {props.children}
        </AnswersContext.Provider>
    )
}

export default AnswersProvider