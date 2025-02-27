/*
  Extend


*/

import styled from 'styled-components'

const Button = styled.button`
  background: #645cff;
  color: white;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
  text-transform: capitalize;
  padding: 0.25rem;
  display: block;
  width: 200px;
  margin: 1rem auto;
`

// extend & overwrite
export const HipsterButton = styled(Button)`
  width: 400px;
  background-color: transparent;
  color: crimson;
  border: 1px solid crimson;
`

function App() {
  return (
    <div>
      <Button>Click Me</Button>
      <HipsterButton>Click Me</HipsterButton>
    </div>
  )
}

export default App
