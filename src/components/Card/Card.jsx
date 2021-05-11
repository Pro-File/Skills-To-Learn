import { Button, Divider } from '@material-ui/core';
import React from 'react'
import styled from 'styled-components';
import ShareIcon from '@material-ui/icons/Share';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

const Card = ({Image}) => {
    return (
    <Wrap>
                <CardImg>
             <img src={Image} alt=''/>
                </CardImg>
                <CardHead>
                    Website Development
                </CardHead>
                <CardSubHead>
                    Information Technology
                </CardSubHead>
                <Divider/>
                <CardFooter>
                    <Button>
                    <FavoriteBorderIcon/>
                    </Button>
                    <ShareBtn>
                        <Button>
                        <ShareIcon/>
                        </Button>
                    </ShareBtn>
                    <PriceTag>
                    <Text>
                    20$
                    </Text>
                    100$
                    </PriceTag>
                </CardFooter>
    </Wrap>
    )
}

const Wrap  = styled.div`
display: flex;
justify-content: center;
background: #ffff;
border-radius: 10px;
/* align-items: center; */
flex-flow: column;
box-shadow:  -2px 4px 10px 0px rgb(0 0 0 / 69%);
`
const CardHead = styled.div`
padding: 0px 20px;
margin-top: 20px;
font-weight: bold;
letter-spacing: 2px;
font-size: 16px;
`

const CardSubHead = styled.div`
/* padding: 0 0 26px; */
padding: 20px 20px;
color: #a0a0a0;
display: flex;
font-weight: bold;
letter-spacing: 2px;
font-size: 10px;
`
const CardFooter = styled.div`
width: 100%;
height: min-content;
display: grid;
grid-template-columns: 20fr 20fr 60fr;

`

const ShareBtn = styled.div`
/* background: lightgrey; */
border-left: 1px solid #808080;
border-right: 1px solid #808080;
/* padding: 20px 20px; */
display: flex;
align-items: center;
justify-content: center;
`
const Text = styled.div`
padding: 0px 5px;
color: #95afc0;
text-decoration: line-through;
text-decoration-style: solid;
`

const PriceTag = styled.div`
/* background: lightpink; */
padding: 20px 20px;
font-weight: bold;
display: flex;
justify-content: flex-end;
letter-spacing: 2px;
font-size: 16px;
`

const CardImg = styled.div`
width: 100%;
height: 100%;
border-radius: 10px;
overflow: hidden;
transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
border: 2px solid rgb(249,249,249, 0.2);

img{
    inset: 0px;
    // display: block;
    width: 100%;
    height: 100%;
    z-index: 100;
    object-fit: contain;
    /* position: relative; */
    transition: all 500ms ease-in-out;
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

export default Card
