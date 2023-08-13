import React from 'react';
import { Button } from 'reactstrap';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import classes from './StartQuiz.module.css';
import image1 from '../img/image1.jpg';
import image2 from '../img/image2.jpg';
import image3 from '../img/image3.jpg';
import image4 from '../img/image4.jpg';

export const StartQuiz = () => {
  return (
    <div className={classes['start-quiz']}>
        <div className={classes['image-container']}>
            <div className={`${classes['image-item']} ${classes['image1']}`}>
            <img src={image1} alt="Image 1" />
            </div>
            <div className={`${classes['image-item']} ${classes['image2']}`}>
            <img src={image2} alt="Image 2" />
            </div>
            <div className={`${classes['image-item']} ${classes['image3']}`}>
            <img src={image3} alt="Image 3" />
            </div>
            <div className={`${classes['image-item']} ${classes['image4']}`}>
            <img src={image4} alt="Image 4" />
            </div>
      </div>
      <h1 className={classes['title']}>Uradi kviz i saznaj kako do zdrave i jake kose</h1>
      <div className={classes['description']}>
        <h2 className={classes['description-text']}>
            Ovaj kviz namenjen je svim damama koje bi volele da poboljšaju svoju kosu.
        </h2>
        <h2 className={classes['description-text']}>
            Odgorite na 8 pitanja kako biste dobili potpunu dijagnozu kose i preporuke stručnjaka.
        </h2>
        
      </div>
      
      
      <Link to="/hair-quiz">
        <Button color='dark' className={classes['start-button']}>
          POČNI SADA
        </Button>
      </Link>
      
    </div>
  );
};

export default StartQuiz;
