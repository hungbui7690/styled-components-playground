/*
  "as" Prop
  - change the default behavior of a component 
  - below example -> change the 2nd button to <a> tag


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

export const HipsterButton = styled(Button)`
  width: 400px;
  background-color: transparent;
  color: crimson;
  border: 1px solid crimson;

  /* 2. */
  text-decoration: none;
  text-align: center;
`

function App() {
  return (
    <div style={{ padding: '2rem' }}>
      <HipsterButton>click me</HipsterButton>

      {/* 1. */}
      <HipsterButton href='https://google.com' as='a'>
        click me
      </HipsterButton>
      <HipsterButton>click me</HipsterButton>
    </div>
  )
}

export default App
