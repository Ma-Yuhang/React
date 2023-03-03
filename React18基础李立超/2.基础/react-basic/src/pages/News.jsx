import React from 'react'
import { useLocation } from 'react-router-dom'

export default function News() {
  const {state:{msg}} = useLocation()
  console.log(msg);
  return (
    <div>News</div>
  )
}
