import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useShow } from "../contexts"

const SearchForm = () => {
    const { setShowData } = useShow()
    const [inputValue, setInputValue] = useState("")
    const [searchString, setSearchString] = useState("")

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

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" value={inputValue} onChange={handleInput} required />
                <input type="submit" value="Search" />
            </form>
        </>
    )
}

export default SearchForm
