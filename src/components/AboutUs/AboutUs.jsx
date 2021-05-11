import { Button } from '@material-ui/core';
import React from 'react'
import styled from 'styled-components';

const AboutUs = () => {
    return (
        <Container>
            <AboutHead>
                <h1>Our Mission</h1>
            </AboutHead>
            <AboutPara>
            We provide all the Skills that help you to excel in your respective career. Our Short and concise online courses may help you to grow in your career and find your best fit in the international market.
           </AboutPara>
            <AboutBtn>
            <Button variant="outlined" color="primary" >View More</Button>
            </AboutBtn>
        </Container>
    )
}

const Container = styled.div`
width: 100%;
height: 100%;
padding-top: 10px;
`
const AboutHead = styled.div`
padding: 20px 0px;
text-align: center;
font-weight: bold;
letter-spacing: 6px;
font-size: 18px;
@media (max-width: 768px){
        font-size: 15px;
    }
`
const AboutPara = styled.p`
    font-size: 20px;
    color: #a0a0a0;
    line-height: 2;
    text-align: center;
    text-justify: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 0 26px;
    @media (max-width: 768px){
        font-size: 16px;
    }
`
const AboutBtn = styled.div`
width: 100%;
display : flex;
justify-content: center;
`

export default AboutUs
