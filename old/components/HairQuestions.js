import React from 'react';
import Questions from "./Quesations/Questions"
import { HairQuestionLabel } from './HairQuestionLabel';

export const HairQuestions = () => {

    const questions = [
        {
            id: 1,
            text: 'Some text question?',
            answers: [
                {
                    id: 1,
                    text: 'Spain',
                    label: <HairQuestionLabel  />,
                    svg: 'dsfs',
                }, 
    
                {
                    id: 2,
                    text: 'Egypt',
                    label: HairQuestionLabel
                },
    
                {
                    id: 3,
                    text: 'Serbia',
                    label: HairQuestionLabel
                }
            ],
            isMultiple: false,
        },
    
        {
            id: 2,
            text: 'Some text question 2?',
            answers: [
                {
                    id: 1,
                    text: 'Cacak',
                    label: HairQuestionLabel
                    // value: 'Cacak'
                },
    
                {
                    id: 2,
                    text:  'Belgrade',
                    label: HairQuestionLabel
                },
    
                {
                    id: 3,
                    text: 'Nis',
                    label: HairQuestionLabel
                }
            ],
            isMultiple: true,
        }

    ];

    return <Questions questions={questions} />
}