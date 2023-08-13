import React from 'react';
import options from './options'
import classes from '../QuestionLabel.module.css'

export const Question7Label = ({ checkOption, checked, option }) => {

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
            option === options.Red && <div>Crvena</div>
        }
        {
            option === options.Grey && <div>Seda</div>
        }
      </label>
    );
};
export default Question7Label