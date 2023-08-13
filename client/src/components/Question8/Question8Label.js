import React from 'react';
import options from './options'
import classes from '../QuestionLabel.module.css'

export const Question8Label = ({ checkOption, checked, option }) => {

  console.log(option)
    return (
      <label
        className={checked ? classes['label-selected'] : classes['']}
        onClick={checkOption}
      >
        {
            option === options.Black && <div>Crna</div>
        }
        {
            option === options.Brown && <div>Braon</div>
        }
        {
            option === options.Blonde && <div>Plava</div>
        }
        {
            option === options.Blajhana && <div>Blajhana</div>
        }
        {
            option === options.Red && <div>Crvena</div>
        }
        {
            option === options.Grey && <div>Seda</div>
        }
        {
            option === options.None && <div>Ne farbam se</div>
        }
      </label>
    );
};
export default Question8Label