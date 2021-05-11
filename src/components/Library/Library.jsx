import React from 'react'
import styled from 'styled-components';
import Card from '../Card/Card';

const Library = () => {
    return (
        <Container>
            <LibHead>
                <h1>Our Library</h1>
            </LibHead>
            <LibGrid>
            <Card Image = {'/images/cardimg.png'}/>
            <Card Image = {'/images/cardimg2.png'}/>
            <Card Image = {'/images/cardimg3.png'}/>
            <Card Image = {'/images/cardimg4.png'}/>
            <Card Image = {'/images/cardimg5.png'}/>
            <Card Image = {'/images/cardimg6.png'}/>

            
            </LibGrid>

        </Container>
    )
}
const Container = styled.div`
width: 100%;
height: 100%;

`

const LibHead = styled.div`
padding: 20px 0px;
margin-bottom: 20px;
text-align: center;
font-weight: bold;
letter-spacing: 6px;
font-size: 18px;
@media (max-width: 768px){
        font-size: 15px;
    }
`

const LibGrid = styled.div`
padding: 0 0 26px;
    /* background: lightgray; */
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    grid-gap: 25px;
    @media (max-width: 1200px){
        grid-template-columns: repeat(3, minmax(0, 1fr));
    }
    @media (max-width: 890px){
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }
    @media (max-width: 600px){
        grid-template-columns: repeat(1, minmax(0, 1fr));
    }
`

const Wrap = styled.div`
// padding-top: 56.25%;
background: black;
width: 100%;
height: 100%;
border-radius: 10px;
box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
overflow: hidden;
transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
border: 2px solid rgb(249,249,249, 0.2);

img{
    inset: 0px;
    // display: block;
    width: 100%;
    z-index: 100;
    object-fit: contain;
    /* position: relative; */
    transition: all 500ms ease-in-out;
}

&:hover{
    transform: scale(1.05);
    border: 3px solid rgb(249,249,249,0.8);
}
@media (max-width: 768px){

    width: 100%;
    height: 100%;
    img{
        width: 100%;
        position: relative;
        top: 0%;
    }
    }
    
`

export default Library
