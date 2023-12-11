import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import { GalleryImage } from '../'

const ShowGallery = () => {
  const [shows, setShows] = useState([])

  useEffect(() => {
    const displayShows = async () => {
      const { data } = await axios.get("https://api.tvmaze.com/shows")
      setShows(data)
    }
    displayShows()
  }, [])

  return (
    <div className='shows'>
      {shows.map(show => (
        <Link to={`${show.id}`} key={show.id}>
          <GalleryImage show={show}  />
        </Link>
      ))
      }
    </div>
  )
}

export default ShowGallery

