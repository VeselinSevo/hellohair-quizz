

import React from 'react';
import { Quizz, Question } from '../ui';
import { Question1Label, Question1Options } from './Question1';
import { Question2Label, Question2Options} from './Question2';
import { Question3Label, Question3Options} from './Question3';
import { Question4Label, Question4Options} from './Question4';
import { Question5Label, Question5Options} from './Question5';
import { Question6Label, Question6Options } from './Question6';
import { Question7Label, Question7Options} from './Question7';
import { Question8Label, Question8Options} from './Question8';
// import { Question9Label, Question9Options} from './Question9';
// import { Question10Label, Questio105Options} from './Question10';

export const HairQuestionaire = () => {
    return (
    <>
        <Quizz saveOnReload={false}>
            <Question
                single
                id={'hairType'}
                question={'Kako bi opisala svoju kosu'}
                optionLabel={<Question1Label />}
                options={[
                    Question1Options.Straight,
                    Question1Options.Wavy,
                    Question1Options.Curly,
                ]}
            />
            <Question
                single
                id={'hairTexture'}
                question={'Koja je debljina tvoje kose'}
                optionLabel={<Question2Label />}
                options={[
                    Question2Options.Thin,
                    Question2Options.Medium,
                    Question2Options.Thick
                ]}
            />
            <Question
                single
                id={'hairDensity'}
                question={'Koliko je gusta tvoja kosa'}
                optionLabel={<Question3Label />}
                options={[
                    Question3Options.Rare,
                    Question3Options.Normal,
                    Question3Options.Dense
                ]}
            />
            <Question
                single
                id={'hairNatural'}
                question={'Tvoja kosa je...'}
                optionLabel={<Question4Label />}
                options={[
                    Question4Options.Straighten,
                    Question4Options.Natural,
                    Question4Options.Painted,
                    Question4Options.Twisted
                ]}
            />

            <Question
                single
                id={'hairTexture'}
                question={'Koji je tekstura tvoje kose'}
                optionLabel={<Question5Label />}
                options={[
                    Question5Options.Fine,
                    Question5Options.Medium,
                    Question5Options.Thick
                ]}
            />


            <Question
                single
                id={'hairWashing'}
                question={'Koliko često pereš kosu'}
                optionLabel={<Question5Label />}
                options={[
                    Question5Options.Daily,
                    Question5Options.TwoDays,
                    Question5Options.Weekly,
                    Question5Options.LessThenOnce,
                ]}
            />  

            <Question
                single
                id={'hairStyling'}
                question={'Šta koristiš za stilizovanje kose'}
                optionLabel={<Question6Label />}
                options={[
                    Question6Options.Hairdryer,
                    Question6Options.Figaro,
                    Question6Options.Iron,
                    Question6Options.None,
                ]}
            /> 

            <Question
                single
                id={'hairColor'}
                question={'Koja je prirodna boja tvoje kose'}
                optionLabel={<Question7Label />}
                options={[
                    Question7Options.Black,
                    Question7Options.Brown,
                    Question7Options.Blonde,
                    Question7Options.Red,
                    Question7Options.Grey,
                ]}
            /> 
            <Question
                single
                id={'hairColorPainted'}
                question={'U koju si boju trenutno ofarbana'}
                optionLabel={<Question8Label />}
                options={[
                    Question8Options.Black,
                    Question8Options.Brown,
                    Question8Options.Blonde,
                    Question8Options.Blajhana,
                    Question8Options.Red,
                    Question8Options.Grey,
                    Question8Options.None,
                ]}
            /> 
        </Quizz>
    </>
    )
}

export default HairQuestionaire;