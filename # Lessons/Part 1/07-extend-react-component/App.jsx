/*
  Extend React Component
  - install material-ui
    ~~ npm install @mui/material @emotion/react @emotion/styled


*/

import styled from 'styled-components'
import { Button } from '@mui/material' // 1. Button from material-ui

// 2.
const StyledButton = styled(Button)`
  text-transform: capitalize;
  color: crimson;
`

function App() {
  return (
    <div style={{ padding: '2rem' }}>
      <Button variant='outlined'>Outlined</Button>
      <StyledButton variant='outlined'>Outlined</StyledButton>
    </div>
  )
}

export default App
