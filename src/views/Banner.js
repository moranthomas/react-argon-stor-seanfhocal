import React from 'react'
import frontCover from '../assets/img/stor/front cover.png'
import amazonImg from '../assets/img/stor/Amazon-btn.png';
import  { Row, Col } from 'reactstrap';
import './Banner.css';

const Banner = () => {
  return (
    <div>
      <header>
        <img src={frontCover} alt='' className='frontCoverStyle' />
      </header>

      <Row>
          <Col lg="3" />
          <Col lg="6">
            <a href="https://www.amazon.com/gp/product/0955436869" target="_blank">
              <img src={amazonImg} className='amazonStyle'  alt='' />
            </a>
          </Col>
          <Col lg="3" />
      </Row>

    </div>
  )
}

export default Banner
