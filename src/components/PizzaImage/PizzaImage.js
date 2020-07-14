import React from 'react';

import classes from './PizzaImage.css';
import pizzaImg from '../../assets/pizza.jpg';


const PizzaImage = (props) => (
  <div className={classes.PizzaImageContainer}>
    <img src={pizzaImg} className={classes.PizzaImage} />
  </div>
);

export default PizzaImage;