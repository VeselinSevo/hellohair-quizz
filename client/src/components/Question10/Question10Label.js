import React from 'react';
import options from './options'
import classes from '../QuestionLabel.module.css'

export const Question10Label = ({ checkOption, checked, option }) => {

  console.log(option)
    return (
      <label
        className={checked ? classes['label-selected'] : classes['']}
        onClick={checkOption}
      >
        {
            option === options.Fine && <div>Tanka<svg width="100" height="101" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg"><path data-stroke="dark" d="M14 68L49.8802 32" stroke="#221F20" stroke-width="0.5" stroke-miterlimit="10"></path><path data-stroke="dark" d="M32.0596 68L67.9398 32" stroke="#221F20" stroke-width="0.5" stroke-miterlimit="10"></path><path data-stroke="dark" d="M50.1201 68L86.0003 32" stroke="#221F20" stroke-width="0.5" stroke-miterlimit="10"></path></svg></div>
        }
        {
            option === options.Medium && <div>Srednje debljine<svg width="100" height="101" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg"><path data-stroke="dark" d="M14 68L49.8802 32" stroke="#221F20" stroke-width="2" stroke-miterlimit="10"></path><path data-stroke="dark" d="M32.0596 68L67.9397 32" stroke="#221F20" stroke-width="2" stroke-miterlimit="10"></path><path data-stroke="dark" d="M50.1201 68L86.0003 32" stroke="#221F20" stroke-width="2" stroke-miterlimit="10"></path></svg></div>
        }
        {
            option === options.Thick && <div>Debela<svg width="100" height="101" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg"><path data-stroke="dark" d="M14 68L49.8802 32" stroke="#221F20" stroke-width="4" stroke-miterlimit="10"></path><path data-stroke="dark" d="M32.0596 68L67.9397 32" stroke="#221F20" stroke-width="4" stroke-miterlimit="10"></path><path data-stroke="dark" d="M50.1201 68L86.0003 32" stroke="#221F20" stroke-width="4" stroke-miterlimit="10"></path></svg></div>
        }
      </label>
    );
};
export default Question10Label