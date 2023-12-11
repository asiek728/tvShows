import React from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <>
      <h1>Top TV</h1>
      <em>All about the smaller silver screen</em>
      <ul>
        <li>
          <Link to="/shows">Explore Shows</Link>
        </li>
        <li>
          <Link to="/search">Search your favourite shows</Link>
        </li>
      </ul>
    </>
  )
}

export default HomePage
