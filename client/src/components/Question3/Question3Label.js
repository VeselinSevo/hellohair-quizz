import React from 'react';
import options from './options'
import classes from '../QuestionLabel.module.css'

export const Question3Label = ({ checkOption, checked, option }) => {

  console.log(option)
    return (
      <label
        className={checked ? classes['label-selected'] : classes['']}
        onClick={checkOption}
      >
        {
            option === options.Rare && 'Retka'
        }
        {
            option === options.Normal && 'Normalna'
        }
        {
            option === options.Dense && 'Gusta'
        }
      </label>
    );
};
export default Question3Label