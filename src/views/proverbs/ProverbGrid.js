import React from 'react'
import ProverbItem from './ProverbItem'
import Spinner from '../Spinner'

const cards = {
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gap: '1rem'
};

/*
@media (max-width: 800px) {
  .cards {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 500px) {
  .cards {
    grid-template-columns: 1fr;
  }
}
*/

const ProverbGrid = ({ items, isLoading }) => {
  return isLoading ? (
    <Spinner />
  ) : (
    <section style={cards}>
      {items.map((item) => (
        <ProverbItem key={item.char_id} item={item}></ProverbItem>
      ))}
    </section>
  )
}

export default ProverbGrid
