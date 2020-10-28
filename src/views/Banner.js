import React from 'react'
import frontCover from '../assets/img/stor/front cover.png'
import amazonImg from '../assets/img/stor/Amazon-btn.png';


const amazonStyle = {
  float: 'center',
  marginTop: '20px',
  width: '100px'
};

const Banner = () => {
  return (
    <div>
      <header>
        <img src={frontCover} alt='' style={frontCoverStyle} />
      </header>

      <img src={amazonImg} style={amazonStyle}  alt='' />

    </div>
  )
}

// Need media query for mobile for this!

const frontCoverStyle = {
    marginLeft: '50px',
    marginBottom: '50px',
    width: '400px',
    display: 'inline-block',
    alignItems: 'center',
    justifyContent: 'center'
}

export default Banner
