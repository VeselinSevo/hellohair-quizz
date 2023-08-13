import React from 'react';
import options from './options'
import classes from '../QuestionLabel.module.css'

export const Question4Label = ({ checkOption, checked, option }) => {

  console.log(option)
    return (
      <label
        className={checked ? classes['label-selected'] : classes['']}
        onClick={checkOption}
      >
        {
            option === options.Natural && 'Prirodna'
        }
        {
            option === options.Straighten && 'Ispravljena(Keratin)'
        }
        {
            option === options.Painted && 'Farbana'
        }
        {
            option === options.Twisted && 'Uvijena'
        }
      </label>
    );
};
export default Question4Label