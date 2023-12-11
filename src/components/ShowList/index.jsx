import React from 'react'
import { ShowCard } from "../"


const ShowList = ({ showData }) => {
    return (
        <>
            {
                showData.map(s => (
                    s.image ? <ShowCard key="s.id" show={s} /> : ""
                ))
            }
        </>
    )
}

export default ShowList
