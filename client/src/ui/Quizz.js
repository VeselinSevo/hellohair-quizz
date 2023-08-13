import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons'

import classes from './Quizz.module.css'



export const Quizz = (props) => {
    const children = React.Children.toArray(props.children).filter((child) => child !== null);
    const [currentQuestionId, setCurrentQuestionId] = useState(children[0].props.id);
    const childrenIds = children.map(child => child.props.id);
  
    const[animationDirection, setAnimationDirection] = useState('right')
  
    // { [q1]: { [option1]: true/false, [option2]: true/false } }
    const [quizz, setQuizz] = useState(
      children.reduce(
        (questions, comp) => ({
          ...questions,
          [comp.props.id]: comp.props.options.reduce(
            (options, option) => ({
              ...options,
              [option]: false,
            }),
            {}
          ),
        }),
        {}
      )
    );
  
    useEffect(() => {    
      setQuizz(
        children.reduce(
          (questions, comp) => ({
            ...questions,
            [comp.props.id]: comp.props.options.reduce(
              (options, option) => ({
                ...options,
                [option]: quizz[comp.props.id] ? quizz[comp.props.id][option] ? quizz[comp.props.id][option] : false : false,
              }),
              {}
            ),
          }),
          {  }
        )
      );
    }, childrenIds);

    const questionsIds = Object.keys(quizz);
    const isAnswered = useMemo(() => Object.values(quizz[currentQuestionId]).some(option => option), [quizz, currentQuestionId]);

    const onUnload = useCallback(() => {
        window.localStorage.setItem('quizzCurrentQuestionId', currentQuestionId);
        window.localStorage.setItem('quizz', JSON.stringify(quizz));
    }, [quizz, currentQuestionId]);

    useEffect(() => {
        if (props.saveOnReload) {
            window.addEventListener('unload', onUnload);
            return () => window.removeEventListener('unload', onUnload);
        }
    }, [quizz, currentQuestionId]);

    useEffect(() => {
        const quizz = window.localStorage.getItem('quizz');
        const currentQuestionId = window.localStorage.getItem('quizzCurrentQuestionId');

        if (props.saveOnReload && quizz && currentQuestionId) {
            setQuizz(JSON.parse(quizz));
            setCurrentQuestionId(currentQuestionId);
        }
    }, []);

    const nextQuestion = () => {
      setAnimationDirection('right')

      if(currentQuestionId === questionsIds[questionsIds.length - 1]) {
        console.log(quizz, 'zavrsio kviz')
        // posalji odgovore
        return
      }

      console.log(quizz)

      const idx = questionsIds.indexOf(currentQuestionId);
      const nextQuestionId = questionsIds[idx + 1];
      setCurrentQuestionId(nextQuestionId);
      

      if (props.onQuestionChange) {
        props.onQuestionChange(nextQuestion);
      }

      
    };
  
    const prevQuestion = () => {
        setAnimationDirection('left')
        const idx = questionsIds.indexOf(currentQuestionId);
        const prevQuestionId = questionsIds[idx - 1];
        setCurrentQuestionId(prevQuestionId);
       

      if (props.onQuestionChange) {
        props.onQuestionChange(nextQuestion);
      }
    };
  
    const checkOption = (single, questionId, option) => {
      let alreadyCheckedOption;
      if (single && isAnswered) {
        alreadyCheckedOption = Object.keys(quizz[questionId]).find(option => quizz[questionId][option] === true);
      }  
      setQuizz({
        ...quizz,
        [questionId]: {
          ...quizz[questionId],
          [option]: !quizz[questionId][option],
          ...alreadyCheckedOption ? { [alreadyCheckedOption]: false } : {}
        },
      });
    };
  
    const questions = children.map((child, index) => {
      return React.cloneElement(child, {
        index,
        onOptionCheck: (option) => checkOption(child.props.single, child.props.id, option),
        checked: quizz[child.props.id],
        animationDirection: animationDirection
      });
    });
  
    return (
      <div className={classes["quizz-container"]}>
        <div className={classes["quizz-body"]}>
          {
            questions.find(question => question.props.id === currentQuestionId)
          }
        </div>
        <div className={classes["quizz-actions"]}>
            <Button
                className={classes['action-button']}
                color='dark' 
                onClick={prevQuestion} 
                disabled={currentQuestionId === questionsIds[0]}>
                <FontAwesomeIcon icon={faAngleLeft} />
                <span>Prethodno</span>
            </Button>
            <Button
                color='dark'
                className={classes['action-button']}
                onClick={nextQuestion}
               
                // disabled={currentQuestionId === questionsIds[questionsIds.length - 1] || !isAnswered}
                disabled={!isAnswered}
            >
            
            <span>{currentQuestionId === questionsIds[questionsIds.length - 1] ? 'Završi kviz' : 'Sledeće'}</span>
            <FontAwesomeIcon icon={faAngleRight} />
          </Button>
          
        </div>
      </div>
    );
};
