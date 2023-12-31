import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useShow, useStatus } from "../contexts"

const SearchForm = () => {
    const { setShowData } = useShow()
    const [inputValue, setInputValue] = useState("")
    const [searchString, setSearchString] = useState("")
    const { setStatus } = useStatus()

    useEffect(() => {
        const searchAPI = async () => {
            const { data } = await axios.get(`https://api.tvmaze.com/search/shows?q=${searchString}`)
            const shows = data.map(s => s.show)
            setShowData(shows)
        }
        searchAPI()
    }, [searchString])


    const handleInput = (e) => {
        const newInput = e.target.value
        setInputValue(newInput)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setSearchString(inputValue)
        setInputValue("")
    }

    function handleStatus(e) {
        setStatus(e.target.value)
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" value={inputValue} onChange={handleInput} required />
                <input type="submit" value="Search" />
                <div className="select">
                    <select onChange={handleStatus} name="showData" className="filterShows">
                        <option value="all">Choose sorting type</option>
                        <option value="increase">Rating increasing</option>
                        <option value="decrease">Rating decreasing</option>
                    </select>
                </div>
            </form>
        </>
    )
}

export default SearchForm
