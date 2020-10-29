import React from 'react'
import frontCover from '../assets/img/stor/front cover.png'
import amazonImg from '../assets/img/stor/Amazon-btn.png';
import  { Row, Col } from 'reactstrap';


const amazonStyle = {
  float: 'center',
  marginLeft: '50px',
  marginTop: '20px',
  width: '150px'
};

// Need media query for mobile for this!
const frontCoverStyle = {
  marginLeft: '50px',
  marginBottom: '50px',
  width: '400px',
  display: 'inline-block',
  alignItems: 'center',
  justifyContent: 'center'
}

const Banner = () => {
  return (
    <div>
      <header>
        <img src={frontCover} alt='' style={frontCoverStyle} />
      </header>

      <Row>
          <Col lg="3" />
          <Col lg="6">
            <img src={amazonImg} style={amazonStyle}  alt='' />
          </Col>
          <Col lg="3" />
      </Row>


    </div>
  )
}

export default Banner
