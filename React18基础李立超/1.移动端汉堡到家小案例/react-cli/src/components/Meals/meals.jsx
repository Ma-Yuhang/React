import React from 'react'
import Meal from './Meal/meal'
import classes from './meals.module.css'

export default function Meals(props) {
  return (
    <div className={classes.meals}>
      {
        props.mealsData.map((item) => {
          return <Meal key={item.id} mealData={item}/>
        })
      } 
    </div>
  )
}
