import React from 'react'
import classes from './meal.module.css'
import Counter from '../../UI/Counter/counter'
import { useState } from 'react'
export default function Meal(props) {

  const [mealData, setMealData] = useState(props.mealData)
  return (
    <div className={classes.meal}>
      <div className={classes.imgbox}>
        <img src={mealData.img} className={classes.img}/>
      </div>
      <div className={classes.descBox}>
        <h2 className={classes.title}>{mealData.title}</h2>
        {props.noDesc ? null : <div className={classes.detail}>{mealData.desc}</div>}
        <div className={classes.mealfooter}>
          <span className={classes.price}>{mealData.price}</span>
          <Counter mealData={mealData}/>
        </div>
      </div>
    </div>
  )
}
