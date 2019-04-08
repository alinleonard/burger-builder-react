import React from 'react';
import classes from './Burger.module.css';

import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
    const transformedIngredients = Object.keys(props.ingredients) // ["salad", "bacon", "cheese", "meat"]
        .map((ingredientKey) => { // Ex. ingredientKey = "salad"
            return [...Array(props.ingredients[ingredientKey])].map((_, i) => {
                return <BurgerIngredient key={ingredientKey+i} type={ingredientKey} />;
            })
        });

        // let transformedIngredients = [];
 
        // for (const key of Object.keys(props.ingredients)) {
        //   for(let i = 1; i <= props.ingredients[key]; i++) {
        //     transformedIngredients.push(
        //       <BurgerIngredient type={key} key={key + i}/>
        //     );
        //   }
        // }

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
}

export default burger;