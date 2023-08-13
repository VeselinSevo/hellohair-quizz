import React, { useContext } from "react"
import QuestionAnswer from "./QuestionAnswer"
import AnswersContext from "../../context/answers-context"

const QuestionAnswers = (props) => {

    const answerCtx = useContext(AnswersContext)


    const selectAnswerHandler = (answerId, answerText) => {
        console.log('in questionAnswers',answerId, answerText)
        props.onAnswerSelection()
        answerCtx.selectAnswer(answerId, answerText, props.questionId, props.isQuestionMultiple)
    }

    const answers = props.answers.map(answer => {
        return <QuestionAnswer onSelectAnswer={selectAnswerHandler} questionId={props.questionId} answer={answer}/>
    })

    return (
        <div>
            {answers}
        </div>
    )
}

export default QuestionAnswers

//onClick={() => selectAnswerHandler(id, text)}