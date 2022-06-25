import React from 'react'
import { TextStyled } from './text.styled'

export function Text ( {name, text} )  {
  return (
    <TextStyled>
        <p className={name}>{text}</p>
    </TextStyled>
  )
}

export default Text;