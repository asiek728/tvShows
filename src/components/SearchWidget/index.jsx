import React from 'react'
import { ShowList, SearchForm } from "../"
import { RatingFilterProvider, StatusProvider } from "../contexts"

const SearchWidget = () => {

    return (
        <>
            <StatusProvider>
                <SearchForm />
                <RatingFilterProvider>
                    <ShowList />
                </RatingFilterProvider>
            </StatusProvider>
        </>
    )
}

export default SearchWidget
