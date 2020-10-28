import React from 'react'
import logo from '../assets/img/stor/front cover.png'
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
        <img src={logo} alt='' style={logoStyle} />
      </header>

      <img src={amazonImg} style={amazonStyle}  alt='' />

    </div>
  )
}

const logoStyle = {
    marginLeft: '50px',
    marginBottom: '50px',
    width: '400px',
    display: 'inline-block',
    alignItems: 'center',
    justifyContent: 'center'
}

export default Banner
