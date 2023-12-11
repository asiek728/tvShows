import React from 'react'
import { SearchWidget } from "../../components"
import { ShowProvider } from "../../components/contexts"


const SearchPage = () => {
  return (
    <ShowProvider>
      <SearchWidget />
    </ShowProvider>
  )
}

export default SearchPage
