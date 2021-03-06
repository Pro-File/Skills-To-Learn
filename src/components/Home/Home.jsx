import React from 'react'
import ImageSlider from '../Slider/ImageSlider';
import styled from 'styled-components';
import Partners from '../Partners/Partners';
import Library from '../Library/Library';
import AboutUs from '../AboutUs/AboutUs';

const Home = () => {
    return (
        <Container>
            <ImageSlider/>
            <AboutUs/>
            <Partners/>
            <Library/>
        </Container>
    )
}
const Container = styled.main`
min-height: calc(100vh - 80px);
/* background: #95afc0; */
overflow-x: hidden;
display: block;
/* top: 100px; */
padding: 0 calc(3.5vw + 5px);
`

export default Home
