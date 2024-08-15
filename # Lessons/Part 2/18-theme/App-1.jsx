/*
  Theming
  1. create Theme object
  2. ThemeProvider and pass theme prop
  3. use


*/

import { ThemeProvider, styled } from 'styled-components'

// 1.
const BaseTheme = {
  color: '#222',
  background: '#fff',
}
const DarkTheme = {
  color: '#fff',
  background: '#222',
}

// 3.
const Container = styled.div`
  padding: 2rem;
  color: ${(props) => props.theme.color};
  background: ${(props) => props.theme.background};
`

function App() {
  return (
    // 2.
    <ThemeProvider theme={DarkTheme}>
      <Container>
        <h1>Hello World</h1>
        <button className='btn'>click me</button>
      </Container>
    </ThemeProvider>
  )
}

export default App
