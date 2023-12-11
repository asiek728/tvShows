import React, { useEffect } from 'react';
import { ShowCard } from "../"
import { useRatingFilter } from '../contexts'
import { useShow } from "../contexts"

const ShowList = () => {
    const { showData } = useShow()

    const { filteredShows, setFilteredShows } = useRatingFilter();

    useEffect(() => {
        filterHandler()
    }, [showData] )

    function filterHandler() {
        //ascending
        setFilteredShows(showData.sort((a, b) => parseInt(a.rating.average) - parseInt(b.rating.average)));
        //descending
        // setFilteredShows(showData.sort((a, b) => parseInt(b.rating.average) - parseInt(a.rating.average)));   
    }
    return (
        <>
            {
                filteredShows.map(s => (
                    s.image ? <ShowCard key="s.id" show={s} /> : ""
                ))
            }
        </>
    )
}

export default ShowList
