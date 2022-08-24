import React, { useContext, useState, useEffect, useCallback } from 'react'
import axios from 'axios'

const url = 'https://pokeapi.co/api/v2/pokemon/'

export const lists = []


export const PokedexContext = React.createContext({
    list: undefined,
    getLists: async () => null,
    type: undefined,
    singlePokemon: undefined,
    getSinglePokemon: async () => null
})


export const usePokedex = () => useContext(PokedexContext)


export const PokedexProvider = ({ children }) => {
    const [list, setList] = useState(lists)
    const [type, setType] = useState(null)
    const [singlePokemon, setSinglePokemon] = useState(null)


    const getLists = useCallback(async (limit) => {
        try {
            let res = await axios({
                method: 'get',
                url: `${url}?limit=${limit}`,
            });

            let data = res.data;
            setList(data)
        } catch (error) {
            console.log(error.response);

            return error.response;
        }
    }, [])

    const getTypeList = useCallback(async () => {
        try {
            let res = await axios({
                method: 'get',
                url: 'https://pokeapi.co/api/v2/type',
            });

            let data = res.data.results;
            setType(data)
        } catch (error) {
            console.log(error.response);

            return error.response;
        }
    }, [])

    const getSinglePokemon = useCallback(async (id) => {
        try {
            let res = await axios({
                method: 'get',
                url: `https://pokeapi.co/api/v2/pokemon/${id}`,
            });

            let data = res.data;
            let img = []
            for (let i in data.sprites) {
                if (typeof data.sprites[i] === 'object') {
                    for (let j in data.sprites[i]) {
                        if (typeof data.sprites[i][j] === 'object') {

                            for (let k in data.sprites[i][j]) {
                                if (typeof data.sprites[i][j][k] === 'object') {

                                    for (let l in data.sprites[i][j][k]) {

                                        if (typeof data.sprites[i][j][k][l] === 'object') {

                                            for (let m in data.sprites[i][j][k][l]) {

                                                if (data.sprites[i][j][k][l][m]) {
                                                    img.push(data.sprites[i][j][k][l][m])
                                                }
                                            }
                                        } else {
                                            if (data.sprites[i][j][k][l]) {
                                                img.push(data.sprites[i][j][k][l])
                                            }
                                        }
                                    }
                                } else {
                                    if (data.sprites[i][j][k]) {
                                        img.push(data.sprites[i][j][k])
                                    }
                                }

                            }
                        } else {
                            if (data.sprites[i][j]) {
                                img.push(data.sprites[i][j])
                            }
                        }

                    }
                } else {
                    if (data.sprites[i] !== null) {
                        img.push(data.sprites[i])
                    }
                }
            }
            data.img = img
            setSinglePokemon(data)
        } catch (error) {
            console.log(error.response);

            return error.response;
        }
    }, [])

    useEffect(() => {
        getLists(0)
        getTypeList()
    }, [getLists])

    return <PokedexContext.Provider value={{ list, getLists, getTypeList, type, getSinglePokemon, singlePokemon }}>{children}</PokedexContext.Provider>
}