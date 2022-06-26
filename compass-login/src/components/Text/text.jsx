import React from 'react'
import { TextStyled } from './text.styled'

export function Text ( {name, text} )  {
  return (
    <TextStyled>
      <div>
       <p className={name}>{text}</p>
      </div>
    </TextStyled>
  )
}

export default Text;