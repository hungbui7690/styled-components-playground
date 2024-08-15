/*
  ATTRS
  - add attribute to html element


*/

import styled from 'styled-components'

// Method 1
// const Button = styled.button.attrs({ type: 'button' })`

// 1. Method 2
const Button = styled.button.attrs((props) => {
  return { type: props.type || 'button' }
})`
  background-color: var(--primary);
  border: none;
  color: white;
  padding: 0.25rem;
  cursor: pointer;

  /* #  */
  ${({ type }) => {
    return (
      type === 'submit' &&
      `
        display: block;
        width: 100%;
        margin-top: 1rem;
      `
    )
  }}
`

// 2.
const Input = styled.input.attrs((props) => {
  return {
    type: props.type || 'text',
    placeholder: props.placeholder || 'please enter value',
  }
})`
  color: green;
`

function App() {
  return (
    <div style={{ padding: '2rem' }}>
      <Button type='button'>Click Me</Button>
      <Button type='submit'>Click Me</Button>
      <Input />
      <Input type='email' placeholder='Please enter email...' />
    </div>
  )
}

export default App
