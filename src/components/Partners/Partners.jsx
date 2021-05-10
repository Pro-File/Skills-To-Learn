import React from 'react'
import styled from 'styled-components';

const Partners = () => {
    return (
        <Container>
            <PartnersHead>
                Our Partners
            </PartnersHead>
            <PartnersGrid>
            <Wrap>
                <img src="/images/clients-1.png" alt=''/>
                
            </Wrap>
            <Wrap>
                <img src="/images/clients-2.png" alt=''/>
            
            </Wrap>
            <Wrap>
                <img src="/images/clients-3.png" alt=''/>
                
            </Wrap>
            <Wrap>
                <img src="/images/clients-4.png" alt=''/>
                
            </Wrap>
            <Wrap>
                <img src="/images/clients-5.png" alt=''/>
               
            </Wrap>
            <Wrap>
                <img src="/images/clients-2.png" alt=''/>
                
            </Wrap>
            </PartnersGrid>
        </Container>
    )
}

const Container  =styled.div`
width: 100%;
height: 100%;

`
const PartnersHead = styled.div`
    font-size: 24px;
    font-weight: bold;
    text-align: center;
    padding-top: 40px;
`
const PartnersGrid = styled.div`
margin-top : 20px;
padding: 0 0 26px;
display: grid;
grid-gap: 25px;
grid-template-columns: repeat(6, minmax(0, 1fr));

@media (max-width: 768px){
grid-template-columns: repeat(2, minmax(0, 1fr));
}
@media (max-width: 400px){
    grid-template-columns: repeat(1, minmax(0, 1fr));
    grid-gap: 20px;
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

export default Partners
