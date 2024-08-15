/*
  CSS Variables
  1. index.css
    -> create variables
  2. Wrapper -> use variable


*/

import styled from 'styled-components'

const ComplexTitle = (props) => {
  return (
    <div className={props.className}>
      <h1>{props.title}</h1>
      <div className='underline'></div>
      <h1 className='title'>Hi There</h1>
    </div>
  )
}

const Wrapper = styled(ComplexTitle)`
  h1 {
    text-transform: capitalize;
    text-align: center;
  }
  .underline {
    height: 5px;

    /* 2. */
    background-color: var(--primary);
    width: 5rem;
    margin: 0 auto;
  }

  .title {
    font-size: 2rem;
    color: green;
  }
`

function App() {
  return (
    <div style={{ padding: '2rem' }}>
      <Wrapper className='bg-gray' title={'Hello World'} />
    </div>
  )
}

export default App
