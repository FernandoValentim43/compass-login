import React from "react"
import {
    H1Styled,
    H2Styled,
    H3Styled,
    H4Styled,
    H5Styled,
    H6Styled
} from './Title.styled'

const Title = ({ type, label }) => {
  const getHType = (type) => {
    switch (type) {
      case "h1":
        return <H1Styled onClick={() => console.log('h1 clicado')}>{label}</H1Styled>;
      case "h2":
        return <H2Styled>{label}</H2Styled>;
      case "h3":
        return <H3Styled>{label}</H3Styled>;
      case "h4":
         return <H4Styled>{label}</H4Styled>;
       case "h5":
         return <H5Styled>{label}</H5Styled>;
       case "h6":
         return <H6Styled>{label}</H6Styled>;
       default:
        return <H6Styled>{label}</H6Styled>;
    }
  };

  return <div>{getHType(type)}</div>;
};

export default Title;