import React from 'react'
import frontCover from '../assets/img/stor/front cover.png'
import amazonImg from '../assets/img/stor/Amazon-btn.png';
import  { Row, Col } from 'reactstrap';
import './Banner.css';

const textStyle = {
  float: 'center',
  marginTop: '40px',
  fontSize: '17px',
  marginBottom: '20px',
  textAlign: 'center'
};

const Banner = () => {
  return (
    <div>
      <header>
        <img src={frontCover} alt='' className='frontCoverStyle' />
      </header>

      <Row>
          <Col lg="3" />
          <Col lg="6">
            <a href="https://www.amazon.co.uk/dp/0955436869" target="_blank">
              <img src={amazonImg} className='amazonStyle'  alt='' />
            </a>
          </Col>
          <Col lg="3">
          </Col>
      </Row>

      <Row>
        <Col lg="1" />
        <Col lg="10">
            <div style={textStyle}>
              Tap / Scroll over images below to see examples!
            </div>
        </Col>
        <Col lg="1">
        </Col>
      </Row>

    </div>
  )
}

export default Banner
