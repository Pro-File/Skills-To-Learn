import React from 'react'
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

const ImageSlider = () => {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
    }
    return (
            <Carousel {...settings}>
                <Wrap>
                    <a href="">
                        {/* <h1>20% OFF</h1>
                        <h3>On all new</h3>
                        <h1 className="courses">Courses</h1> */}
                        <img src="/images/card-1.jpg" alt=''/>
                    </a>
                </Wrap>
                <Wrap>
                    <a href="">
                        <img src="/images/card-4.jpg" alt=''/>
                    </a>
                </Wrap>
                <Wrap>
                    <a href="">
                        <img src="/images/card-3.jpg" alt=''/>
                    </a>
                </Wrap>
                <Wrap>
                    <a href="">
                        <img src="/images/card-4.jpg" alt=''/>
                    </a>
                </Wrap>
            </Carousel>
    )
}
const Carousel = styled(Slider)`
    /*  no prob */
    margin-top: 8px;
    & > button{
        width: 5vw;
        height: 100%;
        z-index: 1;
    }    
    ul{
        display: none;
    }
    ul li button{
        &:before{
            display: none;
        }
    }
    li.slick-active button:before{
        color: #f9f9f9;
    }
    .slick-list{
        overflow: initial;
    }
    .slick-prev{
        left: 20px;
    }
    .slick-next{
        right: 20px;
    }
    .slick-prev:before, .slick-next:before{
        opacity: 0.5;
        font-size: 22px;
    }
`
const Wrap = styled.div`
    border-radius: 5px;
    position: relative;
    a{
        border-radius: 5px;
        box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
        position: relative;
        display: block;
        margin: 5px;
        h1{
            position: absolute;
            top: 10%;
            z-index: 200;
            color: #f9f9f9;
            font-size: 60px;
            padding: 20px 40px;
        }
        .courses{
            position: absolute;
            top: 50%;
            z-index: 200;
            color: #f9f9f9;
            font-size: 60px;
            padding: 20px 40px;
        }
        h3{
            position: absolute;
            top: 40%;
            z-index: 200;
            color: #f9f9f9;
            font-size: 20px;
            padding: 20px 40px;
        }
        img{
            width: 100%;
            height: 100%;
        }

        &:hover{
            padding: 0;
            z-index: 1000;
            transition: all 400ms ease;
            /* transform: scale(1.2); */
            /* border: 2px solid rgb(249,249,249, 0.8); */
        }
    }
@media (max-width: 768px){
a{
    height: 180px;
}
a img{
    object-fit: cover;
    object-position: center;
}
}
`
export default ImageSlider
