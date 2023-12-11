import React, { useState } from 'react'
import { ShowList, SearchForm } from "../"

const SearchWidget = () => {

    const [showData, setShowData] = useState([])

    return (
        <>
            <SearchForm setShowData={setShowData}/>
            <ShowList showData={showData}/>
        </>
    )
}

export default SearchWidget
