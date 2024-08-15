/*
  Global Classes
  1. index.css
    -> .bg-gray
    -> .title

  2. use class in Wrapper
  
  3. styles in Wrapper 
    -> class here will overwrite the global css


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
    background-color: crimson;
    width: 5rem;
    margin: 0 auto;
  }

  /* 3. */
  .title {
    font-size: 2rem;
    color: green;
  }
`

function App() {
  // 2.
  return (
    <div style={{ padding: '2rem' }}>
      <Wrapper className='bg-gray' title={'Hello World'} />
    </div>
  )
}

export default App
