import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Character from '../components/Character';

const CardContainer = styled.div `
    height:90vh;
    width:80vw;
    margin: 40px auto;
    overflow: auto;
    background-color: rgba(0,0,0,0.01);
`


const CharacterContainer = _ => {

    const [ characters, setCharacters ] = useState([]);

    useEffect(() => {
        axios
            .get('https://swapi.dev/api/people')
            .then(res => {
                // console.log(res)
                setCharacters(res.data.results)
            })
            .catch(err => console.log('GET request failed. Error: ', err))
    }, [])



    return (
        <CardContainer>
            {characters.map((data, i) => {
                return <Character data={data} key={i} />
        })}
        </CardContainer>
    )
}

export default CharacterContainer
