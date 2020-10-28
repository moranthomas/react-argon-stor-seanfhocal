import React from 'react'

import images from '../Images'

const ProverbItem = ({ item }) => {

  return (
    <div className='card'>
      <div className='card-inner'>
        <div className='card-front'>
          <img src={images[item.char_id].icon} alt='' />
        </div>
        <div className='card-back'>
          <h1>{item.proverb}</h1>
          <br/>
          <ul>
            <li>
              <strong>Explanation:</strong> {item.irish}
            </li>
            <br/>
            <li>
              <strong>English:</strong> {item.english}
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default ProverbItem
