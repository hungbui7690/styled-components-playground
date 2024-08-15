/*
  Setup
  ~~ npm create vite@latest
  ~~ npm install styled-components


******************************

  🎐 The CSS rules are automatically vendor prefixed, styled-components takes care of that for you!
    -> Styled components uses stylis.js package under the hood for prefixing the css rules.


*/

import styled from 'styled-components' // 1.

// 2. Create a Title component that'll render an <h1> tag with some styles
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #bf4f74;
`

// 3. Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`

function App() {
  // 4. Use Title and Wrapper like any other React component – except they're styled!
  return (
    <Wrapper>
      <Title>Hello World!</Title>
    </Wrapper>
  )
}

export default App
