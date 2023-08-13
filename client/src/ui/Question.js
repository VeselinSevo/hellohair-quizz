import React from 'react';
import classes from './Question.module.css'

export const Question = (props) => {
    const optionLabels = props.options.map((option, index) => {
      return React.cloneElement(props.optionLabel, {
        index,
        option: option,
        checked: props.checked[option],
        checkOption: () => props.onOptionCheck(option),
      });
    });

    console.log(props.animationDirection)
  
    return (
      <div className={classes[`question-${props.animationDirection}`]}>
        <h2 className={classes[`question-title`]}>{props.question}?</h2>
        <hr className={classes[`question-line`]}/>
        <div className={classes[`question-options-container`]}>
        {props.options.map((option, idx) => (
          <div className={classes['option-container']} key={option}>
            <input
              type="checkbox"
              onChange={() => props.onOptionCheck(option)}
              id={`checkbox-${option}-${idx}`}
              checked={props.checked[option]}
              value={props.checked[option]}
                className={classes[`question-input`]}
            />
            
            {optionLabels.find(
              (optionLabel) => optionLabel.props.option === option
            )}
          
          </div>
          
        ))}
          </div>
        <div className={classes[`selection-msg`]}>{props.single ? 'Označite jedan odgovor' : 'Označite jedan ili više odgovora'}</div>
      </div>
    );
};