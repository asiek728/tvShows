import React, { useEffect } from 'react';
import { ShowCard } from "../"
import { useShow, useStatus, useRatingFilter } from "../contexts"

//status increase albo decrease
const ShowList = () => {
    const { showData } = useShow();
    const { filteredShows, setFilteredShows } = useRatingFilter();
    const { status } = useStatus();

    useEffect(() => {
        filterHandler()
    }, [showData, status])

    function filterHandler() {
        if (status === 'decrease') {
            //ascending
            setFilteredShows(showData.sort((a, b) => (a.rating.average) - (b.rating.average)));
        }
        else if (status === 'increase') {
            //descending
            setFilteredShows(showData.sort((a, b) => (b.rating.average) - (a.rating.average)));
        }
        else {
            setFilteredShows(showData)
        }
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
