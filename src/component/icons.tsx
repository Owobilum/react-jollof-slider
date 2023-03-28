import React, { ReactElement } from 'react'

interface Icon {
  fill?: string
}

function ForwardIcon({ fill = '#000000' }: Icon): ReactElement {
  return (
  
    <svg
      viewBox="0 0 96 96"
      xmlns="http://www.w3.org/2000/svg"
      width="32px"
      height="32px"
      id="Layer_1"
      fill={fill}
    >
      <title />
      <path d="M69.8437,43.3876,33.8422,13.3863a6.0035,6.0035,0,0,0-7.6878,9.223l30.47,25.39-30.47,25.39a6.0035,6.0035,0,0,0,7.6878,9.2231L69.8437,52.6106a6.0091,6.0091,0,0,0,0-9.223Z" />
    </svg>
  )
}

function BackwardIcon({ fill = '#000000' }: Icon): ReactElement {
  return (
    <svg
      viewBox="0 0 96 96"
      xmlns="http://www.w3.org/2000/svg"
      width="32px"
      height="32px"
      id="Layer_2"
      fill={fill}
    >
      <title />
      <path d="M39.3756,48.0022l30.47-25.39a6.0035,6.0035,0,0,0-7.6878-9.223L26.1563,43.3906a6.0092,6.0092,0,0,0,0,9.2231L62.1578,82.615a6.0035,6.0035,0,0,0,7.6878-9.2231Z" />
    </svg>

  )
}

export { BackwardIcon,ForwardIcon }
