import Carousel from 'react-bootstrap/Carousel';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import CarouselOneImg from '../assets/1.png';
import CarouselTwoImg from '../assets/2.png';
import CarouselThreeImg from '../assets/3.png';

export  default function Home(){
    return(
        <div>
            <Carousel>
                <Carousel.Item>
                <Row>
                    <Col>Text data</Col>
                    <Col><img src={CarouselOneImg} alt="" /></Col>
                </Row>
                </Carousel.Item>
            </Carousel>
            <Carousel> 
                <Carousel.Item>
                <Row>
                    <Col>Text data</Col>
                    <Col><img src={CarouselTwoImg} alt="" /></Col>
                </Row>
                </Carousel.Item>
            </Carousel>
            <Carousel>
                <Carousel.Item>
                <Row>
                    <Col>Text data</Col>
                    <Col><img src={CarouselThreeImg} alt="" /></Col>
                </Row>
                </Carousel.Item>
            </Carousel> 

        </div>
    )
}