import React, {useState} from "react"
import Question from "./Question"

const Questions = (props) => {
    const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);
  
    const handleNextQuestion = () => {
      setActiveQuestionIndex((prevIndex) =>
        prevIndex < props.questions.length - 1 ? prevIndex + 1 : prevIndex
      );
    };
  
    const handlePrevQuestion = () => {
      setActiveQuestionIndex((prevIndex) =>
        prevIndex > 0 ? prevIndex - 1 : prevIndex
      );
    };
  
    const handleAnswerSelection = (questionId) => {
      // You can perform any additional logic here if needed
      // For now, we'll just move to the next question after selecting an answer
      handleNextQuestion();
    };
  
    return (
      <div>
        <Question
          id={props.questions[activeQuestionIndex].id}
          key={props.questions[activeQuestionIndex].id}
          isQuestionMultiple={props.questions[activeQuestionIndex].isMultiple}
          text={props.questions[activeQuestionIndex].text}
          answers={props.questions[activeQuestionIndex].answers}
          onAnswerSelection={handleAnswerSelection}
        />
        <div>
          <button onClick={handlePrevQuestion} disabled={activeQuestionIndex === 0}>
            Previous
          </button>
          <button
            onClick={handleNextQuestion}
            disabled={activeQuestionIndex === props.questions.length - 1}
          >
            Next
          </button>
        </div>
      </div>
    );
  };
  
  export default Questions;


//   const Questions = (props) => {

//     console.log(DUMMY_QUESTIONS)


//     const questions = DUMMY_QUESTIONS.map(question => {
//         return (
//             <li>
//                 <Question id={question.id} key={question.id} isQuestionMultiple={question.isMultiple} text={question.text} answers={question.answers} />
//             </li>
//         )
//     })

//     return (
//         <ul>
//             {questions}
//         </ul>
//     )
// }

// export default Questions