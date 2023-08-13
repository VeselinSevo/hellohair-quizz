import React from 'react';
import options from './options'
import classes from '../QuestionLabel.module.css'

export const Question5Label = ({ checkOption, checked, option }) => {

  console.log(option)
    return (
      <label
        className={checked ? classes['label-selected'] : classes['']}
        onClick={checkOption}
      >
        {
            option === options.Daily && <div>Svakog dana</div>
        }
        {
            option === options.TwoDays && <div>Svakog drugog dana</div>
        }
        {
            option === options.Weekly && <div>1-2 sedmično</div>
        }
        {
            option === options.LessThenOnce && <div>Manje od jednom sedmično</div>
        }
      </label>
    );
};
export default Question5Label