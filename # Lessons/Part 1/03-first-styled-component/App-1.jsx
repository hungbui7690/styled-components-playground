/*
  First Styled Component
  - global css -> class conflict
  - inline -> hard to modify


**********************************

  - Element tab -> className
  - Extension: vscode-styled-components


*/

import styled from 'styled-components'

// 1. tagged template literal -> style <h1>
const BasicTitle = styled.h1`
  text-align: center;
  text-transform: capitalize;
`

function App() {
  return (
    <div style={{ padding: '2rem', backgroundColor: 'lightgrey' }}>
      {/* 2. Instead of <h1> -> we will use <BasicTitle> */}
      <BasicTitle>Hello World</BasicTitle>
      <BasicTitle>Hello World</BasicTitle>
      <BasicTitle>Hello World</BasicTitle>
      <button className='btn'>Click Me</button>
    </div>
  )
}

export default App
