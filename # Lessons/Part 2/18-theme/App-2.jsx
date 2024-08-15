/*
  Usage 


*/

import { useState } from 'react'
import { ThemeProvider, styled } from 'styled-components'

const BaseTheme = {
  color: '#222',
  background: '#fff',
}
const DarkTheme = {
  color: '#fff',
  background: '#222',
}

const Container = styled.div`
  padding: 2rem;
  color: ${(props) => props.theme.color};
  background: ${(props) => props.theme.background};
`

function App() {
  const [isBaseTheme, setIsBaseTheme] = useState(true) // 1.

  const toggleTheme = () => {
    setIsBaseTheme(!isBaseTheme)
  }

  return (
    // 2.
    <ThemeProvider theme={isBaseTheme ? BaseTheme : DarkTheme}>
      <Container>
        <h1>Hello World</h1>
        <button className='btn' onClick={toggleTheme}>
          click me
        </button>
      </Container>
    </ThemeProvider>
  )
}

export default App
