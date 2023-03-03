import React from 'react'
import { useLocation, useSearchParams } from 'react-router-dom'
// import { useLocation } from 'react-router-dom'
export default function About() {

  const [search,setSearch] = useSearchParams()
  const name = search.get('name')
  console.log(name);
  return (
    <div>About</div>
  )
  
}

