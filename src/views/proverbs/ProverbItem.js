import React from 'react'
import images from '../Images'
import '../Cards.css'

const ProverbItem = ({ item }) => {

  return (
    <div className='proverbCard'>
      <div className='proverbCard-inner'>
        <div className='proverbCard-front'>
          <img src={images[item.char_id].icon} alt='' />
        </div>
        <div className='proverbCard-back'>
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
