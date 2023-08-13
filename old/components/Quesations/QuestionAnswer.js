import React, { useContext } from "react"
import AnswersContext from "../../context/answers-context"

const QuestionAnswer = (props) => {


    const answersCtx = useContext(AnswersContext)

    console.log('in questionAnswer!',props.answer.id, props.answer.text)

    return (
        <div onClick={() => props.onSelectAnswer(props.answer.id, props.answer.text)}>
            {
                <props.answer.label text={props.answer.text} highlighted={answersCtx.answers.find(answer => answer.answerId === props.answer.id && props.questionId === answer.questionId)} />
            }
        </div>
    )
}

export default QuestionAnswer