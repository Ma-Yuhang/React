import React from 'react'
import { useParams } from 'react-router-dom'

export default function Home() {
  const {id} = useParams()
  console.log(id);
  return (
    <div>Home</div>
  )
}
