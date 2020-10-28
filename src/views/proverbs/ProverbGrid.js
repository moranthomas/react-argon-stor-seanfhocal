import React from 'react'
import ProverbItem from './ProverbItem'
import Spinner from '../Spinner'

const ProverbGrid = ({ items, isLoading }) => {
  return isLoading ? (
    <Spinner />
  ) : (
    <section className='cards'>
      {items.map((item) => (
        <ProverbItem key={item.char_id} item={item}></ProverbItem>
      ))}
    </section>
  )
}

export default ProverbGrid
