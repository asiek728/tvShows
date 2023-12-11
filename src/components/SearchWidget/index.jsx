import React from 'react'
import { ShowList, SearchForm } from "../"
import { RatingFilterProvider } from "../contexts"

const SearchWidget = () => {

    return (
        <>
            <SearchForm />
            <RatingFilterProvider>
                <ShowList />
            </RatingFilterProvider>
        </>
    )
}

export default SearchWidget
