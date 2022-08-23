import React, { useContext, useState, useEffect, useCallback } from 'react'
import axios from 'axios'

const url = 'https://pokeapi.co/api/v2/pokemon/'

export const lists = []


export const PokedexContext = React.createContext({
    list: undefined,
    setLists: async (list) => null,
    getLists: async () => null
})


export const usePokedex = () => useContext(PokedexContext)


export const PokedexProvider = ({ children }) => {
    const [list, setList] = useState(lists)


    const getLists = useCallback(async (limit) => {
        // const { list } = usePokedex()
        // let limit = list.results !== undefined ? (list.results.length + 20) : 0
        // console.log(limit, 'limit', list)
        console.log(limit, 'lim')
        try {
            let res = await axios({
                method: 'get',
                url: `${url}?limit=${limit}`,
            });

            let data = res.data;
            console.log(data, 'context')
            setList(data)
            // return data;
        } catch (error) {
            console.log(error.response);

            return error.response;
        }
    }, [])

    useEffect(() => {
        getLists(0)
    }, [getLists])

    return <PokedexContext.Provider value={{ list, setList, getLists }}>{children}</PokedexContext.Provider>
}