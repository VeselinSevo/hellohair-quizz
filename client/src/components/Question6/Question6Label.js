import React from 'react';
import options from './options'
import classes from '../QuestionLabel.module.css'

export const Question6Label = ({ checkOption, checked, option }) => {

  console.log(option)
    return (
      <label
        className={checked ? classes['label-selected'] : classes['']}
        onClick={checkOption}
      >
        {
            option === options.Hairdryer && <div>Fen</div>
        }
        {
            option === options.Figaro && <div>Figaro</div>
        }
        {
            option === options.Iron && <div>Peglu</div>
        }
        {
            option === options.None && <div>Ništa od navedenog</div>
        }
      </label>
    );
};
export default Question6Label