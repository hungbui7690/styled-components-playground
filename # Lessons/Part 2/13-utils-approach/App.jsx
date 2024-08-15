/*
  Utils Approach
  1. create utils.js
  2. index.css -> css variable
  3. Wrapper


*/

import styled from 'styled-components'
import { setupBorder, colors } from './utils'

const ComplexTitle = (props) => {
  return (
    <div className={`${props.className}`}>
      <h1>{props.title}</h1>
      <div className='underline'></div>
      <h1 className='title'>Hi There</h1>
      <div className='box'>Box</div>
    </div>
  )
}

const Wrapper = styled(ComplexTitle)`
  h1 {
    text-transform: capitalize;
    text-align: center;

    /* 3c. */
    border: ${setupBorder({ width: 5, type: 'solid' })};
  }
  .underline {
    height: 5px;
    background-color: var(--primary);
    width: 5rem;
    margin: 0 auto;
  }
  .title {
    font-size: 2rem;
    /* 3a. */
    color: ${colors.primary};
  }

  .box {
    /* 3b. */
    border: var(--mainBorder);
    height: 1rem;
    width: 5rem;
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
