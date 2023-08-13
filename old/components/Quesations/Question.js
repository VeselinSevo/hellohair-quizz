import React from "react"
import QuestionText from "./QuestionText"
import QuestionAnswers from "./QuestionAnswers"



const Question = (props) => {


    
    return (
        <>
            <QuestionText text={props.text} />
            <QuestionAnswers onAnswerSelection={props.onAnswerSelection} isQuestionMultiple={props.isQuestionMultiple} questionId={props.id} answers={props.answers} />
        </>
    )

    
}

export default Question