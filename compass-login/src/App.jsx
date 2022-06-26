import { useState } from 'react'
import Login from './pages/Login'
import Home from './pages/Home'
import Title from './components/Title/Title'
import { TitleContainer } from './components/Title/Title.styled'

import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`


function App() {
  return (
      <>
        <GlobalStyle />
        <TitleContainer id="title_container">
          <Title type="h1" label="Our mission is"/>
          <Title type="h3" label="Nossa missão é"/>
          <Title type="h2" label="to transform the world"/>
          <Title type="h3" label="transformar o mundo"/>
          <Title type="h4" label="building digital experiences"/>
          <Title type="h3" label="construindo experiências digitais"/>
          <Title type="h5" label="that enable our client’s growth"/>
          <Title type="h3" label="que permitam o crescimento dos nossos clientes"/>
        </TitleContainer>
      </>
  )
}

export default App
